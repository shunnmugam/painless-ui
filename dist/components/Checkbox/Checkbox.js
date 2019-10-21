import React from 'react';
import './Checkbox.css';
const defaultProps = {
    bgColor: '#2196F3',
    className: '',
    rounded: false,
    height: '25px',
    width: '25px'
};
const onChangeHandler = ($e, props) => {
    if (props.onClick)
        props.onClick($e);
};
const Checkbox = (props) => {
    const { bgColor, height, rounded, width, className, style, onClick, ...customProps } = props;
    return (React.createElement("label", Object.assign({ className: 'ui-checkbox-container' + (rounded ? ' rounded' : ''), style: { ...{
                backgroundColor: bgColor,
                width,
                height
            }, ...style } }, customProps),
        React.createElement("input", Object.assign({ onClick: ($e) => onChangeHandler($e, props), className: 'ui-checkbox', type: "checkbox" }, customProps)),
        React.createElement("span", { className: 'checkmark ' + className + (rounded ? ' rounded' : '') })));
};
Checkbox.defaultProps = defaultProps;
export default Checkbox;
