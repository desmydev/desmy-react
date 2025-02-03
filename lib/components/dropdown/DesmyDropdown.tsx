import React, { Component,createRef, RefObject, ChangeEvent ,forwardRef} from 'react';
import { createPopper } from '@popperjs/core';
import axios from 'axios'; 
import Commons from '../apis/DesmyCommons';
import Auth from '../apis/DesmyAuth'
import { DesmyClickOutsideListener } from '../clickoutsidelistener/DesmyClickOutsideListener';

interface DropdownItem {
    id: any | null;
    name: string | null;
    icon?: string | null;
    data?: any;
}

interface DropdownRequest {
    url: string;
    token?: string;
}

interface Props {
    defaultValue?: string | any | DropdownItem | DropdownItem[];
    data?: DropdownItem[];
    request?: DropdownRequest;
    selectedData?: DropdownItem | DropdownItem[] | undefined;
    is_multiple?: boolean;
    type?: string;
    handleChange?: (data: DropdownItem | DropdownItem[]) => void;
    handleDropdownChange?: (data: DropdownItem | DropdownItem[], type?: string) => void;
    onRef?: (ref: DesmyDropdown) => void;
    disabled?: boolean;
    showPlaceHolderHint?: boolean;
    placeholder?: string;
    emptymessage?:string,
    all?: string;
    dropdownClass?: string;
    dropdownListClass?: string;
    containerClassName?:string;
    selectedRef?: string;
    enableDecrypt?: boolean;
    onClear?: string;
    className?: string;
    forwardedRef?: RefObject<HTMLDivElement>;
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
    isLoading: boolean; 
    input: {
        search: string;
    };
    selectedAll?: Boolean,
    selectedList: {
        id: string;
        name: string | null;
        icon?: string | null;
        data?: any;
    };
    error: {
        state: boolean;
        message: string;
    };
}

