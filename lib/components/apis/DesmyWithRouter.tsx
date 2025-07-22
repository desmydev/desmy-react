import React, { Component, ReactElement, createContext, isValidElement } from "react";
import { Route, useNavigate } from "react-router-dom";
import DesmyError401 from './DesmyError401'
interface DesmyRoute {
  path: string;
  element: ReactElement | null;
  children?: DesmyRoute[];
}

const RoutesContext = createContext<ReactElement | null>(null);

const extractRouteParams = (
  routePath?: string,
  url: string = window?.location?.pathname || ""
): { [key: string]: string | undefined } => {
  if (!routePath) return {};

  const pathParts = routePath.split('/').filter(part => part);
  const urlParts = url.split('/').filter(part => part);
  let params: { [key: string]: string | undefined } = {};

  for (let i = 0; i < pathParts.length; i++) {
    if (pathParts[i].startsWith(':')) {
      let paramName = pathParts[i].replace(':', '').replace('?', '');
      let isOptional = pathParts[i].endsWith('?');

      if (urlParts[i] !== undefined) {
        params[paramName] = urlParts[i];
      } else if (!isOptional) {
        throw new Error(`Missing required route parameter: ${paramName}`);
      }
    }
  }
  return params;
};

// Safe hook wrapper to get navigate or fallback no-op on SSR / outside Router context
function useSafeNavigate() {
  try {
    const navigate = useNavigate();
    return navigate;
  } catch {
    // Happens in SSR or no Router context: fallback to no-op function
    return () => {};
  }
}

const DesmyWithRouter = <P extends object>(
  WrappedComponent: React.ComponentType<
    P & {
      routePath?: string;
      params?: { [key: string]: string | undefined };
      navigate?: (to: string, options?: { replace?: boolean; state?: any }) => void;
    }
  >
  ,
  hasPermission?: boolean // added here
) => {
  // Functional wrapper to provide navigate via hook safely
  const FunctionalWrapper = (props: P & { path?: string }) => {
    const navigate = useSafeNavigate();
    const { path, ...restProps } = props;
    const params = path ? extractRouteParams(path) : {};
    return (hasPermission==false ? <DesmyError401 />:
      <WrappedComponent
        {...(restProps as P)}
        routePath={path}
        params={Object.keys(params).length ? params : undefined}
      />
    );
  };

  // If WrappedComponent is a class component, you can return FunctionalWrapper directly
  // Or to preserve legacy behavior, you could return a class wrapping FunctionalWrapper
  // Here, just return FunctionalWrapper

  return FunctionalWrapper;
};

const DesmyRenderRoutes = (routes: DesmyRoute[]): ReactElement[] => {
  return routes.map(({ path, element, children }, index) => {
    let routeElement = element;

    if (isValidElement(element)) {
      routeElement = React.cloneElement(
        element as ReactElement<{ path?: string }>,
        { path }
      );
    }

    return (
      <Route key={index} path={path} element={routeElement}>
        {children && DesmyRenderRoutes(children)}
      </Route>
    );
  });
};

export { DesmyWithRouter, RoutesContext, DesmyRenderRoutes };
