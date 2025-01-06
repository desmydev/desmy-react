import { Component } from 'react';
import axios, { CancelTokenSource } from 'axios';
import { CSSTransition } from 'react-transition-group';
import DesmyAuth from '../apis/DesmyAuth';

interface UploadManagerProps {
  data: {
    datalist: Record<string, any>[];
    url: string;
    complete_url?:string;
    token: string;
    key_name?: string;
    title?: string;
  };
  onClose: () => void;
}

interface UploadManagerState {
  currentIndex: number;
  progress: number;
  uploading: boolean;
  error: boolean;
  errorMessage: string;
  cancelTokenSource: CancelTokenSource | null;
}

class UploadManager extends Component<UploadManagerProps, UploadManagerState> {
  constructor(props: UploadManagerProps) {
    super(props);
    this.state = {
      currentIndex: 0,
      progress: 0,
      uploading: false,
      error: false,
      errorMessage: '',
      cancelTokenSource: null,
    };
  }

  componentDidMount() {
    this.startUpload();
  }

  startUpload = () => {
    this.setState({ uploading: true, error: false, errorMessage: '' }, () => {
      this.uploadNext();
    });
  };
  completeUpload = async () => {
    const { data } = this.props;
  
    try {
      const response = await axios.post(`${data?.complete_url}`, null, {
        headers: {
          'X-CSRFToken': `${DesmyAuth.getCookie('csrftoken')}`,
          'Authorization': `Token ${this.props.data?.token}`,
        },
      });
  
      if (response.data.success) {
        console.log('Upload process completed successfully.');
        this.props.onClose(); 
      } else {
        this.setState({ error: true, errorMessage: response.data.message });
      }
    } catch (error) {
      this.setState({ error: true, errorMessage: 'Completion request failed' });
    }
  };
  
  uploadNext = async () => {
    const { data } = this.props;
    const dataList = data?.datalist;
    const { currentIndex } = this.state;

    if (currentIndex >= dataList.length) {
      this.setState({ uploading: false }, () => {
        if(this.props.data?.complete_url !=null ){
          this.completeUpload();
        }else{
          this.props.onClose(); 
        }
      });
      return;
    }

    try {
      const formData = new FormData();
      Object.entries(dataList[currentIndex]).forEach(([key, value]) => {
        formData.append(key, value);
      });
      const cancelTokenSource = axios.CancelToken.source();
      this.setState({ cancelTokenSource });

      axios.post(this.props.data?.url, formData, {
        headers: {
          'X-CSRFToken': `${DesmyAuth.getCookie('csrftoken')}`,
          'Authorization': `Token ${this.props.data?.token}`,
        },
        cancelToken: cancelTokenSource.token,
      })
        .then((response) => {
          if (response.data.success) {
            const newIndex = currentIndex + 1;
            const newProgress = (newIndex / dataList.length) * 100;

            this.setState(
              {
                currentIndex: newIndex,
                progress: newProgress,
              },
              () => {
                this.uploadNext();
              }
            );
          } else {
            this.setState({ uploading: false, error: true, errorMessage: response.data.message });
          }
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log('Upload canceled');
          } else {
            this.setState({ uploading: false, error: true, errorMessage: error.response?.data?.message || 'Upload failed' });
          }
        });
    } catch (error) {
      console.log(error);
      this.setState({ uploading: false, error: true, errorMessage: (error as Error).message });
    }
  };

  resumeUpload = () => {
    this.setState({ error: false, uploading: true, errorMessage: '' }, () => {
      this.uploadNext();
    });
  };

  cancelUpload = () => {
    const { cancelTokenSource } = this.state;
    if (cancelTokenSource) {
      cancelTokenSource.cancel('Upload canceled by user');
    }
    this.setState({ uploading: false }, () => {
      this.props.onClose();
    });
  };

  skipUpload = () => {
    const { currentIndex } = this.state;
    const newIndex = currentIndex + 1;
    const newProgress = (newIndex / this.props.data?.datalist.length) * 100;

    this.setState(
      {
        currentIndex: newIndex,
        progress: newProgress,
        error: false,
        errorMessage: '',
      },
      () => {
        this.uploadNext();
      }
    );
  };

  render() {
    const { uploading, progress, error, errorMessage, currentIndex } = this.state;
    const { data } = this.props;
    const dataList = data?.datalist;
    const currentUploadName = dataList && dataList[currentIndex] ? dataList[currentIndex][data.key_name ?? 'name'] : 'Unknown';
    const totalDatalist = dataList ? dataList.length : 0;

    return (
      <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
        <div className="my-5">
          <div className="bg-white dark:bg-darkDialogBackground dark:text-white relative border dark:border-darkPrimaryBorder shadow-md inset-1 rounded-lg p-6 w-full max-w-md">
            <svg
              onClick={this.cancelUpload}
              viewBox="0 0 512 512"
              fill="currentColor"
              className="absolute top-2 right-5 text-red-500 cursor-pointer w-5 h-5 flex-shrink-0"
            >
              <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
            </svg>

            <h2 className="w-full line-clamp-1 text-lg font-semibold mb-4">
              {(currentIndex < totalDatalist) ? data?.title ?? 'Upload Progress' : `Finalizing Uploads`}
            </h2>
            <div className={`w-full ${error ? 'bg-red-100 dark:bg-red-300' : 'bg-gray-200 dark:bg-darkBackground'} rounded-full h-2 mb-4`}>
              <div
                className={`h-2 rounded-full transition-all ease-in-out duration-150 ${error ? 'bg-red-500 dark:bg-red-600' : ( currentIndex < totalDatalist) ? 'bg-blue-500 dark:bg-white':  'bg-blue-300 dark:bg-white animate-pulse'}`}
                style={{ width: currentIndex < totalDatalist ? `${progress}%`:'100%',transition:  currentIndex < totalDatalist ?'width 0.2s ease' :'none'  }}

              ></div>
            </div>
            <div className={`${error ? 'text-red-500' : 'text-gray-700 dark:text-white'} space-y-1`}>
              {currentIndex < totalDatalist && (
                <div className="flex w-full justify-between items-center text-xs">
                  <div>{currentUploadName}</div>
                  <div className="font-bold">({currentIndex + 1}/{totalDatalist})</div>
                </div>
              )}
              
              {error && (
                <div className="flex w-full justify-between items-center text-xs mb-4">
                  <div>{errorMessage}</div>
                </div>
              )}
            </div>
            <div className="flex justify-end mt-2">
            {currentIndex < totalDatalist &&(
              <button
                className="text-xs bg-red-300 text-red-600 px-5 py-3 rounded-full cursor-pointer hover:bg-red-600 hover:text-white mr-2"
                onClick={this.skipUpload}
              >
                Skip
              </button>
            )}
              
              {error ? (
                <button
                  className="text-xs bg-red-300 text-red-600 px-5 py-3 rounded-full cursor-pointer hover:bg-red-600 hover:text-white mr-2"
                  onClick={this.resumeUpload}
                >
                  Retry
                </button>
              ) : (
                !uploading && currentIndex < totalDatalist && (
                  <button
                    className="text-xs bg-blue-300 text-blue-600 dark:bg-white dark:text-black dark:hover:bg-white px-5 py-3 rounded-full cursor-pointer hover:bg-blue-600 hover:text-white mr-2"
                    onClick={this.startUpload}
                  >
                    Start Upload
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </CSSTransition>
    );
  }
}

export default UploadManager;