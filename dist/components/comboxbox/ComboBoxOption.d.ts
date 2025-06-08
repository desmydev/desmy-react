import { Component } from 'react';
import { OptionType } from './types';
interface ComboBoxOptionProps<T extends OptionType> {
    option: T;
    isSelected: boolean;
    isHighlighted: boolean;
    onClick: (option: T) => void;
    onMouseEnter: () => void;
}
export default class ComboBoxOption<T extends OptionType> extends Component<ComboBoxOptionProps<T>> {
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
