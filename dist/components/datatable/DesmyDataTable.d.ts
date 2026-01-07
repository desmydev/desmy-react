import { default as React, Component, KeyboardEvent, ChangeEvent, ReactNode } from 'react';
import { DesmyDataTableSettingsProps, DesmyFilterItem } from '../apis/SharedProps';
interface DataTableProps {
    settings: DesmyDataTableSettingsProps;
    content?: React.ReactElement<{
        searchText?: string;
        filterhead?: DesmyFilterItem[] | string;
    }> | ((args: {
        searchText?: string;
        filterhead?: any | any[];
    }) => React.ReactNode);
    className?: string;
    onRef?: (ref: DesmyDataTable | null) => void;
    onFilteredURL?: (data: any) => void;
}
interface DataTableState {
    isFocused?: boolean;
    searchText?: string;
    dtablemodal: ReactNode | null;
    hasRequest: boolean;
    exceptionalColumns: string[];
    selected: number;
    isLoading: boolean;
    isFetchingMore: boolean;
    showFilter: boolean;
    confirmExport: boolean;
    filterhead: DesmyFilterItem[];
    showExportOption: boolean;
    exportDetails: {
        url?: string;
        queryString?: string;
        options?: {
            confirm?: boolean;
            redirect?: boolean;
            formats?: string[];
            successMessage?: string;
            confirmationMessage?: string;
        };
    };
    filters: {
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
            from: number;
            last_page: number;
            per_page: number;
            to: number;
            total: number;
            next?: string | null;
            next_page?: number | null;
            next_cursor?: string | null;
            count?: number | null;
        };
    };
    custom_settings: {
        sorted_column: string;
        order: "asc" | "desc";
        first_page: number;
        current_page: number;
        offset: number;
    };
    settings: DesmyDataTableSettingsProps & {
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
    scrollTop: number;
}
declare class DesmyDataTable extends Component<DataTableProps, DataTableState> {
    search: string;
    queryParam: string;
    debounceTimer?: ReturnType<typeof setTimeout>;
    scrollContainer: React.RefObject<HTMLDivElement | null>;
    rowHeight: number;
    constructor(props: DataTableProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleExport: (url: string, queryString: string, options?: {
        confirm?: boolean;
        redirect?: boolean;
        formats?: string[];
        successMessage?: string;
        confirmationMessage?: string;
    }) => void;
    handleOnFiltered: (data: any) => void;
    handleFiltered: () => void;
    removeFilterByName: (name: string) => void;
    handleScroll(): void;
    fetchEntities: (append?: boolean) => Promise<void>;
    handleError: (message?: unknown, retry?: boolean) => void;
    handleClear: () => void;
    clearFetchEntities: () => void;
    handleSearchInput(event: ChangeEvent<HTMLInputElement>): void;
    handleSearchKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
    handleSort: (column: string) => void;
    renderBreadcrumb(): import("react/jsx-runtime").JSX.Element | null;
    handlePageChange: (pageNumber: number) => void;
    handleOnClose: () => void;
    handleOnSuccess: (index: number) => void;
    handleOnOpenFilter: () => void;
    handleRetry: () => void;
    renderExtraActions(): import("react/jsx-runtime").JSX.Element;
    handleHint: () => string;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmyDataTable };
