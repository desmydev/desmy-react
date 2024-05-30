import { default as React } from 'react';

interface DesmyButtonProps {
    onClick: () => void;
    hasRequest: boolean;
    label?: string;
    label_request?: string;
    icon?: React.ReactNode;
    className?: string;
}
declare class DesmyButton extends React.Component<DesmyButtonProps> {
    constructor(props: DesmyButtonProps);
    render(): JSX.Element;
}
export { DesmyButton };
