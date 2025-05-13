import React, { Component, ReactElement, createContext, isValidElement } from "react";
import { Route } from "react-router-dom";

interface DesmyRoute {
  path: string;
  element: ReactElement | null;
  children?: DesmyRoute[];
}

// Context to store the <Routes> tree
const RoutesContext = createContext<ReactElement | null>(null);

// Function to extract dynamic params from the route path
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
      let paramName = pathParts[i].replace(':', '').replace('?', ''); // Remove ':' and '?'
      let isOptional = pathParts[i].endsWith('?');

      if (urlParts[i] !== undefined) {
        params[paramName] = urlParts[i]; // Assign URL value to param
      } else if (!isOptional) {
        throw new Error(`Missing required route parameter: ${paramName}`);
      }
    }
  }
  return params;
};

const DesmyWithRouter = <P extends object>(
  WrappedComponent: React.ComponentType<P & { routePath?: string; params?: { [key: string]: string | undefined } }>
) => {
  return class extends Component<P & { path?: string }> {
    render() {
      const { path, ...restProps } = this.props as P & { path?: string };
      const params = path ? extractRouteParams(path) : {};

      return (
        <WrappedComponent
          {...(restProps as P)}
          routePath={path}
          params={Object.keys(params).length ? params : undefined} // Avoid spreading empty object
        />
      );
    }
  };
};

// Function to render nested routes
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