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
    placeholder?: string;
    emptymessage?: string;
    all?: string;
    dropdownClass?: string;
    dropdownListClass?: string;
    containerClassName?: string;
    enableDecrypt?: boolean;
    onClear?: string;
    handleClear?: () => void;
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
declare class DesmyDropdown extends Component<Props, State> {
    private btnDropdownRef;
    private divRef;
    private dropdownContentRef;
    private searchRef;
    constructor(props: Props);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    componentWillUnmount(): void;
    handleClickOutside: (event: MouseEvent) => void;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleDefault: () => Promise<void>;
    handleDefaultClear: () => void;
    handleEncrypt: (data: any) => any;
    fetch: () => Promise<void>;
    handleError: (message?: string) => void;
    onClear: () => void;
    openDropdownPopover: () => void;
    closeDropdownPopover: () => void;
    handleSelectAll: () => void;
    handleClear: () => void;
    handleSelectedItem: (e: React.MouseEvent<HTMLDivElement>, data: DesmyDropdownItem) => void;
    handleClearSearch: () => void;
    handleClickAway: () => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmyDropdown };
