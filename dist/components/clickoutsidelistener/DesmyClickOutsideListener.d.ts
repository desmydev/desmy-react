import { default as React, Component } from 'react';
interface Props {
    onClickOutside: () => void;
    children: React.ReactNode;
}
export declare class DesmyClickOutsideListener extends Component<Props> {
    private containerRef;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleClickOutside: (event: MouseEvent | TouchEvent) => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
