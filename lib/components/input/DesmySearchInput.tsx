import React, { Component,createRef, RefObject } from 'react';
import { createPopper } from '@popperjs/core';
import { DesmyClickOutsideListener } from '../clickoutsidelistener/DesmyClickOutsideListener';
import DesmyCommons from '../apis/DesmyCommons';

interface DropdownItem {
  id: string | null;
  name: string | null;
  icon: string | null;
  hint: string | null;
  data: any;
}

interface SearchRequest {
    url: string;
    token?: string;
}

interface Props {
    defaultValue?: string | any | DropdownItem | DropdownItem[];
    data?: DropdownItem[];
    request?: SearchRequest;
    is_multiple?: boolean;
    type?: string;
    onRef?: (instance: DesmySearchInput | null) => void;
    disabled?: boolean;
    placeholder?: string;
    all?: string;
    dropdownClass?: string;
    containerClassName?:string;
    selectedRef?: string;
    onClear?: string;
    className?: string;


    inputClassName?: string;
    onSelect: (data: DropdownItem | DropdownItem[]) => void;
    autoFocus?: boolean;
    maxLength?: number;
    url?: string;
    label: string;
    token?: string;
}

interface State {
    dropdownPopoverShow: boolean;
    selectedMultiple: any[];
    datalist: DropdownItem[];
    defaultValue?:string,
    intervalId: number;
    hasLoaded: boolean;
    clear: boolean;
    requestUrl: string;
    bgColor: string;
    total:number;
    isLoading: boolean; 
    input: {
        search: string;
    };
    selectedAll?: Boolean,
    selectedList: {
        id: string;
        name: string | null;
        icon: string | null;
        data: any;
    };
    error: {
        state: boolean;
        message: string;
    };
    searchText: string;
    filteredOptions: DropdownItem[];
    selectedOptions: DropdownItem[];
    showDropdown: boolean;
    page: number;
    hasMore: boolean;
}

class DesmySearchInput extends Component<Props, State> {
    private popoverDropdownRef: RefObject<HTMLDivElement  | null> = React.createRef();
    private btnDropdownRef: RefObject<HTMLDivElement  | null> = React.createRef();
    private searchRef: RefObject<HTMLDivElement  | null> = React.createRef();
    private divRef: RefObject<HTMLDivElement  | null> = React.createRef();

    constructor(props: Props) {
        super(props);

        this.popoverDropdownRef = React.createRef();
        this.btnDropdownRef = React.createRef();
        this.searchRef = React.createRef();
        this.divRef = createRef();

        this.state = {
            dropdownPopoverShow: false,
            selectedList: { id: "", name: null, icon: null, data: null },
            selectedMultiple: [],
            defaultValue:"",
            datalist: [],
            intervalId: 0,
            total:0,
            hasLoaded: false,
            isLoading:false,
            clear: false,
            selectedAll:false,
            requestUrl: "",
            bgColor: 'dark:bg-darkDialogBackground',
            input: {
                search: ''
            },
            error: {
                state: false,
                message: ""
            },

            searchText: '',
            filteredOptions: [],
            selectedOptions: [],
            showDropdown: false,
            page: 1,
            hasMore: true,
        };
    }
    
  componentDidMount() {
    if (this.props.onRef) {
      this.props.onRef(this);
    }
    document.addEventListener('mousedown', this.handleClickOutside);
    this.fetchData('', 1);
  }
  alert=()=>""
  componentDidUpdate(prevProps: Props) {
    try{
      if (prevProps.defaultValue !== this.props.defaultValue && !DesmyCommons.isEmptyOrNull(this.props.defaultValue) && DesmyCommons.isEmptyOrNull(this.state.selectedOptions)) {
        this.handleDefault();
      }
      if(this.props.request?.url != undefined){
        if(prevProps?.request?.url !== this.props.request?.url)
          this.fetchData('', 1);
      }
    }catch(e){
      this.alert()
    }
    
  }


    handleError = (message: string = ""): void => {
        try {
            const { error } = this.state;
            const updatedError = {
                ...error,
                state: true,
                message: message
            };
            this.setState({ isLoading: false, error: updatedError });
        } catch (_) {
        }
    };
    
