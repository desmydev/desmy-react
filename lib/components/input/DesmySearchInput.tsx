import React, { Component } from 'react';
import DesmyCommons from '../apis/DesmyCommons';

interface SearchRequest {
  url: string;
  token?: string;
}

interface DropdownItem {
  id: number | null;
  name: string | null;
  icon: string | null;
  hint: string | null;
  data: any;
}

interface DropdownSearchProps {
  inputClassName?: string;
  request?: SearchRequest;
  className?: string;
  placeholder?: string;
  onSelect: (data: DropdownItem | DropdownItem[]) => void;
  onRef?: (instance: DesmySearchInput | null) => void;
  autoFocus?: boolean;
  disabled?: boolean;
  maxLength?: number;
  url: string;
  label: string;
  token?: string;
  is_multiple?: boolean;
  defaultValue?: DropdownItem | DropdownItem[];
}

interface DropdownSearchState {
  searchText: string;
  filteredOptions: DropdownItem[];
  selectedOptions: DropdownItem[];
  showDropdown: boolean;
  page: number;
  hasMore: boolean;
  error: { state: boolean; message: string };
}

class DesmySearchInput extends Component<DropdownSearchProps, DropdownSearchState> {
  constructor(props: DropdownSearchProps) {
    super(props);

    this.state = {
      searchText: '',
      filteredOptions: [],
      selectedOptions: [],
      showDropdown: false,
      page: 1,
      hasMore: true,
      error: { state: false, message: '' },
    };
  }

  componentDidMount() {
    if (this.props.onRef) {
      this.props.onRef(this);
    }
    this.fetchData('', 1);
  }

  componentDidUpdate(prevProps: DropdownSearchProps) {
    if (prevProps.defaultValue !== this.props.defaultValue) {
      this.handleDefault();
    }
  }

  handleDefault = (): void => {
    const { defaultValue } = this.props;
    const { filteredOptions } = this.state;
    let defaultSelected: DropdownItem[] = [];
    let defaultSearchText = '';

    if (!DesmyCommons.isEmptyOrNull(defaultValue) && !DesmyCommons.isEmptyOrNull(filteredOptions)) {
      if (Array.isArray(defaultValue)) {
        defaultSelected = defaultValue
          .map((val) => {
            if (typeof val === 'string') {
              const matchedItem = filteredOptions.find((d) => d.name === val);
              return (
                matchedItem || {
                  id: null,
                  name: val,
                  icon: null,
                  hint: null,
                  data: val,
                }
              );
            }
            return val;
          })
          .filter((item): item is DropdownItem => !!item);
      } else if (typeof defaultValue === 'string') {
        const matchedItem = filteredOptions.find((d) => d.name === defaultValue);
        defaultSelected = [matchedItem || {id: null,name: defaultValue, icon: null, hint: null,data: defaultValue}]
        defaultSearchText = defaultValue;
      } else if (defaultValue) {
        defaultSelected = [defaultValue];
        defaultSearchText = defaultValue.name || '';
      }
      
      if(!DesmyCommons.isEmptyOrNull(defaultSearchText)){
        this.setState(
        {
          selectedOptions: defaultSelected,
          searchText: defaultSearchText,
        },
        () => {
          if (this.props.onSelect) {
            this.props.onSelect(defaultSelected);
          }
        }
      );
      }
      
    }
  }

  fetchData = async (searchText: string, page: number) => {
    const { request } = this.props;
    const url = request?.url;
    const token = request?.token;

    try {
      const headers: HeadersInit = token ? { Authorization: `${token}` } : {};
      const response = await fetch(`${url}?query=${searchText}&page=${page}`, { headers });
      const responsedata = await response.json();

      if (responsedata.success) {
        const data: DropdownItem[] = responsedata.data.map((item: any) => ({
          id: item.id,
          name: item.name,
          icon: item.icon || null,
          hint: item.hint || null,
          data: item,
        }));

        this.setState(
          (prevState) => ({
            filteredOptions: page === 1 ? data : [...prevState.filteredOptions, ...data],
            hasMore: data.length > 0,
            error: { state: false, message: '' },
          }),
          this.handleDefault
        );
      } else {
        this.handleError(responsedata.message || 'Failed to fetch data.');
      }
    } catch (error) {
      this.handleError('An error occurred while fetching data. Please check your connection.');
    }
  };

  handleError = (message: string) => {
    this.setState({ error: { state: true, message }, filteredOptions: [] });
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value;
    this.setState({ searchText, showDropdown: !!searchText, page: 1, hasMore: true }, () => {
      if (!DesmyCommons.isEmptyOrNull(searchText)) {
        this.fetchData(searchText, 1);
      } else {
        this.setState({ filteredOptions: [] });
      }
    });
  };

