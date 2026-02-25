import { Component } from 'react';
interface DesmyMergeProps {
    selectedItems: any[];
    mergeConfig: {
        endpoint: string;
        method?: "POST" | "PUT" | "PATCH";
        payloadKeys?: {
            selectedKey?: string;
            mergeWithKey?: string;
        };
        dropdownColumns?: string[];
        successMessage?: string;
        errorMessage?: string;
    };
    onClose: () => void;
    onSuccess?: () => void;
}
interface DesmyMergeState {
    merge_with: any | null;
    hasRequest: boolean;
}
declare class DesmyMerge extends Component<DesmyMergeProps, DesmyMergeState> {
    constructor(props: DesmyMergeProps);
    buildMergeLabel: (item: any) => any;
    handleSubmitMerge: () => Promise<void>;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmyMerge };
