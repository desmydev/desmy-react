import React, { Component, ChangeEvent } from 'react';
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
    emptymessage?: string;
    all?: string;
    dropdownClass?: string;
    dropdownListClass?: string;
    containerClassName?: string;
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
    selectedAll?: Boolean;
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
declare class DesmyDropdown extends Component<Props, State> {
    private popoverDropdownRef;
    private btnDropdownRef;
    private searchRef;
    constructor(props: Props);
    componentDidUpdate(prevProps: Props, prevState: State): void;
    componentDidMount(): Promise<void>;
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
    render(): React.JSX.Element;
}
export { DesmyDropdown };
