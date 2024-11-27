import { default as React } from 'react';

interface MultiStepModalProps {
    className?: string;
    isOpen: boolean;
    backdropClass?: string;
    children: React.ReactNode;
    onClose?: () => void;
}
declare const MultiStepModal: React.FC<MultiStepModalProps>;
export default MultiStepModal;
