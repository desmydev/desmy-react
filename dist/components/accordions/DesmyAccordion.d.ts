import { Component, ReactNode } from 'react';
interface AccordionProps {
    children: ReactNode;
    accordionHeader: (isOpen: boolean) => ReactNode;
    className?: string;
}
interface AccordionState {
    isOpen: boolean;
}
declare class DesmyAccordion extends Component<AccordionProps, AccordionState> {
    constructor(props: AccordionProps);
    toggleAccordion: () => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmyAccordion };
