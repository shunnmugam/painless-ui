import * as React from 'react';
export declare const ThemeContext: React.Context<string>;
export declare const withTheme: (Component: any, componentName?: string | undefined) => (props: any) => JSX.Element;
interface ThemeProviderProps {
    value?: any;
}
declare const ThemeProvider: React.FC<ThemeProviderProps>;
export default ThemeProvider;
