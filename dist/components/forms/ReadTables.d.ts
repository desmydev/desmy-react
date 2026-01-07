import { default as React, Component } from 'react';
import { DataSetTableSettingsProps, DesmySmartFormUploadReadTable } from '../apis/SharedProps';
interface DataItem {
    [key: string]: any;
}
interface ReadTableProps {
    headers: string[];
    datalist: {
        data: any[];
        meta: {
            total: number;
            current_page: number;
            last_page: number;
            per_page: number;
            next_page: number | null;
        };
    };
    reader: DesmySmartFormUploadReadTable;
    settings: DataSetTableSettingsProps;
    onClose?: () => void;
    /** prerequest formData collected from DesmySmartFormUpload */
    prerequestPayload?: Record<string, any>;
}
interface ReadTableState {
    datalist: DataItem[];
    hasRequest: boolean;
    state?: string;
}
declare class ReadTable extends Component<ReadTableProps, ReadTableState> {
    customDatatableRef: React.RefObject<any>;
    constructor(props: ReadTableProps);
    handleOnLoaded: (data: any, state: string) => void;
    handleOnSubmit: () => Promise<void>;
    render(): import("react/jsx-runtime").JSX.Element;
}
export default ReadTable;
