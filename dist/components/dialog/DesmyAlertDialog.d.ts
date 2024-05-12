import { default as React } from 'react';
import { State } from '../apis/Constants';

interface DialogProps {
    children?: React.ReactNode;
    settings: {
        title?: string;
        hint?: string;
        zIndex: number;
        btnPosition?: string;
        btnNegative?: string;
        type: typeof State.ERROR | typeof State.NOTICE;
        loading: boolean;
        forceLoading: boolean;
        loadinghint?: string;
        showDateRange: boolean;
        date: {
            show: boolean;
            minDate: Date | null;
            title: string;
            value: {
                startDate?: Date | null;
                endDate?: Date | null;
            };
        };
        time: {
            show: boolean;
            value: string;
            title: string;
        };
        showDateRangeTitle?: string;
        datalist: {
            title: string;
            data: any[];
            default_value?: any;
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
        defaultvalue?: any;
        onchange?: string;
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
