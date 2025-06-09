import { default as React, Component } from 'react';
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
    autoFocus?: boolean;
    maxLength?: number;
    label: string;
    debounceDelay?: number;
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
declare class DesmySearchInput extends Component<Props, State> {
    private btnDropdownRef;
    private divRef;
    private searchInputRef;
    private dropdownContentRef;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: Props): void;
    handleError: (message?: string) => void;
    openDropdownPopover: () => void;
    handleScroll: (e: React.UIEvent<HTMLUListElement>) => void;
    fetchData: (searchText: string, page: number) => Promise<void>;
    handleDefault: () => void;
    handleOnSelect: (data: DesmyDropdownItem | DesmyDropdownItem[]) => void;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleClickOutside: (event: MouseEvent) => void;
    closeDropdownPopover: () => void;
    handleOptionClick: (option: DesmyDropdownItem) => void;
    handleChipRemove: (option: DesmyDropdownItem) => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmySearchInput };
