import { default as React, Component, ReactNode } from 'react';
import { DesmyState as CommonState } from '../apis/DesmyState';

interface DesmyDataSetTableProps {
    onRef?: (instance: DesmyDataSetTable) => void;
    className?: string;
    children?: React.ReactNode;
    data?: any;
    settings: {
        url: string;
        default_sorted_column: string;
        pagination: {
            per_page: number;
        };
        search?: boolean;
        filter?: boolean;
        header: {
            title: string;
            class: string;
            hint: string;
        };
        server_request: {
            enable?: boolean;
        };
        deleteinfo: {
            id: string;
        };
        headers: any[];
        columns: any[];
        table_data: any[];
    };
    handleOnLoaded: (data: any[], state: CommonState) => void;
}
interface DesmyCustomState {
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
        sorted_column: string;
        order: "asc" | "desc";
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
            search?: boolean;
        };
        headers: any[];
        columns: string[];
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
    private isLoading;
    private current_page;
    private search;
    constructor(props: DesmyDataSetTableProps);
    componentDidMount(): Promise<void>;
    handleScroll(event: React.UIEvent<HTMLDivElement>): void;
    errors: (data: {
        state: boolean;
        message: string;
        type: string;
        color: string;
    }) => void;
    handleReset: () => void;
    handleError: (message?: string) => void;
    fetchEntities(): Promise<void>;
    handleFetchEntities: () => void;
    handleFiltered: () => void;
    handleRetry: () => void;
    handleClear: () => void;
    initialChunck(): void;
    loadNextPage: () => void;
    handleOnSuccess: (index: number) => void;
    loadNextBatch: () => void;
    renderChunk(): void;
    onChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    handleSearching: () => void;
    columnHead(value: string): string;
    sortByColumn(column: string): void;
    tableHeads: () => ReactNode[];
    handleHint: () => string;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmyDataSetTable };