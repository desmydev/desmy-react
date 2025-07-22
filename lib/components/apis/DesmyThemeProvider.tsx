import { Component, ReactNode } from 'react';
import { DesmyThemeContext } from './DesmyThemeContext';
import DesmyCommons from './DesmyCommons';

interface ThemeProviderProps {
    children: ReactNode;
}

interface ThemeProviderState {
    theme: 'dark' | 'light';
}

class DesmyThemeProvider extends Component<ThemeProviderProps, ThemeProviderState> {
    constructor(props: ThemeProviderProps) {
        super(props);
        // Default theme to light during SSR
        this.state = { theme: 'light' };
    }

    componentDidMount() {
        // Now safe to access browser APIs
        let savedTheme: 'dark' | 'light' = 'light';

        if (typeof window !== 'undefined' && window.localStorage) {
            const stored = localStorage.getItem('color-theme');
            if (stored === 'dark' || stored === 'light') {
                savedTheme = stored;
            }
        }

        this.setState({ theme: savedTheme }, () => {
            this.syncTheme();
        });
    }

    toggleTheme = () => {
        this.setState(
            (prevState) => ({
                theme: prevState.theme === 'light' ? 'dark' : 'light',
            }),
            () => {
                DesmyCommons.forceTheme(this.state.theme);
                if (typeof window !== 'undefined' && window.localStorage) {
                    localStorage.setItem('color-theme', this.state.theme);
                }
            }
        );
    };

    syncTheme = () => {
        if (typeof window === 'undefined') return; // Do nothing during SSR

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

export { DesmyThemeProvider };
