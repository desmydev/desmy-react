import { Component } from 'react';

interface Props {
    data: Record<string, any>;
    url: string;
    headers: string[];
    isLoading: boolean;
}
interface State {
    hasRequest: boolean;
    response: string;
    data: Record<string, any>;
}
declare class DesmyTableCard extends Component<Props, State> {
    subscription: any;
    constructor(props: Props);
    componentWillUnmount(): void;
    componentDidMount(): Promise<void>;
    handleRequest: () => Promise<void>;
    handleAlert: (res?: string) => void;
    renderTableData: () => JSX.Element[];
    render(): JSX.Element;
}
export { DesmyTableCard };
