import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { NEW_DIALOG } from '../../const/events';
import { eventHandler } from '../../utills/eventHandler';
// import './Dialog.scss';
const Dialog = (props) => {
    const [isAnimating, updateAnimation] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            updateAnimation(false);
        }, 25);
    }, []);
    useEffect(() => {
        if (props.autoClose !== false) {
            const timer = setTimeout(() => {
                updateAnimation(true);
                setTimeout(() => {
                    close();
                }, 250);
            }, props.autoCloseTime ? (props.autoCloseTime - 250) : 5000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [props.autoClose]);
    const animationClassName = useMemo(() => {
        if (isAnimating) {
            if (props.animationAxis === 'y') {
                return 'on-y ';
            }
            else {
                return 'on-x ';
            }
        }
        return ' ';
    }, [props.animationAxis, isAnimating]);
    const close = useCallback(() => {
        if (props.onClose) {
            props.onClose();
        }
    }, [props.onClose]);
    return React.createElement(React.Fragment, null,
        React.createElement("div", { className: "dialog " + (animationClassName) },
            props.closeBtn !== false ?
                React.createElement("div", { className: "close", "data-dialog-action": "hide", onClick: () => {
                        updateAnimation(true);
                        setTimeout(() => {
                            close();
                        }, 250);
                    } })
                : null,
            React.createElement("div", { className: "dialogContent" }, typeof props.children === "function" ? props.children({
                onClose: () => {
                    updateAnimation(true);
                    setTimeout(() => {
                        close();
                    }, 250);
                }
            })
                : props.children)));
};
export const dialog = (content, containerId, options) => {
    eventHandler.emit(NEW_DIALOG, content, containerId, options);
};
export default Dialog;
