import { Component } from 'react';
interface ToastProps {
    message: string;
    type: 'success' | 'error' | 'info';
    onClose: () => void;
    id: string;
    timeout?: number;
}
declare class Toast extends Component<ToastProps> {
    timerId: number | null;
    progressBar: HTMLDivElement | null;
    progress: number;
    progressPaused: boolean;
    remainingTime: number;
    startTime: number;
    static defaultProps: {
        timeout: number;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    clearTimeOut: () => void;
    startTimeout(onClose: () => void): void;
    startProgressBar(): void;
    updateProgressBar(): void;
    setProgressBarRef: (ref: HTMLDivElement | null) => void;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    handleVisibilityChange: () => void;
    handleOnClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export default Toast;
