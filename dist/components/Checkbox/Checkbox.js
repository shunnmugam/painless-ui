import React from 'react';
import { withTheme } from '../../providers/ThemeProvider';
import './Checkbox.css';
const defaultProps = {
    className: '',
    rounded: false,
    height: '18px',
    width: '18px'
};
const onChangeHandler = ($e, props) => {
    if (props.onClick)
        props.onClick($e);
};
const Checkbox = (props) => {
    const { bgColor, height, rounded, width, className, id, style, onClick, theme, colors, ...customProps } = props;
    let defaultCheckboxStyle = {
        backgroundColor: colors ? (colors.primary ? colors.primary : "#2196F3") : "#2196F3",
    };
    if (theme && theme.style && theme.style.container) {
        defaultCheckboxStyle = { ...defaultCheckboxStyle, ...theme.style.container };
    }
    if (bgColor) {
        defaultCheckboxStyle.backgroundColor = bgColor;
        defaultCheckboxStyle.borderColor = bgColor;
    }
    return (React.createElement("label", Object.assign({ className: 'ui-checkbox-container' + (rounded ? ' rounded' : ''), style: { ...{
                width,
                height
            }, ...defaultCheckboxStyle, ...style } }, customProps),
        React.createElement("input", Object.assign({ id: id, onClick: ($e) => onChangeHandler($e, props), className: 'ui-checkbox' + className + (theme && theme.className ? " " + theme.className : ""), type: "checkbox" }, customProps)),
        React.createElement("span", { className: 'checkmark ' + (rounded ? ' rounded' : '') })));
};
Checkbox.defaultProps = defaultProps;
export default withTheme(Checkbox, "Checkbox");
