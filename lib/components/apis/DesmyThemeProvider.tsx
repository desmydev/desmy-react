import React, { ReactNode } from 'react';
import {DesmyThemeContext} from './DesmyThemeContext';
import DesmyCommons from './DesmyCommons'; // Import DesmyCommons

interface ThemeProviderProps {
    children: ReactNode;
}

interface ThemeProviderState {
    theme: 'dark' | 'light'; // Restrict the type of theme
}

class DesmyThemeProvider extends React.Component<ThemeProviderProps, ThemeProviderState> {
    constructor(props: ThemeProviderProps) {
        super(props);

        const savedTheme = (localStorage.getItem('color-theme') || 'light') as 'dark' | 'light';
        this.state = { theme: savedTheme };

        this.syncTheme();
    }

    toggleTheme = () => {
        this.setState(
            (prevState) => ({
                theme: prevState.theme === 'light' ? 'dark' : 'light',
            }),
            () => {
                DesmyCommons.forceTheme(this.state.theme); // Update DOM and localStorage
            }
        );
    };

    syncTheme = () => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        const storedTheme = localStorage.getItem('color-theme');
        const isStoredThemeValid = storedTheme === 'dark' || storedTheme === 'light';

        const isDark = isStoredThemeValid ? storedTheme === 'dark' : prefersDark;

        DesmyCommons.forceTheme(isDark ? 'dark' : 'light');
        DesmyCommons.listenForSystemThemeChanges();
    };

    render() {
        const { theme } = this.state;
        const { children } = this.props;

        return (
            <DesmyThemeContext.Provider value={{ theme, toggleTheme: this.toggleTheme }}>
                {children}
            </DesmyThemeContext.Provider>
        );
    }
}

export {DesmyThemeProvider};
