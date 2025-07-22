import React, { Component, createRef, RefObject } from 'react';
import { DropdownPositionWrapper } from '../../apis/DropdownPositionWrapper'; // Adjust path
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
  onClear?:()=>void,
  autoFocus?: boolean;
  maxLength?: number;
  label: string;
  debounceDelay?: number; // new debounce delay prop (ms), optional
}

interface State {
  dropdownPopoverShow: boolean;
  selectedMultiple: any[];
  datalist: DesmyDropdownItem[];
  defaultValue?: string;
  hasLoaded: boolean;
  clear: boolean;
  total: number;
  isLoading: boolean;
  error: {
    state: boolean;
    message: string;
  };
  searchText: string;
  filteredOptions: DesmyDropdownItem[];
  selectedOptions: DesmyDropdownItem[];
  page: number;
  hasMore: boolean;
  debounceTimeoutId?: ReturnType<typeof setTimeout>;
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
      total: 0,
      isLoading: false,
      error: { state: false, message: '' },
      searchText: '',
      filteredOptions: [],
      selectedOptions: [],
      page: 1,
      hasMore: true,
      debounceTimeoutId: undefined,
    };
  }

  componentDidMount() {
    if (this.props.onRef) this.props.onRef(this);
    document.addEventListener('mousedown', this.handleClickOutside);
    this.fetchData('', 1);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    if (this.state.debounceTimeoutId) {
      clearTimeout(this.state.debounceTimeoutId);
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (
      prevProps.defaultValue !== this.props.defaultValue &&
      !DesmyCommons.isEmptyOrNull(this.props.defaultValue) &&
      DesmyCommons.isEmptyOrNull(this.state.selectedOptions)
    ) {
      this.handleDefault();
    }
    if (this.props.request?.url && prevProps.request?.url !== this.props.request?.url) {
      this.fetchData('', 1);
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

  handleScroll = (e: React.UIEvent<HTMLUListElement>) => {
    const { searchText, page, hasMore } = this.state;

    if (hasMore) {
      const nextPage = page + 1;
      this.setState({ page: nextPage }, () => this.fetchData(searchText, nextPage));
    }
  };

  fetchData = async (searchText: string, page: number) => {
  const { request } = this.props;
  if (!request?.url) return;

  if (DesmyCommons.isEmptyOrNull(searchText)) {
    if (page === 1) {
      this.setState({ filteredOptions: [], isLoading: false, hasMore: false, total: 0 });
    }
    if (DesmyCommons.isEmptyOrNull(searchText) && this.state.filteredOptions.length > 0) {
      return;
    }
  }

  try {
    this.setState({ isLoading: true });
    const headers: HeadersInit = request.token ? { Authorization: `${request.token}` } : {};
    const response = await fetch(`${request.url}?query=${searchText}&page=${page}`, { headers });
    const responsedata = await response.json();

    if (responsedata.success) {
      if (!responsedata.data || !responsedata.data.meta) {
        throw new Error("Invalid response format: 'data' or 'meta' is missing.");
      }

      const { data, meta } = responsedata.data;
      if (!DesmyCommons.isEmptyOrNull(data)) {
        const formattedData: DesmyDropdownItem[] = data.map((item: any) => ({
          id: item.id,
          name: item.name,
          icon: null,
          hint: item.hint || null,
          data: item,
        }));
        this.setState(
          (prevState) => ({
            filteredOptions: page === 1 ? formattedData : [...prevState.filteredOptions, ...formattedData],
            hasMore: meta.current_page < meta.last_page,
            total: meta.total,
            isLoading: false,
            error: { state: false, message: '' },
          }),
          this.handleDefault
        );
      } else {
        this.handleError('No data found.');
      }
    } else {
      this.handleError(responsedata.message || 'Failed to fetch data.');
    }
  } catch {
    this.handleError('An error occurred while fetching data. Please check your connection.');
  }
  };


  handleDefault = () => {
  let { defaultValue, is_multiple } = this.props;
  const { filteredOptions, searchText } = this.state;

  if (DesmyCommons.isEmptyOrNull(defaultValue) || DesmyCommons.isEmptyOrNull(filteredOptions)) {
    return;
  }

  // Normalize defaultValue: if not array or object, convert to string
  if (!Array.isArray(defaultValue) && typeof defaultValue !== 'object') {
    defaultValue = String(defaultValue);
  }

  let defaultSelected: DesmyDropdownItem[] = [];

  if (Array.isArray(defaultValue)) {
    defaultSelected = defaultValue
      .map((val) => {
        if (typeof val === 'string') {
          const matched = filteredOptions.find((d) => d.name === val || d.id === val);
          return matched || { id: null, name: val, icon: null, hint: null, data: val };
        } else if (typeof val === 'object' && val !== null) {
          const matched = filteredOptions.find((d) => d.id === val.id || d.name === val.name);
          return matched || val;
        }
        return null;
      })
      .filter((item): item is DesmyDropdownItem => !!item);
  } else if (typeof defaultValue === 'object' && defaultValue !== null) {
    const matched = filteredOptions.find((d) => d.name === defaultValue.name || d.id === defaultValue.id);
    defaultSelected = [matched || { id: defaultValue.id, name: defaultValue.name, icon: null, hint: null, data: defaultValue }];
  } else if (typeof defaultValue === 'string') {
    const matched = filteredOptions.find((d) => String(d.name) === defaultValue || String(d.id) === defaultValue);
    defaultSelected = [matched || { id: null, name: defaultValue, icon: null, hint: null, data: defaultValue }];
  }

  if (defaultSelected.length > 0) {
    this.setState(
      (prevState) => ({
        selectedOptions: defaultSelected,
        searchText:
          !is_multiple && (DesmyCommons.isEmptyOrNull(prevState.searchText) || prevState.searchText === '')
            ? String(defaultSelected[0]?.name)
            : prevState.searchText,
      }),
      () => {
        this.handleOnSelect(defaultSelected);
      }
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

    if (this.state.debounceTimeoutId) {
      clearTimeout(this.state.debounceTimeoutId);
    }

    const timeoutId = setTimeout(() => {
      this.setState({ page: 1, hasMore: true }, () => {
        if (!DesmyCommons.isEmptyOrNull(searchText)) {
          this.fetchData(searchText, 1);
        } else if (this.state.filteredOptions.length === 0) {
          this.setState({ filteredOptions: [] },()=>{
            this.props.onClear?.()
          });
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
        () => {
          this.handleOnSelect(this.state.selectedOptions);
        }
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
    const { searchText, filteredOptions, selectedOptions, error, total, isLoading, dropdownPopoverShow } = this.state;
    return (
      <div
        className={`flex relative flex-col w-full ${containerClassName ?? 'bg-white dark:bg-darkBackground dark:text-white'}`}
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
              total={total}
              onScroll={this.handleScroll}
              onOptionClick={this.handleOptionClick}
              onDoneClick={this.closeDropdownPopover}
              dropdownClass={dropdownClass}
              selectedCount={selectedOptions.length}
              searchText={searchText}
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
