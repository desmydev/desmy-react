import React from 'react';
import { State } from '../apis/Constants';
import Commons from '../apis/Commons'; 

interface DialogProps {
    children?: React.ReactNode;
    settings: {
      title?: string;
      hint?: string;
      btnPosition?: string;
      btnNegative?: string;
      type: typeof State.ERROR | typeof State.NOTICE;
      loading: boolean;
      forceLoading: boolean;
      loadinghint?: string;
      showDateRange: boolean;
      date: {
        show: boolean;
        minDate: Date | null;
        title: string;
        value: {
          startDate?: Date | null; // Adjust type to accept null
          endDate?: Date | null; // Adjust type to accept null
        };
      };
      time: {
        show: boolean;
        value: string;
        title: string;
      };
      showDateRangeTitle?: string;
      datalist: {
        title: string;
        data: any[]; // Define a more specific type based on the actual data structure
        default_value?: any;
        onchange?: string;
        is_multiple?: boolean;
        encrypted?: boolean;
      };
      inputFieldLabel?: string;
      handleOnClose?: boolean;
    };
    data?: any; // Define a more specific type based on the actual data structure
    onClose: (data: any) => void; // Define the parameter type more specifically if possible
}
  
interface DialogState {
    isLoading: boolean;
    loadinghint?: string;
    data: any;
    value: {
      startDate?: Date | null; // Adjust type to accept null
      endDate?: Date | null; // Adjust type to accept null
    };
    date: {
      show: boolean;
      minDate: Date | null;
      title: string;
      value: {
        startDate?: Date | null; // Adjust type to accept null
      };
    };
    time: {
      show: boolean;
      value: string;
      title: string;
    };
    input: {
      user_input: string;
    };
    data_value: any; // Define more specifically
    datalist: {
      title: string;
      defaultvalue?: any;
      onchange?: string;
      data: any[]; // Define more specifically
    };
}

interface ModalHandlerProps {
    settings: DialogProps['settings'];
    data?: any; // Define more specifically
    onClose: (data: any) => void; // Define the parameter type more specifically if possible
    children: React.ReactNode;
  }
  
  interface ModalHandlerState {
    loaded: boolean;
    settings: DialogProps['settings'];
}

class Dialog extends React.Component<DialogProps, DialogState> {

    constructor(props: DialogProps) {
      super(props);
      this.state = {
        isLoading: false,
        loadinghint: "",
        data: {},
        value: {
          startDate: null,
          endDate: null,
        },
        date: {
          show: false,
          minDate: null,
          title: "",
          value: {
            startDate: null,
          }
        },
        time: {
          show: false,
          value: "",
          title: "",
        },
        input: {
          user_input: ""
        },
        data_value: "",
        datalist: {
          title: "",
          defaultvalue: "",
          onchange: "",
          data: [],
        }
      }
    }
    handleValueChange = (newValue: { startDate?: Date | null; endDate?: Date | null }) => {
      try {
        const { data } = this.state;
        data['start_date'] = newValue.startDate;
        data['end_date'] = newValue.endDate;
        this.setState({ data, value: newValue });
      } catch (e) {
        // Handle error
      }
    }
    handleClose = (data: any) => {
      try {
        if (this.props.settings.loading && data) {
          this.setState({ isLoading: true, loadinghint: this.props.settings.loadinghint });
        }
        const ddata = { ...this.state.data, status: data }; // Create a copy of data and add 'status' property
        if (this.props.settings.datalist !== undefined) {
          ddata['option_data'] = this.state.data_value;
        }
        if (!Commons.isEmptyOrNull(this.state.input.user_input)) {
          ddata['user_input'] = this.state.input.user_input;
        }
        this.props.onClose(ddata);
      } catch (e) {
        // Handle error
      }
    }
    render() {
      const { settings } = this.props;
      return (
        <div className="inline-block align-bottom font-poppinsRegular bg-white dark:bg-slate-800 dark:text-white px-4 pt-5 pb-0 text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full sm:p-6">
        {
          (this.state.isLoading) ? 
          <div className='flex flex-col w-full h-48 justify-center text-primary dark:text-white items-center'>
                <svg version="1.1" id="L9" className='w-24 h-24 ' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
                <div className='text-sm w-full text-black dark:text-white text-center justify-center'>{this.state.loadinghint}</div>
          </div>:
        <div className='flex flex-col w-full'>
            <div className="relative sm:flex sm:items-start items-center">
                
                <div className="flex w-full flex-col mt-5 text-center sm:mt-0  sm:text-left items-center">
                   
                    <div className="flex flex-col w-full my-5">
                        <div className='flex w-full'>{this.props.children}</div>
                       
                    </div>
                </div>
                {
                  (this.props.settings.handleOnClose !== undefined) ? 
                    <div className="absolute right-0 -top-2 cursor-pointer"onClick={() => this.handleClose(false)}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                      </svg>
                    </div>
                  :null
                }
            </div>
            <div className="mt-4  sm:flex sm:flex-row-reverse">
              {
                (settings.btnPosition != null && settings.btnPosition !== undefined && !Commons.isEmptyOrNull(settings.btnPosition))?
                <span className="flex w-full rounded-md sm:ml-3 sm:w-auto">
                    <button type="button" onClick={() => this.handleClose(true)}
                        className=" uppercase inline-flex justify-center w-full rounded-md border border-transparent px-2 py-2 font-poppinsBold text-primary dark:text-white  focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 text-sm">
                        {settings.btnPosition}
                    </button>
                </span>
                :null
              }
              {
                (settings.btnNegative != null && settings.btnNegative !== undefined && !Commons.isEmptyOrNull(settings.btnNegative)) ?
                <span className="mt-3 flex w-full rounded-md sm:mt-0 sm:w-auto">
                    <button type="button" onClick={() => this.handleClose(false)}
                        className="uppercase inline-flex justify-center w-full rounded-md border border-transparent px-2 py-2 font-poppinsBold text-primary dark:text-white  focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 text-sm">
                        {settings.btnNegative}
                    </button>
                </span>
                :null
              }
                
                
            </div>
        </div>
         }
    </div>
      )
    }
  }
  
  class DesmyModalHandler extends React.Component<ModalHandlerProps, ModalHandlerState> {
    private modalContainer: React.RefObject<HTMLDivElement>; // Adjust type
  
    constructor(props: ModalHandlerProps) {
      super(props);
      this.state = {
        loaded: false,
        settings: {
          title: "",
          hint: "",
          btnPosition: "",
          btnNegative: "",
          type: State.ERROR,
          loading: false,
          forceLoading: false,
          loadinghint: "",
          inputFieldLabel: "",
          showDateRange: false,
          date: {
            show: false,
            minDate: null,
            title: "",
            value: {
              startDate: new Date()
            }
          },
          time: {
            show: false,
            value: "",
            title: "",
          },
          showDateRangeTitle: "",
          datalist: {
            title: "",
            data: []
          }
        }
      };
      this.modalContainer = React.createRef<HTMLDivElement>(); // Adjust initialization
    }
  
    componentDidMount() {
      // Logic goes here
    }
  
    componentWillUnmount() {
      document.body.removeChild(this.modalContainer.current!); // Adjust usage
    }
  
    render() {
        const { children } = this.props;
        return (<div className="modal-wrapper">
            <div className="modal-body">
                {children}
            </div>
        </div>)
    }
  }
  
  export { Dialog, DesmyModalHandler };
