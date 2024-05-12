import React, { Component, RefObject, ChangeEvent } from 'react';
import Popper from "popper.js";
import axios from 'axios'; 
import Commons from '../apis/Commons';
import Auth from '../apis/Auth'

interface DropdownItem {
    id: number;
    name: string | null;
    icon: string | null;
    data: any;
}
interface Input {
    [key: string]: string;
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
        const data = event.target.value;
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
    
}