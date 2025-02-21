import React from 'react';
import ReactDOM from 'react-dom';
import { DesmyState } from '../apis/DesmyState';
import Commons from '../apis/DesmyCommons'; 
import { DesmyDropdown } from '../dropdown/DesmyDropdown';
import { DesmyModalHandlerSettingsProps } from '../apis/SharedProps';

interface DialogProps {
    children?: React.ReactNode;
    containerDropDownClassName? : string,
    settings: DesmyModalHandlerSettingsProps
    data?: any; // Define a more specific type based on the actual data structure
    onClose: (data: any) => void; // Define the parameter type more specifically if possible
}

interface DataObject {
  id: number;
  [key: string]: any; // This allows for additional properties in the data object
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
    data_value: any; 
    datalist: {
      title?: string;
      default_value?: string;
      onchange?: string;
      is_multiple?: boolean;
      data?: any[];
    };
}

interface ModalHandlerProps {
    settings: DialogProps['settings'];
    data?: any; 
    onClose: (data: any) => void;
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
          default_value: "",
          onchange: "",
          data: [],
        }
      }
    }
    async componentDidMount(): Promise<void> {
      try {
        if (this.props.settings !== undefined) {
          if (this.props.data !== undefined) {
            if (this.props.settings.showDateRange) {
              let value: any = { ...this.state.value }; // Assuming value type
              let data: any = { ...this.state.data }; // Assuming data type
              value.startDate = this.props.data.start_date;
              value.endDate = this.props.data.end_date;
              this.setState({ value, data });
            }
          }
          if (this.props.settings.forceLoading) {
            this.setState({
              isLoading: true,
              loadinghint: this.props.settings.loadinghint, // Assuming loadingHint is correct
            });
          }
          if (this.props.settings.datalist !== undefined) {
            this.setState({
              data_value: this.props.settings.datalist.default_value, // Assuming defaultValue exists in dataList
              datalist: this.props.settings.datalist,
            });
          }
        }
      } catch (e) {
        
      }
    }
    handleDataChange = (data: DataObject[] | any): void => {
      const data_value = (this.state.datalist.is_multiple !== undefined)
        ? (Array.isArray(data) && data.length > 0)
          ? data.map((object: DataObject) => object.id)
          : []
        : data;
  
      this.setState({ data_value });
    };
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
        <div className=" w-full h-full font-poppinsRegular bg-white dark:bg-darkPrimary dark:text-white px-4 pt-5 pb-0 text-left shadow-xl transform transition-all sm:my-8 sm:p-6">
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
                    {
                          (settings.title != null && settings.title != undefined && !Commons.isEmptyOrNull(settings.title)) ? 
                            <div className={`flex w-full justify-center items-center text-start lg:justify-start text-md uppercase xl:text-base mt-1.5 ${ (settings.type==DesmyState.ERROR) ? `text-red-600`:`text-gray-900 dark:text-white`} font-poppinsBold`}>
                              {settings.title}
                            </div>
                          :null
                    }
                    <div className="flex flex-col w-full my-5">
                        <div className='flex w-full justify-start text-start items-start'>{this.props.children}</div>
                        <div className='flex w-full relative'>
                               {(settings.datalist != undefined && (!Commons.isEmptyOrNull(settings.datalist.url) ||  settings.datalist.data != undefined)) ? 
                               <DesmyDropdown data={(settings.datalist.data != undefined) ? settings.datalist.data : []} 
                                  request={{
                                      url:`${!(Commons.isEmptyOrNull(settings.datalist.url)) ? settings.datalist.url: ""}`,
                                  }}
                                  selectedData={this.state.data_value}
                                  defaultValue={settings.datalist.default_value}
                                  handleChange={this.handleDataChange} 
                                  is_multiple = {(settings.datalist.is_multiple !==undefined) ? settings.datalist.is_multiple:false}
                                  containerClassName={!(Commons.isEmptyOrNull(this.props.containerDropDownClassName)) ? this.props.containerDropDownClassName:`bg-white dark:bg-darkPrimary`}
                                  enableDecrypt={(settings.datalist.encrypted !== undefined) ? settings.datalist.encrypted : false}
                                  placeholder={`${settings.datalist.title}`} 
                                  />
                               :null}
                            </div>
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
            <div className='flex w-full justify-end'>
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
        </div>
         }
    </div>
      )
    }
  }
  
  class DesmyModalHandler extends React.Component<ModalHandlerProps, ModalHandlerState> {
    private modalContainer: HTMLDivElement;
  
    constructor(props: ModalHandlerProps) {
      super(props);
      this.state = {
        loaded: false,
        settings: {
          title: "",
          hint: "",
          zIndex: 3000,
          btnPosition: "",
          btnNegative: "",
          type: DesmyState.ERROR,
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
            url:"",
            default_value: "",
            onchange: "",
            data:[]
          }
        }
      };
      this.modalContainer = document.createElement('div');
      this.modalContainer.className = 'modal-container';
    }
  
    componentDidMount() {
      try {
        const settings = { ...this.state.settings };
        const data = this.props.settings;
    
        if (data.title !== undefined)
          settings.title = data.title;
    
        if (data.forceLoading !== undefined)
          settings.forceLoading = data.forceLoading;
    
        if (data.hint !== undefined)
          settings.hint = data.hint;
    
        if (data.handleOnClose !== undefined)
          settings.handleOnClose = data.handleOnClose;
    
        if (data.btnPosition !== undefined)
          settings.btnPosition = data.btnPosition;
    
        if (data.btnNegative !== undefined)
          settings.btnNegative = data.btnNegative;
    
        if (data.type !== undefined)
          settings.type = data.type;
    
        if (data.loading !== undefined)
          settings.loading = data.loading;
    
        if (data.loadinghint !== undefined)
          settings.loadinghint = data.loadinghint;
    
        if (data.showDateRange !== undefined)
          settings.showDateRange = data.showDateRange;
    
        if (data.date !== undefined)
          settings.date = data.date;
    
        if (data.time !== undefined)
          settings.time = data.time;
    
        if (data.showDateRangeTitle !== undefined)
          settings.showDateRangeTitle = data.showDateRangeTitle;
    
        if (data.inputFieldLabel !== undefined)
          settings.inputFieldLabel = data.inputFieldLabel;
    
        if (data.zIndex !== undefined)
          settings.zIndex = data.zIndex;
    
        if (data.datalist !== undefined)
          settings.datalist = data.datalist;
    
        this.setState({ settings, loaded: true });
      } catch (e) {
        // Handle error
      }
    
      document.body.appendChild(this.modalContainer);
    }
    
  
    componentWillUnmount() {
      document.body.removeChild(this.modalContainer);
    }
  
    render() {
      const modalComponent = (
        <>
         <div className={`fixed z-[10000] inset-0 overflow-hidden w-dvw h-dvh flex justify-center items-center`}>
            <div className='w-full h-screen flex justify-center items-center backdrop-blur-sm inset-0'>
              <div className='max-w-lg w-full'>
                <div className='w-full inline-block align-middle'>
                  <Dialog settings={this.props.settings} data={this.props.data} onClose={this.props.onClose}>
                    {this.props.children}
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    
      return ReactDOM.createPortal(modalComponent, this.modalContainer);
    }
    
  }
  
  export { Dialog, DesmyModalHandler };
