import { default as React, Component } from 'react';
interface Props {
    value: string;
    placeholder?: string;
    disabled?: boolean;
    autoFocus?: boolean;
    maxLength?: number;
    inputClassName?: string;
    label: string;
    onFocus: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare class SearchInput extends Component<Props> {
    private inputRef;
    focus(): void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
