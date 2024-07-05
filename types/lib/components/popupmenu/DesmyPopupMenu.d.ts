import React, { Component } from 'react';
interface RequestProps {
    url?: string;
    isEnable?: boolean;
    showarrow?: boolean;
    serverRequest: boolean;
    list?: Array<{
        name: string;
    }>;
    onSelect: (data: any) => void;
}
interface PopupMenuProps {
    request: RequestProps;
    className?: string;
    dropdownClassName?: string;
    children: React.ReactNode;
}
interface PopupMenuState {
    isOpen: boolean;
    datalist: Array<{
        name: string;
    }>;
    isLoading: boolean;
}
declare class DesmyPopupMenu extends Component<PopupMenuProps, PopupMenuState> {
    constructor(props: PopupMenuProps);
    toggleDropdown: () => void;
    componentDidMount: () => Promise<void>;
    fetch: () => Promise<void>;
    handleOnSelect: (data: {
        name: string;
    }) => void;
    handleClickAway: () => void;
    handleAlert: (_message?: string) => void;
    render(): React.JSX.Element;
}
export { DesmyPopupMenu };
