import React from 'react';
import { withTheme } from '../../providers/ThemeProvider';
import { componentTheme, themeColors } from "../../providers/theme";
import './NavBar.css';

interface NavBarProps {
    bgColor?: string
    className?: string
    position?: string
    theme?: componentTheme
    colors?: themeColors
    style?: object
    [key:string]: any
}

const defaultProps:NavBarProps = {
    className: '',
    position: ''
}
const NavBar:React.FC<NavBarProps> = (props) => {
    const { bgColor, className, position, theme, colors, style, ...customProps} = props;

    let defaultNavBarStyle:any = {
        background: colors ? (colors.primary ? colors.primary : "#1976d2") : "#1976d2",
        color: colors ? (colors.secondary ? colors.secondary : "white") : "white",
    };
    if(theme && theme.style && theme.style.container) {
        defaultNavBarStyle = {...defaultNavBarStyle,...theme.style.container}
    }
    if(bgColor) {
        defaultNavBarStyle.background = bgColor;
    }

    if(style) {
        defaultNavBarStyle = {...style, ...defaultNavBarStyle}
    }
    
    return (
        <div style={defaultNavBarStyle} className={"ui-nav-bar " + className +' '+ position} {...customProps}>
            {props.children}
        </div>
    )
}

NavBar.defaultProps = defaultProps;
export default withTheme(NavBar, "NavBar");