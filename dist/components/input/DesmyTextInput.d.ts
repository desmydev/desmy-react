import { default as React, Component } from 'react';

interface TextInputProps {
    defaultValue?: string;
    type?: string;
    hasRequest?: boolean;
    className?: string;
    inputClassName?: string;
    emailExtension?: string;
    onChange: (value: string) => void;
    onSearch: (value: String) => void;
    onRef?: (instance: DesmyTextInput | null) => void;
    autoFocus?: boolean;
    disabled?: boolean;
    rows?: number;
    label: string;
}
interface TextInputState {
    dropdownPopoverShow: boolean;
    hasPressed: Boolean;
    input: {
        [key: string]: string;
    };
}
declare class DesmyTextInput extends Component<TextInputProps, TextInputState> {
    enteredInput: string;
    private popoverDropdownRef;
    constructor(props: TextInputProps);
    componentDidMount(): void;
    handleDefaultRequest: () => void;
    handleTextAreaChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleFocus: (_event: React.FocusEvent<HTMLInputElement>) => void;
    handleColorPicker: () => void;
    closeDropdownPopover: () => void;
    render(): JSX.Element;
}
export { DesmyTextInput };
