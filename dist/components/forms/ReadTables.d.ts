import { Component } from 'react';
import { DataSetTableSettingsProps, DesmySmartFormUploadReadTable } from '../apis/SharedProps';
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
    reader: DesmySmartFormUploadReadTable;
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
