import { default as React, Component, JSX } from 'react';
interface Settings {
    deleteinfo?: {
        id: string;
        name: string;
    };
    request_url?: string;
    image?: {
        placeholder?: string;
        rounded?: boolean;
    };
    handleOnViewClick?: (user: any) => void;
    handleOnClickExtra?: (user: any, name: string) => void;
    handleEdit?: (user: any) => void;
    extra_handle?: Array<{
        name: string;
        icon: React.ReactNode;
    }>;
    style?: {
        maxlines?: number;
    };
    read_more_limit?: number;
}
interface Props {
    children?: React.ReactNode;
    user: any;
    index: number;
    handleOnSuccess: (index: number) => void;
    acces_key: number;
    settings: Settings;
    headers: any[];
    exceptional_columns: string[];
    handleEdit: (user: any) => void;
    error: (error: any) => void;
    /** ✅ multi select mode */
    multiSelectEnabled?: boolean;
}
interface State {
    stateList: string[];
    imageExtensions: string[];
    imgColumnTypes: string[];
    title?: any;
    contentlist: any[];
    header: string;
    request: {
        delete: boolean;
    };
    error: {
        state: boolean;
        message: string;
        type: string;
        color: string;
    };
    isLoading: boolean;
    modal?: JSX.Element;
    viewAll: boolean;
}
declare class DatatableCard extends Component<Props, State> {
    private header;
    private status;
    constructor(props: Props);
    /** ✅ Stop bubbling always */
    stopEvent: (e: React.MouseEvent) => void;
    handleDelete: (e?: React.MouseEvent) => void;
    handleError: (message?: string) => void;
    handleDeleteRequest: () => void;
    handleEdit: (e?: React.MouseEvent) => void;
    handleView: (e?: React.MouseEvent) => void;
    componentDidMount(): Promise<void>;
    toggleView: (e?: React.MouseEvent) => void;
    extra_handle: () => false | {
        name: string;
        icon: React.ReactNode;
    } | undefined;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DatatableCard };
