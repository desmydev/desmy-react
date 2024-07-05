import { Component, ChangeEvent } from 'react';

interface FilePickerCardProps {
    image: {
        url: string;
        title: string;
        type?: string;
        onSelected: (file: File) => void;
        accept?: string;
        placeholder?: string;
        hint?: string;
    };
    className?: string;
}
interface FilePickerCardState {
    selectedImage: string | null;
    selectedFile: File | null;
    hasLoaded: boolean;
    hasError: boolean;
    filedata: {
        name: string;
    };
    image: {
        url: string;
        title: string;
        type?: string;
        accept?: string;
        placeholder?: string;
        hint?: string;
    };
}
declare class DesmyFilePicker extends Component<FilePickerCardProps, FilePickerCardState> {
    constructor(props: FilePickerCardProps);
    componentDidUpdate(_prevProps: FilePickerCardProps): void;
    componentDidMount(): Promise<void>;
    handleFileUpload: (event: ChangeEvent<HTMLInputElement>) => false | undefined;
    handleCancelUpload: () => void;
    handleAlert: (message: string) => void;
    render(): JSX.Element;
}
export { DesmyFilePicker };
