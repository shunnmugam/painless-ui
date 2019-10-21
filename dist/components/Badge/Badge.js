import React from 'react';
import { withTheme } from '../../providers/ThemeProvider';
import './Badge.css';
const defaultProps = {
    animation: false,
    // bgColor: '#fe3824',
    // color: 'white',
    className: '',
    children: '',
    rounded: false,
    style: {}
};
const Badge = (props) => {
    const { animation, bgColor, color, className, children, style, rounded, theme, colors, ...customProps } = props;
    let defaultBadgeStyle = {
        backgroundColor: colors ? (colors.primary ? colors.primary : "#fe3824") : "#fe3824",
        color: colors ? (colors.secondary ? colors.secondary : "white") : "white"
    };
    if (theme && theme.style && theme.style.container) {
        defaultBadgeStyle = { ...defaultBadgeStyle, ...theme.style.container };
    }
    if (bgColor) {
        defaultBadgeStyle.backgroundColor = bgColor;
        defaultBadgeStyle.borderColor = bgColor;
    }
    if (color) {
        defaultBadgeStyle.color = color;
    }
    return (React.createElement("span", Object.assign({ style: { ...defaultBadgeStyle, ...style }, className: 'ui-badge ' + (animation ? 'animation ' : '') + className + (children === '' ? ' empty' : '') + (rounded === true ? ' rounded' : '') }, customProps), children));
};
Badge.defaultProps = defaultProps;
export default withTheme(Badge, 'Badge');
