import React, { ComponentType } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Location, NavigateFunction, Params } from "react-router-dom";

interface WithRouterProps {
  location: Location;
  navigate: NavigateFunction;
  params: Params;
}

function withRouter<T extends WithRouterProps>(): ComponentType<Omit<T, keyof WithRouterProps>> {
  function ComponentWithRouterProp(props: Omit<T, keyof WithRouterProps>) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    return (
      <React.Component
        {...props}
        location={location}
        navigate={navigate}
        params={params}
      />
    );
  }

  return ComponentWithRouterProp as ComponentType<Omit<T, keyof WithRouterProps>>;
}

export {withRouter};