    openDropdownPopover = (): void => {
        if (this.props.disabled) return;
    
        this.handleDropdownPopover();
        this.handleDropdownPopover();
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
    fetchData = async (searchText: string, page: number) => {
      const { request } = this.props;
      const url = request?.url;
      const token = request?.token;
    
      try {
        this.setState({isLoading:true})
        const headers: HeadersInit = token ? { Authorization: `${token}` } : {};
        const response = await fetch(`${url}?query=${searchText}&page=${page}`, { headers });
        const responsedata = await response.json();
    
        if (responsedata.success) {
          if (!responsedata.data || !responsedata.data.meta) {
            throw new Error("Invalid response format: 'data' or 'meta' is missing.");
          }
    
          const { data, meta } = responsedata.data;
          if (!DesmyCommons.isEmptyOrNull(data)) {
            const formattedData: DropdownItem[] = data.map((item: any) => ({
              id: item.id,
              name: item.name,
              icon: null,
              hint: item.hint || null,
              data: item,
            }));
            this.setState((prevState) => ({
              filteredOptions: page === 1 ? formattedData : [...prevState.filteredOptions, ...formattedData],
              hasMore: meta.current_page < meta.last_page,
              total: meta.total,
              isLoading:false,
              error: { state: false, message: '' },
            }), this.handleDefault);
          } else {
            this.handleError('No data found.');
          }
        } else {
          this.handleError(responsedata.message || 'Failed to fetch data.');
        }
      } catch (_) {
        this.handleError('An error occurred while fetching data. Please check your connection.');
      }
    };
    

    handleDefault = (): void => {
      const { defaultValue } = this.props;
      const { filteredOptions } = this.state;
      let defaultSelected: DropdownItem[] = [];
      let defaultSearchText = '';
    
      if (!DesmyCommons.isEmptyOrNull(defaultValue) && !DesmyCommons.isEmptyOrNull(filteredOptions)) {
        if (Array.isArray(defaultValue)) {
          console.log("defaultValue=",defaultValue," and filteredOptions=",filteredOptions)
          defaultSelected = defaultValue.map((val) => {
            
              if (typeof val === 'string') {
                const matchedItem = filteredOptions.find((d) => d.name === val || d.id === val);
                return (
                  Array.isArray(matchedItem) ? matchedItem[0] : matchedItem  || {
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
          const matchedItem: any = filteredOptions.find((d) => d.name === defaultValue || d.id === defaultValue);
          defaultSelected = [Array.isArray(matchedItem) ? matchedItem[0] : matchedItem || { id: null, name: defaultValue, icon: null, hint: null, data: defaultValue }];
          defaultSearchText = defaultSelected?.[0]?.name ?? '';
          
        } else if (defaultValue) {
          const matchedItem: any = filteredOptions.find((d) => d.name === defaultValue?.name || d.id === defaultValue?.id);
          defaultSelected = [Array.isArray(matchedItem) ? matchedItem[0] :matchedItem || { id: defaultValue?.id, name: defaultValue?.name, icon: null, hint: null, data: defaultValue }];
          defaultSearchText = defaultSelected?.[0]?.name ?? '';
        }
        
        if (!DesmyCommons.isEmptyOrNull(defaultSearchText)) {
          if (
            JSON.stringify(this.state.selectedOptions) !== JSON.stringify(defaultSelected) ||
            this.state.searchText !== defaultSearchText
          ) {
            this.setState(
              {
                selectedOptions: defaultSelected,
                searchText: defaultSearchText,
              },
              () => {
                this.handleOnSelect(defaultSelected)
                
              }
            );
          }
        }else if(!DesmyCommons.isEmptyOrNull(defaultSelected) && !DesmyCommons.isEmptyOrNull(defaultValue)){
            this.setState({selectedOptions: defaultSelected},()=>{
              this.handleOnSelect(defaultSelected)
            })
        }
      }
    };
    handleOnSelect = (data: any | any[]) => {
      if (Array.isArray(data)) {
        const filteredData = data.filter((item: any) => item.id != null && item.name != null && item.id !== '' && item.name !== '');
        
        if (this.props.onSelect) {
          this.props.onSelect(filteredData); 
        }
      } else {
        if (this.props.onSelect) {
          this.props.onSelect(data); 
        }
      }
    }
    
  handleOpendropdown=()=>{
    if (this.props.disabled) return;

    createPopper(this.btnDropdownRef.current!, this.popoverDropdownRef.current!, {
        placement: 'bottom-start',
        strategy: 'fixed',
        modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 10],
              },
            },
            {
                name: 'flip',
                options: {
                    fallbackPlacements: ['top', 'bottom-start'], // Allow switching between top and bottom
                },
            },
        ],
    });

    this.setState({ dropdownPopoverShow: true }, () => {
        this.searchRef.current?.focus();
    });
  }
    handleDropdownPopover = (): void => {
      if(this.props.disabled){
        return 
      }
       this.handleOpendropdown()
       this.handleOpendropdown()
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

    handleClickAway = (): void => {
        // this.closeDropdownPopover();
    };
    handleClear=():void=>{
        this.setState({ selectedMultiple: [], selectedList: {id: '',  name: null, icon: null, data: null}, clear: true }, this.handleClickAway);
        
    }
    
    closeDropdownPopover = (): void => {
        this.setState({ dropdownPopoverShow: false });
    };
    handleOptionClick = (option: DropdownItem) => {
      const { is_multiple, onSelect } = this.props;
  
      if (is_multiple) {
        this.setState(
          (prevState) => {
            const selectedOptions = [...prevState.selectedOptions, option];
            const filteredOptions = prevState.filteredOptions.filter((item) => item.id !== option.id);
        
            return { selectedOptions, filteredOptions, dropdownPopoverShow: filteredOptions.length > 0 };
          },
          () => {
            onSelect(this.state.selectedOptions); // Ensure onSelect is called after the state is updated
          }
        );
        
      } else {
        this.setState({
          searchText: option.name || '',
          dropdownPopoverShow: false,
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

    handleClickOutside = (event: MouseEvent) => {
        if (this.divRef.current && !this.divRef.current.contains(event.target as Node)) {
            this.closeDropdownPopover()
        }
    };

    render(){
      const { placeholder,is_multiple, label, disabled, autoFocus, maxLength, inputClassName } = this.props;
      const { searchText, filteredOptions, selectedOptions, error, total ,isLoading} = this.state;
        
        return (
          <>
       
        <DesmyClickOutsideListener onClickOutside={this.handleClickAway}>
        <div className={`flex relative flex-col w-full ${(this.props.containerClassName !=undefined) ? this.props.containerClassName :`bg-white dark:bg-darkBackground dark:text-white`}`}  ref={this.divRef} >
          <div className="relative w-full bg-inherit" ref={this.btnDropdownRef}>
            <input
              type="text"
              maxLength={maxLength}
              disabled={disabled}
              autoFocus={autoFocus}
              placeholder={placeholder || 'Search...'}
              value={searchText}
              onChange={this.handleInputChange}
              onFocus={this.handleDropdownPopover}
              className={`peer bg-transparent h-12 border border-black ${
                disabled ? 'cursor-not-allowed' : ''
              } dark:border-white dark:text-white placeholder-transparent text-xs 2xl:text-sm ring-0 px-2 w-full focus:outline-none focus:ring-0 dark:focus:border-white ${inputClassName}`}
            />
            <label htmlFor="data" className="pointer-events-none absolute cursor-text left-0 -top-3.5 text-[11px] dark:text-white bg-inherit mx-1 px-2 peer-placeholder-shown:text-sm dark:peer-placeholder-shown:text-white peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-black dark:peer-focus:text-white peer-focus:text-[11px] transition-all">
              {label}
            </label>
            
            <div className='bg-inherit'>
              <div ref={this.popoverDropdownRef} className={(this.state.dropdownPopoverShow ? "inline-block " : "hidden ") + "absolute  z-[800] border border-gray-300 dark:border-darkPrimaryBorder top-0 text-base w-96 float-left py-4 bg-inherit  list-none mt-1 "+(this.props.dropdownClass)} style={{ minWidth: "12rem" }}>
                <div className="flex w-full justify-between px-3 py-2.5 items-center border-b-[1px] border-gray-200 dark:border-darkPrimaryBorder">
                  <div className='flex w-full text-sm justify-start uppercase font-bold items-center'>{(DesmyCommons.isEmptyOrNull(searchText))? `Recent Data`:`Search Found (${total})`}</div>
                  <div className='flex justify-end ml-3'><div className='border border-gray-300 dark:border-darkPrimaryBorder text-gray-500 hover:bg-gray-600 hover:text-white cursor-pointer text-xs px-2 py-1 uppercase rounded-full' onClick={this.closeDropdownPopover}>Done</div></div>
                </div>
                <div className='w-full'>
                  <ul onScroll={this.handleScroll} className="max-h-96 overflow-y-auto z-10">
                    
                    {isLoading ? <div className='flex text-xs dark:text-white h-32 w-full justify-center items-center'>Loading...</div> :error.state ? (
                      <li className="p-2 text-red-500">
                        <div className='flex w-full text-xs h-32 p-5 justify-center items-center text-center'>
                          {error.message}
                        </div>
                      </li>
                    ) : filteredOptions.length > 0 ? (
                    filteredOptions.map((option) => (
                      <li key={Math.random()}>
                        <div onClick={() => this.handleOptionClick(option)} className="flex items-center text-sm py-4 px-4 font-normal cursor-pointer w-full whitespace-no-wrap hover:bg-gray-200 dark:hover:bg-white dark:hover:text-black transition duration-500 ease-in-out dark:text-white group">
                           {option.icon && <img src={option.icon} alt="icon" className="w-4 h-4 mr-2" />}
                           <div>
                              <div>{option.name}</div>
                              <div className="text-xs text-gray-600 dark:text-white dark:group-hover:text-black">{option?.hint}</div>
                            </div>
                        </div>
                      </li>
                    ))
                  ) : (
                    <li className="p-2 text-gray-500"><div className='flex w-full h-32 justify-center items-center'>No results found</div></li>
                  )}
                </ul>
                </div>
                
                
              </div>
            </div>
          </div>
          {is_multiple && !this.state.dropdownPopoverShow && !DesmyCommons.isEmptyOrNull(selectedOptions) && (
            <div className="flex flex-wrap max-h-32 overflow-y-scroll mt-4 items-center gap-2">
              {selectedOptions.map((option) => {
                return option.id && (
                  <div
                key={Math.random()}
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
                )
              })}
            </div>
          )}
        </div>
        </DesmyClickOutsideListener>
            
      </>
        );
      }
}
export {DesmySearchInput };