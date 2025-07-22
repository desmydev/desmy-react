import { Component, ChangeEvent } from 'react';
interface Props {
    onFileSelected: (file: File | null) => void;
    allowedFileTypes: string[];
}
interface State {
    input: {
        file: File | null;
    };
}
declare class DesmyDocumentPicker extends Component<Props, State> {
    constructor(props: Props);
    handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
    mimeTypeToExtension: (mimeType: string) => string;
    handleCancelDocument: () => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmyDocumentPicker };
