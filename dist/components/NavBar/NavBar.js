import React from 'react';
import { withTheme } from '../../providers/ThemeProvider';
import './NavBar.css';
const defaultProps = {
    className: '',
    position: ''
};
const NavBar = (props) => {
    const { bgColor, className, position, theme, colors, style, ...customProps } = props;
    let defaultNavBarStyle = {
        background: colors ? (colors.primary ? colors.primary : "#1976d2") : "#1976d2",
        color: colors ? (colors.secondary ? colors.secondary : "white") : "white",
    };
    if (theme && theme.style && theme.style.container) {
        defaultNavBarStyle = { ...defaultNavBarStyle, ...theme.style.container };
    }
    if (bgColor) {
        defaultNavBarStyle.background = bgColor;
    }
    if (style) {
        defaultNavBarStyle = { ...style, ...defaultNavBarStyle };
    }
    return (React.createElement("div", Object.assign({ style: defaultNavBarStyle, className: "ui-nav-bar " + className + ' ' + position }, customProps), props.children));
};
NavBar.defaultProps = defaultProps;
export default withTheme(NavBar, "NavBar");
