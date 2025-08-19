import { default as React, Component } from 'react';
interface Tab {
    label: string;
    icon?: React.ReactNode;
}
interface TabLayoutProps {
    tabs: Tab[];
    children: React.ReactNode[];
    onActiveTabChange?: (activeIndex: number) => void;
}
interface TabLayoutState {
    activeTabIndex: number;
}
declare class DesmyTabLayout extends Component<TabLayoutProps, TabLayoutState> {
    constructor(props: TabLayoutProps);
    setActiveTab: (index: number) => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmyTabLayout };
