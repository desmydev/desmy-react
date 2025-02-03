import { default as React, Component } from 'react';
interface Props {
    url: string;
    className?: null;
    onFile: (data?: any) => void;
    passport_photo_requirement?: string[];
    handleOnClose: (input: any) => void;
}
interface State {
    state: boolean;
    showcropper: boolean;
    media: {
        file: File | null;
    };
    isLoading: boolean;
    passport_photo: string | null;
    passport_photo_loading: string;
    passport_photo_is_verified: boolean;
    error: {
        state: boolean;
        message: string;
    };
    input: {
        passport_photo: Blob | null;
        cardfront?: string | null;
    };
    modal: React.ReactNode | null;
    card_photo_is_verified: boolean;
}
declare class DesmyPassportPicker extends Component<Props, State> {
    private fileUploadFile;
    constructor(props: Props);
    handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleCropperClose: () => void;
    handleCropper: (data: Blob, image64: string) => void;
    readPassportPhoto: (photo: string) => void;
    handleAlert: (message?: string) => void;
    handleCancelPassportReader: () => void;
    handleSubmit: (e: React.FormEvent) => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmyPassportPicker };
