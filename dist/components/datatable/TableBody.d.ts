import { default as React, Component } from 'react';
interface TableBodyProps {
    dataCollection: any[];
    headers: string[];
    exceptionalColumns: string[];
    selected: number;
    handleOnSuccess: (index: number) => void;
    settings: any;
    isLoading?: boolean;
    isFetchingMore?: boolean;
    handleEdit: (user: any, type?: string) => void;
    rowHeight: number;
    onRowClick?: (user: any, index: number) => void;
    hasMore?: boolean;
    error?: {
        state?: boolean;
        message?: string;
    };
    onRetry?: () => void;
    entities?: {
        meta?: {
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
    searchText?: string;
    /** ✅ MULTI SELECT SUPPORT */
    multiSelectEnabled?: boolean;
    selectedRows?: number[];
    onToggleRowSelect?: (index: number) => void;
}
export declare class TableBody extends Component<TableBodyProps> {
    tableBodyRef: React.RefObject<HTMLTableSectionElement | null>;
    /** ✅ prevent row click when clicking on special elements */
    isBlockedClickTarget: (target: HTMLElement) => HTMLAnchorElement | HTMLButtonElement | SVGSVGElement | HTMLInputElement | null;
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
