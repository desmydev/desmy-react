import React, { Component, createRef, RefObject } from 'react';
import { DropdownPositionWrapper } from '../../apis/DropdownPositionWrapper';
import { SearchInput } from './SearchInput';
import { DropdownList } from './DropdownList';
import { SelectedChips } from './SelectedChips';
import DesmyCommons from '../../apis/DesmyCommons';
import { DesmyDropdownItem } from '../../apis/SharedProps';

interface SearchRequest {
  url: string;
  token?: string;
}

interface Props {
  defaultValue?: string | DesmyDropdownItem | DesmyDropdownItem[] | any;
  data?: DesmyDropdownItem[];
  request?: SearchRequest;
  is_multiple?: boolean;
  onRef?: (instance: DesmySearchInput | null) => void;
  disabled?: boolean;
  placeholder?: string;
  dropdownClass?: string;
  containerClassName?: string;
  inputClassName?: string;
  onSelect: (data: DesmyDropdownItem | DesmyDropdownItem[]) => void;
  onClear?: () => void;
  autoFocus?: boolean;
  maxLength?: number;
  label: string;
  debounceDelay?: number;
}

interface State {
  dropdownPopoverShow: boolean;
  selectedMultiple: any[];
  datalist: DesmyDropdownItem[];
  defaultValue?: string;
  hasLoaded: boolean;
  clear: boolean;
  total: number | null;
  isLoading: boolean;
  error: { state: boolean; message: string };
  searchText: string;
  filteredOptions: DesmyDropdownItem[];
  selectedOptions: DesmyDropdownItem[];
  nextLink?: string | null;
  prevLink?: string | null;
  debounceTimeoutId?: ReturnType<typeof setTimeout>;
  appliedDefault: boolean;
}

class DesmySearchInput extends Component<Props, State> {
  private btnDropdownRef: RefObject<HTMLDivElement | null> = createRef();
  private divRef: RefObject<HTMLDivElement | null> = createRef();
  private searchInputRef = React.createRef<SearchInput>();
  private dropdownContentRef: RefObject<HTMLDivElement | null> = createRef();

  constructor(props: Props) {
    super(props);
    this.state = {
      dropdownPopoverShow: false,
      selectedMultiple: [],
      defaultValue: '',
      datalist: [],
      hasLoaded: false,
      clear: false,
      total: null,
      isLoading: false,
      error: { state: false, message: '' },
      searchText: '',
      filteredOptions: [],
      selectedOptions: [],
      nextLink: null,
      prevLink: null,
      debounceTimeoutId: undefined,
      appliedDefault: false,
    };
  }

  componentDidMount() {
    if (this.props.onRef) this.props.onRef(this);
    document.addEventListener('mousedown', this.handleClickOutside);

    // ✅ Initial fetch - includes ids if defaultValue exists
    this.fetchData('');
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    if (this.state.debounceTimeoutId) clearTimeout(this.state.debounceTimeoutId);
  }

  componentDidUpdate(prevProps: Props) {
    // ✅ If request URL changed → refetch
    if (this.props.request?.url && prevProps.request?.url !== this.props.request?.url) {
      this.setState({ appliedDefault: false, hasLoaded: false }, () => {
        this.fetchData('');
      });
    }

    // ✅ If defaultValue was set before but now cleared → clear selection immediately
    if (
      !DesmyCommons.isEmptyOrNull(prevProps.defaultValue) &&
      DesmyCommons.isEmptyOrNull(this.props.defaultValue)
    ) {
      this.clearSelectionIfNoDefault();
    }
  }

  // ✅ Merge unique items by id
  mergeUniqueById = (prev: DesmyDropdownItem[], next: DesmyDropdownItem[]) => {
    const map = new Map<string, DesmyDropdownItem>();
    [...prev, ...next].forEach((item) => {
      if (!item?.id) return;
      map.set(String(item.id), item);
    });
    return Array.from(map.values());
  };

  // ✅ Extract default IDs safely
  getDefaultIds = (): string[] => {
    const { defaultValue } = this.props;
    if (!defaultValue) return [];

    const defaults = Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    const ids: string[] = [];

    for (const val of defaults) {
      if (typeof val === 'string') ids.push(val);
      else if (typeof val === 'object' && val !== null && val.id) ids.push(String(val.id));
    }

    return Array.from(new Set(ids));
  };

  handleError = (message = '') => {
    this.setState({ isLoading: false, error: { state: true, message } });
  };

  openDropdownPopover = () => {
    if (this.props.disabled) return;
    this.setState({ dropdownPopoverShow: true }, () => {
      this.searchInputRef.current?.focus();
    });
  };

  closeDropdownPopover = () => this.setState({ dropdownPopoverShow: false });

  handleScroll = () => {
    const { searchText, nextLink, isLoading } = this.state;
    if (nextLink && !isLoading) this.fetchData(searchText, nextLink);
  };

  handleLoadMore = () => {
    const { searchText, nextLink, isLoading } = this.state;
    if (nextLink && !isLoading) this.fetchData(searchText, nextLink);
  };

