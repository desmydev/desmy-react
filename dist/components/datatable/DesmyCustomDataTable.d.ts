import { default as React, Component } from 'react';
import { DesmyState as CommonState } from '../apis/DesmyState';
interface DesmyCustomDataTableProps {
    onRef?: (instance: DesmyCustomDataTable) => void;
    className?: string;
    children?: React.ReactNode;
    content?: React.ReactNode;
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
        deleteinfo: {
            id: string;
        };
        headers: any[];
        columns: any[];
        table_data: any[];
    };
    handleOnLoaded: (data: any[], state: CommonState, message?: string) => void;
}
interface DesmyCustomState {
    isFocused?: boolean;
    searchText?: string;
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
        headers: any[];
        columns: any[];
        table_data: any[];
        search?: boolean;
        filter?: boolean;
    };
    error: {
        state: boolean;
        message: string;
        type: string;
        color: string;
    };
    alerterror: {
        state: boolean;
        message: string;
        type: string;
        color: string;
    };
}
declare class DesmyCustomDataTable extends Component<DesmyCustomDataTableProps, DesmyCustomState> {
    private renderedSettings;
    private dataCollection;
    private chunkSize;
    private currentIndex;
    private hasClear;
    private isLoading;
    private current_page;
    private search;
    constructor(props: DesmyCustomDataTableProps);
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
    handleFocus: () => void;
    handleBlur: () => void;
    onChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    handleSearching(): void;
    handleHint: () => string;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmyCustomDataTable };
