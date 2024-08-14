import React from "react";
import { useLocation, useNavigate, useParams, useOutletContext } from "react-router-dom";

interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
  navigate: ReturnType<typeof useNavigate>;
  params: ReturnType<typeof useParams>;
  outletContext: ReturnType<typeof useOutletContext>;
}

const DesmyRouter = <P extends WithRouterProps>(
  WrappedComponent: React.ComponentType<P>
) => {
  const WithRouterComponent: React.FC<Omit<P, keyof WithRouterProps>> = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    const outletContext = useOutletContext();

    return (
      <WrappedComponent
        {...(props as P)}
        location={location}
        navigate={navigate}
        params={params}
        outletContext={outletContext}
      />
    );
  };

  return WithRouterComponent;
};

export {DesmyRouter};
