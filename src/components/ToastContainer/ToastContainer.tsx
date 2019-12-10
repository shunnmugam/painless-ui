import React from 'react';
import './ToastContainer.css';
import { eventHandler } from './util/eventHandler';
import { NEW_TOAST } from './const/events';
import Toast from '../Toast/Toast';
import toast from './util/toast';
interface ToastContainerProps {
    position?: string
    className? : string
    containerId : string|number
    [key:string]: any
}

const defaultProps:ToastContainerProps = {
    containerId: "0",
    className: '',
    position: 'bottom-center',
}

interface toast {
    content: any
    config: ToastProps
}

interface ToastProps {
    className?: string
    title?: string
    options?: ToastOptions
    style?: object
    onClose?: Function
    titleStyle?: object
    [key: string]: any
}

interface ToastOptions {
    autoClose?: boolean
    closeOnClick?: boolean
    time?: number
}

const defaultToastOptions: ToastOptions = {
    autoClose: true,
    closeOnClick: false,
    time: 5000
}


class ToastContainer extends React.PureComponent<ToastContainerProps> {
    static defaultProps;

    state: {toast : Array<toast>} = {
        toast : []
    }

    count = 0;

    componentDidMount() {
        eventHandler.on(NEW_TOAST, (content, containerId, c = {options: defaultToastOptions}) => {
            if(this.props.containerId === containerId) {
                this.count++;
                const toast = [...this.state.toast];
                const config = {
                    ...c,
                    options: {
                        ...defaultToastOptions,
                        ...c.options
                    }
                }
                if(!config.toastId) {
                    config.toastId = "UI_TOAST_"+(this.count);
                }
                toast.push({
                    content,
                    config})
                this.setState({
                    toast
                })
            }
        })
    }

    remove(id) {
        const toast = [...this.state.toast];
        const i = toast.findIndex((t) => t.config.toastId === id)
        if(i !== -1)
            toast.splice(i,1);
        this.setState({
            toast
        })
    }

    render() {

        const { className, position, containerId, ...customProps} = this.props;
        if(this.state.toast.length === 0) {
            return <></>
        }
        return (
            <div className={'ui-toast-container ' + position + ' '+ className} {...customProps}>
                {this.state.toast.map((toast) => {
                    const {onClose , ...props} = toast.config;
                    return <Toast key={props.toastId} onClose={(id) => {
                        this.remove(id)
                        if(onClose) {
                            onClose(id);
                        }
                    }} {...props}>{toast.content}</Toast>
                })}
            </div>
        )
    }
}

ToastContainer.defaultProps = defaultProps;
export default ToastContainer;
