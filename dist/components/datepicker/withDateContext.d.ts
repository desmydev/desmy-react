import { default as React } from 'react';
import { DateContextProps } from './DateContext';
export declare function withDateContext<P extends {
    dateContext: DateContextProps;
}>(WrappedComponent: React.ComponentType<P>): {
    new (props: Omit<P, "dateContext">): {
        render(): import("react/jsx-runtime").JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<P, "dateContext">>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<P, "dateContext">>;
        state: Readonly<{}>;
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<P, "dateContext">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<P, "dateContext">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<P, "dateContext">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<P, "dateContext">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<P, "dateContext">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<P, "dateContext">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<P, "dateContext">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
    propTypes?: any;
};
