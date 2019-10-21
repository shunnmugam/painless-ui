import React from 'react';
import './Modal.css';
class Modal extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            open: this.props.open || false,
            prevOpen: undefined
        };
        this.close = () => {
            if (this.state.open === true) {
                this.setState({
                    prevOpen: this.state.open,
                    open: false
                });
            }
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.open !== undefined && prevState.prevOpen !== nextProps.open) {
            return {
                prevOpen: prevState.open,
                open: nextProps.open,
            };
        }
        return null;
    }
    render() {
        const { className, open, ...customProps } = this.props;
        return (React.createElement("div", Object.assign({ onClick: this.close, className: 'ui-modal ' + (this.state.open === true ? 'show-modal ' : '') + (className || '') }, customProps),
            React.createElement("div", { onClick: (e) => e.stopPropagation(), className: 'modal-content ' + (this.state.open === true ? 'open ' : 'closed') },
                React.createElement("span", { onClick: this.close, className: "close-button" }, "\u00D7"),
                React.createElement("div", { className: "ui-model-body" }, this.props.children))));
    }
}
export default Modal;
