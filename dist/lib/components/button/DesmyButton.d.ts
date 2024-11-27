import { default as React } from 'react';

interface DesmyButtonProps {
    onClick: () => void;
    hasRequest?: boolean;
    label?: string;
    type?: string;
    label_request?: string;
    icon?: React.ReactNode;
    className?: string;
    labelClassName?: string;
}
declare class DesmyButton extends React.Component<DesmyButtonProps> {
    constructor(props: DesmyButtonProps);
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmyButton };
