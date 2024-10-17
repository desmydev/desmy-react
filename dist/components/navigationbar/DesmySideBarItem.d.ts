import { default as React, Component, ReactNode } from 'react';

interface ChildItem {
    url: string;
    label: string;
}
interface DesmySideBarItemProps {
    location: {
        pathname: string;
    };
    exact?: boolean;
    pattern?: string | string[];
    name: string;
    items?: ChildItem[];
    icon?: ReactNode;
    url: string;
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    navigate: (url: string) => void;
}
interface DesmySideBarItemState {
    openMenus: Record<string, boolean>;
    is_active: boolean | null;
}
declare class DesmySideBarItem extends Component<DesmySideBarItemProps, DesmySideBarItemState> {
    constructor(props: DesmySideBarItemProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: DesmySideBarItemProps): void;
    toggleMenuRequest: () => void;
    handleOnClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    handleOnChildClick: (e: React.MouseEvent<HTMLAnchorElement>, data: ChildItem) => void;
    toggleMenuExpand: (menu: string, state: boolean) => void;
    toggleMenu: (menu: string | null) => void;
    render(): JSX.Element;
}
export { DesmySideBarItem };
