import { default as React, ReactElement } from 'react';
interface DesmyRoute {
    path: string;
    element: ReactElement | null;
    children?: DesmyRoute[];
}
declare const RoutesContext: React.Context<React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | null>;
declare const DesmyWithRouter: <P extends object>(WrappedComponent: React.ComponentType<P & {
    routePath?: string;
    params?: {
        [key: string]: string | undefined;
    };
}>) => {
    new (props: P & {
        path?: string;
    }): {
        render(): import("react/jsx-runtime").JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<P & {
            path?: string;
        }>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<P & {
            path?: string;
        }>;
        state: Readonly<{}>;
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<P & {
            path?: string;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<P & {
            path?: string;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<P & {
            path?: string;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<P & {
            path?: string;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P & {
            path?: string;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<P & {
            path?: string;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P & {
            path?: string;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
    propTypes?: any;
};
declare const DesmyRenderRoutes: (routes: DesmyRoute[]) => import("react/jsx-runtime").JSX.Element[];
export { DesmyWithRouter, RoutesContext, DesmyRenderRoutes };
