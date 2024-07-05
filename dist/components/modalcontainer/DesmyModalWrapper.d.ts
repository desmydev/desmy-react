import { Component, ReactNode } from 'react';

interface ModalWrapperProps {
    className?: string;
    action_label?: string;
    hasRequest: boolean;
    onClose: () => void;
    children: ReactNode;
}
interface ModalWrapperState {
    modal: ReactNode | null;
}
declare class DesmyModalWrapper extends Component<ModalWrapperProps, ModalWrapperState> {
    constructor(props: ModalWrapperProps);
    handleClose: () => void;
    render(): JSX.Element;
}
export { DesmyModalWrapper };
