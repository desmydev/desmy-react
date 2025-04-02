import { Component } from 'react';
interface Media {
    file: File | null;
}
interface DesmyCropperProps {
    media: Media;
    onSuccess: (blob: Blob, dataUrl: string) => void;
    onClose?: () => void;
}
interface DesmyCropperState {
    image?: string | null;
}
declare class DesmyCropper extends Component<DesmyCropperProps, DesmyCropperState> {
    constructor(props: DesmyCropperProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export default DesmyCropper;
