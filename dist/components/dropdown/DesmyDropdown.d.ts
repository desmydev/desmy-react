import { default as React, Component, ChangeEvent } from 'react';
import { DesmyDropdownItem } from '../apis/SharedProps';
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
    showPlaceHolderHint?: boolean;
    placeholder?: string;
    emptymessage?: string;
    all?: string;
    dropdownClass?: string;
    dropdownListClass?: string;
    containerClassName?: string;
    enableDecrypt?: boolean;
    onClear?: string;
    className?: string;
    onRef?: (ref: DesmyDropdown | null) => void;
}
interface State {
    dropdownPopoverShow: boolean;
    selectedMultiple: any[];
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
    selectedAll?: Boolean;
    selectedList: DesmyDropdownItem;
    error: {
        state: boolean;
        message: string;
    };
    isMobileView: boolean;
    isModal: boolean;
    showMobileModal: boolean;
}
declare class DesmyDropdown extends Component<Props, State> {
    private popoverDropdownRef;
    private btnDropdownRef;
    private searchRef;
    private divRef;
    constructor(props: Props);
    componentDidUpdate(prevProps: Props, _prevState: State): void;
    handleDefaultClear: () => void;
    updateViewMode: () => void;
    componentDidMount(): Promise<void>;
    componentWillUnmount(): void;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleRequestData: () => void;
    handleSelectedMultiple: (datalist: any[]) => Promise<any[]>;
    handleDefault: () => Promise<void>;
    handleEncrypt: (data: any) => any;
    handleDelayedProcess: () => void;
    handleProcess: () => void;
    fetch: () => Promise<void>;
    handleError: (message?: string) => void;
    onClear: () => void;
    openDropdownPopover: () => void;
    handleDropdownOpen: () => void;
    handleDropdownPopover: () => void;
    removeItem: (object: any[], key: string, value: any) => any[];
    handleSearch: (collection: any[], data: any) => any | false;
    handleSelectMessage: (data: any[]) => string;
    deleteItems: (id: number) => any[];
    handleSelectedItem: (e: React.MouseEvent<HTMLDivElement>, data: any) => void;
    handleClearSearch: () => void;
    handleClickAway: () => void;
    handleClear: () => void;
    handleSelectAll: () => void;
    handleClearSelected: () => void;
    closeDropdownPopover: () => void;
    handleClickOutside: (event: MouseEvent) => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmyDropdown };
