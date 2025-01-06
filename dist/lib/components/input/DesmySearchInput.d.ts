import { default as React, Component } from 'react';

interface SearchRequest {
    url: string;
    token?: string;
}
interface DropdownItem {
    id: number | null;
    name: string | null;
    icon: string | null;
    hint: string | null;
    data: any;
}
interface DropdownSearchProps {
    inputClassName?: string;
    request?: SearchRequest;
    className?: string;
    placeholder?: string;
    onSelect: (data: DropdownItem | DropdownItem[]) => void;
    onRef?: (instance: DesmySearchInput | null) => void;
    autoFocus?: boolean;
    disabled?: boolean;
    maxLength?: number;
    url: string;
    label: string;
    token?: string;
    is_multiple?: boolean;
    defaultValue?: DropdownItem | DropdownItem[];
}
interface DropdownSearchState {
    searchText: string;
    filteredOptions: DropdownItem[];
    selectedOptions: DropdownItem[];
    showDropdown: boolean;
    page: number;
    hasMore: boolean;
    error: {
        state: boolean;
        message: string;
    };
}
declare class DesmySearchInput extends Component<DropdownSearchProps, DropdownSearchState> {
    constructor(props: DropdownSearchProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: DropdownSearchProps): void;
    handleDefault: () => void;
    fetchData: (searchText: string, page: number) => Promise<void>;
    handleError: (message: string) => void;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleOptionClick: (option: DropdownItem) => void;
    handleChipRemove: (option: DropdownItem) => void;
    handleBlur: () => void;
    handleScroll: (event: React.UIEvent<HTMLUListElement>) => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmySearchInput };
