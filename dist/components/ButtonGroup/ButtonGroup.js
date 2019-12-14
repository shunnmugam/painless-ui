import React from 'react';
import { withTheme } from '../../providers/ThemeProvider';
import './ButtonGroup.css';
const defaultProps = {
    className: ''
};
const ButtonGroup = (props) => {
    if (props.children === undefined) {
        throw new Error('children is mandatory for button group');
    }
    const { children, className, fullWidth, style, vertical, theme, ...customProps } = props;
    let defaultButtonGroupStyle = {};
    if (theme && theme.style && theme.style.container) {
        defaultButtonGroupStyle = theme.style.container;
    }
    if (style) {
        defaultButtonGroupStyle = { ...defaultButtonGroupStyle, ...style };
    }
    return (React.createElement("div", Object.assign({ className: 'ui-button-group ' + className + (fullWidth ? 'full ' : '') +
            (vertical ? 'vertical ' : 'horizontal ') + (theme && theme.className ? " " + theme.className : ''), style: defaultButtonGroupStyle }, customProps), children));
};
ButtonGroup.defaultProps = defaultProps;
export default withTheme(ButtonGroup, 'ButtonGroup');
