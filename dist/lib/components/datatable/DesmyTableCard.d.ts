import { Component } from 'react';

interface Props {
    data?: Record<string, any>;
    url?: string;
    background?: string;
    headers?: string[];
    isLoading?: boolean;
}
interface State {
    hasRequest: boolean;
    response: string;
    data: Record<string, any>;
}
declare class DesmyTableCard extends Component<Props, State> {
    subscription: any;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleRequest: () => Promise<void>;
    handleAlert: (res?: string) => void;
    renderTableData: () => import("react/jsx-runtime").JSX.Element[];
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmyTableCard };
