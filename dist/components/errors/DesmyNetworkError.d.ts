import { Component } from 'react';

interface NetworkErrorProps {
    icon?: string;
    errormessage?: string;
    onRetry: () => void;
    onCancel?: () => void;
}
interface NetworkErrorState {
}
declare class DesmyNetworkError extends Component<NetworkErrorProps, NetworkErrorState> {
    constructor(props: NetworkErrorProps);
    render(): JSX.Element;
}
export { DesmyNetworkError };
