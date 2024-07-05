import { Component } from 'react';
interface NetworkErrorProps {
    errormessage?: string;
}
interface NetworkErrorState {
}
declare class DesmyNetworkError extends Component<NetworkErrorProps, NetworkErrorState> {
    constructor(props: NetworkErrorProps);
    render(): import("react").JSX.Element;
}
export { DesmyNetworkError };
