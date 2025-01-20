import { Component } from 'react';

interface DesmyNoDataFoundProps {
    message?: string;
    action_label?: string;
    onAction?: () => void;
}
declare class DesmyNoDataFound extends Component<DesmyNoDataFoundProps> {
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmyNoDataFound };
