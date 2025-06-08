import { Component, RefObject } from 'react';
interface Props {
    placeholder?: string;
    disabled?: boolean;
    selectedMultiple: any[];
    selectedList: any;
    all?: string;
    selectedAll?: boolean;
    onClick: () => void;
    onClear: () => void;
    buttonRef: RefObject<HTMLDivElement | null>;
    dropdownPopoverShow: boolean;
}
export declare class DropdownButton extends Component<Props> {
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
