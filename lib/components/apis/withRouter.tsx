import { ComponentType } from "react";
import { useLocation, useNavigate, useParams, useOutletContext, Location, Params } from "react-router-dom";

export interface WithRouterProps {
  location: Location;
  navigate: ReturnType<typeof useNavigate>;
  params: Params;
  context: unknown;
}

function withRouter<P extends WithRouterProps>(Component: ComponentType<P>) {
  return function ComponentWithRouterProp(props: Omit<P, keyof WithRouterProps>) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    const context = useOutletContext();

    return (
      <Component
        {...(props as P)}
        navigate={navigate}
        location={location}
        params={params}
        context={context}
      />
    );
  };
}

export default withRouter;
