import { Component, ChangeEvent } from "react";
import { toast } from "react-toastify";

interface Props {
  onFileSelected: (file: File | null) => void;
  allowedFileTypes: string[]; // new prop for allowed MIME types
}

interface State {
  input: {
    file: File | null;
  };
}

class DesmyDocumentPicker extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      input: {
        file: null,
      },
    };
  }

  handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { input } = this.state;
    const { allowedFileTypes } = this.props;
    const file = event.target.files?.[0] || null;

    if (file && !allowedFileTypes.includes(file.type)) {
      toast.error(
        `Only the following file types are allowed: ${allowedFileTypes
          .map((type) => this.mimeTypeToExtension(type))
          .join(", ")}`
      );
      return;
    }

    this.setState({ input: { ...input, file } });
    this.props.onFileSelected(file);
  };

  // helper to map MIME type to a user-friendly extension string
  mimeTypeToExtension = (mimeType: string) => {
    switch (mimeType) {
      case "application/msword":
        return ".doc";
      case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        return ".docx";
      default:
        return mimeType;
    }
  };

  handleCancelDocument = () => {
    this.setState({ input: { file: null } });
    this.props.onFileSelected(null);
  };

  render() {
    return (
      <div>
        {this.state.input.file ? (
          <div className="flex w-full space-x-2 dark:text-white bg-primary/30 rounded-lg px-3 py-2 relative">
            <div>
              <img
                src={"/static/word.png"}
                className="w-8"
                alt="Word Document"
              />
            </div>
            <div className="flex flex-col w-full mr-5">
              <div className="text-sm text-primary dark:text-white">
                {this.state.input.file?.name}
              </div>
              <div className="text-xs text-gray-600 dark:text-white">
                {this.state.input.file?.size} bytes
              </div>
            </div>
            <svg
              onClick={this.handleCancelDocument}
              viewBox="0 0 512 512"
              fill="currentColor"
              className="w-4 h-5 text-primary hover:text-white cursor-pointer absolute right-3 top-3 bottom-0"
            >
              <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
            </svg>
          </div>
        ) : (
          <div className="flex">
            <label
              htmlFor="fileInput"
              className="block text-sm text-slate-500 rounded-full dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 dark:file:bg-darkDialogBackground file:text-primary dark:file:text-white hover:file:bg-violet-100 focus:outline-none"
            >
              <div className="flex bg-primary/40 space-x-3 text-xs text-primary hover:bg-primary hover:text-white px-4 py-3 rounded-full transition-all ease-in-out duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer">
                <span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="w-4 h-4"
                  >
                    <path d="M.5 9.9a.5.5 0 01.5.5v2.5a1 1 0 001 1h12a1 1 0 001-1v-2.5a.5.5 0 011 0v2.5a2 2 0 01-2 2H2a2 2 0 01-2-2v-2.5a.5.5 0 01.5-.5z" />
                    <path d="M7.646 1.146a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8.5 2.707V11.5a.5.5 0 01-1 0V2.707L5.354 4.854a.5.5 0 11-.708-.708l3-3z" />
                  </svg>
                </span>
                <span>Click to upload document</span>
              </div>
            </label>
            <input
              type="file"
              id="fileInput"
              accept={this.props.allowedFileTypes
                .map((type) => {
                  if (type === "application/msword") return ".doc";
                  if (
                    type ===
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  )
                    return ".docx";
                  return type;
                })
                .join(",")}
              onChange={this.handleFileChange}
              className="hidden"
            />
          </div>
        )}
      </div>
    );
  }
}

export { DesmyDocumentPicker };
