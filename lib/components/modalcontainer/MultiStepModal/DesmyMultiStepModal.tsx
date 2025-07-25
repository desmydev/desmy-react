import React from 'react';
import "./multistep-modal.scss";

interface MultiStepModalProps {
  className?: string;
  isOpen: boolean;
  backdropClass?: string;
  children: React.ReactNode;
  onClose?: () => void;
}

const DesmyMultiStepModal: React.FC<MultiStepModalProps> = (props) => {
  const { className = "", isOpen, backdropClass = "", children } = props;

  return (
    <div className='flex w-full'>
      <div className={`${isOpen ? `backdrop-container z-[1000] bg-black/25 h-full w-full  ${backdropClass}` : "close-backdrop"}`}></div>
      <div className={`multi-step-modal-cover z-[1000] rounded-lg p-2 ${className} ${isOpen ? "open_modal" : "close_modal"}`}>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

export {DesmyMultiStepModal};
