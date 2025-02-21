import { default as React, Component } from 'react';
import { DesmySideBarItemProps, DesmySideBarItemData } from '../apis/SharedProps';
interface DesmySideBarItemState {
    openMenu: string | null;
    openChildMenu: string | null;
    is_active: boolean | null;
}
declare class DesmySideBarItem extends Component<DesmySideBarItemProps, DesmySideBarItemState> {
    constructor(props: DesmySideBarItemProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: DesmySideBarItemProps): void;
    toggleMenuRequest: () => void;
    handleOnClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    handleOnChildClick: (e: React.MouseEvent<HTMLAnchorElement>, data: DesmySideBarItemData) => void;
    toggleMenu: (menu: string | null) => void;
    toggleChildMenu: (menu: string | null) => void;
    renderChildItems: (items: DesmySideBarItemData[], _parentName: string) => (false | import("react/jsx-runtime").JSX.Element | undefined)[];
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmySideBarItem };
