import { Component} from 'react';
import { Cropper } from "react-advanced-cropper";

interface Media {
  file: File | null;
}

interface DesmyCropperProps {
  media: Media;
  onSuccess: (blob: Blob, dataUrl: string) => void;
  onClose? : () =>void
}

interface DesmyCropperState {
  image?: string | null;
}

class DesmyCropper extends Component<DesmyCropperProps, DesmyCropperState> {
  constructor(props: DesmyCropperProps) {
    super(props);
    this.state = {
      image:null
    };
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


  render(){
    const { image } = this.state;
    console.log("image=",image)
    return(<>
     <div className={`fixed z-[50000] w-screen h-screen inset-0 overflow-y-auto font-poppinsRegular`}>

     {/* <Cropper
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
      /> */}
     </div>
    </>)
  }
}

export default DesmyCropper