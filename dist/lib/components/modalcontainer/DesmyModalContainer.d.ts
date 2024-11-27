import { Component, ReactNode } from 'react';

interface ModalContainerProps {
    data: {
        title: string;
    };
    onClose: () => void;
    className?: string;
    containerClassName?: string;
    children: ReactNode;
}
interface ModalContainerState {
    isOpen: boolean;
}
declare class DesmyModalContainer extends Component<ModalContainerProps, ModalContainerState> {
    constructor(props: ModalContainerProps);
    handleClose: () => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmyModalContainer };
