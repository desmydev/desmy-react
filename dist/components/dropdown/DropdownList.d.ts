import { default as React, Component } from 'react';
import { DesmyDropdownItem } from '../apis/SharedProps';
interface Props {
    items: DesmyDropdownItem[];
    filterText: string;
    isMultiple?: boolean;
    selectedMultiple: DesmyDropdownItem[];
    selectedSingle: DesmyDropdownItem;
    allText?: string;
    selectedAll?: boolean;
    dropdownListClass?: string;
    onSelectAll?: () => void;
    onClearSelected?: () => void;
    onSelectItem: (e: React.MouseEvent<HTMLDivElement>, item: DesmyDropdownItem) => void;
    clearLabel?: string;
    error?: {
        state: boolean;
        message: string;
    };
    isLoading?: boolean;
    onRetry?: () => void;
    emptyMessage?: string;
    enableDecrypt?: boolean;
    encryptHandler?: (data: any) => any;
}
export declare class DropdownList extends Component<Props> {
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
