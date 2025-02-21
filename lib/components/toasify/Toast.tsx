import React, { Component } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void; 
  id: string;
  timeout?: number;
}

class Toast extends Component<ToastProps> {
  timerId: number | null = null;
  progressBarInterval: number | null = null;
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
    this.startTimeout(onClose, timeout);

    this.startProgressBar(timeout);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
    if (this.progressBarInterval) {
      clearInterval(this.progressBarInterval);
    }
  }

  startTimeout(onClose: () => void, timeout: number) {
    this.timerId = window.setTimeout(onClose, timeout);
  }

  startProgressBar(timeout: number) {
    if (this.progressBar) {
      const progressInterval = 50; 
      const interval = setInterval(() => {
        if (!this.progressPaused) {
          const elapsedTime = Date.now() - this.startTime; 
          this.progress = (elapsedTime / timeout) * 100;

          if (this.progressBar) {
            this.progressBar.style.width = `${this.progress}%`;
          }

          if (this.progress >= 100) {
            clearInterval(interval);
          }
        }
      }, progressInterval);

      this.progressBarInterval = interval;
    }
  }

  setProgressBarRef = (ref: HTMLDivElement | null) => {
    this.progressBar = ref;
  };

  handleMouseEnter = () => {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
    if (this.progressBarInterval) {
      clearInterval(this.progressBarInterval);
    }
    this.progressPaused = true;
  };

  handleMouseLeave = () => {
    const { onClose, timeout = 8000 } = this.props;

    this.progressPaused = false;
    this.startTime = Date.now() - (this.progress / 100) * timeout;
    this.startTimeout(onClose, this.remainingTime);
    this.startProgressBar(this.remainingTime);
  };

  render() {
    const { message, type, id } = this.props;

    // Determine the color based on the toast type
    const toastClass = type === 'success'
      ? 'bg-green-500 text-white'
      : type === 'error'
      ? 'bg-red-400 text-white'
      : 'bg-blue-500 text-white';

    return (
      <div
        id={id}
        className={`py-5 px-4 text-sm rounded-md shadow-md ${toastClass} relative animate-toast-slide-in transition-all duration-500 ease-out  w-full lg:w-72`}
        onMouseEnter={this.handleMouseEnter} 
        onMouseLeave={this.handleMouseLeave}
      >
        {message}
        <div
          ref={this.setProgressBarRef} 
          className="absolute bottom-0 left-0 h-1 bg-white"
        />
        <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className='absolute top-0 size-4 m-1 right-1 text-white cursor-pointer' onClick={this.props.onClose}
    >
      <path
        fill="currentColor"
        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
      ></path>
    </svg>
      </div>
    );
  }
}

export default Toast;
