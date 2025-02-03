import { Component, ChangeEvent } from 'react';
import Commons from '../apis/DesmyCommons'; 
import { DesmyState as CommonState } from '../apis/DesmyState';
import DesmyLazyImage from '../image/DesmyLazyImage';

interface FilePickerCardProps {
  image: {
    url: string;
    title: string;
    type?: string;
    onSelected: (file: File) => void;
    accept?: string;
    placeholder?: string;
    hint?: string;
  };
  className?: string;
}

interface FilePickerCardState {
  selectedImage: string | null;
  selectedFile: File | null;
  hasLoaded: boolean;
  hasError: boolean;
  filedata: {
    name: string;
  };
  image: {
    url: string;
    title: string;
    type?: string;
    accept?: string;
    placeholder?: string;
    hint?: string;
  };
}

class DesmyFilePicker extends Component<FilePickerCardProps, FilePickerCardState> {
  constructor(props: FilePickerCardProps) {
    super(props);
    this.state = {
      selectedImage: null,
      selectedFile: null,
      hasLoaded: false,
      hasError: false,
      filedata: {
        name: ""
      },
      image: {
        url: '',
        title: ''
      }
    };
  }

  componentDidUpdate(_prevProps: FilePickerCardProps) {
    if (!Commons.isEmptyOrNull(this.props.image.url) && Commons.isEmptyOrNull(this.state.image.url)) {
      this.setState({ image: this.props.image });
    }
  }

  async componentDidMount() {
    if (this.props.image !== undefined) {
      this.setState({ image: this.props.image });
    }
  }

  handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (this.state.image.type === CommonState.DOCUMENT) {
      const { filedata } = this.state;
      if (file.type === 'application/pdf') {
        filedata['name'] = file.name;
        this.setState({ filedata }, () => this.props.image.onSelected(file));
      } else {
        this.handleAlert("Error: You can only upload pdf file format.");
        return false;
      }
    } else {
      if (!file.name.toLowerCase().match(/\.(png|jpeg|jpg)$/)) {
        this.handleAlert("Error: You can only upload images in PNG, JPEG or JPG format.");
        return false;
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        this.setState({ hasError: false, selectedFile: file, selectedImage: reader.result as string }, () => {
          this.props.image.onSelected(file);
        });
      };
    }
  };

  handleCancelUpload = () => {
    const { image } = this.state;
    image['url'] = "";
    this.setState({ selectedFile: null, selectedImage: null, image });
  };

  handleAlert = (message: string) => {
    // Implement this function to handle alert messages
    alert(message);
  };

  render() {
    return (
      <>
        <div className="relative z-0 mb-7 w-full group">
          <div className={`bg-gray-200 dark:bg-darkPrimary dark:text-white rounded-lg w-full shadow-sm h-40 justify-center items-center cursor-pointer relative overflow-hidden group ${(this.state.selectedImage !== null && this.state.selectedImage !== undefined) ? `p-0` : (Commons.isEmptyOrNull(this.state.image.url)) ? `p-6` : ``} ${this.props.className}`} id="dropzone">
            {
              (this.state.selectedImage !== null && this.state.selectedImage !== undefined || !Commons.isEmptyOrNull(this.state.image.url)) ?
                <div className='flex w-full h-full relative'>
                  <DesmyLazyImage 
                    className={`object-center object-cover w-full h-full cursor-pointer m-auto`}
                    src={`${(this.state.selectedImage !== null && this.state.selectedImage !== undefined) ? this.state.selectedImage : this.state.image.url}`}
                  />
                  <div className='absolute left-0 bottom-0 bg-black/20 bg-opacity-5 right-2 h-full w-full top-0 '>
                    <div className='cursor-pointer absolute top-2 right-2 w-6 h-6 text-white rounded-full justify-center items-center' onClick={this.handleCancelUpload}>
                      <svg viewBox="0 0 20 20" fill="currentColor" className='w-5 h-5 rounded-full border-[1px] border-white m-auto'>
                        <path d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zM11.4 10l2.83-2.83-1.41-1.41L10 8.59 7.17 5.76 5.76 7.17 8.59 10l-2.83 2.83 1.41 1.41L10 11.41l2.83 2.83 1.41-1.41L11.41 10z" />
                      </svg>
                    </div>
                  </div>
                </div>
                : <>
                  <input type="file" className="absolute inset-0 text-gray-500 w-full h-full opacity-0 z-50" accept={`${(!Commons.isEmptyOrNull(this.state.image.accept)) ? this.state.image.accept : `image/*`}`} onChange={this.handleFileUpload} />
                  <div className='flex w-full h-full justify-center items-center'>
                    <div className="text-center">
                      {
                        (!Commons.isEmptyOrNull(this.state.image.placeholder)) ?
                          <div className="mx-auto h-12 w-12 text-gray-500">
                            <DesmyLazyImage
                            className={`object-center object-cover w-full h-full cursor-pointer m-auto`}
                            src={this.state.image.placeholder} />
                          </div>
                          : <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="mx-auto h-12 w-12 text-gray-500 dark:text-white" viewBox="0 0 24 24" strokeWidth={0.7} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                          </svg>
                      }
                      <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
                        <label className="relative cursor-pointer font-poppinsBold">
                          {(this.state.image.type === CommonState.DOCUMENT && !Commons.isEmptyOrNull(this.state.filedata.name)) ? this.state.filedata.name : this.state.image.title}
                        </label>
                      </h3>
                      <p className="mt-1 text-xs text-gray-500">
                        {!Commons.isEmptyOrNull(this.state.image.hint) ? this.state.image.hint : `PNG, JPG up to 1MB`}
                      </p>
                    </div>
                  </div>
                </>
            }
          </div>
        </div>
      </>
    );
  }
}

export {DesmyFilePicker};
