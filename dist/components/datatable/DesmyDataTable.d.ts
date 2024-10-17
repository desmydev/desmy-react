import { default as React, Component, ChangeEvent, ReactNode, KeyboardEvent } from 'react';

interface DataTableProps {
    settings: {
        default_sorted_column: string;
        header: {
            title: string;
            class: string;
            hint: string;
        };
        deleteinfo: {
            name: string;
            id: string;
        };
        request_url: string;
        handleOnViewClick: (user: any) => void;
        handleOnClickExtra: (user: any, name: string) => void;
        image?: {
            placeholder?: string;
            rounded?: boolean;
        };
        read_more_limit?: number;
        extra_handle?: Array<{
            name: string;
            icon: React.ReactNode;
        }>;
        headers: any[];
        columns: string[];
        table_data?: {
            name: string;
            class: string;
        }[];
        filter?: {
            title: string;
            data: {
                name: string;
                data: string;
                defaults?: {
                    [key: string]: string;
                };
            }[];
        };
        url: string;
        handleEdit: (user: any) => void;
    };
    onRef?: (ref: DesmyDataTable | null) => void;
}
interface DataTableState {
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
        retry?: boolean;
    };
    alerterror: {
        state: boolean;
        message: string;
        type: string;
        color: string;
    };
}
declare class DesmyDataTable extends Component<DataTableProps, DataTableState> {
    renderedSettings: any[];
    dataCollection: any[];
    chunkSize: number;
    currentIndex: number;
    hasClear: boolean;
    isLoading: boolean;
    hasLoadLastData: boolean;
    current_page: number;
    search: string;
    filterloaded: boolean;
    constructor(props: DataTableProps);
    componentDidMount(): Promise<void>;
    componentDidUpdate: (_prevProps: DataTableProps, _prevState: DataTableState) => Promise<void>;
    handleScroll(event: React.UIEvent<HTMLDivElement>): void;
    errors: (data: {
        state: boolean;
        message: string;
        type: string;
        color: string;
    }) => void;
    handleReset: () => void;
    handleError: (message?: string, retry?: boolean) => void;
    fetchEntities(): Promise<void>;
    columnHead(value: string): string;
    sortByColumn(column: string): void;
    tableHeads: () => ReactNode[];
    handleClear: () => void;
    initialChunck(): void;
    clearFetchEntities: () => void;
    handleSearch: (event: KeyboardEvent<HTMLInputElement>) => void;
    searchFilter: (filters: {
        search: {
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
    }) => Promise<void>;
    handleInput: (event: ChangeEvent<HTMLInputElement>) => void;
    loadNextPage: () => void;
    onChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    loadNextBatch: () => void;
    renderChunk(): void;
    handleSearhing(): void;
    removeFilterByName: (data: string) => void;
    handleFiltered: () => void;
    handleRetry: () => void;
    handleHint: () => string;
    handleOnSuccess: (index: number) => void;
    handleEdit: (user: any) => void;
    render(): JSX.Element;
}
export { DesmyDataTable };
