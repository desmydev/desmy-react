import { default as React, Component } from 'react';
import { DataSetTableSettingsProps, DesmySmartFormUploadReadTable, DesmySmartFormUploadReadTableFilterColums, DesmySmartFormUploadExtraField } from '../apis/SharedProps';
interface DataItem {
    [key: string]: any;
}
interface Props {
    database: Array<{
        id: string;
        readOnly: boolean;
    }>;
    filter_column?: DesmySmartFormUploadReadTableFilterColums;
    settings: DataSetTableSettingsProps;
    reader: DesmySmartFormUploadReadTable;
    onClose?: () => void;
}
interface State {
    hasRequest: boolean;
    cancelRequested: boolean;
    progress: number;
    totalRows: number;
    fileLoaded: boolean;
    partiallyLoaded: boolean;
    rows: any[] | null;
    headers: string[];
    data: {
        meta: {
            total: number;
            current_page: number;
            last_page: number;
            per_page: number;
            from: number;
            to: number;
            next_page: number | null;
        };
        data: DataItem[];
    };
    showForm: boolean;
    prerequestPayload: Record<string, any>;
}
declare class DesmySmartFormUpload extends Component<Props, State> {
    constructor(props: Props);
    /** Store prerequest values */
    updatePrerequestField: (key: string, value: any) => void;
    /** Validate required fields */
    validatePrerequest: () => boolean;
    /** Continue from prerequest form */
    handlePrerequestContinue: () => void;
    /** Upload Excel file */
    handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
    /** Process rows gradually */
    processChunkedRows: (initial?: boolean) => void;
    resetAll: () => void;
    /** Render prerequest extra fields */
    renderExtraField: (f: DesmySmartFormUploadExtraField) => import("react/jsx-runtime").JSX.Element | null;
    /** -----------------------------------------
     * 🔥 CHILD DROPDOWN SUPPORT (clean + safe)
     * ----------------------------------------*/
    renderDropdownWithChild: (f: DesmySmartFormUploadExtraField) => import("react/jsx-runtime").JSX.Element;
    /** Cancel Upload */
    cancelUpload: () => void;
    /** Load remaining rows */
    handleLoadRemaining: () => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmySmartFormUpload };
