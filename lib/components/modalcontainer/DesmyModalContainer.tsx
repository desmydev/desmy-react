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

class DesmyModalContainer extends Component<ModalContainerProps, ModalContainerState> {
  constructor(props: ModalContainerProps) {
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
        {this.state.modal}
        <div className="fixed z-[3000] inset-0 overflow-y-hidden bg-white/75 dark:bg-darkBackground/75 md:bg-transparent">
          <div className="fixed justify-items-center px-2 backdrop-blur-lg top-0 overflow-hidden right-0 left-0 z-40 w-full inset-0 h-modal h-full justify-center items-center overflow-y-auto">
            <div className="flex items-center h-[calc(100vh-160px)] overflow-auto justify-center min-h-screen px-4 pt-20 md:pt-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed w-full h-full inset-0 transition-opacity">
                <div className="absolute px-4 xl:px-0 inset-0 bg-transparent md:bg-white/75 md:dark:bg-darkBackground/75 dark:text-white w-full h-full">
                  <div className="hidden md:flex md:container mx-auto my-10 px-10 text-start uppercase justify-between font-poppinsBlack text-2xl 2xl:text-4xl">
                    <div>{this.props.data.title}</div>
                    <div className="flex justify-end">
                      <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        className="w-6 h-6 2xl:w-8 2xl:h-8 mr-2 cursor-pointer"
                        onClick={this.handleClose}
                      >
                        <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
              <div className="inline-block align-bottom min-h-96 font-poppinsRegular dark:text-white px-4 pt-5 pb-0 text-left transform transition-all sm:my-8 sm:align-middle sm:max-w-6xl w-full sm:p-2">
                <div className="md:hidden flex md:container mx-auto my-10 text-start uppercase justify-between font-poppinsBlack text-2xl 2xl:text-4xl">
                  <div>{this.props.data.title}</div>
                  <div className="flex justify-end">
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      className="w-8 h-8 mr-2 cursor-pointer"
                      onClick={this.handleClose}
                    >
                      <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
                    </svg>
                  </div>
                </div>
                <div className="w-full h-full">{this.props.children}</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export  {DesmyModalContainer};
