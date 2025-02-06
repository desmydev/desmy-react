import { default as React, Component, ChangeEvent, ReactNode, KeyboardEvent } from 'react';
import { DesmyDataTableSettingsProps } from '../apis/SharedProps';
export type DesmyDataTableRef = {
    handleRetry: () => void;
};
interface DataTableProps {
    settings: DesmyDataTableSettingsProps;
    content?: React.ReactNode;
    className?: string;
    onRef?: (ref: DesmyDataTable | null) => void;
}
interface DataTableState {
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
        sorted_column: string;
        order: "asc" | "desc";
        first_page: number;
        current_page: number;
        offset: number;
    };
    settings: {
        default_sorted_column: string;
        header: {
            title?: string;
            class?: string;
            hint?: string;
        };
        breadcrumb?: {
            name: string;
            url: string;
        }[];
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
    addHeaderAndColumn: (header: string, column: string) => void;
    removeHeaderAndColumn: (header: string) => void;
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
    handleFocus: () => void;
    handleBlur: () => void;
    onChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    loadNextBatch: () => void;
    alert: () => string;
    renderChunk(): void;
    removeFilterByName: (data: string) => void;
    handleFiltered: () => void;
    handleRetry: () => void;
    handleHint: () => string;
    handleOnSuccess: (index: number) => void;
    handleEdit: (user: any, type?: string) => void;
    handleBreadCrumbNavigations(e: React.MouseEvent, url: string): void;
    renderBreadcrumb(): import("react/jsx-runtime").JSX.Element | null;
    handlePageChange: (pageNumber: number) => void;
    renderPagination: () => import("react/jsx-runtime").JSX.Element | null;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmyDataTable };
