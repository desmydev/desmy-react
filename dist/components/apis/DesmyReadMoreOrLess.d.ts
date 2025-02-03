import { Component } from 'react';
interface ReadMoreOrLessProps {
    text: string;
    maxLength?: number;
}
interface ReadMoreOrLessState {
    isExpanded: boolean;
}
declare class DesmyReadMoreOrLess extends Component<ReadMoreOrLessProps, ReadMoreOrLessState> {
    static defaultProps: {
        maxLength: number;
    };
    constructor(props: ReadMoreOrLessProps);
    toggleReadMore: () => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmyReadMoreOrLess };
