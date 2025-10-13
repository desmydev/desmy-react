import React, {
  Component,
  ReactElement,
  createContext,
  isValidElement,
} from "react";
import { Route, useNavigate } from "react-router-dom";
import DesmyError401 from "./DesmyError401";

// ---- Types ----
interface DesmyRoute {
  path: string;
  element: ReactElement | null;
  children?: DesmyRoute[];
}

const RoutesContext = createContext<ReactElement | null>(null);

// ---- Recursive extractRouteParams with wildcard support ----
const extractRouteParams = (
  routePath?: string,
  url: string = window?.location?.pathname || ""
): Record<string, string | undefined> => {
  if (!routePath) return {};

  const pathParts = routePath.split("/").filter(Boolean);
  const urlParts = url.split("/").filter(Boolean);

  const recurse = (
    pParts: string[],
    uParts: string[],
    acc: Record<string, string | undefined> = {}
  ): Record<string, string | undefined> => {
    if (!pParts.length) return acc;

    const [currentPath, ...restPath] = pParts;
    const [currentUrl, ...restUrl] = uParts;

    if (currentPath.startsWith(":")) {
      // Named parameter (:id or :id?)
      const isOptional = currentPath.endsWith("?");
      const paramName = currentPath.slice(1, isOptional ? -1 : undefined);

      if (currentUrl !== undefined) {
        acc[paramName] = currentUrl;
      } else if (!isOptional) {
        throw new Error(`Missing required route parameter: ${paramName}`);
      }
      return recurse(restPath, restUrl, acc);
    }

    if (currentPath.startsWith("*")) {
      // Wildcard parameter (*path)
      const paramName = currentPath.slice(1) || "wildcard";
      acc[paramName] = uParts.join("/") || undefined;
      return acc; // Wildcard consumes everything
    }

    return recurse(restPath, restUrl, acc);
  };

  return recurse(pathParts, urlParts);
};

// ---- Safe navigate wrapper ----
function useSafeNavigate() {
  try {
    const navigate = useNavigate();
    return navigate;
  } catch {
    // Happens in SSR or no Router context: fallback to no-op function
    return () => {};
  }
}

// ---- HOC ----
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
    const routeElement = isValidElement(element)
      ? React.cloneElement(element as ReactElement<{ path?: string }>, { path })
      : element;

    return (
      <Route key={index} path={path} element={routeElement}>
        {children ? DesmyRenderRoutes(children) : null}
      </Route>
    );
  });
};

export { DesmyWithRouter, RoutesContext, DesmyRenderRoutes };
