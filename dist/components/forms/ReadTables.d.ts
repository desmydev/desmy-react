import { Component } from 'react';
import { DataSetTableSettingsProps } from '../apis/SharedProps';
interface DataItem {
    [key: string]: any;
}
interface ReadTableProps {
    headers: string[];
    datalist: {
        meta: {
            count: number;
            current_page: number;
            next_page: number | null;
            total: number;
            from: number;
            to: number;
            last_page: number;
            per_page: number;
        };
        links: {
            first: string | null;
            last: string | null;
        };
        next: string | null;
        previous: string | null;
        count: number;
        data: any[];
    };
    reader: {
        sheet_name: string;
        url?: string;
        complete_url?: string;
        title?: string;
        token?: string;
        template_url?: string;
        key_name?: string;
        ui: {
            label?: string;
            icon?: string;
        };
    };
    onClose?: () => void;
    settings: DataSetTableSettingsProps;
}
interface ReadTableState {
    datalist: DataItem[];
    hasRequest: boolean;
    show: boolean;
    state?: string;
}
declare class ReadTable extends Component<ReadTableProps, ReadTableState> {
    customDatatableRef: import('react').RefObject<any>;
    constructor(props: ReadTableProps);
    clearList: () => void;
    handleOnLoaded: (data: any, state: string) => void;
    alert: () => string;
    handleOnSubmit: () => void;
    handleOnClose: () => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export default ReadTable;
