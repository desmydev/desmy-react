import { Component } from 'react';
interface CreateProps {
    filter?: any;
    content?: any[];
    onClose: () => void;
    onSuccess?: (data: any) => void;
}
interface CreateState {
    hasRequest: boolean;
    isLoading: boolean;
    input: {
        [key: string]: any;
    };
    filters: {
        [key: string]: Array<any>;
    };
}
declare class DesmyFilter extends Component<CreateProps, CreateState> {
    constructor(props: CreateProps);
    componentDidMount(): void;
    fetchFilters: () => Promise<void>;
    handleOnSubmit: () => Promise<void>;
    render(): import("react/jsx-runtime").JSX.Element;
}
export default DesmyFilter;
