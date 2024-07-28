import { Component } from 'react';

interface HomeProps {
    children?: React.ReactNode;
    isLoading: boolean;
    name?: string;
    image?: string;
    caption?: string;
    data: {
        name: string;
        level: number;
    };
    optionList?: MenuItem[];
    onAction: (action: any) => void;
    className?: string;
}
interface HomeState {
    content: any;
}
interface MenuItem {
    id: string;
    name: string;
}
declare class DesmyListCard extends Component<HomeProps, HomeState> {
    constructor(props: HomeProps);
    render(): JSX.Element;
}
export { DesmyListCard };
