import { Component } from 'react';
interface CreateProps {
    exportDetails: {
        url?: string;
        queryString?: string;
    };
    onClose: () => void;
    onSuccess?: (data: any) => void;
}
interface InputState {
    [key: string]: any;
}
interface CreateState {
    hasRequest: boolean;
    isLoading: boolean;
    input: InputState;
}
declare class DesmyDownloadOptions extends Component<CreateProps, CreateState> {
    constructor(props: CreateProps);
    handleError: (message: string) => void;
    handleOnSubmit: () => Promise<void>;
    render(): import("react/jsx-runtime").JSX.Element;
}
export default DesmyDownloadOptions;
