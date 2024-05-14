import { ComponentType } from 'react';
import { useNavigate, Location, Params } from 'react-router-dom';

export interface WithRouterProps {
    location: Location;
    navigate: ReturnType<typeof useNavigate>;
    params: Params;
    context: unknown;
}
declare function withRouter<P extends WithRouterProps>(Component: ComponentType<P>): (props: Omit<P, keyof WithRouterProps>) => JSX.Element;
export default withRouter;
