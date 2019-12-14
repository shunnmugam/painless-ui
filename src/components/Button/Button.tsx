import React, { useState } from 'react';
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

const animate = (evt, callBack) => {
        var btn = evt.currentTarget;
        const posX = evt.screenX - btn.getBoundingClientRect().left;
        const posY = evt.screenY - btn.getBoundingClientRect().top;
        
        let buttonWidth = btn.offsetWidth;
        let buttonHeight =  btn.offsetHeight;
    
  
    
   // Make it round!
    if(buttonWidth >= buttonHeight) {
      buttonHeight = buttonWidth;
    } else {
      buttonWidth = buttonHeight; 
    }
    
    // Get the center of the element
    var x = evt.pageX - posX - buttonWidth / 2;
    var y = evt.pageY - posY - buttonHeight / 2;
    
   
    // Add the ripples CSS and start the animation
    callBack ({
      width: buttonWidth,
      height: buttonHeight,
      top: y + 'px',
      left: x + 'px'
    });
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

    const [bg, changeBg ] = useState(undefined)

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

    return (<button data-style-type={styleType} className={'ui-button ripple ' + className + ' ' + (rounded ? 'rounded' : '') + 
    (theme && theme.className ? " " + theme.className : '') }
        onClick={(e) =>  {
            onClickHandler(e,props);
            animate(e,(v) => {
                changeBg(v)
            })
        }}
        {...customProps}
        style={
            {...defaultButtonStyle,...style}
        }>
        {text ? text : children }
        {bg !== undefined ? <span style={bg}></span> : <></>}
        
    </button>)

}
Button.defaultProps = defaultProps;
export default withTheme(Button,'Button');