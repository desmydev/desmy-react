import { Component } from 'react';
import { WizardProps } from '../apis/SharedProps';
type Props = WizardProps & {
    onRef?: (instance: DesmyWizard) => void;
};
type WizardState = {
    step: number;
};
declare class DesmyWizard extends Component<Props, WizardState> {
    constructor(props: Props);
    componentDidMount(): void;
    nextStep: () => void;
    prevStep: () => void;
    jumpStep: (step: number) => void;
    getStep: () => number;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmyWizard };
