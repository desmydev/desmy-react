import { default as React, Component, ReactNode } from 'react';
import { DesmyState as CommonState } from '../apis/DesmyState';
import { DataSetTableSettingsProps } from '../apis/SharedProps';
interface DesmyDataSetTableProps {
    onRef?: (instance: DesmyDataSetTable) => void;
    className?: string;
    children?: React.ReactNode;
    data?: any;
    settings: DataSetTableSettingsProps;
    content?: React.ReactNode;
    handleOnLoaded: (data: any[], state: CommonState) => void;
}
interface DesmyCustomState {
    isFocused?: boolean;
    searchText?: string;
    dtablemodal: React.ReactNode | null;
    hasRequest: boolean;
    exceptionalColumns: string[];
    selected: number;
    isLoading: boolean;
    filterhead: {
        name: string;
        data: string;
    }[];
    filters: {
        search?: {
            [key: string]: {
                id: string;
                name: string;
            };
        };
        data: {
            name: string;
            data: string;
            defaults?: {
                [key: string]: string;
            };
        }[];
    };
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
        sorted_column?: string;
        order: "asc" | "desc";
        first_page: number;
        current_page: number;
        offset: number;
    };
    settings: {
        default_sorted_column?: string;
        header?: {
            title?: string;
            class?: string;
            hint?: string;
            search?: boolean;
        };
        headers?: string[];
        columns?: string[];
        table_data?: {
            name: string;
            class: string;
        }[];
    };
    error: {
        state?: boolean;
        message?: string;
        type?: string;
        color?: string;
        retry?: boolean;
    };
    alerterror: {
        state: boolean;
        message: string;
        type: string;
        color: string;
    };
}
declare class DesmyDataSetTable extends Component<DesmyDataSetTableProps, DesmyCustomState> {
    private renderedSettings;
    private dataCollection;
    private chunkSize;
    private currentIndex;
    private hasClear;
    private hasFinished;
    private current_page;
    private search;
    private isLoading;
    private observer?;
    private bottomRef;
    constructor(props: DesmyDataSetTableProps);
    componentDidUpdate(prevProps: Readonly<DesmyDataSetTableProps>): void;
    handleExcelDataUpdate(): void;
    componentDidMount(): Promise<void>;
    componentWillUnmount(): void;
    setupAutoLoadObserver(): void;
    autoLoadNextChunk: () => void;
    handleManualLoadMore: () => void;
    handleScroll(event: React.UIEvent<HTMLDivElement>): void;
    handleError: (message?: string) => void;
    fetchEntities(): Promise<void>;
    handleFetchEntities: () => void;
    handleClear: () => void;
    initialChunk: () => void;
    loadNextBatch: () => void;
    renderChunk(): void;
    loadNextPage: () => void;
    columnHead(value: string): string;
    sortByColumn(column: string): void;
    tableHeads(): ReactNode[];
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmyDataSetTable };
