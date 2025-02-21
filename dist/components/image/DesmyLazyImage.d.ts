import { default as React, Component, ReactNode } from 'react';
interface DesmyLazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    placeholder?: ReactNode;
    coverClassName?: string;
}
interface DesmyLazyImageState {
    isLoaded: boolean;
}
declare class DesmyLazyImage extends Component<DesmyLazyImageProps, DesmyLazyImageState> {
    private imgRef;
    private observer;
    constructor(props: DesmyLazyImageProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    loadImage: () => void;
    handleImageLoad: () => void;
    render(): import("react/jsx-runtime").JSX.Element | null;
}
export default DesmyLazyImage;
export { DesmyLazyImage };
