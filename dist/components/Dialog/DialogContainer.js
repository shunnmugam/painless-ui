import React from 'react';
import './Dialog.css';
import { eventHandler } from '../../utills/eventHandler';
import { NEW_DIALOG } from '../../const/events';
import Dialog from '../Dialog/Dialog';
const defaultProps = {
    containerId: "0",
    className: '',
    position: 'bottom-right',
};
class DialogContainer extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            dialog: []
        };
        this.count = 0;
    }
    componentDidMount() {
        console.log("mount");
        eventHandler.on(NEW_DIALOG, (content, containerId, c) => {
            console.log("emitted");
            if (this.props.containerId === containerId) {
                this.count++;
                const dialog = [...this.state.dialog];
                const config = {
                    ...c,
                };
                let id = "UI_DIALOG_" + (this.count);
                dialog.push({
                    content,
                    config,
                    id
                });
                this.setState({
                    dialog
                });
            }
        });
    }
    findClassName() {
        let className = 'bottom right';
        if (this.props.position) {
            const arr = this.props.position.split("-");
            className = arr.join(" ");
        }
        return className;
    }
    remove(id) {
        const dialog = [...this.state.dialog];
        const i = dialog.findIndex((t) => t.id === id);
        if (i !== -1)
            dialog.splice(i, 1);
        this.setState({
            dialog
        });
    }
    render() {
        const { className, position, containerId, ...customProps } = this.props;
        if (this.state.dialog.length === 0) {
            return React.createElement(React.Fragment, null);
        }
        return (React.createElement("div", Object.assign({ className: 'ui-dialog-container ' + this.findClassName() + ' ' + className }, customProps), this.state.dialog.map((dialog) => {
            const { onClose, ...props } = dialog.config;
            return React.createElement(Dialog, Object.assign({ key: dialog.id, onClose: () => {
                    this.remove(dialog.id);
                    if (onClose) {
                        onClose();
                    }
                } }, props), dialog.content);
        })));
    }
}
DialogContainer.defaultProps = defaultProps;
export default DialogContainer;
