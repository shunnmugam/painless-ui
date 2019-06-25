import React from 'react';
import './ToastContainer.css';
interface ToastContainerProps {
    position?: string,
    className? : string
    [key:string]: any
}

const defaultProps:ToastContainerProps = {
    className: '',
    position: 'bottom-center'
}
const ToastContainer:React.FC<ToastContainerProps> = (props) => {
    const { className, position, ...customProps} = props;
    return (
        <div className={'ui-toast-container ' + position + ' '+ className} {...customProps}>
            {props.children}
        </div>
    )
}

ToastContainer.defaultProps = defaultProps;
export default ToastContainer;