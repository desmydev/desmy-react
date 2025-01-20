import { default as React, ReactNode } from 'react';

interface ThemeProviderProps {
    children: ReactNode;
}
interface ThemeProviderState {
    theme: 'dark' | 'light';
}
declare class DesmyThemeProvider extends React.Component<ThemeProviderProps, ThemeProviderState> {
    constructor(props: ThemeProviderProps);
    toggleTheme: () => void;
    syncTheme: () => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export { DesmyThemeProvider };
