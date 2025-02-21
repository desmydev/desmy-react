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
    progressBarInterval: number | null;
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
    startTimeout(onClose: () => void, timeout: number): void;
    startProgressBar(timeout: number): void;
    setProgressBarRef: (ref: HTMLDivElement | null) => void;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export default Toast;
