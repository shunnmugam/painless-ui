import React from 'react';
import { withTheme } from '../../providers/ThemeProvider';
import { componentTheme, themeColors } from "../../providers/theme";
import './Button.css';

interface ButtonProps {
    bgColor? : string
    className?: string
    color? : string
    text?: string
    style?: object
    onClick?: Function
    rounded?: boolean
    styleType? : string //background, text, outline
    theme?: componentTheme,
    colors? : themeColors
    [key: string]: any
};

/*
 * default props
 */
const defaultProps: object = {
    bgColor: null,
    className: '',
    color: null,
    styleType: 'background'
};

const onClickHandler = ($e:object,props:ButtonProps): void => {
    if(props.onClick !== undefined && typeof props.onClick === 'function') {
        props.onClick($e);
    }
}

const Button:React.FC<ButtonProps> = (props) => {
    const {
        bgColor,
        className,
        color,
        text,
        style,
        styleType,
        onClick,
        children,
        rounded,
        theme,
        colors,
        ...customProps
    } = props;

    let defaultButtonStyle: any= {
        backgroundColor : styleType === 'background' ? (colors ? (colors.primary ? colors.primary : null) : null) : 'transparent',
        borderColor : styleType === 'outline' ? (colors ? (colors.primary ? colors.primary : null) : null) : 'transparent',
        color : styleType === 'background' ? (colors ? (colors.secondary ? colors.secondary : null) : null) : (colors ? (colors.primary ? colors.primary : null) : null)

    }
    if(theme && theme.style && styleType && theme.style[styleType]) {
        defaultButtonStyle = {...defaultButtonStyle,...theme.style[styleType]}
    }

    if(bgColor && styleType === 'background') {
        defaultButtonStyle.backgroundColor = bgColor;
    }
    if(bgColor && styleType === 'outline') {
        defaultButtonStyle.borderColor = bgColor;
    }
    if(color) {
        defaultButtonStyle.color = color;
    }

    return (<button data-style-type={styleType} className={'ui-button ripple ' + className + (rounded ? 'rounded' : '') + 
    (theme && theme.className ? " " + theme.className : '') }
        onClick={(e) => onClickHandler(e,props)}
        {...customProps}
        style={
            {...defaultButtonStyle,...style}
        }>
        {text ? text : children }
    </button>)

}
Button.defaultProps = defaultProps;
export default withTheme(Button,'Button');