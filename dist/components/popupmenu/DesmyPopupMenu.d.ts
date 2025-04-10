import { default as React, Component } from 'react';
interface DropdownOption {
    id?: string;
    name: string;
    icon?: any;
    data?: any;
}
interface RequestProps {
    url?: string;
    isEnable?: boolean;
    showarrow?: boolean;
    serverRequest?: boolean;
    options?: DropdownOption[];
    onSelect: (data: any) => void;
}
interface DesmyPopupMenuProps {
    request: RequestProps;
    className?: string;
    dropdownId?: string;
    children: React.ReactNode;
    onOpen?: () => void;
    style?: React.CSSProperties;
}
interface DesmyPopupMenuState {
    isOpen: boolean;
    isLoading: boolean;
    datalist: Array<{
        name: string;
        icon?: any;
        id?: string;
        data?: any;
    }>;
}
declare class DesmyPopupMenu extends Component<DesmyPopupMenuProps, DesmyPopupMenuState> {
    private dropdownRef;
    private buttonRef;
    constructor(props: DesmyPopupMenuProps);
    fetch: () => Promise<void>;
    handleAlert: (_message?: string) => void;
    toggleDropdown: (event: React.MouseEvent) => void;
    handleClickOutside: (event: MouseEvent) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleOnSelect: (data: {
        name: string;
    }) => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmyPopupMenu };
