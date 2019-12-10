import React from 'react';
import './Modal.css';

interface ModalProps {
    className?: string
    open?: boolean
    onClose?: Function
    closeElement?: any
    outsideListener?: boolean
    [key:string]: any
}

class Modal extends React.PureComponent<ModalProps> {

    close = () => {
        if(this.props.onClose) {
            this.props.onClose();
        }
    }

    render() {
        const { className, open, closeElement, outsideListener, ...customProps} = this.props;
        return (
                <div onClick={() => {
                    if(outsideListener === undefined || outsideListener === true)
                        this.close()
                }} className={'ui-modal '+ (open === true ? 'show-modal ' : '' ) + (className || '') } {...customProps}>
                    <div onClick={(e) => e.stopPropagation()} className={'modal-content '+ (open === true ? 'open ' : 'closed' )}>
                    {closeElement ? <span onClick={this.close}>{closeElement}</span> :
                    <span onClick={this.close} className="close-button">&times;</span> }
                        <div className="ui-model-body">{this.props.children}</div>
                    </div>
                </div>
            )
    }
}

export default Modal;