import { Component, ReactNode } from 'react';
interface ModalContainerProps {
    data: {
        title: string;
    };
    onClose: () => void;
    children: ReactNode;
}
interface ModalContainerState {
    modal: ReactNode | null;
}
declare class DesmyModalContainer extends Component<ModalContainerProps, ModalContainerState> {
    constructor(props: ModalContainerProps);
    handleClose: () => void;
    render(): import("react").JSX.Element;
}
export { DesmyModalContainer };
