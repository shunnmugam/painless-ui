import React from 'react';
import './Toast.css';

interface ToastProps {
    className?: string
    show?: boolean
    title?: string
    options?: ToastOptions
    style?: object
    onClose?: Function
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

    private timer: any = null;

    state = {
        show: this.props.show || false,
        prevShow: undefined
    }

    clear = (forceClick = false) => {
        if (forceClick === true || (this.props.options && this.props.options.autoClose === true)) {
            this.setState({
                show: false,
                prevShow: this.state.show
            });

            if (this.props.onClose && typeof this.props.onClose === 'function') {
                this.props.onClose(false);
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

    static getDerivedStateFromProps(nextProps, state) {
        if (nextProps.show !== state.show) {
            return {
                show: nextProps.show,
                prevShow: state.show
            }
        }
        return null;
    }

    generateAnimationCss(): string {
        const toasterOptions = { ...defaultToastOptions, ...this.props.options || {} };
        const time: number = ((toasterOptions.time || 5000) - 2000) / 1000;
        return `fade-in 0.5s, expand 0.5s 0.5s, stay ${time}s 1s, shrink 0.5s ${time + 1}s, fade-out 0.5s ${time + 1.5}s`
    }
    // eslint-disable-next-line
    componentDidUpdate(prevProps, prevState) {
        if (this.state.show === true && prevState.show !== true) {
            this.setTimer(this.clear);
        }
    }

    componentDidMount() {
        if (this.state.show === true) {
            this.setTimer(this.clear);
        }
    }


    render() {
        const { className, show, title, options, style, ...customProps } = this.props;
        const toasterOptions = { ...defaultToastOptions, ...options || {} };
        if (show === true) {
            const animationCss = this.generateAnimationCss();
            return (<div onClick={() => {
                if (toasterOptions.closeOnClick === true)
                    this.clear(true);
                }} className={'ui-toast ' + (this.state.show === true ? 'show ' : '')
                + (toasterOptions.autoClose === true ? ' auto-close ' : ' ')
                + (className || '')}
                style={{
                    ...{
                        WebkitAnimation: animationCss,
                        animation: animationCss
                    }, ...style
                }}
                {...customProps}>
                <div className="ui-toast-img">{title || 'Alert'}</div>
                <div className="ui-toast-desc">{this.props.children}</div>
            </div>)
        } else {
            return <></>;
        }
    }
}

export default Toast;