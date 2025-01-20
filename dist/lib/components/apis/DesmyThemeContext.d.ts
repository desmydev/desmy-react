interface ThemeContextProps {
    theme: 'dark' | 'light';
    toggleTheme: () => void;
}
declare const DesmyThemeContext: import('react').Context<ThemeContextProps>;
export { DesmyThemeContext };
