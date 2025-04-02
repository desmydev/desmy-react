import { default as React, Component } from 'react';
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
    containerClassName?: string;
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
    defaultValue?: string;
    intervalId: number;
    hasLoaded: boolean;
    clear: boolean;
    requestUrl: string;
    bgColor: string;
    total: number;
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
    searchText: string;
    filteredOptions: DropdownItem[];
    selectedOptions: DropdownItem[];
    showDropdown: boolean;
    page: number;
    hasMore: boolean;
}
declare class DesmySearchInput extends Component<Props, State> {
    private popoverDropdownRef;
    private btnDropdownRef;
    private searchRef;
    private divRef;
    constructor(props: Props);
    componentDidMount(): void;
    alert: () => string;
    componentDidUpdate(prevProps: Props): void;
    handleError: (message?: string) => void;
    openDropdownPopover: () => void;
    handleScroll: (event: React.UIEvent<HTMLUListElement>) => void;
    fetchData: (searchText: string, page: number) => Promise<void>;
    handleDefault: () => void;
    handleOnSelect: (data: any | any[]) => void;
    handleOpendropdown: () => void;
    handleDropdownPopover: () => void;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleClickAway: () => void;
    handleClear: () => void;
    closeDropdownPopover: () => void;
    handleOptionClick: (option: DropdownItem) => void;
    handleChipRemove: (option: DropdownItem) => void;
    handleClickOutside: (event: MouseEvent) => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmySearchInput };
