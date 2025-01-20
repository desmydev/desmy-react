import { createContext } from 'react';

interface ThemeContextProps {
    theme: 'dark' | 'light';
    toggleTheme: () => void;
}

const DesmyThemeContext = createContext<ThemeContextProps>({
    theme: 'light',
    toggleTheme: () => {},
});

export {DesmyThemeContext};
