import React from 'react';
import './Switch.css';
const defaultProps = {
    className: '',
    height: '23px',
    width: '20px',
    style: {}
};
const Switch = (props) => {
    const { className, style, height, width, ...customProps } = props;
    return (React.createElement("label", Object.assign({ className: "ui-switch" + className }, {
        style: {
            width,
            height
        },
        ...style
    }),
        React.createElement("input", Object.assign({ type: "checkbox", className: "ui-switch-input" }, customProps)),
        React.createElement("div", { className: "ui-switch-toggle " },
            React.createElement("div", { className: "ui-switch-handle" }))));
};
Switch.defaultProps = defaultProps;
export default Switch;
