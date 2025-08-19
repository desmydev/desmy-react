import { default as React, Component } from 'react';
interface TableBodyProps {
    dataCollection: any[];
    headers: string[];
    exceptionalColumns: string[];
    selected: number;
    handleOnSuccess: (index: number) => void;
    settings: any;
    isLoading?: boolean;
    handleEdit: (user: any, type?: string) => void;
    rowHeight: number;
    onRowClick?: (user: any, index: number) => void;
}
interface TableBodyState {
    visibleCount: number;
}
export declare class TableBody extends Component<TableBodyProps, TableBodyState> {
    tableBodyRef: React.RefObject<HTMLTableSectionElement | null>;
    observer: IntersectionObserver | null;
    sentinelRef: React.RefObject<HTMLTableRowElement | null>;
    constructor(props: TableBodyProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: TableBodyProps, prevState: TableBodyState): void;
    componentWillUnmount(): void;
    setupObserver(): void;
    loadMore: () => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
