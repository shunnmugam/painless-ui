import React from 'react';
import { withTheme } from '../../providers/ThemeProvider';
import { componentTheme, themeColors } from "../../providers/theme";

import './Badge.css';
interface BadgeProps {
    animation?: boolean
    bgColor?: string
    color?: string
    children?: any
    className?: string
    style?: object
    rounded?: boolean
    theme?: componentTheme
    colors? : themeColors
    [key:string]: any
}
const defaultProps = {
    animation: false,
    // bgColor: '#fe3824',
    // color: 'white',
    className: '',
    children: '',
    rounded: false,
    style: {}
}

const Badge:React.FC<BadgeProps> = (props): JSX.Element => {
    const { animation, bgColor, color, className, children, style, rounded, theme, colors, ...customProps } = props;
    let defaultBadgeStyle: any= {
        backgroundColor : colors ? (colors.primary ? colors.primary : "#fe3824") : "#fe3824",
        color : colors ? (colors.secondary ? colors.secondary : "white") : "white"
    }
    if(theme && theme.style && theme.style.container) {
        defaultBadgeStyle = {...defaultBadgeStyle,...theme.style.container}
    }
    if(bgColor) {
        defaultBadgeStyle.backgroundColor = bgColor;
        defaultBadgeStyle.borderColor = bgColor;
    }
    if(color) {
        defaultBadgeStyle.color = color;
    }

    return (<span style={
        {...defaultBadgeStyle,...style}
        } className={'ui-badge ' + (animation ? 'animation ': '') + className + (children === '' ? ' empty' : '') + (rounded === true ? ' rounded' : '') } 
        {...customProps} >
        {children}
    </span>);
}

Badge.defaultProps = defaultProps;

export default withTheme(Badge, 'Badge');