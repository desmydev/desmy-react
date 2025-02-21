import { default as React, Component } from 'react';
import { DataSetTableSettingsProps, DesmySmartFormUploadReadTable, DesmySmartFormUploadReadTableFilterColums } from '../apis/SharedProps';
interface DataItem {
    [key: string]: any;
}
interface Props {
    database: Array<{
        id: string;
        readOnly: boolean;
    }>;
    filter_column?: DesmySmartFormUploadReadTableFilterColums;
    [key: string]: any;
    settings: DataSetTableSettingsProps;
    reader: DesmySmartFormUploadReadTable;
}
interface State {
    hasRequest: boolean;
    filedata: any[];
    data: {
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
        data: DataItem[];
    };
    input: {
        [key: string]: any;
    };
}
declare class DesmySmartFormUpload extends Component<Props, State> {
    wizardActionRef: React.RefObject<any>;
    constructor(props: Props);
    handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmySmartFormUpload };
