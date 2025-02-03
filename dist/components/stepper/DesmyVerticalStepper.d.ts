import { Component, ReactNode } from 'react';
interface Tab {
    id: string;
    name: string;
    icon?: ReactNode;
}
interface DesmyVerticalStepperProps {
    tabs: Tab[];
    selected?: (tabId: string) => void;
    children: ReactNode;
}
interface DesmyVerticalStepperState {
    activeTab: string;
}
declare class DesmyVerticalStepper extends Component<DesmyVerticalStepperProps, DesmyVerticalStepperState> {
    constructor(props: DesmyVerticalStepperProps);
    handleTabChange: (tabId: string) => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmyVerticalStepper };
