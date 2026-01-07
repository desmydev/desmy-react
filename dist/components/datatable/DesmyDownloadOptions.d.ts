import { default as React, Component } from 'react';
import { DesmyDropdownItem } from '../apis/SharedProps';
interface ExportOptions {
    confirm?: boolean;
    redirect?: boolean;
    formats?: string[];
    successMessage?: string;
    confirmationMessage?: string;
}
interface CreateProps {
    exportDetails: {
        url?: string;
        queryString?: string;
        options?: ExportOptions;
    };
    onClose: () => void;
    onSuccess?: (data: any) => void;
}
interface InputState {
    name?: string;
    format?: string;
    redirect?: boolean;
    confirm?: boolean;
}
interface CreateState {
    hasRequest: boolean;
    isLoading: boolean;
    input: InputState;
    optionsList: DesmyDropdownItem[];
    modal?: React.ReactNode | null;
}
declare class DesmyDownloadOptions extends Component<CreateProps, CreateState> {
    constructor(props: CreateProps);
    handleError: (message: string) => void;
    /** ✅ Confirmation dialog */
    handleConfirmation: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    /** ✅ Export logic */
    handleOnSubmit: () => Promise<void>;
    /** ✅ Trigger confirmation or export directly */
    handleExportClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export default DesmyDownloadOptions;
