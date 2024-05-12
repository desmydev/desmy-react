import React, { Component, RefObject, ChangeEvent } from 'react';
import Popper from "popper.js";
import axios from 'axios'; 
import Commons from '../apis/Commons';
import Auth from '../apis/Auth'
import { DesmyClickOutsideListener } from '../clickoutsidelistener/DesmyClickOutsideListener';

interface DropdownItem {
    id: number;
    name: string | null;
    icon: string | null;
    data: any;
}

interface DropdownRequest {
    url: string;
    token?: string;
}

interface Props {
    defaultValue?: DropdownItem | DropdownItem[];
    data?: DropdownItem[];
    request?: DropdownRequest;
    selectedData?: DropdownItem[];
    is_multiple?: boolean;
    type?: string;
    handleChange?: (data: DropdownItem | DropdownItem[]) => void;
    handleDropdownChange?: (data: DropdownItem | DropdownItem[], type?: string) => void;
    onRef?: (ref: DropDown) => void;
    disabled?: boolean;
    showPlaceHolderHint?: boolean;
    placeholder?: string;
    isLoading: boolean;
    all?: string;
    dropdownClass?: string;
    dropdownListClass?: string;
    selectedRef?: string;
    enableDecrypt?: boolean;
    onClear?: string;
    className?: string;
}

interface State {
    dropdownPopoverShow: boolean;
    selectedMultiple: any[];
    datalist: DropdownItem[];
    intervalId: number;
    hasLoaded: boolean;
    clear: boolean;
    requestUrl: string;
    bgColor: string;
    isLoading: boolean; 
    input: {
        search: string;
    };
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
}

class DropDown extends Component<Props, State> {
    private popoverDropdownRef: RefObject<HTMLDivElement>;
    private btnDropdownRef: RefObject<HTMLDivElement>;
    private searchRef: RefObject<HTMLInputElement>;

    constructor(props: Props) {
        super(props);

        this.popoverDropdownRef = React.createRef();
        this.btnDropdownRef = React.createRef();
        this.searchRef = React.createRef();

        this.state = {
            dropdownPopoverShow: false,
            selectedList: { id: "", name: null, icon: null, data: null },
            selectedMultiple: [],
            datalist: [],
            intervalId: 0,
            hasLoaded: false,
            isLoading:false,
            clear: false,
            requestUrl: "",
            bgColor: 'dark:bg-slate-800',
            input: {
                search: ''
            },
            error: {
                state: false,
                message: ""
            }
        };
    }

    componentDidUpdate(prevProps: Props, prevState: State): void {
        prevState.isLoading
        if (!Commons.isEmptyOrNull(this.props.defaultValue) && !this.state.hasLoaded && (this.props.data !== undefined && this.props.data !== null)) {
          this.handleDefault();
        }
        if (this.props.request !== undefined) {
          this.handleRequestData();
        }
        if (prevProps.selectedData !== undefined && prevProps.selectedData !== null) {
          if (prevProps.selectedData.length > 0 && this.state.selectedMultiple.length === 0 && !this.state.clear) {
            this.handleSelectedMultiple(prevProps.selectedData).then((data) => {
              this.setState({ selectedMultiple: data });
              this.handleSelectedMultiple(data);
              if (this.props.handleChange) {
                this.props.handleChange(data);
            }
            }).catch((e) => {
                console.log(e) 
            });
          }
        }
    }

    async componentDidMount(): Promise<void> {
        if (this.props.onRef)
            this.props.onRef(this);
    
        const request = this.props.request;
        if (request !== undefined) {
            if (!Commons.isEmptyOrNull(request.url)) {
                this.setState({ isLoading: true, requestUrl: request.url }, () => {
                    this.fetch().then(() => {
                        // Handle any additional logic after fetching data
                    });
                });
                return;
            }
        }
        const datalist: DropdownItem[] = this.props.data || [];
    
        this.setState({ datalist }, () => {
            this.handleDelayedProcess();
        });
    }
    
    

    handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const input = { ...this.state.input };
        input[event.target.name as keyof typeof input] = event.target.value;
        this.setState({
            input
        });
    };

    handleRequestData = (): void => {
        const request = this.props.request;
        if (request !== undefined) {
            if (!Commons.isEmptyOrNull(request.url) && this.state.requestUrl !== request.url) {
                this.setState({ requestUrl: request.url, isLoading: true }, this.fetch);
                return;
            }
        }
    };
    
    handleSelectedMultiple = async (datalist: any[]): Promise<any[]> => {
        const { data } = this.props;
        if (!data) {
            return [];
        }
    
        const c = datalist.map((data) => {
            const ldata = data.id !== undefined ? data : data.id === undefined ? undefined : data.find((x: any) => (x.id === this.handleEncrypt(data)));
            return ldata;
        }).filter((x: any) => x !== undefined);
    
        return c;
    }
    
    handleDefault = async (): Promise<void> => {
        try {
            const datalist = (this.props.data !== undefined && this.props.data !== null) ? this.props.data : this.state.datalist;
    
            if (datalist.length > 0 && this.props.defaultValue !== undefined && this.props.defaultValue !== null) {
    
                const is_multiple = !(this.props.is_multiple === undefined || this.props.is_multiple === false);
    
                if (is_multiple) {
                    const defaultValueArray = Array.isArray(this.props.defaultValue) ? this.props.defaultValue : [this.props.defaultValue];
                    const filteredDefaultData = datalist.filter((data) =>
                        defaultValueArray.some((type) => type?.id === data.id || Commons.toString(type)  === Commons.toString(data.id))
                    );
                    if (filteredDefaultData !== undefined && this.props.handleChange !== undefined) {
                        this.setState({ selectedMultiple: filteredDefaultData, hasLoaded: true }, () =>{
                            if (this.props.handleChange !== undefined) {
                             this.props.handleChange(filteredDefaultData)
                            }
                        });
                    }
    
                } else {
                    const defaultValue = Array.isArray(this.props.defaultValue) ? this.props.defaultValue[0] : this.props.defaultValue;
                    const data = datalist.find((x) => {
                        if (typeof defaultValue === 'object' && defaultValue !== null) {
                            if (Commons.toString(x.id).toLowerCase() === Commons.toString(defaultValue?.id).toLowerCase())
                                return x;
                        } else {
                            if (Commons.toString(x.id).toLowerCase() === Commons.toString(defaultValue).toLowerCase() || Commons.toString(x.name).toLowerCase() === Commons.toString(defaultValue).toLowerCase())
                                return x;
                        }
                    });
                    if (data !== undefined && this.props.handleChange !== undefined) {
                        const encrypted_id = this.handleEncrypt(data?.id);
                        const newState = {
                            selectedList: {
                                id: (Commons.isEmptyOrNull(encrypted_id)) ? data?.id : encrypted_id,
                                name: data?.name,
                                icon: data?.icon,
                                data: data?.data
                            },
                            hasLoaded: true
                        };
                        this.setState(newState, () => {
                            if (this.props.handleChange !== undefined) {
                                this.props.handleChange(newState.selectedList);
                            }
                        });
                    }
                }
            }
    
        } catch (e) {
    
        }
    };
    
    handleEncrypt = (data: any): any => {
        if (this.props.enableDecrypt) {
            const encrypt = Commons.toString(data);
            return !Commons.isEmptyOrNull(encrypt) ? encrypt : data;
        } else {
            return data;
        }
    };
    handleDelayedProcess = (): void => {
        setTimeout(() => {
            this.handleProcess();
        }, 1000);
    };
    handleProcess=(): void =>{
        this.handleDefault()
      }
      fetch = async (): Promise<void> => {
        const { request } = this.props;
        const headerToken = request?.token ?? Auth.getSession();
    
        try {
            const response = await axios.get(request?.url ?? '', {
                headers: {
                    "X-CSRFToken": `${Auth.getCookie('csrftoken')}`,
                    "Authorization": `Token ${headerToken}`
                }
            });
    
            const data = response.data;
            if (data.success) {
                const responseData = data.data;
                this.setState({ datalist: responseData, isLoading: false }, this.handleDelayedProcess);
            } else {
                this.handleError(data.message);
            }
        } catch (error) {
            this.handleError();
        }
    };
    
    handleError = (message: string = ""): void => {
        try {
            const { error } = this.state;
            const updatedError = {
                ...error,
                state: true,
                message: message
            };
            this.setState({ isLoading: false, error: updatedError });
        } catch (e) {
            console.error("Error occurred while handling error:", e);
        }
    };
    
    onClear = (): void => {
        try {
            this.setState({ 
                selectedMultiple: [], 
                selectedList: {
                    id: '',
                    name: null,
                    icon: null,
                    data: null
                } 
            });
        } catch (e) {
            // Handle any errors
        }
    };
    
    openDropdownPopover = (): void => {
        if (this.props.disabled !== undefined && this.props.disabled) {
            return;
        }
        new Popper(this.btnDropdownRef.current!, this.popoverDropdownRef.current!, {
            placement: "bottom-start"
        });
        this.setState({ dropdownPopoverShow: true }, () => {
            if (this.searchRef.current) {
                this.searchRef.current.focus();
            }
        });
    };
    
    removeItem = (object: any[], key: string, value: any): any[] => {
        if (value === undefined) {
            return object;
        }
    
        for (let i = 0; i < object.length; i++) {
            if (object[i][key] === value) {
                object.splice(i, 1);
                break;
            }
        }
        return object;
    };
    
    handleSearch = (collection: any[], data: any): any | false => {
        try {
            return collection.find(obj => obj.id === data);
        } catch (e) {
            return false;
        }
    };
    
    handleSelectMessage = (data: any[]): string => {
        try {
            if (data === undefined || data === null) {
                return "";
            }
            return data.map(object => this.handleEncrypt(object.name)).join(', ');
        } catch (e) {
            return "";
        }
    };
    
    deleteItems = (id: number): any[] => {
        const selected = this.state.selectedMultiple;
        return selected.filter((item) => item.id !== id);
    };
    
    handleSelectedItem = (e: React.MouseEvent<HTMLDivElement>,data: any): void => {
        e.preventDefault()
        const is_multiple: boolean = !(this.props.is_multiple === undefined || this.props.is_multiple === false);
        let { selectedMultiple } = this.state;
    
        if (is_multiple) {
            const datafound = this.state.selectedMultiple.find(obj => obj.id === data.id);
            if (!datafound) {
                selectedMultiple.push(data);
                this.setState({ selectedMultiple, clear: false });
                if(this.props.handleChange)
                    this.props.handleChange(selectedMultiple);
            } else {
                selectedMultiple = this.deleteItems(data.id);
                this.setState({ selectedMultiple, clear: false });
                if(this.props.handleChange)
                    this.props.handleChange(selectedMultiple);
            }
        } else {
            this.setState({ selectedList: data, clear: false });
        }
    
        if (this.props.handleDropdownChange !== undefined) {
            this.props.handleDropdownChange((is_multiple) ? selectedMultiple : data, this.props.type);
        } else if (this.props.handleChange !== undefined) {
            this.props.handleChange((is_multiple) ? selectedMultiple : data);
        }
    
        if (!is_multiple) {
            this.closeDropdownPopover();
        }
    };
    handleClickAway = (): void => {
        this.closeDropdownPopover();
    };

    handleClearSelected = (): void => {
        const data: any = (this.props.is_multiple !== undefined && this.props.is_multiple) ? [] : {};
    
        this.setState({ selectedMultiple: [], selectedList: {id: '',  name: null, icon: null, data: null}, clear: true }, this.handleClickAway);
        if (this.props.handleChange) {
            this.props.handleChange(data);
        }
    };
    
    closeDropdownPopover = (): void => {
        this.setState({ dropdownPopoverShow: false });
    };
    
    render(){
        return (
          <>
           
            <DesmyClickOutsideListener onClickOutside={this.handleClickAway}>
                <div className="flex flex-col w-full font-poppinsRegular ">
                <div className={`${this.props.className} cursor-pointer`}  ref={this.btnDropdownRef} onClick={() => { this.state.dropdownPopoverShow ? this.closeDropdownPopover() : this.openDropdownPopover()}} >
                                <div className={`flex flex-col w-full h-12 relative border-[1px] border-black dark:border-white`}>
                                  <div className='absolute bottom-0  px-2 pb-3 left-0 right-0'>
                                    <div className='flex'>
                                      <div className={`text-[11px]  line-clamp-1  px-1 -mt-6 ${((this.props.showPlaceHolderHint ===undefined || this.props.showPlaceHolderHint !==false) ? ((this.props.placeholder != undefined && (this.state.selectedList.name != null || this.state.selectedMultiple.length > 0) || this.props.all !==undefined) ) ? `bg-white dark:bg-gray-900`:`bg-transparent` :`bg-transparent`)} dark:text-white items-center`}>
                                        { (this.props.showPlaceHolderHint ===undefined || this.props.showPlaceHolderHint !==false) ? ((this.props.placeholder != undefined && (this.state.selectedList.name != null || this.state.selectedMultiple.length > 0) || this.props.all !==undefined) ) ? this.props.placeholder : '' : ''}
                                      </div>
                                    </div>
                                    <div className="flex w-full justify-between">
                                        <div className={`flex mr-2 text-black dark:text-white w-full line-clamp-1  ${this.props.selectedRef}`}>
                                          {
                                            (this.props.is_multiple !=undefined && this.props.is_multiple && this.state.selectedMultiple.length > 0) ? this.handleSelectMessage(this.state.selectedMultiple) 
                                            : (!Commons.isEmptyOrNull(this.state.selectedList.name)) ? <div className="flex w-full line-clamp-1" title={`${this.handleEncrypt(this.state.selectedList.name)}`}>{ (!Commons.isEmptyOrNull(this.state.selectedList.icon)) ? <img className="object-fill w-4 h-4 mr-2 items-center" alt={`image`} src={`${this.handleEncrypt(this.state.selectedList.icon)}`} />:""}<div className='w-full line-clamp-1'>{this.handleEncrypt(this.state.selectedList.name)}</div></div>
                                            : (this.props.all !== undefined) ? `${this.props.all}`: (!Commons.isEmptyOrNull(this.props.placeholder)) ? this.props.placeholder : null
                                          }
                                      
                                        </div>
                                        {
                                           (!(this.props.disabled !==undefined && this.props.disabled)) ? 
                                           <div>
                                            {
                                                (!this.state.dropdownPopoverShow) ? 
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 dark:text-white" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 dark:text-white" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                                                </svg>
                                            }
                                        </div>
                                           
                                           :null
                                        }
                                        
                                    </div>
                                  </div>
                               </div>
                               
                              
                </div>
                    {
                        (this.props.data != undefined || this.props.request !=undefined) ? 
                            <div>
                              <div ref={this.popoverDropdownRef}
                                      className={
                                          (this.state.dropdownPopoverShow ? "inline-block " : "hidden ") +
                                          (this.props.dropdownClass)+
                                          "absolute border-[1px] z-[800] border-gray-200 dark:border-gray-700 text-base w-96 float-left py-2 bg-white dark:bg-slate-800  text-white list-none text-left rounded shadow-lg mt-1"
                                      }
                                      style={{ minWidth: "12rem" }}
                                  >
                                  <div className='flex w-full justify-between items-center bg-white text-black dark:bg-slate-800'>
                                    <div className="flex w-full relative z-0 mx-3 my-2 group">
                                        <input type="text" name="search" autoFocus autoComplete="off" ref={this.searchRef} value={this.state.input.search} onChange={this.handleChange} className="block py-2.5 text-xs 2xl:text-sm px-0 w-full text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " />
                                        <label htmlFor="floating_search" className="absolute text-sm text-black dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black dark:peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Search here....</label>
                                    </div>
                                  </div>
                                  <div className="flex w-full flex-col min-h-24 max-h-96 overflow-auto bg-white dark:bg-slate-800 text-black dark:text-white">
                                    
                                    {
                                      (this.state.error.state && this.props.request !==undefined) ? 
                                      <div className='flex flex-col w-full text-red-500 justify-center items-center h-24'>
                                          <div className='text-xs'>{this.state.error.message}</div>
                                          <div onClick={()=>this.fetch()} className='text-xs uppercase bg-red-500 hover:bg-red-600 transition-all rounded-full text-white px-4 py-2 font-poppinsBold mt-2 cursor-pointer'>Retry</div>
                                      </div>
                                      : (this.state.isLoading && this.props.request !==undefined) ? 
                                        <div>
    
                                        </div>
                                      :<>
                                      <div className={`flex flex-col w-full`}>
                                        {
                                          (this.props.all !==undefined) ? 
                                            <div className={`flex text-sm py-2 px-4 font-normal cursor-pointer w-full whitespace-no-wrap dark:hover:bg-gray-500 ${this.props.dropdownListClass} ${ (this.state.selectedMultiple.length ==0) ? ' font-poppinsBold' : 'font-normal'} `}
                                            onClick={this.handleClearSelected}>
                                                <div className="mr-2"></div>
                                                <div className={`flex w-full text-maxlines whitespace-no-wrap dark:text-white overflow-hidden h-6`}>  {this.props.all}</div>
                                            </div> 
                                          : null
                                        }
                                        {
                                          (this.props.onClear !==undefined) ? 
                                            <div className={`flex text-sm py-2 px-4 font-normal cursor-pointer w-full whitespace-no-wrap dark:hover:bg-gray-500 ${this.props.dropdownListClass}`}
                                            onClick={this.handleClearSelected}>
                                                <div className="mr-2"></div>
                                                <div className={`flex w-full text-maxlines whitespace-no-wrap dark:text-white overflow-hidden h-6`}>  {this.props.onClear}</div>
                                            </div> 
                                          : null
                                        }
                                        {
                                          (this.state.datalist.length != 0) ? 
                                          this.state.datalist.filter(name => Commons.toString(this.handleEncrypt(name.name)).toLowerCase().includes(this.state.input.search.toLowerCase())).map((data,i)=>{
                                            var searchFound = this.handleSearch(this.state.selectedMultiple,data.id)  
                                            return <div key={`${i}`}
                                                  className={`flex text-sm py-2 px-4 font-normal cursor-pointer w-full whitespace-no-wrap dark:hover:bg-gray-900 dark:text-white ${this.props.dropdownListClass} ${ (this.props.is_multiple != undefined && this.props.is_multiple) ? (searchFound) ? ' font-poppinsBold' :'font-normal' : (Commons.toString(this.state.selectedList.id) == Commons.toString(data.id)) ? ' font-poppinsBold' : 'font-normal'} `}
                                                  onClick={e => this.handleSelectedItem(e,data)}
                                              >
                                                <div className="mr-2">
                                                    {
                                                      (!Commons.isEmptyOrNull(data.icon)) ? <img className="object-fill w-4 h-4" alt={`image`} src={`${this.handleEncrypt(data.icon)}`} />:""
                                                    }
                                                </div>
                                                <div className={`flex w-full text-maxlines whitespace-no-wrap overflow-hidden h-6`}>  {this.handleEncrypt(data.name)}</div>
                                                
                                                {
                                                  (searchFound) ?<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                                  </svg>: (this.props.is_multiple) ?  <svg fill="currentColor" viewBox="0 0 16 16" className="w-5 h-5"><path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z" /></svg>: null
                                                }
                                                
    
                                              </div>
                                          })
                                          
                                          : null
                                          
                                      }
                                    </div>
                                  
                                      </>
                                    }
                                    
                                  </div>
                                  {
                                    (this.props.is_multiple !== undefined && this.props.is_multiple) ? 
                                      <div className='flex w-full mt-4'>
                                        <div onClick={()=>this.handleClickAway()} className='flex px-3 py-3 w-full text-black text-center justify-center rounded uppercase mx-2 cursor-pointer text-xs border border-gray-800 bg-white font-poppinsSemiBold'>Done</div>
                                      </div>
                                    :null
                                  }
                                  
                              </div>
                            </div>
                            :null
                            }
                          
              
                </div>
               
            </DesmyClickOutsideListener>
                
          </>
          
        );
      }
}