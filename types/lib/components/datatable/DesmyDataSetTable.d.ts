import React, { Component, ChangeEvent } from 'react';
interface DataSetTableProps {
    children?: React.ReactNode;
    onRef?: (ref: DesmyDataSetTable) => void;
    settings: any;
    data?: any;
    handleOnLoaded: (renderedSettings: any[], status: string) => void;
    className?: string;
}
interface DataSetTableState {
    exceptionalColumns: string[];
    selected: number;
    isLoading: boolean;
    input: {
        search: string;
        is_searching: boolean;
    };
    entities: {
        data: any[];
        meta: {
            current_page: number;
            next_page: number | null;
            from: number;
            last_page: number;
            per_page: number;
            to: number;
            total: number;
        };
    };
    custom_settings: {
        sorted_column: string;
        order: 'asc' | 'desc';
        first_page: number;
        current_page: number;
        offset: number;
    };
    settings: {
        default_sorted_column: string;
        header: {
            title: string;
            class: string;
            hint: string;
        };
        headers: string[];
        columns: string[];
        table_data: any[];
    };
    error: {
        state?: boolean;
        message?: string;
        type?: string;
        color?: string;
    };
    alerterror: {
        state: boolean;
        message: string;
        type: string;
        color: string;
    };
}
declare class DesmyDataSetTable extends Component<DataSetTableProps, DataSetTableState> {
    renderedSettings: any[];
    dataCollection: any[];
    chunkSize: number;
    currentIndex: number;
    hasClear: boolean;
    isLoading: boolean;
    hasLoadLastData: boolean;
    current_page: number;
    search: string;
    constructor(props: DataSetTableProps);
    componentDidMount(): Promise<void>;
    handleScroll(event: React.UIEvent<HTMLDivElement>): void;
    errors: (data: any) => void;
    handleReset: () => void;
    handleError: (message?: string) => void;
    fetchEntities(): Promise<void>;
    columnHead(value: string): string;
    sortByColumn(column: string): void;
    tableHeads: () => any;
    handleFetchEntities: () => void;
    handleRetry: () => void;
    handleClear: () => void;
    initialChunck(): void;
    loadNextBatch: () => void;
    renderChunk(): void;
    loadNextPage: () => void;
    handleFilterInput(event: React.ChangeEvent<HTMLInputElement>): void;
    onSearch(): void;
    handleRenderStatus: (status: string) => void;
    handleOnLoaded: () => void;
    handleOnLoading: () => void;
    handleHint: () => string;
    onChangeValue: (event: ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    handleSearching(): void;
    handleFiltered: () => void;
    render(): React.JSX.Element;
}
export { DesmyDataSetTable };
