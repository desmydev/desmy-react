import { default as React, Component } from 'react';

interface TextInputProps {
    defaultValue?: string;
    type?: string;
    email_contains?: string;
    onChange: (value: string) => void;
    onRef?: (instance: DesmyTextInput | null) => void;
    autoFocus?: boolean;
    label: string;
}
interface TextInputState {
    input: {
        [key: string]: string;
    };
}
declare class DesmyTextInput extends Component<TextInputProps, TextInputState> {
    constructor(props: TextInputProps);
    componentDidMount(): void;
    componentDidUpdate: (prevProps: TextInputProps, prevState: TextInputState) => Promise<false | undefined>;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export { DesmyTextInput };
