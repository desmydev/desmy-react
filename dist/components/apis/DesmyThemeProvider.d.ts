import { Component, ReactNode } from 'react';
interface ThemeProviderProps {
    children: ReactNode;
}
interface ThemeProviderState {
    theme: 'dark' | 'light';
}
declare class DesmyThemeProvider extends Component<ThemeProviderProps, ThemeProviderState> {
    constructor(props: ThemeProviderProps);
    componentDidMount(): void;
    toggleTheme: () => void;
    syncTheme: () => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmyThemeProvider };
