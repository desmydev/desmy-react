import { Component } from 'react';
import { DesmyDropdownItem } from '../../apis/SharedProps';
interface Props {
    selectedOptions: DesmyDropdownItem[];
    onChipRemove: (option: DesmyDropdownItem) => void;
}
export declare class SelectedChips extends Component<Props> {
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
