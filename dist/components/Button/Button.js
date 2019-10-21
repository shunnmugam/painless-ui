import React from 'react';
import './Button.css';
;
/*
 * default props
 */
const defaultProps = {
    bgColor: 'transparent',
    className: '',
    color: 'black',
    styleType: 'background'
};
const onClickHandler = ($e, props) => {
    if (props.onClick !== undefined && typeof props.onClick === 'function') {
        props.onClick($e);
    }
};
const Button = (props) => {
    const { bgColor, className, color, text, style, styleType, onClick, children, rounded, ...customProps } = props;
    return (React.createElement("button", Object.assign({ "data-style-type": styleType, className: 'ui-button ripple ' + className + (rounded ? 'rounded' : ''), onClick: (e) => onClickHandler(e, props) }, customProps, { style: { ...{
                backgroundColor: styleType === 'background' ? bgColor : 'transparent',
                color: color
            }, ...style } }), text ? text : children));
};
Button.defaultProps = defaultProps;
export default Button;
