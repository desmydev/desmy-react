import { Component } from 'react';

interface AlertProps {
    error: {
        type: string;
        message: string;
    };
    handleCloseAlert?: () => void;
    onRetry?: () => void;
}
interface AlertState {
    showForms: boolean;
}
declare class DesmyAlert extends Component<AlertProps, AlertState> {
    constructor(props: AlertProps);
    handleToggle: () => void;
    handleRetry: () => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmyAlert };
