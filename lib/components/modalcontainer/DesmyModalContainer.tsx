import { Component, ReactNode, JSX } from 'react';
import axios from 'axios'; 
import { DesmyMultiStepModal } from './MultiStepModal/DesmyMultiStepModal';
import { DesmyState as ModalState } from '../apis/DesmyState';
import { CSSTransition } from 'react-transition-group';
import DesmyAuth from '../apis/DesmyAuth';
import DesmyCommons from '../apis/DesmyCommons';
import { toast } from 'react-toastify';
import { DesmyModalHandler } from '../dialog/DesmyAlertDialog';
import { DesmyClickOutsideListener } from '../clickoutsidelistener/DesmyClickOutsideListener';

interface DeleteInfo {
  name?: string;
  show?: boolean;
  url: string;
}

interface ModalContainerProps {
  data: {
    title: string;
  };
  delete?: DeleteInfo;
  onSuccess?: (message?: string) => void;
  onError?: (message?: string) => void;
  onClose: () => void;
  className?: string;
  backdropClass?: string;
  containerClassName?: string;
  children: ReactNode;
}

interface ModalContainerState {
  isOpen: boolean;
  hasRequest: boolean;
  modal?: JSX.Element | null;
}

class DesmyModalContainer extends Component<ModalContainerProps, ModalContainerState> {
  private isMounted: boolean; // Added mounted flag
  private abortController?: AbortController; // AbortController for axios requests

  constructor(props: ModalContainerProps) {
    super(props);
    this.isMounted = false; // Initialize mounted flag
    this.state = {
      isOpen: false,
      hasRequest: false,
    };

    setTimeout(() => {
      if (this.isMounted) {
        this.setState({ isOpen: true });
      }
    }, 300);
  }

  componentDidMount() {
    this.isMounted = true;
  }

  componentWillUnmount() {
    this.isMounted = false;
    this.abortController?.abort(); // Cancel any pending axios requests
  }

  handleClose = () => {
    if (this.isMounted) {
      this.setState({ isOpen: false });
    }
    setTimeout(() => {
      if (this.isMounted) {
        this.props.onClose();
      }
    }, 300);
  };

  handleDelete = () => {
    const settings = {
      title: 'Confirmation!',
      btnPosition: 'delete',
      btnNegative: 'cancel',
      type: ModalState.NOTICE,
    };

    const handleClose = (state: { status: boolean }) => {
      if (this.state.hasRequest) {
        return;
      }
      if (state.status) {
        this.handleDeleteRequest();
      }
      this.setState({ modal: null });
    };

    const modal = (
      <DesmyModalHandler settings={settings} onClose={handleClose}>
        <div className="w-full py-2 text-sm">
          Are you sure you want to delete
          <span className="text-red-500 ml-1 font-poppinsBold">
            {this.props.delete?.name}?
          </span>
        </div>
      </DesmyModalHandler>
    );

    this.setState({ modal });
  };

  handleDeleteRequest = (): void => {
    if (!this.props.delete) {
      return;
    }

    this.abortController = new AbortController(); // Create an AbortController
    const signal = this.abortController.signal;

    this.setState({ hasRequest: true });
    try {
      axios
        .delete(this.props.delete.url, {
          headers: {
            "X-CSRFToken": `${DesmyAuth.getCookie('csrftoken')}`,
            Authorization: `Token ${DesmyAuth.get(ModalState.ACCESS_TOKEN)}`,
            Accept: 'application/json',
          },
          signal, // Attach the signal to axios
        })
        .then((response) => {
          if (this.isMounted) {
            this.handleAlert(response.data.message, response.data.success);
          }
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log("Request canceled:", error.message);
          } else if (this.isMounted) {
            this.handleAlert();
          }
        });
    } catch (e) {
      if (this.isMounted) {
        this.handleAlert();
      }
    }
  };

  handleAlert = (message = "", isDone = false) => {
    const mgs = DesmyCommons.isEmptyOrNull(message) ? ModalState.ERROR_MESSAGE : message;

    if (this.isMounted) {
      this.setState({ hasRequest: false }, () => {
        if (isDone) {
          toast.success(mgs);
          if(this.props.onSuccess !==undefined)
            this.props.onSuccess(message);
        } else {
          if(this.props.onError)
            this.props.onError(message);
        }
      });
    }
  };

  render() {
    return (
      <>
        {this.state.modal}
        <DesmyClickOutsideListener onClickOutside={this.handleClose}>
        <DesmyMultiStepModal
          isOpen={this.state.isOpen}
          onClose={this.handleClose}
          backdropClass={this.props.backdropClass}
          className={this.props.className}
        >
          <CSSTransition unmountOnExit={true} in={true} timeout={400} classNames="modal-content">
            <div>
            <div className="flex justify-center dark:text-white items-center h-screen mx-4">
              <div className={`bg-gray-200 p-4 rounded-lg w-full ${this.props.containerClassName}`}>
                <div className="flex flex-col max-h-[90vh]">
                <div>
                  <div className="flex bg-transparent text-start uppercase justify-between mb-4 font-poppinsBlack text-lg">
                    <div className="w-full line-clamp-2">{this.props.data.title}</div>
                    
                    <div className="flex justify-end space-x-3">
                      {this.props.delete?.show ? (
                        this.state.hasRequest ? (
                          <svg
                            role="status"
                            className="flex w-4 h-4 text-black dark:text-white animate-spin"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="#E5E7EB"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentColor"
                            />
                          </svg>
                        ) : (
                          <span
                            onClick={() => this.handleDelete()}
                            title="Delete"
                            className="text-red-800 dark:text-red-300 cursor-pointer"
                          >
                            <svg
                              className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </span>
                        )
                      ) : null}

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
                </div>
                  
                  
                  <div className="flex-1 max-h-[calc(90%-2rem)] overflow-auto  p-2 rounded-md">
                  <div className="z-10">{this.props.children}</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </CSSTransition>
        </DesmyMultiStepModal>
        </DesmyClickOutsideListener>
        
      </>
    );
  }
}

export { DesmyModalContainer };
