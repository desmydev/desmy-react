import { default as React, Component } from 'react';

interface TextInputProps {
    defaultValue?: string;
    type?: string;
    className?: string;
    inputClassName?: string;
    emailExtension?: string;
    onChange: (value: string) => void;
    onRef?: (instance: DesmyTextInput | null) => void;
    autoFocus?: boolean;
    disabled?: boolean;
    rows?: number;
    label: string;
}
interface TextInputState {
    input: {
        [key: string]: string;
    };
}
declare class DesmyTextInput extends Component<TextInputProps, TextInputState> {
    enteredInput: string;
    constructor(props: TextInputProps);
    componentDidMount(): void;
    handleDefaultRequest: () => void;
    componentDidUpdate: (_prevProps: TextInputProps, _prevState: TextInputState) => Promise<void>;
    handleTextAreaChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export { DesmyTextInput };
