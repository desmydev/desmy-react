import { Component, ReactNode } from 'react';
interface SuspenseWrapperProps {
    children: ReactNode;
    fallback?: ReactNode;
}
declare class DesmySuspenseWrapper extends Component<SuspenseWrapperProps> {
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmySuspenseWrapper };
