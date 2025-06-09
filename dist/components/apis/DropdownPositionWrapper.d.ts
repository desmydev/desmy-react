import { default as React, Component, ReactNode } from 'react';
interface DropdownPositionWrapperProps {
    targetRef: React.RefObject<HTMLElement | null>;
    children: ReactNode;
    maxHeight?: number;
    visible: boolean;
    viewType?: "full" | "auto";
    onScroll?: (e: React.UIEvent<HTMLDivElement>) => void;
    fadeDurationMs?: number;
    onClose?: () => void;
}
interface DropdownPositionWrapperState {
    styles: React.CSSProperties;
    isVisible: boolean;
    isActive: boolean;
}
export declare class DropdownPositionWrapper extends Component<DropdownPositionWrapperProps, DropdownPositionWrapperState> {
    wrapperRef: React.RefObject<HTMLDivElement | null>;
    fadeTimeout?: number;
    static defaultProps: {
        fadeDurationMs: number;
    };
    constructor(props: DropdownPositionWrapperProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: DropdownPositionWrapperProps): void;
    componentWillUnmount(): void;
    updatePosition: () => void;
    render(): React.ReactPortal | null;
}
export {};
