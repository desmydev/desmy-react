import { Component, ReactNode } from 'react';
import { DesmyClickOutsideListener } from '../clickoutsidelistener/DesmyClickOutsideListener';
import DesmyCommons from '../apis/DesmyCommons';

interface ModalWrapperProps {
  className? :string,
  action_label?:string,
  hasRequest: boolean,
  onClose: () => void;
  children: ReactNode;
}

interface ModalWrapperState {
  modal: ReactNode | null;
}

class DesmyModalWrapper extends Component<ModalWrapperProps, ModalWrapperState> {
  constructor(props: ModalWrapperProps) {
    super(props);
    this.state = {
      modal: null,
    };
  }

  handleClose = () => {
    this.props.onClose();
  };

  render() {
    return (
      <>
        <div className={`fixed z-[3000] inset-0 overflow-y-auto font-poppinsRegular`}>
            <div className="fixed justify-items-center px-2 backdrop-blur-sm top-0 right-0 left-0 z-40 w-full inset-0 h-modal h-full justify-center items-center overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-black/25 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                <DesmyClickOutsideListener onClickOutside={this.handleClose}>
                <div className={`inline-block align-bottom font-poppinsRegular px-4 pt-5 pb-0 text-left transform transition-all sm:my-8 sm:align-middle ${!(DesmyCommons.isEmptyOrNull(this.props.className)) ? this.props.className:` sm:max-w-lg w-full sm:p-6`}`}>
                    {
                        (this.props.hasRequest) ?
                        <>
                            <div className='flex flex-col w-full h-48 justify-center items-center'>
                                <svg version="1.1" id="L9" className='w-24 h-24  text-white' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve">
                                        <path fill="currentColor" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                                        <animateTransform 
                                            attributeName="transform" 
                                            attributeType="XML" 
                                            type="rotate"
                                            dur="1s" 
                                            from="0 50 50"
                                            to="360 50 50" 
                                            repeatCount="indefinite" />
                                    </path>
                                </svg>
                                <div>{(this.props.action_label !==null && this.props.action_label !== undefined ) ? this.props.action_label:`creating`} ....</div>
                            </div>
                        </>
                        :<>
                        <div className='flex flex-col w-full'>
                            <div className="relative sm:flex sm:items-start items-center">
                                {this.props.children}
                            </div>
                        </div>
                    
                        </>
                    }
                </div>
                </DesmyClickOutsideListener>
            </div>
            </div>   
            </div>
      </>
    );
  }
}

export  {DesmyModalWrapper};
