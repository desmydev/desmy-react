import { default as React, Component, KeyboardEvent, ChangeEvent, ReactNode } from 'react';
import { DesmyInfiniteScroll } from '../utilities/DesmyInfiniteScroll';
import { DesmyDataTableSettingsProps, DesmyFilterItem } from '../apis/SharedProps';
interface DataTableProps {
    settings: DesmyDataTableSettingsProps;
    content?: React.ReactElement<{
        searchText?: string;
        filterhead?: DesmyFilterItem[] | string;
        entities?: any[];
        meta?: DataTableState["entities"]["meta"];
    }> | ((args: {
        searchText?: string;
        filterhead?: any | any[];
        entities?: any[];
        meta?: DataTableState["entities"]["meta"];
    }) => React.ReactNode);
    className?: string;
    onRef?: (ref: DesmyDataTable | null) => void;
    onFilteredURL?: (data: any) => void;
}
interface DataTableState {
    isFocused?: boolean;
    searchText?: string;
    /** ✅ action dropdown state */
    openActionDropdown: number | null;
    dtablemodal: ReactNode | null;
    hasRequest: boolean;
    exceptionalColumns: string[];
    selected: number;
    isLoading: boolean;
    /** ✅ multi-select state */
    selectedRows: number[];
    mergeTarget: any | null;
    isSubmittingSelected: boolean;
    isFetchingMore: boolean;
    showFilter: boolean;
    confirmExport: boolean;
    filterhead: DesmyFilterItem[];
    showExportOption: boolean;
    exportDetails: {
        url?: string;
        queryString?: string;
        data?: {
            title: string;
            key: string;
            endpoint: string;
            dependsOn?: string;
        }[];
        dropdown?: {
            label: string;
            url: string;
            formats?: string[];
            icon?: ReactNode;
        }[];
        options?: {
            confirm?: boolean;
            redirect?: boolean;
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
            has_next?: boolean;
            count?: number | null;
            /** optional server extras */
            prev_cursor?: string | null;
            cursor_ttl?: number | null;
            cursor_expires_at?: number | null;
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
    infiniteScroll: DesmyInfiniteScroll;
    sentinelRef: React.RefObject<HTMLDivElement | null>;
    scrollContainer: React.RefObject<HTMLDivElement | null>;
    DEBUG_INFINITE_SCROLL: boolean;
    /** fallback scroll-based loading */
    private lastFallbackTriggerAt;
    private FALLBACK_THRESHOLD_PX;
    private FALLBACK_COOLDOWN_MS;
    rowHeight: number;
    constructor(props: DataTableProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleOutsideClick: (e: MouseEvent) => void;
    hasMore: () => boolean;
    multiSelectEnabled: () => boolean;
    mergeEnabled: () => boolean;
    buildMergeLabel: (item: any) => any;
    handleExport: (action: {
        url?: string;
        dropdown?: {
            label: string;
            url: string;
            formats?: string[];
            icon?: ReactNode;
        }[];
        options?: {
            confirm?: boolean;
            redirect?: boolean;
            successMessage?: string;
            confirmationMessage?: string;
        };
        data?: {
            title: string;
            key: string;
            endpoint: string;
            dependsOn?: string;
        }[];
    }, queryString: string) => void;
    logScroll: (...args: any[]) => void;
    toggleRowSelect: (index: number) => void;
    toggleSelectAll: () => void;
    openMergeModal: () => void;
    handleInfiniteLoad: () => void;
    handleScroll: () => void;
    fetchEntities: (append?: boolean) => Promise<void>;
    handleError: (message?: unknown, retry?: boolean) => void;
    handleClear: () => void;
    clearFetchEntities: () => void;
    renderBreadcrumb(): import("react/jsx-runtime").JSX.Element | null;
    handleSearchInput(event: ChangeEvent<HTMLInputElement>): void;
    handleSearchKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
    handleSort: (column: string) => void;
    handleOnFiltered: (data: any) => void;
    handleFiltered: () => void;
    handleOnClose: () => void;
    handleOnOpenFilter: () => void;
    handleRetry: () => void;
    handleHint(): string;
    handleOnSuccess: (index: number) => void;
    removeFilterByName: (name: string) => void;
    renderExtraActions(): import("react/jsx-runtime").JSX.Element;
    getContentPayload(): {
        searchText: string | undefined;
        filterhead: DesmyFilterItem[];
        entities: any[];
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
            has_next?: boolean;
            count?: number | null;
            /** optional server extras */
            prev_cursor?: string | null;
            cursor_ttl?: number | null;
            cursor_expires_at?: number | null;
        };
    };
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmyDataTable };
