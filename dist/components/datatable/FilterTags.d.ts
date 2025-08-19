import { default as React } from 'react';
export interface FilterItem {
    id: string;
    name?: string;
    label?: string;
    value?: any;
}
interface FilterTagsProps {
    filters: FilterItem[];
    onRemove: (label: string) => void;
}
export declare const FilterTags: React.FC<FilterTagsProps>;
export {};
