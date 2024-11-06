import { default as React, Component, ReactNode } from 'react';

interface ChildItem {
    url: string;
    label: string;
    has_permission?: boolean;
}
interface DesmySideBarItemProps {
    location: {
        pathname: string;
    };
    exact?: boolean;
    className?: string;
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
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmySideBarItem };
