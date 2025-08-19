import { Component, ReactNode } from 'react';
interface TableHeaderProps {
    headers: string[];
    sortedColumn: string;
    order: 'asc' | 'desc';
    exceptionalColumns: string[];
    onSort: (col: string) => void;
    tableDataSettings: {
        name: string;
        class: string;
    }[] | undefined;
}
export declare class TableHeader extends Component<TableHeaderProps> {
    columnHead(value: string): string;
    renderIcon(): import("react/jsx-runtime").JSX.Element;
    render(): ReactNode;
}
export {};