class DesmyDropdown extends Component<Props, State> {
    private popoverDropdownRef: RefObject<HTMLDivElement  | null> = React.createRef();
    private btnDropdownRef: RefObject<HTMLDivElement  | null> = React.createRef();
    private searchRef: RefObject<HTMLInputElement  | null> = React.createRef();
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
            }
        };
    }

    componentDidUpdate(_prevProps: Props, _prevState: State): void {
        
        if (!Commons.isEmptyOrNull(this.props.defaultValue) && !(Commons.isEmptyOrNull(this.props.data))) {
            if(!this.state.hasLoaded)
                this.handleDefault()
            
            else if(Commons.isEmptyOrNull(this.state.datalist)){
                this.setState({datalist:this.props.data ?? this.state.datalist,hasLoaded:true},this.handleDefault)
            }
        }else if(!(Commons.isEmptyOrNull(this.props.data))){
            if(!this.state.hasLoaded){
                this.setState({datalist:this.props.data ?? this.state.datalist,hasLoaded:true})
            }
                
        }
        if (this.props.request !== undefined) {
          this.handleRequestData();
        }
    }
    
    async componentDidMount(): Promise<void> {
        if (this.props.onRef)
            this.props.onRef(this);
        
        document.addEventListener('mousedown', this.handleClickOutside);
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
        }else{
            this.handleDefault()
        }
        const datalist: DropdownItem[] = this.props.data || [];
    
        this.setState({ datalist }, () => {
            this.handleDelayedProcess();
        });
    }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
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
        try{
            const { data } = this.props;
            if (!data ||  !Array.isArray(datalist)) {
                return [];
            }
            
            const c = datalist.map((data) => {
                const ldata = data.id !== undefined ? data : data.id === undefined ? undefined : data.find((x: any) => (x.id === this.handleEncrypt(data)));
                return ldata;
            }).filter((x: any) => x !== undefined);
        
            return c;
        }catch(e){
            return []
        }
        
    }
    
    handleDefault = async (): Promise<void> => {
        try {
            const datalist = (this.props.data !== undefined && this.props.data !== null) ? this.props.data : this.state.datalist;
            
            if (!Commons.isEmptyOrNull(datalist) || !Commons.isEmptyOrNull(this.props.defaultValue)) {
    
                const is_multiple = !(this.props.is_multiple === undefined || this.props.is_multiple === false);
                if (is_multiple) {
                    const defaultValueArray = Array.isArray(this.props.defaultValue) ? this.props.defaultValue : [this.props.defaultValue];
                    const filteredDefaultData = datalist.filter((data) =>
                        defaultValueArray.some((type) => type?.id === data.id || Commons.toString(type) === Commons.toString(data.id))
                    );
                    this.setState({datalist:datalist,defaultValue:this.props.defaultValue, hasLoaded: true },()=>{
                        if (filteredDefaultData !== undefined && this.props.handleChange !== undefined) {
                            this.setState({ selectedMultiple: filteredDefaultData}, () => {
                                if (this.props.handleChange !== undefined) {
                                    this.props.handleChange(filteredDefaultData);
                                }
                            });
                        }
                    })
                } else {
                    const defaultValue = Array.isArray(this.props.defaultValue) ? this.props.defaultValue[0] : this.props.defaultValue;
                    const data = datalist.find((x) => {
                        if (typeof defaultValue === 'object' && !Commons.isEmptyOrNull(defaultValue)) {
                            return Commons.toString(x.id).toLowerCase() === Commons.toString(defaultValue?.id).toLowerCase();
                        } else {
                            return Commons.toString(x.id).toLowerCase() === Commons.toString(defaultValue).toLowerCase() ||
                                Commons.toString(x.name).toLowerCase() === Commons.toString(defaultValue).toLowerCase();
                        }
                    });
                    this.setState({datalist:datalist, hasLoaded: true },()=>{
                        if(!Commons.isEmptyOrNull(data) && data !=null){
                            const encrypted_id = this.handleEncrypt(data?.id);
                            const { id, ...restData } = data; 
                            const newState = {
                                selectedList: {
                                    id: encrypted_id || id,
                                    ...restData 
                                }
                            };
                            this.setState(newState, () => {
                                if (this.props.handleChange !== undefined) {
                                    this.props.handleChange(newState.selectedList);
                                }
                            });
                        }
                    })
                    
                }
            } 
        } catch (_e) {
            // Handle errors here
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
        const {error} = this.state
        const headerToken = request?.token;
        error['state'] = false
        this.setState({isLoading:true,error})
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
                this.onClear()
                this.props.handleChange && this.props.handleChange(this.props.is_multiple  ? [] as DropdownItem[] : {} as DropdownItem)
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
        if (this.props.disabled) return;
    
        this.handleDropdownPopover();
        this.handleDropdownPopover();
    };
    handleDropdownPopover = (): void => {
        if (this.props.disabled) return;

        createPopper(this.btnDropdownRef.current!, this.popoverDropdownRef.current!, {
            placement: 'bottom-start',
            strategy: 'fixed',
            modifiers: [
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
                this.setState({ selectedMultiple, clear: false,selectedAll:false});
                if(this.props.handleChange)
                    this.props.handleChange(selectedMultiple);
            } else {
                selectedMultiple = this.deleteItems(data.id);
                this.setState({ selectedMultiple, clear: false,selectedAll:false });
                if(this.props.handleChange)
                    this.props.handleChange(selectedMultiple);
            }
        } else {
            this.setState({ selectedList: data, clear: false,selectedAll:false });
        }
    
        if (this.props.handleDropdownChange !== undefined) {
            this.props.handleDropdownChange((is_multiple) ? selectedMultiple : data, this.props.type);
        } else if (this.props.handleChange !== undefined) {
            this.props.handleChange((is_multiple) ? selectedMultiple : data);
        }
    
        if (!is_multiple) {
            this.closeDropdownPopover();
        }
        this.handleClearSearch()
    };
    handleClearSearch =() : void=>{
        const {input} = this.state
        input['search'] = ""
        this.setState({input,selectedAll:false})
    }
    handleClickAway = (): void => {
        // this.closeDropdownPopover();
    };
    handleClear=():void=>{
        this.setState({ selectedMultiple: [], selectedList: {id: '',  name: null, icon: null, data: null}, clear: true }, this.handleClickAway);
        
    }
    handleSelectAll=() : void=>{
        if (this.props.handleChange) {
            this.props.handleChange(this.state.datalist)
        }
        this.setState({selectedAll:true},this.handleClear)
        this.closeDropdownPopover()
       
    }
    handleClearSelected = (): void => {
        const data: any = (this.props.is_multiple !== undefined && this.props.is_multiple) ? [] : {};
    
        if (this.props.handleChange) {
            this.props.handleChange(data);
        }
        this.setState({selectedAll:false},this.handleClear)
    };
    
    closeDropdownPopover = (): void => {
        this.setState({ dropdownPopoverShow: false });
    };
    handleClickOutside = (event: MouseEvent) => {
        if (this.divRef.current && !this.divRef.current.contains(event.target as Node)) {
            this.closeDropdownPopover()
        }
    };

    render(){
        return (
          <>
       
        <DesmyClickOutsideListener onClickOutside={this.handleClickAway}>
           <div className={`flex flex-col w-full relative ${(this.props.containerClassName !=undefined) ? this.props.containerClassName :`bg-white dark:bg-darkBackground dark:text-white`}`}  ref={this.divRef} >
            <div className={`relative w-full h-12 border font-poppinsRegular bg-inherit border-black  dark:border-white  `}  ref={this.props.forwardedRef}>
                    <div className='relative h-full w-full text-sm bg-inherit' ref={this.btnDropdownRef} onClick={() => { this.openDropdownPopover()}}>
                        <div className={`absolute left-1.5  ${ ((this.props.placeholder != undefined && (this.state.selectedList.name != null || this.state.selectedMultiple.length > 0) || ((this.props.all !== undefined && this.state.selectedAll))) ) ? `-top-2.5  text-xs`:` text-sm top-2.5`} px-2 bg-inherit transition-all`}>{this.props.placeholder}</div>
                        <div className={`flex relative h-12 ${(this.props.disabled !==undefined && this.props.disabled) ? ` cursor-not-allowed`:`cursor-pointer`}  px-2 items-center w-full`}>
                            <div className="flex w-full justify-between">
                                <div className={`mr-2 bg-inherit text-black text-sm dark:text-white w-full justify-start text-start line-clamp-1  ${this.props.selectedRef}`}>
                                    {
                                    (this.props.is_multiple !=undefined && this.props.is_multiple && this.state.selectedMultiple.length > 0) ? this.handleSelectMessage(this.state.selectedMultiple) 
                                    : (!Commons.isEmptyOrNull(this.state.selectedList.name)) ? 
                                    
                                        <span className={`${(!Commons.isEmptyOrNull(this.state.selectedList.icon)) ? `flex`:``} w-full line-clamp-1 text-start justify-start`} title={`${this.handleEncrypt(this.state.selectedList.name)}`}>
                                            { (!Commons.isEmptyOrNull(this.state.selectedList.icon)) ? <img className="object-fill w-4 h-4 mr-2 items-center text-start justify-start" alt={`image`} src={`${this.handleEncrypt(this.state.selectedList.icon)}`} />:""}
                                            <div className='w-full line-clamp-1 justify-start text-start text-s,'>{this.handleEncrypt(this.state.selectedList.name)}</div></span>
                                    : <div className='w-full line-clamp-1'>{(this.props.all !== undefined && this.state.selectedAll) ? `${this.props.all}`: ""}</div>
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
            <div className='bg-inherit'>
            <div ref={this.popoverDropdownRef}
                    className={
                        (this.state.dropdownPopoverShow ? "inline-block " : "hidden ") +
                        "absolute border-[1px] z-[800] border-gray-200 dark:border-gray-700 text-base w-96 top-0 float-left py-2 bg-inherit  text-white list-none text-left rounded shadow-lg mt-1 "+
                        (this.props.dropdownClass)
                    }
                    style={{ minWidth: "12rem" }}
                >
                <div className='flex w-full justify-between items-center text-black'>
                    <div className="flex w-full relative z-0 mx-3 my-2 group border-b border-black dark:border-white">
                        <input type="text" name="search" autoFocus autoComplete="off" ref={this.searchRef} value={this.state.input.search} onChange={this.handleChange} className="block py-2.5 text-xs 2xl:text-sm px-0 bg-inherit w-full text-black bg- border-0 border-b-2 border-black appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " />
                        <label htmlFor="floating_search" className="absolute text-sm text-black dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black dark:peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Search here....</label>
                    </div>
                </div>
                <div className="flex w-full flex-col min-h-24 max-h-80 overflow-auto bg-inherit text-black dark:text-white">
                    
                    {
                    (this.state.error.state && this.props.request !==undefined) ? 
                    <div className='flex flex-col w-full text-red-500 justify-center items-center h-24'>
                        <div className='text-xs'>{this.state.error.message}</div>
                        <div onClick={()=>this.fetch()} className='text-xs uppercase bg-red-500 hover:bg-red-600 transition-all rounded-full text-white px-4 py-2 font-poppinsBold mt-2 cursor-pointer'>Retry</div>
                    </div>
                    : (this.state.isLoading && this.props.request !==undefined) ? 
                        <div className='flex flex-col w-full justify-center items-center mt-5'>
                            <div className='flex flex-col w-full justify-center items-center space-y-3'>
                                <svg role="status" className="inline w-6 h-6  animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                </svg>
                                <span className='text-sm'>Loading...</span>
                            </div>
                        </div>
                    :<>
                    <div className={`flex flex-col w-full`}>
                                {
                                (this.props.all !==undefined &&  this.props.is_multiple && (this.state.datalist.length != 0)) ? 
                                    <div className={`flex text-sm py-2 px-4 font-normal cursor-pointer w-full whitespace-no-wrap dark:hover:bg-white dark:hover:text-black ${this.props.dropdownListClass} ${ ((this.state.selectedAll)) ? ' font-poppinsBold' : 'font-normal'}  transition duration-500 ease-in-out`}
                                    onClick={this.handleSelectAll}>
                                        <div className="mr-2"></div>
                                        <div className={`flex w-full text-maxlines whitespace-no-wrap overflow-hidden h-6`}>  {this.props.all}</div>
                                    </div> 
                                : null
                                }
                                {
                                (this.props.onClear !==undefined) ? 
                                    <div className={`flex text-sm py-2 px-4 font-normal cursor-pointer w-full whitespace-no-wrap dark:hover:bg-white dark:hover:text-black ${this.props.dropdownListClass} transition duration-500 ease-in-out`}
                                    onClick={this.handleClearSelected}>
                                        <div className="mr-2"></div>
                                        <div className={`flex w-full text-maxlines whitespace-no-wrap overflow-hidden h-6`}>  {this.props.onClear}</div>
                                    </div> 
                                : null
                                }
                                {
                                (this.state.datalist.length != 0) ? 
                                this.state.datalist.filter(name => Commons.toString(this.handleEncrypt(name.name)).toLowerCase().includes(this.state.input.search.toLowerCase())).map((data,i)=>{
                                    const searchFound = this.handleSearch(this.state.selectedMultiple,data.id)  
                                    return <div key={`${i}`}
                                        className={`flex text-sm py-2 px-4 font-normal cursor-pointer w-full whitespace-no-wrap hover:bg-gray-200  dark:hover:bg-white dark:hover:text-black transition duration-500 ease-in-out dark:text-white ${this.props.dropdownListClass} ${ (this.props.is_multiple != undefined && this.props.is_multiple) ? (searchFound) ? ' font-poppinsBold' :'font-normal' : (Commons.toString(this.state.selectedList.id) == Commons.toString( data.id)) ? ' font-poppinsBold' : 'font-normal'} `}
                                        onClick={e => this.handleSelectedItem(e,data)}
                                        title={this.handleEncrypt(data.name)}
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
                                
                                : <div className='flex w-full h-24 text-sm dark:text-white text-center justify-center items-center'>{(!(Commons.isEmptyOrNull(this.props.emptymessage))) ? this.props.emptymessage: 'No data found'}</div>
                                
                            }
                            </div>
                        
                            </>
                            }
                            
                        </div>
                        {
                            (this.props.is_multiple !== undefined && this.props.is_multiple && (this.state.datalist.length != 0) ) ? 
                            <div className='flex w-full mt-4'>
                                <div onClick={()=>this.closeDropdownPopover()} className='flex px-3 py-3 w-full text-black text-center justify-center rounded uppercase mx-2 cursor-pointer text-xs border border-gray-800 bg-white font-poppinsSemiBold'>Done</div>
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
const ForwardedDesmyDropdown = forwardRef<HTMLDivElement, Props>((props, ref) => (
    <DesmyDropdown {...props} forwardedRef={ref as any} />
));

export { ForwardedDesmyDropdown as DesmyDropdown };
// export {DesmyDropdown };