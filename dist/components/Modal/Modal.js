import React from 'react';
import './Modal.css';
class Modal extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.close = () => {
            if (this.props.onClose) {
                this.props.onClose();
            }
        };
    }
    render() {
        const { className, open, closeElement, outsideListener, ...customProps } = this.props;
        return (React.createElement("div", Object.assign({ onClick: () => {
                if (outsideListener === undefined || outsideListener === true)
                    this.close();
            }, className: 'ui-modal ' + (open === true ? 'show-modal ' : '') + (className || '') }, customProps),
            React.createElement("div", { onClick: (e) => e.stopPropagation(), className: 'modal-content ' + (open === true ? 'open ' : 'closed') },
                closeElement ? React.createElement("span", { onClick: this.close }, closeElement) :
                    React.createElement("span", { onClick: this.close, className: "close-button" }, "\u00D7"),
                React.createElement("div", { className: "ui-model-body" }, this.props.children))));
    }
}
export default Modal;
