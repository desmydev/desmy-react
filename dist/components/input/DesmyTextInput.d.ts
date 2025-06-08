import { default as React, Component } from 'react';
interface TextInputProps {
    defaultValue?: string;
    type?: string;
    readOnly?: boolean;
    hasRequest?: boolean;
    className?: string;
    inputClassName?: string;
    emailExtensions?: string[];
    onChange: (value: string) => void;
    onSearch?: (value: string) => void;
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
    hasPressed: boolean;
    input: {
        [key: string]: string;
    };
}
declare class DesmyTextInput extends Component<TextInputProps, TextInputState> {
    enteredInput: string;
    hasDefault: boolean;
    private popoverDropdownRef;
    private inputRef;
    constructor(props: TextInputProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: TextInputProps): void;
    handleDefaultRequest: () => void;
    handleTextAreaChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    validateInput: (inputValue: string, type: string) => boolean;
    handleClick: (event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleFocus: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleColorPicker: () => void;
    closeDropdownPopover: () => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmyTextInput };
