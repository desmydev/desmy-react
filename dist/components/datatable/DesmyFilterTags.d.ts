import { default as React } from 'react';
import { DesmyFilterItem } from '../apis/SharedProps';
interface FilterTagsProps {
    filters: DesmyFilterItem[];
    onRemove: (label: string) => void;
}
export declare const DesmyFilterTags: React.FC<FilterTagsProps>;
export {};
