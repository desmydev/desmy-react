import { Component } from 'react';
interface EmptyProps {
    image?: string;
    message: string;
}
declare class DesmyEmpty extends Component<EmptyProps> {
    constructor(props: EmptyProps);
    render(): import("react").JSX.Element;
}
export { DesmyEmpty };
