import React, { useCallback, useState } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Model from '../Modal/Modal';
import Button from '../Button/Button';
import './Confirm.css';
const Confirm = (props) => {
    const [open, updateOpen] = useState(true);
    const close = useCallback(() => {
        updateOpen(false);
        removeElementReconfirm();
        if (props.onClose) {
            props.onClose();
        }
    }, [props.onClose]);
    return React.createElement(React.Fragment, null,
        React.createElement(Model, { className: "ui-confirm " + (props.className ?? ''), open: open, onClose: close, outsideListener: props.outsideListener ?? false, closeElement: React.createElement(React.Fragment, null) },
            React.createElement("div", { className: "ui-confirm-body" }, props.customUI ? props.customUI({ onClose: () => {
                    close();
                } }) : React.createElement(React.Fragment, null,
                props.title ?
                    React.createElement("h1", { className: "ui-confirm-body__title " + (props.titleClassName ?? '') }, props.title) :
                    null,
                props.message ?
                    React.createElement("p", { className: "ui-confirm-body__message " + (props.messageClassName ?? '') }, props.message) :
                    null,
                React.createElement("div", { className: "ui-confirm-body__button-group" }, props.buttons?.map((b) => {
                    return React.createElement(Button, { onClick: () => {
                            b.onClick({ onClose: () => {
                                    close();
                                } });
                        }, className: b.className || '', styleType: b.styleType || "text" }, b.label);
                }))))));
};
function createElementReconfirm(properties) {
    let divTarget = document.getElementById('ui-confirm-alert');
    if (divTarget) {
        // Rerender - the mounted ReactConfirmAlert
        render(React.createElement(Confirm, Object.assign({}, properties)), divTarget);
    }
    else {
        // Mount the ReactConfirmAlert component
        divTarget = document.createElement('div');
        divTarget.id = 'ui-confirm-alert';
        document.body.appendChild(divTarget);
        render(React.createElement(Confirm, Object.assign({}, properties)), divTarget);
    }
}
function removeElementReconfirm() {
    const target = document.getElementById('ui-confirm-alert');
    if (target && target.parentNode) {
        unmountComponentAtNode(target);
        target.parentNode.removeChild(target);
    }
}
const confirm = (options) => {
    createElementReconfirm(options);
};
export default confirm;
