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
    navigate?: (to: string, options?: {
        replace?: boolean;
        state?: any;
    }) => void;
}>, hasPermission?: boolean) => (props: P & {
    path?: string;
}) => import("react/jsx-runtime").JSX.Element;
declare const DesmyRenderRoutes: (routes: DesmyRoute[]) => ReactElement[];
export { DesmyWithRouter, RoutesContext, DesmyRenderRoutes };
