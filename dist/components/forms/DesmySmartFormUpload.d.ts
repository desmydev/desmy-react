import { default as React, Component } from 'react';
import { DataSetTableSettingsProps, DesmySmartFormUploadReadTable, DesmySmartFormUploadReadTableFilterColums } from '../apis/SharedProps';
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
}
declare class DesmySmartFormUpload extends Component<Props, State> {
    constructor(props: Props);
    /** Handles Excel file upload and initial parsing */
    handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
    /** Cancels the current upload */
    cancelUpload: () => void;
    /** Reset everything after cancellation or completion */
    resetAll: () => void;
    /** Processes Excel rows in batches to prevent UI freezing */
    processChunkedRows: (initial?: boolean) => void;
    /** Load remaining unprocessed rows */
    handleLoadRemaining: () => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmySmartFormUpload };
