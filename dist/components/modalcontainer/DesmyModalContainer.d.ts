import { Component, ReactNode, JSX } from 'react';
interface DeleteInfo {
    name?: string;
    show?: boolean;
    url: string;
}
interface ModalContainerProps {
    data: {
        title: string;
    };
    delete?: DeleteInfo;
    onSuccess?: (message?: string) => void;
    onError?: (message?: string) => void;
    onClose: () => void;
    close?: boolean;
    className?: string;
    backdropClass?: string;
    containerClassName?: string;
    children: ReactNode;
}
interface ModalContainerState {
    isOpen: boolean;
    hasRequest: boolean;
    modal?: JSX.Element | null;
}
declare class DesmyModalContainer extends Component<ModalContainerProps, ModalContainerState> {
    private isMounted;
    private isClose;
    private abortController?;
    constructor(props: ModalContainerProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleClose: () => void;
    handleDelete: () => void;
    handleDeleteRequest: () => void;
    handleAlert: (message?: string, isDone?: boolean) => void;
    handleOnClose: () => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmyModalContainer };
