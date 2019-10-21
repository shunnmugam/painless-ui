import * as React from 'react';
import defaultTheme from './defaultThme';
export const ThemeContext = React.createContext("painless-ui-theme");
export const withTheme = (Component, componentName = undefined) => {
    return function WrapperComponent(props) {
        return (React.createElement(ThemeContext.Consumer, null, (state) => {
            if (componentName === undefined || state.components === undefined) {
                return React.createElement(Component, Object.assign({}, props));
            }
            return React.createElement(Component, Object.assign({}, props, { theme: componentName !== undefined ? state.components[componentName] : state, colors: state.colors }));
        }));
    };
};
const ThemeProvider = (props) => {
    const value = props.value ? props.value : defaultTheme;
    return (React.createElement(ThemeContext.Provider, { value: value }, props.children));
};
export default ThemeProvider;
