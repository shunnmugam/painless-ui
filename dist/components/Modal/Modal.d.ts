import React from 'react';
import './Modal.css';
interface ModalProps {
    className?: string;
    open?: boolean;
    onClose?: Function;
    closeElement?: any;
    outsideListener?: boolean;
    [key: string]: any;
}
declare class Modal extends React.PureComponent<ModalProps> {
    close: () => void;
    render(): JSX.Element;
}
export default Modal;