  handleOptionClick = (option: DropdownItem) => {
    const { is_multiple, onSelect } = this.props;

    if (is_multiple) {
      this.setState((prevState) => {
        const selectedOptions = [...prevState.selectedOptions, option];
        const filteredOptions = prevState.filteredOptions.filter((item) => item.id !== option.id);

        onSelect(selectedOptions);
        return { selectedOptions, filteredOptions };
      });
    } else {
      this.setState({
        searchText: option.name || '',
        showDropdown: false,
        selectedOptions: [option],
      });
      onSelect(option);
    }
  };

  handleChipRemove = (option: DropdownItem) => {
    this.setState((prevState) => {
      const selectedOptions = prevState.selectedOptions.filter((item) => item.id !== option.id);
      const filteredOptions = [...prevState.filteredOptions, option];

      this.props.onSelect(selectedOptions);
      return { selectedOptions, filteredOptions };
    });
  };

  handleBlur = () => {
    setTimeout(() => {
      this.setState({ showDropdown: false });
    }, 200);
  };

  handleScroll = (event: React.UIEvent<HTMLUListElement>) => {
    const { target } = event;
    const { searchText, page, hasMore } = this.state;

    if (
      (target as HTMLElement).scrollHeight - (target as HTMLElement).scrollTop ===
      (target as HTMLElement).clientHeight
    ) {
      if (hasMore) {
        this.setState({ page: page + 1 }, () => {
          this.fetchData(searchText, this.state.page);
        });
      }
    }
  };

  render() {
    const { placeholder,is_multiple, label, disabled, autoFocus, maxLength, inputClassName, className } = this.props;
    const { searchText, filteredOptions, selectedOptions, showDropdown, error } = this.state;
    
    return (
      <div className={`${className || 'bg-white dark:bg-darkBackground'}`}>
        <div className="relative w-full bg-inherit">
          <input
            type="text"
            maxLength={maxLength}
            disabled={disabled}
            autoFocus={autoFocus}
            placeholder={placeholder || 'Search...'}
            value={searchText}
            onChange={this.handleInputChange}
            onBlur={this.handleBlur}
            onFocus={() => this.setState({ showDropdown: true })}
            className={`peer bg-transparent h-12 border border-black ${
              disabled ? 'cursor-not-allowed' : ''
            } dark:border-white dark:text-white placeholder-transparent text-xs 2xl:text-sm ring-0 px-2 w-full focus:outline-none focus:ring-0 dark:focus:border-white ${inputClassName}`}
          />
          <label
            htmlFor="data"
            className="pointer-events-none absolute cursor-text left-0 -top-3.5 text-[11px] dark:text-white bg-inherit mx-1 px-2 peer-placeholder-shown:text-sm dark:peer-placeholder-shown:text-white peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-black dark:peer-focus:text-white peer-focus:text-[11px] transition-all"
          >
            {label}
          </label>
          {showDropdown && (
            <ul
              onScroll={this.handleScroll}
              className="absolute top-full text-sm mt-2 left-0 right-0 bg-white dark:bg-darkDialogBackground border border-gray-300 dark:border-darkPrimaryBorder rounded shadow-md max-h-96 overflow-y-auto z-10"
            >
              {error.state ? (
                <li className="p-2 text-red-500">{error.message}</li>
              ) : filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <li
                    key={option.id || Math.random()}
                    onClick={() => this.handleOptionClick(option)}
                    className="flex items-center text-sm py-2 px-4 font-normal cursor-pointer w-full whitespace-no-wrap hover:bg-gray-200 dark:hover:bg-white dark:hover:text-black transition duration-500 ease-in-out dark:text-white group"
                  >
                    {option.icon && <img src={option.icon} alt="icon" className="w-4 h-4 mr-2" />}
                    <div>
                      <div>{option.name}</div>
                      <div className="text-xs text-gray-600 dark:text-white dark:group-hover:text-black">{option?.hint}</div>
                    </div>
                  </li>
                ))
              ) : (
                <li className="p-2 text-gray-500">No results found</li>
              )}
            </ul>
          )}
          {is_multiple && !DesmyCommons.isEmptyOrNull(selectedOptions) && (
            <div className="flex flex-wrap mt-4 items-center gap-2">
              {selectedOptions.map((option) => (
                <div
                  key={option.id || Math.random()}
                  className="flex items-center bg-gray-200 dark:bg-darkPrimaryBorder dark:text-white dark:hover:bg-white dark:hover:text-black rounded-full px-3 py-2 text-xs transition duration-500 ease-in-out"
                >
                  {option.icon && <img src={option.icon} alt="icon" className="w-4 h-4 mr-2" />}
                  {option.name}
                  <button onClick={() => this.handleChipRemove(option)} className="ml-2">
                    <svg viewBox="0 0 512 512" fill="currentColor" className="w-4 h-4 text-red-500">
                      <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export { DesmySearchInput };
