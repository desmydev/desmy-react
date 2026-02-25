import { default as React, Component } from 'react';
import { DesmyDropdownItem } from '../apis/SharedProps';
interface ExportOptions {
    confirm?: boolean;
    redirect?: boolean;
    successMessage?: string;
    confirmationMessage?: string;
}
interface ExportExtraDropdown {
    title: string;
    key: string;
    endpoint: string;
    dependsOn?: string;
}
interface CreateProps {
    exportDetails: {
        url?: string;
        queryString?: string;
        options?: ExportOptions;
        data?: ExportExtraDropdown[];
    };
    onClose: () => void;
    onSuccess?: (data: any) => void;
}
interface InputState {
    name: string;
    format: string;
    redirect: boolean;
    confirm: boolean;
    extraSelections: Record<string, any>;
}
interface CreateState {
    hasRequest: boolean;
    input: InputState;
    formatList: DesmyDropdownItem[];
    extraDropdownLists: Record<string, DesmyDropdownItem[]>;
    modal?: React.ReactNode | null;
}
declare class DesmyDownloadOptions extends Component<CreateProps, CreateState> {
    constructor(props: CreateProps);
    componentDidMount(): void;
    private getAuthConfig;
    private fetchDropdown;
    loadInitialDropdowns: () => Promise<void>;
    loadDependentDropdown: (dropdown: ExportExtraDropdown, parentValue: string) => Promise<void>;
    private shouldShowDropdown;
    private handleDropdownChange;
    handleOnSubmit: () => Promise<void>;
    handleConfirmation: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    handleExportClick: () => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export default DesmyDownloadOptions;
