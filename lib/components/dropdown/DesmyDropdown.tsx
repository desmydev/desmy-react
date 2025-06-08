import React, { Component, createRef, RefObject, ChangeEvent } from 'react';
import axios from 'axios'; 
import Commons from '../apis/DesmyCommons';
import Auth from '../apis/DesmyAuth';
import { DesmyDropdownItem } from '../apis/SharedProps';
import DesmyCommons from '../apis/DesmyCommons';
import { DropdownPositionWrapper } from '../apis/DropdownPositionWrapper';
import { DropdownButton } from './DropdownButton';
import { DropdownSearch } from './DropdownSearch';
import { DropdownList } from './DropdownList';

interface DropdownRequest {
    url: string;
    token?: string;
}

interface Props {
    defaultValue?: string | any | DesmyDropdownItem | DesmyDropdownItem[];
    data?: DesmyDropdownItem[];
    request?: DropdownRequest;
    selectedData?: DesmyDropdownItem | DesmyDropdownItem[] | undefined;
    is_multiple?: boolean;
    type?: string;
    handleChange?: (data: DesmyDropdownItem | DesmyDropdownItem[]) => void;
    handleDropdownChange?: (data: DesmyDropdownItem | DesmyDropdownItem[], type?: string) => void;
    disabled?: boolean;
    placeholder?: string;
    emptymessage?: string;
    all?: string;
    dropdownClass?: string;
    dropdownListClass?: string;
    containerClassName?: string;
    enableDecrypt?: boolean;
    onClear?: string;
    handleClear?:()=>void
    className?: string;
    onRef?: (ref: DesmyDropdown | null) => void;
}

interface State {
    dropdownPopoverShow: boolean;
    selectedMultiple: DesmyDropdownItem[];
    datalist: DesmyDropdownItem[];
    defaultValue?: string;
    intervalId: number;
    hasLoaded: boolean;
    clear: boolean;
    requestUrl: string;
    bgColor: string;
    isLoading: boolean; 
    input: {
        search: string;
    };
    selectedAll?: boolean;
    selectedList: DesmyDropdownItem;
    error: {
        state: boolean;
        message: string;
    };
}

const emptyDropdownItem: DesmyDropdownItem = { id: '', name: null, icon: null, data: null };

class DesmyDropdown extends Component<Props, State> {
    private btnDropdownRef: RefObject<HTMLDivElement | null> = createRef();
    private divRef: RefObject<HTMLDivElement | null> = createRef();
    private dropdownContentRef: RefObject<HTMLDivElement | null> = createRef();
    private searchRef: RefObject<HTMLInputElement | null> = createRef();

    constructor(props: Props) {
        super(props);
        this.state = {
            dropdownPopoverShow: false,
            selectedList: emptyDropdownItem,
            selectedMultiple: [],
            defaultValue: "",
            datalist: [],
            intervalId: 0,
            hasLoaded: false,
            isLoading: false,
            clear: false,
            selectedAll: false,
            requestUrl: "",
            bgColor: 'dark:bg-darkDialogBackground',
            input: { search: '' },
            error: { state: false, message: "" },
        };
    }

    componentDidMount(): void {
        if(this.props.onRef) {
            this.props.onRef(this);
        }
        document.addEventListener('mousedown', this.handleClickOutside);
        if (this.props.request && !Commons.isEmptyOrNull(this.props.request.url)) {
            this.setState({ isLoading: true, requestUrl: this.props.request.url }, this.fetch);
        } else {
            this.handleDefault();
            this.setState({ datalist: this.props.data ?? [] });
        }
    }

    componentDidUpdate(prevProps: Props): void {
        if (this.props.defaultValue !== prevProps.defaultValue) {
            this.handleDefault();
        }
        if (this.props.data !== prevProps.data && this.props.data !== undefined) {
            this.setState({ datalist: this.props.data ?? [], hasLoaded: true }, this.handleDefault);
        }
        if (this.props.request && this.props.request.url !== prevProps.request?.url) {
            this.setState({ requestUrl: this.props.request.url, isLoading: true }, this.fetch);
        }
    }

    componentWillUnmount(): void {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = (event: MouseEvent): void => {
        const btn = this.btnDropdownRef.current;
        const content = this.dropdownContentRef.current;
        if (btn && !btn.contains(event.target as Node) && content && !content.contains(event.target as Node)) {
            this.closeDropdownPopover();
        }
    };

    handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const input = { ...this.state.input };
        input[event.target.name as keyof typeof input] = event.target.value;
        this.setState({ input });
    };

    handleDefault = async (): Promise<void> => {
        try {
            const datalist = this.props.data ?? this.state.datalist;
            const defaultValue = this.props.defaultValue;

            if (Commons.isEmptyOrNull(datalist) || Commons.isEmptyOrNull(defaultValue)) {
                return;
            }

            const is_multiple = !!this.props.is_multiple;

            if (is_multiple) {
                const defaultValueArray = Array.isArray(defaultValue) ? defaultValue : [defaultValue];
                const defaultIds = defaultValueArray.map(item => (typeof item === 'object' ? item?.id : item));
                const selectedIds = this.state.selectedMultiple.map(item => item.id);

                const isSameSelection =
                    defaultIds.length === selectedIds.length &&
                    defaultIds.every(id => selectedIds.includes(id));

                if (isSameSelection) return;

                const filteredDefaultData = datalist.filter(data =>
                    defaultIds.some(id => id === data.id || Commons.toString(id) === Commons.toString(data.id))
                );

                this.setState({ selectedMultiple: filteredDefaultData, datalist, hasLoaded: true }, () => {
                    this.props.handleChange && this.props.handleChange(filteredDefaultData);
                });

            } else {
                const defaultSingle = Array.isArray(defaultValue) ? defaultValue[0] : defaultValue;

                const foundData = datalist.find(x => {
                    if (typeof defaultSingle === 'object' && defaultSingle) {
                        return Commons.toString(x.id).toLowerCase() === Commons.toString(defaultSingle?.id).toLowerCase();
                    }
                    return (
                        Commons.toString(x.id).toLowerCase() === Commons.toString(defaultSingle).toLowerCase() ||
                        Commons.toString(x.name).toLowerCase() === Commons.toString(defaultSingle).toLowerCase()
                    );
                });

                if (!foundData) return;

                const encrypted_id = this.handleEncrypt(foundData.id);
                const { id, ...rest } = foundData;
                const newSelectedList = { id: encrypted_id || id, ...rest };

                if (this.state.selectedList && this.state.selectedList.id === newSelectedList.id) return;

                this.setState({ selectedList: newSelectedList, datalist, hasLoaded: true }, () => {
                    this.props.handleChange && this.props.handleChange(this.state.selectedList);
                });
            }
        } catch {
            // ignore
        }
    };

    handleDefaultClear = (): void => {
        if (DesmyCommons.isEmptyOrNull(this.props.defaultValue) && !DesmyCommons.isEmptyOrNull(this.state.datalist)) {
            this.handleSelectAll();
        }
    };

    handleEncrypt = (data: any): any => {
        if (this.props.enableDecrypt) {
            const encrypt = Commons.toString(data);
            return !Commons.isEmptyOrNull(encrypt) ? encrypt : data;
        }
        return data;
    };

    fetch = async (): Promise<void> => {
        const { request } = this.props;
        if (!request) return;
        const headerToken = request.token;
        this.setState({ isLoading: true, error: { state: false, message: "" } });
        try {
            const response = await axios.get(request.url, {
                headers: {
                    "X-CSRFToken": Auth.getCookie('csrftoken'),
                    "Authorization": `Token ${headerToken}`
                }
            });
            const data = response.data;
            if (data.success) {
                this.onClear();
                this.props.handleChange && this.props.handleChange(this.props.is_multiple ? [] : emptyDropdownItem);
                this.setState({ datalist: data.data, isLoading: false }, this.handleDefault);
            } else {
                this.handleError(data.message);
            }
        } catch {
            this.handleError();
        }
    };

    handleError = (message = ""): void => {
        this.setState({
            isLoading: false,
            error: { state: true, message }
        });
    };

    onClear = (): void => {
        this.setState({
            selectedMultiple: [],
            selectedList: emptyDropdownItem,
            clear: true
        });
    };

    openDropdownPopover = (): void => {
        if (this.props.disabled) return;
        this.setState(prev => ({ dropdownPopoverShow: !prev.dropdownPopoverShow }), () => {
            if (this.state.dropdownPopoverShow) {
                this.searchRef.current?.focus();
            }
        });
    };

    closeDropdownPopover = (): void => {
        this.setState({ dropdownPopoverShow: false });
    };

    handleSelectAll = (): void => {
        this.props.handleChange && this.props.handleChange(this.state.datalist);
        this.setState({ selectedAll: true, dropdownPopoverShow: false });
    };

