import { default as React, Component } from 'react';
import { DesmyDropdownItem } from '../../apis/SharedProps';
interface Props {
    options: DesmyDropdownItem[];
    isLoading: boolean;
    error: {
        state: boolean;
        message: string;
    };
    total: number;
    onScroll: (e: React.UIEvent<HTMLUListElement>) => void;
    onOptionClick: (option: DesmyDropdownItem) => void;
    onDoneClick: () => void;
    dropdownClass?: string;
    selectedCount: number;
    searchText: string;
    onLoadMore: () => void;
    hasMore: boolean;
}
interface State {
    maxHeight: number;
}
export declare class DropdownList extends Component<Props, State> {
    dropdownRef: React.RefObject<HTMLDivElement | null>;
    state: State;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    componentWillUnmount(): void;
    updateMaxHeight: () => void;
    handleScroll: (e: React.UIEvent<HTMLUListElement>) => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
