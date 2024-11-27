import { Component, ReactNode } from 'react';
import MultiStepModal from './MultiStepModal/MultiStepModal';
import { CSSTransition } from 'react-transition-group';

interface ModalContainerProps {
  data: {
    title: string;
  };
  onClose: () => void;
  className?:string;
  containerClassName?:string,
  children: ReactNode;
}

interface ModalContainerState {
  isOpen: boolean;
}

class DesmyModalContainer extends Component<ModalContainerProps, ModalContainerState> {
  constructor(props: ModalContainerProps) {
    super(props);
    this.state = {
      isOpen: false,
    };
    setTimeout(() => {
      this.setState({ isOpen: true });
    }, 300);
  }

  handleClose = () => {
    this.setState({ isOpen: false });
    setTimeout(() => {
      this.props.onClose();
    }, 300); 
  };

  render() {
    return (
      <>
        <MultiStepModal
          isOpen={this.state.isOpen}
          onClose={this.handleClose}
          className={this.props.className}
        >
          <CSSTransition unmountOnExit={true} in={true} timeout={400} classNames="modal-content">
             <div className="modal-inner dark:text-white">
                <div className={`flex flex-col modal-inner rounded-none p-5 font-poppinsRegular ${this.props.containerClassName}`}>
                  <div className="flex bg-transparent w-full md:container mx-auto mb-3 text-start uppercase justify-between font-poppinsBlack text-lg">
                      <div className='w-full line-clamp-2'>{this.props.data.title}</div>
                      <div className="flex justify-end">
                        <svg
                          viewBox="0 0 1024 1024"
                          fill="currentColor"
                          className="w-5 h-5 mr-2 cursor-pointer"
                          onClick={this.handleClose}
                        >
                          <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
                        </svg>
                      </div>
                  </div>
                  <div>{this.props.children}</div>
                </div>
              </div>
          </CSSTransition>
        </MultiStepModal>
      </>
    );
  }
}

export { DesmyModalContainer };
