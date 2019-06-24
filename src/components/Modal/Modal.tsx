import React from 'react';
import './Modal.css';

interface ModalProps {
    className?: string
    open?: boolean
    [key:string]: any
}

class Modal extends React.PureComponent<ModalProps> {
    public state = {
        open : this.props.open || false,
        prevOpen: undefined
    }
    
    static getDerivedStateFromProps(nextProps,prevState) {

        if(nextProps.open !== undefined && prevState.prevOpen !== nextProps.open) {
            return {
                prevOpen: prevState.open,
                open: nextProps.open,
            }
        }
        return null;
    }

    close = () => {
        if(this.state.open === true) {
            this.setState({
                prevOpen: this.state.open,
                open: false
            })
        }
    }

    render() {
        const { className, open, ...customProps} = this.props;
        return (
                <div onClick={this.close} className={'ui-modal '+ (this.state.open === true ? 'show-modal ' : '' ) + (className || '') } {...customProps}>
                    <div onClick={(e) => e.stopPropagation()} className={'modal-content '+ (this.state.open === true ? 'open ' : 'closed' )}>
                        <span onClick={this.close} className="close-button">&times;</span>
                        <div className="ui-model-body">{this.props.children}</div>
                    </div>
                </div>
            )
    }
}

export default Modal;