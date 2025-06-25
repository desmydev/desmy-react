import { Component } from 'react';
interface FilterItem {
    id: string;
    name: string;
    value: any;
    label: string;
}
interface FilterPanelProps {
    filterhead: FilterItem[];
    showFilter: boolean;
    onRemoveFilter: (label: string) => void;
    onFiltered: (filters: {
        [key: string]: any;
    }) => void;
    onClose: () => void;
    filter: {
        url: string;
    };
}
export declare class FilterPanel extends Component<FilterPanelProps> {
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
