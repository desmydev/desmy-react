import { default as React, Component, ChangeEvent } from 'react';
interface Props {
    searchValue: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    inputRef: React.RefObject<HTMLInputElement | null>;
}
export declare class DropdownSearch extends Component<Props> {
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
