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
): { [key: string]: string | undefined } | undefined => {
  if (!routePath) return undefined; // Return undefined if routePath is not provided

  const patternParts = routePath.split("/").filter(Boolean);
  const urlParts = url.split("/").filter(Boolean);

  const params: { [key: string]: string | undefined } = {};
  patternParts.forEach((part, index) => {
    if (part.startsWith(":")) {
      const key = part.slice(1);
      params[key] = urlParts[index];
    }
  });

  return Object.keys(params).length > 0 ? params : undefined; 
};

const DesmyWithRouter = <P extends object>(
  WrappedComponent: React.ComponentType<P & { routePath?: string; params?: { [key: string]: string | undefined } }>
) => {
  return class extends Component<P & { path?: string }> {
    render() {
      const { path, ...restProps } = this.props as P & { path?: string };
      const params = extractRouteParams(path);

      return (
        <WrappedComponent
          {...(restProps as P)}
          {...(path ? { routePath: path } : {})}
          {...(params ? { params } : {})}
        />
      );
    }
  };
};

// Function to render nested routes
const DesmyRenderRoutes = (routes: DesmyRoute[]) => {
  return routes.map(({ path, element, children }, index) => (
    <Route
      key={index}
      path={path}
      element={isValidElement<{ path?: string }>(element) ? React.cloneElement(element, { path }) : element}
    >
      {children && DesmyRenderRoutes(children)}
    </Route>
  ));
};


export { DesmyWithRouter, RoutesContext, DesmyRenderRoutes };
