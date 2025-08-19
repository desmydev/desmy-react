import { Component } from 'react';
interface CreateProps {
    filter?: any;
    content?: any[];
    onClose: () => void;
    onSuccess?: (data: any) => void;
}
interface InputState {
    [key: string]: any;
    date?: {
        id: string;
        name: string;
        value: {
            startDate: string;
            endDate: string;
        };
        label: string;
    };
    date_filters?: any;
}
interface FiltersState {
    extra_fields?: {
        id: string;
        child?: {
            id: string;
        };
    }[];
    date_filters?: any[];
    [key: string]: any;
}
interface CreateState {
    hasRequest: boolean;
    isLoading: boolean;
    input: InputState;
    filters: FiltersState;
}
declare class DesmyFilter extends Component<CreateProps, CreateState> {
    constructor(props: CreateProps);
    componentDidMount(): void;
    fetchFilters: () => Promise<void>;
    handleError: (message: string) => void;
    handleOnSubmit: () => Promise<void>;
    render(): import("react/jsx-runtime").JSX.Element;
}
export default DesmyFilter;
