import React from 'react';
import './ToastContainer.css';
const defaultProps = {
    className: '',
    position: 'bottom-center'
};
const ToastContainer = (props) => {
    const { className, position, ...customProps } = props;
    return (React.createElement("div", Object.assign({ className: 'ui-toast-container ' + position + ' ' + className }, customProps), props.children));
};
ToastContainer.defaultProps = defaultProps;
export default ToastContainer;
