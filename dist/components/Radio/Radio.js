import React from 'react';
import './Radio.css';
const defaultProps = {
    bgColor: '#2196F3',
    className: '',
    height: '25px',
    width: '25px'
};
const onChangeHandler = ($e, props) => {
    if (props.onClick)
        props.onClick($e);
};
const Radio = (props) => {
    const { bgColor, height, width, className, style, onClick, label, ...customProps } = props;
    return (React.createElement("label", { className: "ui-radio-container" },
        React.createElement("label", Object.assign({ style: { ...{
                    backgroundColor: bgColor
                }, ...style } }, customProps),
            React.createElement("input", Object.assign({ onClick: ($e) => onChangeHandler($e, props), className: 'ui-radio ' + className, type: "radio" }, customProps)),
            React.createElement("span", { className: 'checkmark ', style: { width, height } })),
        label !== undefined ? label : ''));
};
Radio.defaultProps = defaultProps;
export default Radio;
