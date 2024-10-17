import { Component, CSSProperties } from 'react';

interface HomeProps {
    children?: React.ReactNode;
    isLoading: boolean;
    name?: string;
    image?: string;
    caption?: string;
    key?: any;
    data: {
        name: string;
        level: number;
    };
    optionList?: MenuItem[];
    onAction: (action: any) => void;
    className?: string;
    style?: CSSProperties;
    edit_permission: boolean;
    delete_permission: boolean;
}
interface HomeState {
    content: any;
}
interface MenuItem {
    id?: string;
    name: string;
    icon?: any;
    data?: any;
}
declare class DesmyListCard extends Component<HomeProps, HomeState> {
    constructor(props: HomeProps);
    render(): JSX.Element;
}
export { DesmyListCard };
