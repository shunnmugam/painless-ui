import React, { useCallback, useState } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Model from '../Modal/Modal';
import Button from '../Button/Button';
import './Confirm.css';
const Confirm = (props) => {
    var _a, _b, _c, _d, _e;
    const [open, updateOpen] = useState(true);
    const close = useCallback(() => {
        updateOpen(false);
        removeElementReconfirm();
        if (props.onClose) {
            props.onClose();
        }
    }, [props.onClose]);
    return React.createElement(React.Fragment, null,
        React.createElement(Model, { className: "ui-confirm " + ((_a = props.className) !== null && _a !== void 0 ? _a : ''), open: open, onClose: close, outsideListener: (_b = props.outsideListener) !== null && _b !== void 0 ? _b : false, closeElement: React.createElement(React.Fragment, null) },
            React.createElement("div", { className: "ui-confirm-body" }, props.customUI ? props.customUI({ onClose: () => {
                    close();
                } }) : React.createElement(React.Fragment, null,
                props.title ?
                    React.createElement("h1", { className: "ui-confirm-body__title " + ((_c = props.titleClassName) !== null && _c !== void 0 ? _c : '') }, props.title) :
                    null,
                props.message ?
                    React.createElement("p", { className: "ui-confirm-body__message " + ((_d = props.messageClassName) !== null && _d !== void 0 ? _d : '') }, props.message) :
                    null,
                React.createElement("div", { className: "ui-confirm-body__button-group" }, (_e = props.buttons) === null || _e === void 0 ? void 0 : _e.map((b) => {
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
