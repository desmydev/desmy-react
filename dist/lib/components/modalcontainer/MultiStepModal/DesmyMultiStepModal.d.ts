import { default as React } from 'react';

interface MultiStepModalProps {
    className?: string;
    isOpen: boolean;
    backdropClass?: string;
    children: React.ReactNode;
    onClose?: () => void;
}
declare const DesmyMultiStepModal: React.FC<MultiStepModalProps>;
export { DesmyMultiStepModal };
