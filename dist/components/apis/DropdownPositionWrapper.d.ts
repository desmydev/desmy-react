import { default as React, Component, ReactNode } from 'react';
interface DropdownPositionWrapperProps {
    targetRef: React.RefObject<HTMLElement | null>;
    children: ReactNode;
    maxHeight?: number;
    visible: boolean;
    onScroll?: (e: React.UIEvent<HTMLDivElement>) => void;
}
interface DropdownPositionWrapperState {
    styles: React.CSSProperties;
}
export declare class DropdownPositionWrapper extends Component<DropdownPositionWrapperProps, DropdownPositionWrapperState> {
    wrapperRef: React.RefObject<HTMLDivElement | null>;
    constructor(props: DropdownPositionWrapperProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: DropdownPositionWrapperProps): void;
    componentWillUnmount(): void;
    updatePosition: () => void;
    render(): React.ReactPortal | null;
}
export {};
