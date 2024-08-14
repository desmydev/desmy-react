import { default as React } from 'react';

interface DialogProps {
    children?: React.ReactNode;
    containerDropDownClassName?: string;
    settings: {
        title?: string;
        hint?: string;
        zIndex?: number;
        btnPosition?: string;
        btnNegative?: string;
        type: string;
        loading?: boolean;
        forceLoading?: boolean;
        loadinghint?: string;
        showDateRange?: boolean;
        date?: {
            show: boolean;
            minDate: Date | null;
            title: string;
            value: {
                startDate?: Date | null;
                endDate?: Date | null;
            };
        };
        time?: {
            show: boolean;
            value: string;
            title: string;
        };
        showDateRangeTitle?: string;
        datalist?: {
            title: string;
            url: String;
            data: any[];
            default_value: string;
            onchange?: string;
            is_multiple?: boolean;
            encrypted?: boolean;
        };
        inputFieldLabel?: string;
        handleOnClose?: boolean;
    };
    data?: any;
    onClose: (data: any) => void;
}
interface DataObject {
    id: number;
    [key: string]: any;
}
interface DialogState {
    isLoading: boolean;
    loadinghint?: string;
    data: any;
    value: {
        startDate?: Date | null;
        endDate?: Date | null;
    };
    date: {
        show: boolean;
        minDate: Date | null;
        title: string;
        value: {
            startDate?: Date | null;
        };
    };
    time: {
        show: boolean;
        value: string;
        title: string;
    };
    input: {
        user_input: string;
    };
    data_value: any;
    datalist: {
        title: string;
        default_value: string;
        onchange?: string;
        is_multiple?: boolean;
        data: any[];
    };
}
interface ModalHandlerProps {
    settings: DialogProps['settings'];
    data?: any;
    onClose: (data: any) => void;
    children: React.ReactNode;
}
interface ModalHandlerState {
    loaded: boolean;
    settings: DialogProps['settings'];
}
declare class Dialog extends React.Component<DialogProps, DialogState> {
    constructor(props: DialogProps);
    componentDidMount(): Promise<void>;
    handleDataChange: (data: DataObject[] | any) => void;
    handleValueChange: (newValue: {
        startDate?: Date | null;
        endDate?: Date | null;
    }) => void;
    handleClose: (data: any) => void;
    render(): JSX.Element;
}
declare class DesmyModalHandler extends React.Component<ModalHandlerProps, ModalHandlerState> {
    private modalContainer;
    constructor(props: ModalHandlerProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactPortal;
}
export { Dialog, DesmyModalHandler };
