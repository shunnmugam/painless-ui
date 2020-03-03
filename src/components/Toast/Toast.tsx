import React from 'react';
import './Toast.css';

interface ToastProps {
    className?: string
    show?: boolean
    title?: string | Function
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

class Toast extends React.PureComponent<ToastProps> {

    static defaultProps;

    private timer: any = null;

    clear = (forceClick = false) => {
        if (forceClick === true || (this.props.options && this.props.options.autoClose === true)) {        
            if (this.props.onClose && typeof this.props.onClose === 'function') {
                this.props.onClose(this.props.toastId);
            }
        }
    }

    setTimer = (callBack: Function) => {
        const toasterOptions = { ...defaultToastOptions, ...this.props.options || {} };
        const time = toasterOptions.time;
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            callBack();
        }, time);
    }

    generateAnimationCss(): string {
        const toasterOptions = { ...defaultToastOptions, ...this.props.options || {} };
        const time: number = ((toasterOptions.time || 5000) - 2000) / 1000;
        return `fade-in 0.5s, expand 0.5s 0.5s, stay ${time}s 1s, shrink 0.5s ${time + 1}s, fade-out 0.5s ${time + 1.5}s`
    }

    componentDidMount() {
        if (this.props.options && this.props.options.autoClose === true) {
            this.setTimer(this.clear);
        }
    }


    render() {
        const { className, toastId, title, options, style, titleStyle, ...customProps } = this.props;
        const toasterOptions = { ...defaultToastOptions, ...options || {} };
        const animationCss = this.generateAnimationCss();
        return (<div onClick={() => {
            if(this.props.options && this.props.options.closeOnClick)
                this.clear(true);
            if(this.props.onClick)
                this.props.onClick()
        }} className={'ui-toast show '
            + (toasterOptions.autoClose === true ? ' auto-close ' : ' ')
            + (className || '')}
            style={{
                ...{
                    WebkitAnimation: animationCss,
                    animation: animationCss
                }, ...style
            }}
            {...customProps}>
            <div style={titleStyle || {}} className="ui-toast-img">
                {typeof title === 'function' ? title() :
                (title || 'Alert')}
            </div>
            <div className="ui-toast-desc">{this.props.children}</div>
        </div>)
        
    }
}

Toast.defaultProps = {
    options: defaultToastOptions
}
export default Toast;