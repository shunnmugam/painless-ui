import React from 'react';
import { withTheme } from '../../providers/ThemeProvider';
import './TextArea.css';
const TextArea = (props) => {
    const { className, theme, style, ...customProps } = props;
    let defaultClassName = "";
    if (className) {
        defaultClassName = className;
    }
    if (theme && theme.className) {
        defaultClassName += " " + theme.className;
    }
    let customStyle = {};
    if (theme && theme.style && theme.style.textarea) {
        customStyle = theme.style.textarea;
    }
    if (style) {
        customStyle = { ...customStyle, ...style };
    }
    return React.createElement("textarea", Object.assign({ className: 'ui-textarea ' + defaultClassName, style: style }, customProps), props.children);
};
export default withTheme(TextArea, "TextArea");
