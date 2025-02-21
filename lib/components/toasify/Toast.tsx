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
      const progressInterval = 50; // Progress updates every 50ms
      const interval = setInterval(() => {
        if (!this.progressPaused) {
          const elapsedTime = Date.now() - this.startTime; // Time elapsed since start
          this.progress = (elapsedTime / timeout) * 100;

          if (this.progressBar) {
            this.progressBar.style.width = `${this.progress}%`;
          }

          if (this.progress >= 100) {
            clearInterval(interval);
            this.props.onClose(); // Remove the toast when progress reaches 100%
          }
        }
      }, progressInterval);

      this.progressBarInterval = interval;
    }
  }

  setProgressBarRef = (ref: HTMLDivElement | null) => {
    this.progressBar = ref; // Assign the ref here
  };

  handleMouseEnter = () => {
    if (this.timerId) {
      clearTimeout(this.timerId); // Pause the timeout when hovering
    }
    if (this.progressBarInterval) {
      clearInterval(this.progressBarInterval); // Pause the progress bar when hovering
    }
    this.progressPaused = true; // Mark that progress is paused
  };

  handleMouseLeave = () => {
    const { onClose, timeout = 8000 } = this.props;

    this.progressPaused = false; // Mark that progress is resumed
    this.startTime = Date.now() - (this.progress / 100) * timeout; // Adjust start time based on current progress
    this.startTimeout(onClose, this.remainingTime); // Resume the timeout
    this.startProgressBar(this.remainingTime); // Resume the progress bar
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
        id={id} // Assigning id for toast identification
        className={`py-4 px-4 text-sm rounded-md shadow-md ${toastClass} relative`}
        onMouseEnter={this.handleMouseEnter} // Pause on mouse enter
        onMouseLeave={this.handleMouseLeave} // Resume on mouse leave
      >
        {/* Toast message */}
        {message}

        {/* Progress Bar */}
        <div
          ref={this.setProgressBarRef} // Use the callback ref here
          className="absolute bottom-0 left-0 h-1 bg-white"
        />
      </div>
    );
  }
}

export default Toast;
