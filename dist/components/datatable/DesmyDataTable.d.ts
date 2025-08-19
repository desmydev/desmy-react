import { default as React, Component, KeyboardEvent, ChangeEvent } from 'react';
import { DesmyDataTableSettingsProps } from '../apis/SharedProps';
import { FilterItem } from './FilterTags';
interface DataTableProps {
    settings: DesmyDataTableSettingsProps;
    content?: React.ReactElement<{
        searchText?: string;
        filterhead?: FilterItem[];
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
    dtablemodal: React.ReactNode | null;
    hasRequest: boolean;
    exceptionalColumns: string[];
    selected: number;
    isLoading: boolean;
    showFilter: boolean;
    filterhead: FilterItem[];
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
            title?: string;
            class?: string;
            hint?: string;
        };
        style?: {
            maxlines?: number;
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
        filter?: any;
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
    dataCollection: any[];
    chunkSize: number;
    currentIndex: number;
    hasClear: boolean;
    hasLoadLastData: boolean;
    search: string;
    queryParam: string;
    debounceTimer?: ReturnType<typeof setTimeout>;
    throttleTimer?: ReturnType<typeof setTimeout>;
    rowHeight: number;
    visibleHeight: number;
    constructor(props: DataTableProps);
    componentDidMount(): void;
    handleFiltered: () => void;
    handleScroll(event: React.UIEvent<HTMLDivElement>): void;
    fetchEntities: () => void;
    handleError: (message?: unknown, retry?: boolean) => void;
    handleClear: () => void;
    clearFetchEntities: () => void;
    handleSearchInput(event: ChangeEvent<HTMLInputElement>): void;
    handleSearchKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
    handleSort: (column: string) => void;
    removeFilterByName: (data: string) => void;
    handlePageChange: (pageNumber: number) => void;
    handleOnSuccess: (index: number) => void;
    handleOnFiltered: (data: any) => void;
    handleOnClose: () => void;
    handleOnOpenFilter: () => void;
    handleRetry: () => void;
    handleEdit: (user: any, type?: string) => void;
    renderBreadcrumb(): import("react/jsx-runtime").JSX.Element | null;
    handleHint: () => string;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmyDataTable };
