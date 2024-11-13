import { Component, createRef, RefObject } from 'react';
import { Cropper, CropperRef } from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";
import "./Cropper.scss";

interface Media {
  file: File | null;
}

interface DesmyCropperProps {
  media: Media;
  onSuccess: (blob: Blob, dataUrl: string) => void;
  onClose? : () =>void
}

interface DesmyCropperState {
  image?: string;
}

class DesmyCropper extends Component<DesmyCropperProps, DesmyCropperState> {
  private cropperRef: RefObject<CropperRef>;

  constructor(props: DesmyCropperProps) {
    super(props);
    this.state = {};

    this.cropperRef = createRef<CropperRef>();

    this.onCrop = this.onCrop.bind(this);
  }

  componentDidMount() {
    const { media } = this.props;
    if(media.file != null)
      this.setState({ image: URL.createObjectURL(media.file) });
  }

  componentWillUnmount() {
    if (this.state.image) {
      URL.revokeObjectURL(this.state.image);
    }
  }

  onCrop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const cropper = this.cropperRef.current;
    if (cropper) {
      const canvas = cropper.getCanvas();
      if (canvas) {
        canvas.toBlob((blob) => {
          if (blob) {
            this.props.onSuccess(blob, canvas.toDataURL());
          }
        }, "image/png");
      }
    }
  }

  render() {
    const { image } = this.state;
    return (
      <>
        <div className={`fixed z-[50000] w-screen h-screen inset-0 overflow-y-auto font-poppinsRegular`}>
          <div className="justify-items-center px-2 backdrop-blur-lg top-0 right-0 left-0 z-40 w-full inset-0 h-modal h-full justify-center items-center overflow-y-auto">
            <div className="flex items-center justify-center pt-4 pb-20 text-center sm:block sm:p-0">
              <div className='my-14 justify-center'>
                <div className='max-w-3xl bg-black min-h-[600px] rounded-xl mx-auto py-10 px-8 my-auto'>
                  <div className="example flex flex-col w-full">
                    <div className="example__cropper-wrapper bg-red-500">
                      <Cropper
                        ref={this.cropperRef}
                        transitions={true}
                        stencilProps={{
                          resizable: false,
                          handlers: false,
                          lines: false,
                          grid: true,
                          aspectRatio: 6 / 9,
                        }}
                        className="example__cropper"
                        src={image}
                      />
                    </div>
                    <div className="example__buttons-wrapper">
                      {image && (
                        <div className='flex w-full justify-center lg:justify-end -mb-5'>
                          <button
                            className='flex items-center justify-center bg-white text-black my-5 px-4 py-3 rounded-full cursor-pointer text-xs font-poppinsRegular'
                            onClick={this.onCrop}
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className='w-6 h-6 mr-2'
                            >
                              <path d="M19 7c0-1.103-.897-2-2-2H7V2H5v3H2v2h15v15h2v-3h3v-2h-3V7z" />
                              <path d="M5 9v8c0 1.103.897 2 2 2h8v-2H7V9H5z" />
                            </svg>
                            Save And Continue
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DesmyCropper;