  // ✅ Clear selection if defaultValue is removed
  // ❗ FIX: Never clear searchText here
  clearSelectionIfNoDefault = () => {
    const { defaultValue, is_multiple } = this.props;

    if (DesmyCommons.isEmptyOrNull(defaultValue)) {
      this.setState(
        {
          selectedOptions: [],
          appliedDefault: true,
          // ✅ DO NOT reset searchText
        },
        () => {
          if (is_multiple) this.props.onSelect([]);
          else this.props.onSelect({} as any);

          this.props.onClear?.();
        }
      );
    }
  };

  // ✅ Fetch by ID
  fetchById = async (id: string | number) => {
    const { request } = this.props;
    if (!request?.url) return null;

    try {
      const headers: HeadersInit = request.token ? { Authorization: `${request.token}` } : {};
      const response = await fetch(`${request.url}?id=${id}`, { headers });
      const responsedata = await response.json();

      if (responsedata.success && Array.isArray(responsedata.data?.data)) {
        const found = responsedata.data.data.find((x: any) => String(x.id) === String(id));
        if (!found) return null;

        return {
          id: found.id,
          name: found.name,
          icon: null,
          hint: found.hint || null,
          data: found,
        } as DesmyDropdownItem;
      }
    } catch (e) {
      console.error('Error fetching default item by ID', e);
    }

    return null;
  };

  // ✅ Main fetch logic (DOES NOT clear input after response)
  fetchData = async (searchText: string, url?: string) => {
    const { request } = this.props;
    if (!request?.url) return;

    try {
      this.setState({ isLoading: true });

      const scrollContainer = this.dropdownContentRef.current?.querySelector('ul');
      const prevScrollTop = scrollContainer ? scrollContainer.scrollTop : 0;

      const headers: HeadersInit = request.token ? { Authorization: `${request.token}` } : {};

      const defaultIds = this.getDefaultIds();
      const idsParam =
        DesmyCommons.isEmptyOrNull(searchText) && defaultIds.length > 0 && !url
          ? `&ids=${defaultIds.join(',')}`
          : '';

      const queryParam = `query=${encodeURIComponent(searchText || '')}`;
      const fetchUrl = url || `${request.url}?${queryParam}&page_size=200${idsParam}`;

      const response = await fetch(fetchUrl, { headers });
      const responsedata = await response.json();

      if (!responsedata.success) {
        this.handleError(responsedata.message || 'Failed to fetch data.');
        return;
      }

      const { meta, links, data } = responsedata.data || {};
      if (!Array.isArray(data)) throw new Error("Invalid response format: 'data' missing");

      const formattedData: DesmyDropdownItem[] = data.map((item: any) => ({
        id: item.id,
        name: item.name,
        icon: null,
        hint: item.hint || null,
        data: item,
      }));

      this.setState(
        (prevState) => ({
          filteredOptions: url
            ? this.mergeUniqueById(prevState.filteredOptions, formattedData)
            : formattedData,
          total: meta?.count ?? formattedData.length,
          nextLink: links?.next ?? null,
          prevLink: links?.previous ?? null,
          isLoading: false,
          error: { state: false, message: '' },
          hasLoaded: true,
        }),
        async () => {
          // ✅ Only apply defaults if defaultValue exists
          if (!DesmyCommons.isEmptyOrNull(this.props.defaultValue)) {
            if (!this.state.appliedDefault) {
              await this.handleDefault();
            }
          }

          // ✅ restore scroll position
          if (scrollContainer) {
            requestAnimationFrame(() => {
              scrollContainer.scrollTop = prevScrollTop;
            });
          }
        }
      );
    } catch {
      this.handleError('An error occurred while fetching data. Please check your connection.');
    }
  };

  // ✅ Apply defaultValue to selection
  handleDefault = async () => {
    const { defaultValue, is_multiple } = this.props;
    const { filteredOptions } = this.state;

    if (DesmyCommons.isEmptyOrNull(defaultValue)) return;

    const defaults = Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    const defaultSelected: DesmyDropdownItem[] = [];

    for (const val of defaults) {
      let matched: DesmyDropdownItem | null = null;

      if (typeof val === 'string') {
        matched = filteredOptions.find((d) => String(d.id) === String(val)) || null;
        if (!matched) matched = await this.fetchById(val);
      } else if (typeof val === 'object' && val !== null) {
        if (val.id) {
          matched = filteredOptions.find((d) => String(d.id) === String(val.id)) || null;
          if (!matched) matched = await this.fetchById(val.id);
        }
      }

      if (matched?.id && matched?.name) defaultSelected.push(matched);
    }

    if (defaultSelected.length > 0) {
      this.setState(
        (prevState) => ({
          filteredOptions: this.mergeUniqueById(prevState.filteredOptions, defaultSelected),
          selectedOptions: this.mergeUniqueById([], defaultSelected),
          appliedDefault: true,
          searchText:
            !is_multiple && DesmyCommons.isEmptyOrNull(prevState.searchText)
              ? String(defaultSelected[0]?.name)
              : prevState.searchText,
        }),
        () => this.handleOnSelect(defaultSelected)
      );
    } else {
      this.setState({ appliedDefault: true });
    }
  };

  handleOnSelect = (data: DesmyDropdownItem | DesmyDropdownItem[]) => {
    if (Array.isArray(data)) {
      const filteredData = data.filter((item) => item.id && item.name);
      this.props.onSelect(filteredData);
    } else {
      this.props.onSelect(data);
    }
  };

  // ✅ Input change (DO NOT clear anything after search)
  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const debounceDelay = this.props.debounceDelay ?? 300;
    const searchText = e.target.value;

    this.setState({ searchText });

    if (this.state.debounceTimeoutId) clearTimeout(this.state.debounceTimeoutId);

    const timeoutId = setTimeout(() => {
      this.setState({ nextLink: null, prevLink: null }, () => {
        // ✅ Always fetch based on current searchText
        this.fetchData(searchText);
      });
    }, debounceDelay);

    this.setState({ debounceTimeoutId: timeoutId });
  };

  handleClickOutside = (event: MouseEvent): void => {
    const btn = this.btnDropdownRef.current;
    const content = this.dropdownContentRef.current;

    if (btn && !btn.contains(event.target as Node) && content && !content.contains(event.target as Node)) {
      this.closeDropdownPopover();
    }
  };

  handleOptionClick = (option: DesmyDropdownItem) => {
    if (this.props.is_multiple) {
      this.setState(
        (prevState) => {
          const selectedOptions = this.mergeUniqueById(prevState.selectedOptions, [option]);
          const filteredOptions = prevState.filteredOptions.filter((item) => item.id !== option.id);
          return {
            selectedOptions,
            filteredOptions,
            dropdownPopoverShow: filteredOptions.length > 0,
          };
        },
        () => this.handleOnSelect(this.state.selectedOptions)
      );
    } else {
      this.setState(
        { searchText: option.name || '', dropdownPopoverShow: false, selectedOptions: [option] },
        () => this.handleOnSelect(option)
      );
    }
  };

  handleChipRemove = (option: DesmyDropdownItem) => {
    this.setState(
      (prevState) => {
        const selectedOptions = prevState.selectedOptions.filter((item) => item.id !== option.id);
        const filteredOptions = this.mergeUniqueById(prevState.filteredOptions, [option]);
        return { selectedOptions, filteredOptions };
      },
      () => this.handleOnSelect(this.state.selectedOptions)
    );
  };

  render() {
    const {
      placeholder,
      is_multiple,
      disabled,
      autoFocus,
      maxLength,
      inputClassName,
      label,
      dropdownClass,
      containerClassName,
    } = this.props;

    const {
      searchText,
      filteredOptions,
      selectedOptions,
      error,
      total,
      isLoading,
      dropdownPopoverShow,
      nextLink,
    } = this.state;

    return (
      <div
        className={`flex relative flex-col w-full ${
          containerClassName ?? 'bg-white dark:bg-darkBackground dark:text-white'
        }`}
        ref={this.divRef}
      >
        <div className="relative w-full bg-inherit" ref={this.btnDropdownRef}>
          <SearchInput
            ref={this.searchInputRef}
            value={searchText}
            placeholder={placeholder}
            disabled={disabled}
            autoFocus={autoFocus}
            maxLength={maxLength}
            inputClassName={inputClassName}
            label={label}
            onFocus={this.openDropdownPopover}
            onChange={this.handleInputChange}
          />
        </div>

        <DropdownPositionWrapper
          targetRef={this.btnDropdownRef}
          visible={dropdownPopoverShow}
          maxHeight={350}
          onClose={this.closeDropdownPopover}
        >
          <div
            className={`flex flex-col relative space-y-2 max-w-[600px] min-w-[400px] font-poppinsRegular min-h-32 pb-5 pt-3 bg-white dark:bg-darkDialogBackground border-[1px] border-gray-200 dark:border-darkPrimaryBorder overflow-hidden`}
            ref={this.dropdownContentRef}
          >
            <DropdownList
              options={filteredOptions}
              isLoading={isLoading}
              error={error}
              total={total ?? 0}
              onScroll={this.handleScroll}
              onOptionClick={this.handleOptionClick}
              onDoneClick={this.closeDropdownPopover}
              dropdownClass={dropdownClass}
              selectedCount={selectedOptions.length}
              searchText={searchText}
              onLoadMore={this.handleLoadMore}
              hasMore={!!nextLink}
              selectedIds={selectedOptions.map((x) => String(x.id))}
            />
          </div>
        </DropdownPositionWrapper>

        {is_multiple && !dropdownPopoverShow && selectedOptions.length > 0 && (
          <SelectedChips selectedOptions={selectedOptions} onChipRemove={this.handleChipRemove} />
        )}
      </div>
    );
  }
}

export { DesmySearchInput };
