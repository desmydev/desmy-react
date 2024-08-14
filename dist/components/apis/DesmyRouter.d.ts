import { default as React } from 'react';
import { useLocation, useNavigate, useParams, useOutletContext } from 'react-router-dom';

interface WithRouterProps {
    location: ReturnType<typeof useLocation>;
    navigate: ReturnType<typeof useNavigate>;
    params: ReturnType<typeof useParams>;
    outletContext: ReturnType<typeof useOutletContext>;
}
declare const DesmyRouter: <P extends WithRouterProps>(WrappedComponent: React.ComponentType<P>) => React.FC<Omit<P, keyof WithRouterProps>>;
export { DesmyRouter };
