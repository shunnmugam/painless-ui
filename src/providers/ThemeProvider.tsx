import * as React from 'react';
import defaultTheme from './defaultThme';

export const ThemeContext = React.createContext(
    "painless-ui-theme"
);

export const withTheme = (Component,componentName:string | undefined = undefined) => {
    return function WrapperComponent(props) {
        return (
            <ThemeContext.Consumer>
                {(state:any) => {
                    if(componentName === undefined || state.components === undefined) {
                        return <Component {...props} />
                    }
                    return <Component {...props} theme={componentName!== undefined ? state.components[componentName] : state} colors={state.colors} />
                }}
            </ThemeContext.Consumer>
        );
    };
}

interface ThemeProviderProps {
    value?: any
}

const ThemeProvider:React.FC<ThemeProviderProps> = (props) => {
    const value = props.value ? props.value : defaultTheme;
    return (<ThemeContext.Provider value={value}>
        {props.children}
    </ThemeContext.Provider>)
}

export default ThemeProvider;