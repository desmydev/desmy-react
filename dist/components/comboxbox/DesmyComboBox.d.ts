import { default as React, Component } from 'react';
import { OptionType } from './types';
interface DesmyComboBoxProps<T extends OptionType> {
    request: {
        url: string;
        token?: string;
    };
    defaultValue?: string | T | T[] | null;
    value?: T[];
    onChange?: (options: T[]) => void;
    debounceTime?: number;
    is_multiple?: boolean;
}
interface DesmyComboBoxState<T extends OptionType> {
    options: T[];
    filteredOptions: T[];
    loading: boolean;
    page: number;
    totalPages: number;
    searchTerm: string;
    showDropdown: boolean;
    selectedOptions: T[];
    highlightedIndex: number;
}
export declare class DesmyComboBox<T extends OptionType> extends Component<DesmyComboBoxProps<T>, DesmyComboBoxState<T>> {
    containerRef: React.RefObject<HTMLDivElement | null>;
    inputRef: React.RefObject<HTMLInputElement | null>;
    debounceTimer: number | null;
    ignoreNextClickOutside: boolean;
    constructor(props: DesmyComboBoxProps<T>);
    componentDidMount(): void;
    componentDidUpdate(prevProps: DesmyComboBoxProps<T>): void;
    componentWillUnmount(): void;
    handleClickOutside: (event: MouseEvent) => void;
    openDropdown: () => void;
    fetchOptions: (page: number, searchTerm: string) => Promise<void>;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleOptionClick: (option: T, event?: React.MouseEvent) => void;
    focusInput(): void;
    handleRemoveTag: (id: T["id"]) => void;
    handleScroll: (e: React.UIEvent<HTMLDivElement>) => void;
    handleOptionHover: (index: number) => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    renderDropdown(): import("react/jsx-runtime").JSX.Element | null;
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
