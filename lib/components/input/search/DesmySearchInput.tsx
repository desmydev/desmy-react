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
    this.fetchData('');
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    if (this.state.debounceTimeoutId) clearTimeout(this.state.debounceTimeoutId);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.request?.url && prevProps.request?.url !== this.props.request?.url) {
      this.setState({ appliedDefault: false, hasLoaded: false }, () => {
        this.fetchData('');
      });
    }
  }

  handleError = (message = '') => {
    this.setState({ isLoading: false, error: { state: true, message } });
  };

  openDropdownPopover = () => {
    if (this.props.disabled) return;
    this.setState({ dropdownPopoverShow: true }, () => {
      this.searchInputRef.current?.focus();
    });
  };

  handleScroll = () => {
    const { searchText, nextLink, isLoading } = this.state;
    if (nextLink && !isLoading) {
      this.fetchData(searchText, nextLink);
    }
  };

  handleLoadMore = () => {
    const { searchText, nextLink, isLoading } = this.state;
    if (nextLink && !isLoading) {
      this.fetchData(searchText, nextLink);
    }
  };

  /** Fetch by ID for bullet-proof defaults */
  fetchById = async (id: string | number) => {
    const { request } = this.props;
    if (!request?.url) return null;

    try {
      const headers: HeadersInit = request.token ? { Authorization: `${request.token}` } : {};
      const response = await fetch(`${request.url}?id=${id}`, { headers });
      const responsedata = await response.json();

      if (responsedata.success && responsedata.data?.data?.length > 0) {
        const item = responsedata.data.data[0];
        return {
          id: item.id,
          name: item.name,
          icon: null,
          hint: item.hint || null,
          data: item,
        } as DesmyDropdownItem;
      }
    } catch (e) {
      console.error('Error fetching default item by ID', e);
    }
    return null;
  };

  fetchData = async (searchText: string, url?: string) => {
    const { request } = this.props;
    if (!request?.url) return;

    try {
      this.setState({ isLoading: true });

      // ✅ capture scroll position before fetch
      const scrollContainer = this.dropdownContentRef.current?.querySelector('ul');
      const prevScrollTop = scrollContainer ? scrollContainer.scrollTop : 0;

      const headers: HeadersInit = request.token ? { Authorization: `${request.token}` } : {};
      const fetchUrl = url || `${request.url}?query=${searchText}&page_size=200`;

      const response = await fetch(fetchUrl, { headers });
      const responsedata = await response.json();

      if (responsedata.success) {
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
            filteredOptions: url ? [...prevState.filteredOptions, ...formattedData] : formattedData,
            total: meta?.count ?? prevState.filteredOptions.length + formattedData.length,
            nextLink: links?.next ?? null,
            prevLink: links?.previous ?? null,
            isLoading: false,
            error: { state: false, message: '' },
            hasLoaded: true,
          }),
          async () => {
            // ✅ apply defaults once after first load
            if (!this.state.appliedDefault && this.props.defaultValue) {
              await this.handleDefault();
            }

            // ✅ restore scroll position after DOM update
            if (scrollContainer) {
              requestAnimationFrame(() => {
                scrollContainer.scrollTop = prevScrollTop;
              });
            }
          }
        );
      } else {
        this.handleError(responsedata.message || 'Failed to fetch data.');
      }
    } catch {
      this.handleError('An error occurred while fetching data. Please check your connection.');
    }
  };

  handleDefault = async () => {
    let { defaultValue, is_multiple } = this.props;
    const { filteredOptions } = this.state;
    if (DesmyCommons.isEmptyOrNull(defaultValue)) return;

    const defaults = Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    const defaultSelected: DesmyDropdownItem[] = [];

    for (const val of defaults) {
      let matched: DesmyDropdownItem | null = null;

      if (typeof val === 'string') {
        matched = filteredOptions.find((d) => d.id === val || d.name === val) || null;
        if (!matched) matched = await this.fetchById(val);
      } else if (typeof val === 'object' && val !== null) {
        matched = filteredOptions.find((d) => d.id === val.id || d.name === val.name) || null;
        if (!matched && val.id) matched = await this.fetchById(val.id);
      }

      if (matched) defaultSelected.push(matched);
    }

    if (defaultSelected.length > 0) {
      this.setState(
        (prevState) => ({
          filteredOptions: [...prevState.filteredOptions, ...defaultSelected],
          selectedOptions: defaultSelected,
          appliedDefault: true,
          searchText:
            !is_multiple && DesmyCommons.isEmptyOrNull(prevState.searchText)
              ? String(defaultSelected[0]?.name)
              : prevState.searchText,
        }),
        () => this.handleOnSelect(defaultSelected)
      );
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

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const debounceDelay = this.props.debounceDelay ?? 300;
    const searchText = e.target.value;
    this.setState({ searchText });

    if (this.state.debounceTimeoutId) clearTimeout(this.state.debounceTimeoutId);

    const timeoutId = setTimeout(() => {
      this.setState({ nextLink: null, prevLink: null }, () => {
        if (!DesmyCommons.isEmptyOrNull(searchText)) {
          this.fetchData(searchText);
        } else {
          this.setState({ filteredOptions: [] }, () => this.props.onClear?.());
        }
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

  closeDropdownPopover = () => this.setState({ dropdownPopoverShow: false });

  handleOptionClick = (option: DesmyDropdownItem) => {
    if (this.props.is_multiple) {
      this.setState(
        (prevState) => {
          const selectedOptions = [...prevState.selectedOptions, option];
          const filteredOptions = prevState.filteredOptions.filter((item) => item.id !== option.id);
          return { selectedOptions, filteredOptions, dropdownPopoverShow: filteredOptions.length > 0 };
        },
        () => this.handleOnSelect(this.state.selectedOptions)
      );
    } else {
      this.setState({ searchText: option.name || '', dropdownPopoverShow: false, selectedOptions: [option] }, () =>
        this.handleOnSelect(option)
      );
    }
  };

  handleChipRemove = (option: DesmyDropdownItem) => {
    this.setState(
      (prevState) => {
        const selectedOptions = prevState.selectedOptions.filter((item) => item.id !== option.id);
        const filteredOptions = [...prevState.filteredOptions, option];
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
    const { searchText, filteredOptions, selectedOptions, error, total, isLoading, dropdownPopoverShow, nextLink } =
      this.state;

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
            className={`flex flex-col relative space-y-2 max-w-[600px] min-w-[400px] font-poppinsRegular min-h-32  pb-5 pt-3 bg-white dark:bg-darkDialogBackground border-[1px] border-gray-200 dark:border-darkPrimaryBorder overflow-hidden`}
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
