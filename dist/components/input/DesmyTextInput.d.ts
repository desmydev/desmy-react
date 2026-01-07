import { default as React, Component } from 'react';
interface TextInputProps {
    defaultValue?: string;
    type?: string;
    readOnly?: boolean;
    hasRequest?: boolean;
    className?: string;
    inputClassName?: string;
    emailExtensions?: string[];
    dialCode?: string;
    onChange?: (value: string) => void;
    onChangeWithData?: (value: string, data: any) => void;
    onSearch?: (value: any) => void;
    onRef?: (instance: HTMLInputElement | null) => void;
    autoFocus?: boolean;
    onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    disabled?: boolean;
    maxLength?: number;
    rows?: number;
    label: string;
    theme?: string;
    prefix?: string;
    postfix?: string;
}
interface TextInputState {
    dropdownPopoverShow: boolean;
    countryList: any[];
    hasPressed: boolean;
    input: {
        [key: string]: string | string[];
    };
    selectedCountry?: {
        id: string;
        name: string;
        data: any;
    };
}
declare class DesmyTextInput extends Component<TextInputProps, TextInputState> {
    enteredInput: string;
    hasDefault: boolean;
    private popoverDropdownRef;
    private inputRef;
    private inputId;
    constructor(props: TextInputProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: TextInputProps): void;
    applyDialCodeIfNeeded: () => void;
    ensureDialCodeInValue: (dial: string) => void;
    sanitizeInput: (value: string) => string;
    validateInput: (inputValue: string, type: string) => boolean;
    handlePaste: (event: React.ClipboardEvent<HTMLInputElement>) => void;
    handleTextAreaChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleClick: (event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleFocus: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleCountryChange: (item: any) => void;
    handleColorPicker: () => void;
    closeDropdownPopover: () => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmyTextInput };
