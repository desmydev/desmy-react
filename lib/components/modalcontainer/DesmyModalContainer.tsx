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
        <div className="fixed z-[3000] inset-0 overflow-y-hidden dark:bg-[#1a1a1a]/75 bg-white/75">
          <div className="flex w-screen h-screen  px-2 backdrop-blur-xl justify-center items-center">
            <div className="flex flex-col w-full h-screen max-w-7xl">
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
              <div className='flex w-full justify-center items-center grow min-h-0 overflow-auto'>
                <div className='flex w-full py-6 px-3 '>{this.props.children}</div>
              </div>

            </div>
          </div>
        </div>
      </>
    );
  }
}

export  {DesmyModalContainer};
