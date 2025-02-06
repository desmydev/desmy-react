import { default as React, Component } from 'react';
import { DataSetTableSettingsProps } from '../apis/SharedProps';
interface DataItem {
    [key: string]: any;
}
interface Props {
    database: Array<{
        id: string;
        readOnly: boolean;
    }>;
    filter_column: {
        parent: string;
        custom: string;
        unique_fields: string[];
    };
    [key: string]: any;
    settings: DataSetTableSettingsProps;
    reader: {
        sheet_name: string;
        url?: string;
        title?: string;
        token?: string;
        template_url?: string;
        key_name?: string;
        ui: {
            label?: string;
            icon?: string;
        };
    };
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
