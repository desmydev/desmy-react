import { default as React } from 'react';
type Props = {
    timestamp: string | number | Date;
    className?: string;
};
type State = {
    timeAgo: string;
};
declare class DesmyTimeAgo extends React.Component<Props, State> {
    intervalId: number | null;
    constructor(props: Props);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    componentWillUnmount(): void;
    startInterval(): void;
    clearInterval(): void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmyTimeAgo };
