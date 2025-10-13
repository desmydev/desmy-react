import { Component } from 'react';
import { CancelTokenSource } from 'axios';
type ErrorStrategy = 'skip' | 'override';
interface UploadManagerProps {
    data: {
        datalist: Record<string, any>[];
        url: string;
        complete_url?: string | null;
        token: string;
        key_name?: string;
        title?: string;
        error_strategy?: ErrorStrategy;
    };
    onClose: () => void;
}
interface UploadManagerState {
    currentIndex: number;
    progress: number;
    uploading: boolean;
    error: boolean;
    errorMessage: string;
    cancelTokenSource: CancelTokenSource | null;
    errorData: Record<string, any>[];
    completed: boolean;
    exporting: boolean;
    exportingType: '' | 'excel' | 'csv';
    exportProgress: number;
    cancelExportFlag: boolean;
    showCheckmark: boolean;
}
export default class UploadManager extends Component<UploadManagerProps, UploadManagerState> {
    private retryCounts;
    private networkRetryCounts;
    constructor(props: UploadManagerProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    /** ------------------------- UPLOAD FLOW ------------------------- **/
    startUpload: () => void;
    uploadNext: () => Promise<void>;
    private finishUpload;
    handleUploadError: (errorMessage: string, failedItem: Record<string, any>, isNetworkError: boolean) => void;
    completeUpload: () => Promise<void>;
    resumeUpload: () => void;
    cancelUpload: () => void;
    skipUpload: () => void;
    /** ------------------------- INLINE PROGRESS BAR COLOR ------------------------- **/
    private getProgressBarBackground;
    /** ------------------------- EXPORT FLOW ------------------------- **/
    private chunkProcess;
    private handleExportExcel;
    private handleExportCSV;
    private cancelExport;
    /** ------------------------- RENDER ------------------------- **/
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
