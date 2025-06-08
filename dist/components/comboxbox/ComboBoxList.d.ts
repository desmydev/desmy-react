import { default as React, Component } from 'react';
import { OptionType } from './types';
interface ComboBoxListProps<T extends OptionType> {
    options: T[];
    loading: boolean;
    selectedOptions: T[];
    className?: string;
    highlightedIndex: number;
    onOptionClick: (option: T) => void;
    onScroll: (e: React.UIEvent<HTMLDivElement>) => void;
    onOptionHover: (index: number) => void;
    style?: React.CSSProperties;
}
export default class ComboBoxList<T extends OptionType> extends Component<ComboBoxListProps<T>> {
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
