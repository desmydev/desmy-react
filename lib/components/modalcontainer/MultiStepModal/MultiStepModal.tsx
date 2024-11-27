import React from 'react';
import "./multistep-modal.scss";

interface MultiStepModalProps {
  className?: string;
  isOpen: boolean;
  backdropClass?: string;
  children: React.ReactNode;
  onClose?: () => void;
}

const MultiStepModal: React.FC<MultiStepModalProps> = (props) => {
  const { className = "", isOpen, backdropClass = "", children } = props;

  return (
    <div className='flex w-full'>
      <div className={`${isOpen ? `backdrop h-full bg-black bg-opacity-25 w-full ${backdropClass}` : "close-backdrop"}`}></div>
      <div className={`multi-step-modal-cover ${className} ${isOpen ? "open_modal" : "close_modal"}`}>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MultiStepModal;
