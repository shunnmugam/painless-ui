import React from 'react';
import './Modal.css';
interface ModalProps {
    className?: string;
    open?: boolean;
    [key: string]: any;
}
declare class Modal extends React.PureComponent<ModalProps> {
    state: {
        open: boolean;
        prevOpen: any;
    };
    static getDerivedStateFromProps(nextProps: any, prevState: any): {
        prevOpen: any;
        open: any;
    };
    close: () => void;
    render(): JSX.Element;
}
export default Modal;
