import { default as React, Component } from 'react';
interface Props {
    error?: (message?: string) => void;
    className?: string;
}
interface State {
    state: boolean;
    isLoading?: boolean;
    passport_photo: string | null;
    passport_photo_loading: string;
    passport_photo_is_verified: boolean;
    showcropper: boolean;
    media: {
        file: File | null;
    };
    error: {
        state: boolean;
        message: string;
    };
    input: {
        passport_photo: Blob | null;
        cardfront?: string | null;
    };
    card_photo_is_verified: boolean;
}
declare class DesmyPassportPicker extends Component<Props, State> {
    constructor(props: Props);
    handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleAlert: (message?: string) => void;
    handleCancelPassportReader: () => void;
    handleCropperClose: () => void;
    handleCropper: (data: Blob, image64: string) => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmyPassportPicker };
