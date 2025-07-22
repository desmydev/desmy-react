import { Component } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
  id: string;
  timeout?: number;
}
class Toast extends Component<ToastProps> {
  timerId: number | null = null;
  progressBar: HTMLDivElement | null = null;
  progress = 0; 
  progressPaused = false;
  remainingTime = 0;
  startTime = 0;

  static defaultProps = {
    timeout: 8000, 
  };

  componentDidMount() {
    const { timeout = 8000, onClose } = this.props;

    this.remainingTime = timeout;
    this.startTime = Date.now();

    this.startTimeout(onClose);

    document.addEventListener("visibilitychange", this.handleVisibilityChange);
  }

  componentWillUnmount() {
    if (this.timerId) clearInterval(this.timerId);

    document.removeEventListener("visibilitychange", this.handleVisibilityChange);
  }

  clearTimeOut = () => {
    if (this.timerId) clearInterval(this.timerId);
  };

  startTimeout(onClose: () => void) {
    const intervalTime = 100; 
    this.timerId = window.setInterval(() => {
      if (this.progress >= 100) {
        onClose();
        this.clearTimeOut();
        return;
      }
      this.progress += 1; 

      if (this.progress > 100) this.progress = 100; 

      this.updateProgressBar(); 
    }, intervalTime);
  }

  startProgressBar() {
    if (this.progressBar) {
      this.updateProgressBar();
    }
  }

  updateProgressBar() {
    if (this.progressBar) {
      this.progressBar.style.width = `${this.progress}%`;
    }
  }

  setProgressBarRef = (ref: HTMLDivElement | null) => {
    this.progressBar = ref;
    if (ref) ref.style.width = "0%";
  };

  handleMouseEnter = () => {
    if (!this.progressPaused) {
      const elapsedTime = Date.now() - this.startTime;
      this.remainingTime = (this.props.timeout ?? 8000) - elapsedTime; // Calculate remaining time

      if (this.timerId) clearInterval(this.timerId);

      this.progressPaused = true; // Pause the progress bar and timer
    }
  };

  handleMouseLeave = () => {
    const { onClose } = this.props;

    if (this.progressPaused) {
      this.progressPaused = false;
      this.startTime = Date.now() - (this.progress / 100) * (this.props.timeout ?? 8000); // Resume from the correct time
      this.startTimeout(onClose);
    }
  };

  handleVisibilityChange = () => {
    if (document.hidden) {
      if (this.timerId) clearInterval(this.timerId);
      this.progressPaused = true;

      const elapsedTime = Date.now() - this.startTime;
      this.remainingTime = (this.props.timeout ?? 8000) - elapsedTime;
    } else {
      this.progressPaused = false;
      this.startTime = Date.now();
      this.startTimeout(this.props.onClose);
    }
  };

  handleOnClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.onClose();
  };

  render() {
    const { message, type, id } = this.props;

    const toastClass =
      type === "success"
        ? "bg-green-500 border-green-100  text-white"
        : type === "error"
        ? "bg-red-400 text-white border-red-100 "
        : "bg-blue-500 border-blue-100  text-white";

    const iconClass = type === "success" ? "text-green-500" : type === "error" ? "text-red-400 " : "text-blue-500";
    return (
      <div id={id} onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseEnter} className={`relative cursor-pointer z-[99999999] w-full m-2 my-8 min-w-sm md:max-w-sm rounded-lg overflow-hidden ${toastClass} px-12 py-6 shadow-md animate-toast-slide-in transition-all duration-100 ease-out`} style={{ pointerEvents: "auto" }}>
        <button className="absolute top-0  right-0 p-4 text-white cursor-pointer" onClick={this.handleOnClose}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <p className="relative text-sm font-medium">
          <span className={`absolute -left-7 flex h-5 w-5 items-center justify-center rounded-xl bg-white ${iconClass}`}>
            {type === "success" ? 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-3 w-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg> 
            : type === "error" ? 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-3 w-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg> 
            : 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            }
          </span>
        </p>
        <p className="text-sm ">{message}</p>
        <div ref={this.setProgressBarRef} className="absolute bottom-0 left-0 h-1 bg-white transition-all ease-linear" />
      </div>
    );
  }
}

export default Toast;

