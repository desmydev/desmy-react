import { Component } from 'react';
interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}
export declare class Pagination extends Component<PaginationProps> {
    render(): import("react/jsx-runtime").JSX.Element | null;
}
export {};
