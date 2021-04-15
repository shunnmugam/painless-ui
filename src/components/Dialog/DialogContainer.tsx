import React, { ReactElement } from 'react';
import './Dialog.css';
import { eventHandler } from '../../utills/eventHandler';
import { NEW_DIALOG } from '../../const/events';
import Dialog, {DialogInterface} from '../Dialog/Dialog';

interface DialogContainerProps {
    position?: "top-left" | "top-right" | "bottom-right" | "bottom-left"
    className? : string
    containerId : string|number
}

const defaultProps:DialogContainerProps = {
    containerId: "0",
    className: '',
    position: 'bottom-right',
}

interface dialog {
    content: ReactElement | string | Function
    config: DialogInterface
    id: string
}


class DialogContainer extends React.PureComponent<DialogContainerProps> {
    static defaultProps;

    state: {dialog : Array<dialog>} = {
        dialog : []
    }

    count = 0;

    componentDidMount() {
        console.log("mount")
        eventHandler.on(NEW_DIALOG, (content:ReactElement | string | Function, containerId, c:DialogInterface) => {
            console.log("emitted")
            if(this.props.containerId === containerId) {
                this.count++;
                const dialog = [...this.state.dialog];
                const config:DialogInterface = {
                    ...c,
                }

                let id = "UI_DIALOG_"+(this.count);


                dialog.push({
                    content,
                    config,
                    id
                })
                this.setState({
                    dialog
                })
            }
        })
    }

    findClassName() {
        let className = 'bottom right';
        if(this.props.position) {
            const arr = this.props.position.split("-");
            className = arr.join(" ");
        }
        return className;
    }

    remove(id) {
        const dialog = [...this.state.dialog];
        const i = dialog.findIndex((t) => t.id === id)
        if(i !== -1)
            dialog.splice(i,1);
        this.setState({
            dialog
        })
    }

    render() {

        const { className, position, containerId, ...customProps} = this.props;
        if(this.state.dialog.length === 0) {
            return <></>
        }

        return (
            <div className={'ui-dialog-container ' + this.findClassName() + ' '+ className} {...customProps}>
                {this.state.dialog.map((dialog) => {
                    const {onClose , ...props} = dialog.config;
                    return <Dialog key={dialog.id} onClose={() => {
                        this.remove(dialog.id)
                        if(onClose) {
                            onClose();
                        }
                    }} {...props}>{dialog.content}</Dialog>
                })}
            </div>
        )
    }
}

DialogContainer.defaultProps = defaultProps;
export default DialogContainer;
