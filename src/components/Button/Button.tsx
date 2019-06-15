import React from 'react';

import './Button.css';

interface ButtonProps {
    bgColor? : string;
    className?: string;
    color? : string;
    text?: string;
    style?: object,
    onClick?: Function,
    rounded?: boolean,
    styleType? : string, //background, text, outline
    [key: string]: any;
};

/*
 * default props
 */
const defaultProps: object = {
    bgColor: 'transparent',
    className: '',
    color: 'black',
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
        ...customProps
    } = props;

    return (<button data-style-type={styleType} className={'ui-button ripple ' + className + (rounded ? 'rounded' : '')}
        onClick={(e) => onClickHandler(e,props)}
        {...customProps}
        style={
            {...{
                backgroundColor: styleType === 'background' ? bgColor : 'transparent',
                color:color
            },...style}
        }>
        {text ? text : children }
    </button>)

}
Button.defaultProps = defaultProps;
export default Button;