import React from 'react';
import './Switch.css';
import { withTheme } from '../../providers/ThemeProvider';
const defaultProps = {
    className: '',
    height: '23px',
    width: '20px',
    style: {}
};
const Switch = (props) => {
    const { className, style, height, width, bgColor, theme, colors, ...customProps } = props;
    let defaultSwitchStyle = {
        backgroundColor: colors ? (colors.primary ? colors.primary : "#2196F3") : "#2196F3",
        color: colors ? (colors.primary ? colors.primary : "#2196F3") : "#2196F3",
    };
    if (theme && theme.style && theme.style.container) {
        defaultSwitchStyle = { ...defaultSwitchStyle, ...theme.style.container };
    }
    if (bgColor) {
        defaultSwitchStyle.backgroundColor = bgColor;
        defaultSwitchStyle.color = bgColor;
    }
    const defaultStyle = { ...{
            width,
            height
        }, ...defaultSwitchStyle, ...style };
    return (React.createElement("label", { className: "ui-switch" + className + ' ' + (theme && theme.className ? theme.className : ''), style: defaultStyle },
        React.createElement("input", Object.assign({ type: "checkbox", className: "ui-switch-input" }, customProps)),
        React.createElement("div", { className: "ui-switch-toggle " },
            React.createElement("div", { className: "ui-switch-handle" }))));
};
Switch.defaultProps = defaultProps;
export default withTheme(Switch, 'Switch');