    handleClear = (): void => {
        this.setState({
            selectedMultiple: [],
            selectedList: emptyDropdownItem,
            selectedAll: false,
        }, () => {
            this.props.handleClear && this.props.handleClear();
            this.closeDropdownPopover();
        });
        };
    
    handleSelectedItem = (e: React.MouseEvent<HTMLDivElement>, data: DesmyDropdownItem): void => {
        e.preventDefault();
        const is_multiple = !!this.props.is_multiple;
        let { selectedMultiple, selectedList } = this.state;
        
        if (is_multiple) {
            const exists = selectedMultiple.find(item => item.id === data.id);
            if (exists) {
                selectedMultiple = selectedMultiple.filter(item => item.id !== data.id);
            } else {
                selectedMultiple = [...selectedMultiple, data];
            }
            this.setState({ selectedMultiple, clear: false, selectedAll: false }, () => {
                this.props.handleChange && this.props.handleChange(this.state.selectedMultiple);
            });
        } else {
            selectedList = data;
            this.setState({ selectedList, clear: false, selectedAll: false }, () => {
                this.props.handleChange && this.props.handleChange(this.state.selectedList);
            });
            this.closeDropdownPopover();
        }

        if (this.props.handleDropdownChange) {
            this.props.handleDropdownChange(is_multiple ? selectedMultiple : data, this.props.type);
        }

        this.handleClearSearch();
    };

    handleClearSearch = (): void => {
        this.setState(prev => ({ input: { ...prev.input, search: "" }, selectedAll: false }));
    };

    handleClickAway = (): void => {
        // Optional: close dropdown on outside click
        // this.closeDropdownPopover();
    };

    render() {
        const {
            dropdownPopoverShow,
            datalist,
            input,
            selectedMultiple,
            selectedList,
            error,
            isLoading,
            selectedAll,
        } = this.state;

        const {
            placeholder,
            disabled,
            is_multiple,
            all,
            dropdownListClass,
            onClear,
            emptymessage,
            containerClassName,
            enableDecrypt,
        } = this.props;

        return (
            <>
                <div className={`flex flex-col w-full relative bg-white dark:bg-darkBackground dark:text-white ${containerClassName ?? '' }`}ref={this.divRef}>
                        <DropdownButton
                            placeholder={placeholder}
                            disabled={disabled}
                            selectedMultiple={selectedMultiple}
                            selectedList={selectedList}
                            all={all}
                            onClear={this.handleClear}
                            selectedAll={selectedAll}
                            onClick={this.openDropdownPopover}
                            buttonRef={this.btnDropdownRef}
                            dropdownPopoverShow={dropdownPopoverShow}
                        />

                        <DropdownPositionWrapper
                            targetRef={this.btnDropdownRef}
                            visible={dropdownPopoverShow}
                            maxHeight={350}
                        >
                            <div className={`flex flex-col relative space-y-2 max-w-[600px] min-w-[400px] font-poppinsRegular min-h-32  pb-5 pt-3 bg-white dark:bg-darkDialogBackground border-[1px] border-gray-200 dark:border-darkPrimaryBorder overflow-hidden`} ref={this.dropdownContentRef}>
                                <DropdownSearch
                                    searchValue={input.search}
                                    onChange={this.handleChange}
                                    inputRef={this.searchRef}
                                />
                                <DropdownList
                                    items={datalist}
                                    filterText={input.search}
                                    isMultiple={is_multiple}
                                    selectedMultiple={selectedMultiple}
                                    selectedSingle={selectedList}
                                    allText={all}
                                    selectedAll={selectedAll}
                                    dropdownListClass={dropdownListClass}
                                    onSelectAll={this.handleSelectAll}
                                    onClearSelected={this.handleClear}
                                    onSelectItem={this.handleSelectedItem}
                                    clearLabel={onClear}
                                    error={error}
                                    isLoading={isLoading}
                                    onRetry={this.fetch}
                                    emptyMessage={emptymessage}
                                    enableDecrypt={enableDecrypt}
                                    encryptHandler={this.handleEncrypt}
                                />
                                {is_multiple && datalist.length > 0 && (
                                    <div className="flex w-full  my-4">
                                        <div
                                            onClick={this.closeDropdownPopover}
                                            className="flex px-3 py-3 w-full text-black text-center justify-center rounded uppercase mx-2 cursor-pointer text-xs border border-gray-830 bg-white font-poppinsSemiBold"
                                        >
                                            Done
                                        </div>
                                    </div>
                                )}
                            </div>
                        </DropdownPositionWrapper>
                    </div>
            </>
        );
    }
}

export { DesmyDropdown };
