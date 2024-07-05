import { Component } from 'react';

interface HomeProps {
    isLoading: boolean;
    name: string;
    image?: string;
    caption?: string;
    data: {
        name: string;
        level: number;
    };
    onAction: (action: any) => void;
    className?: string;
}
interface HomeState {
    content: any;
}
declare class DesmyListCard extends Component<HomeProps, HomeState> {
    constructor(props: HomeProps);
    render(): JSX.Element;
}
export { DesmyListCard };
