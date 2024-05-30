import { ComponentType } from 'react';
import { Location, NavigateFunction, Params } from 'react-router-dom';

interface WithRouterProps {
    location: Location;
    navigate: NavigateFunction;
    params: Params;
}
declare function withRouter<T extends WithRouterProps>(): ComponentType<Omit<T, keyof WithRouterProps>>;
export { withRouter };
