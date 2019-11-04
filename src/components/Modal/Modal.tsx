import React from 'react';
import './Modal.css';

interface ModalProps {
    className?: string
    open?: boolean
    onClose?: Function
    [key:string]: any
}

class Modal extends React.PureComponent<ModalProps> {

    close = () => {
        if(this.props.onClose) {
            this.props.onClose();
        }
    }

    render() {
        const { className, open, ...customProps} = this.props;
        return (
                <div onClick={this.close} className={'ui-modal '+ (open === true ? 'show-modal ' : '' ) + (className || '') } {...customProps}>
                    <div onClick={(e) => e.stopPropagation()} className={'modal-content '+ (open === true ? 'open ' : 'closed' )}>
                        <span onClick={this.close} className="close-button">&times;</span>
                        <div className="ui-model-body">{this.props.children}</div>
                    </div>
                </div>
            )
    }
}

export default Modal;