import React,{Component} from "react";
import DesmyCommons from "../apis/DesmyCommons";
import { DesmyState } from "../apis/DesmyState";
import DesmyCropper from './DesmyCropper';

interface Props{
  error?:(message?:string)=>void
  className?:string
}
interface State {
  state: boolean;
  isLoading?:boolean
  passport_photo: string | null;
  passport_photo_loading: string;
  passport_photo_is_verified: boolean;
  showcropper:boolean;
  media: {
    file: File | null;
  };
  error: {
    state: boolean;
    message: string;
  };
  input: {
    passport_photo: Blob | null;
    cardfront?: string | null;
  };
  card_photo_is_verified:boolean
}

class DesmyPassportPicker extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      state: true,
      showcropper: false,
      media: {
        file: null,
      },
      isLoading: true,
      passport_photo: null,
      passport_photo_loading: "",
      passport_photo_is_verified: false,
      error: {
        state: false,
        message: "",
      },
      input: {
        passport_photo: null,
      },
      card_photo_is_verified: false,
    };
  }


  handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.name.toLowerCase().match(/\.(png|jpeg|jpg)$/)) {
      this.handleAlert("Error: You can only upload images in PNG, SVG, or JPG format.");
      return;
    }

    if (file.size > 1024 * 1024) {
      this.handleAlert("Error: Image size should be less than 1MB.");
      return;
    }
    this.setState({
      showcropper: true,
      media: { file },
    });
  }
  handleAlert = (message = "") => {
    try {
      const mgs = DesmyCommons.isEmptyOrNull(message) ? DesmyState.ERROR_MESSAGE : message;
      this.setState({ isLoading: false, passport_photo_loading: "" },()=>{
        this.props.error?.(mgs)
      });
    } catch (e) {
      // Handle error
    }
  };
  handleCancelPassportReader = () => {

  }
  handleCropperClose = () => {
    this.setState({ showcropper: false, media: { file: null } });
  };
  handleCropper = (data: Blob, image64: string) => {
    const { input } = this.state;
    input['passport_photo'] = data;
    this.setState({ input, showcropper: false, passport_photo: image64, passport_photo_loading: DesmyState.LOADING }, () => {
      // this.readPassportPhoto(image64);
    });
  };
  render() {
    const { showcropper} = this.state
    return (
      <>
       {(showcropper && ( <DesmyCropper onSuccess={this.handleCropper} onClose={this.handleCropperClose} media={this.state.media} />))}
       <div className={`${this.props.className ?? `flex w-full justify-center `}`}>
          <div className="flex mx-auto lg:mx-0 mt-7 h-64 w-full md:w-1/2 relative shadow-sm bg-gray-200 dark:bg-darkPrimary justify-center items-center rounded-lg overflow-hidden" id="dropzone">
        
          <div className={`absolute w-full h-full top-0 left-0 ${this.state.passport_photo_loading === DesmyState.LOADING ? `bg-black bg-opacity-25` : ``} right-0 bottom-0`}>
            <div className="flex p-6 relative flex-col justify-center h-full w-full items-center text-center">
              {DesmyCommons.isEmptyOrNull(this.state.passport_photo) ? (
                <input type="file" className="absolute inset-0 w-full h-full opacity-0 z-50 cursor-pointer" accept={`image/*`} onChange={this.handleFileUpload} />
              ) : null}

              <div className="text-center text-gray-500">
                      {this.state.passport_photo_loading === DesmyState.LOADING ? (
                        <div className='flex flex-col w-full h-full text-white justify-center items-center'>
                          <div className="inline-block h-8 mb-4 mx-auto w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                          </div>
                          <div className='flex w-full justify-center text-sm'>Analyzing Picture</div>
                        </div>
                      ) : this.state.passport_photo !== null && this.state.passport_photo !== undefined ? (
                        <div className='absolute right-2 cursor-pointer top-2 w-6 h-6 dark:text-black rounded-full justify-center items-center' onClick={() => this.handleCancelPassportReader()}>
                          <svg viewBox="0 0 20 20" fill="currentColor" className='w-5 h-5 rounded-full border-[1px] border-black m-auto'>
                            <path d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zM11.4 10l2.83-2.83-1.41-1.41L10 8.59 7.17 5.76 5.76 7.17 8.59 10l-2.83 2.83 1.41 1.41L10 11.41l2.83 2.83 1.41-1.41L11.41 10z" />
                          </svg>
                        </div>
                      ) : (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.7} stroke="currentColor" className="mx-auto h-12 w-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                          </svg>
                          <h3 className="mt-2 text-sm font-medium text-gray-500 dark:text-white">
                            <label className="relative cursor-pointer">
                              <span>Click to upload photo</span>
                            </label>
                          </h3>
                          <p className="mt-1 text-xs text-gray-500">PNG, JPG up to 200kB</p>
                        </>
                      )}
              </div>
            </div>
          </div>

        </div>
      </div>
      </>
    )
  }
}

export {DesmyPassportPicker}