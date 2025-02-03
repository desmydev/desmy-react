import { Component } from 'react';
import { CancelTokenSource } from 'axios';
interface UploadManagerProps {
    data: {
        datalist: Record<string, any>[];
        url: string;
        complete_url?: string;
        token: string;
        key_name?: string;
        title?: string;
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
}
declare class UploadManager extends Component<UploadManagerProps, UploadManagerState> {
    constructor(props: UploadManagerProps);
    componentDidMount(): void;
    startUpload: () => void;
    completeUpload: () => Promise<void>;
    uploadNext: () => Promise<void>;
    resumeUpload: () => void;
    cancelUpload: () => void;
    skipUpload: () => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export default UploadManager;
