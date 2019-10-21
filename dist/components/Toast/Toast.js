import React from 'react';
import './Toast.css';
const defaultToastOptions = {
    autoClose: true,
    closeOnClick: false,
    time: 5000
};
class Toast extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.timer = null;
        this.state = {
            show: this.props.show || false,
            prevShow: undefined
        };
        this.clear = (forceClick = false) => {
            if (forceClick === true || (this.props.options && this.props.options.autoClose === true)) {
                this.setState({
                    show: false,
                    prevShow: this.state.show
                });
                if (this.props.onClose && typeof this.props.onClose === 'function') {
                    this.props.onClose(false);
                }
            }
        };
        this.setTimer = (callBack) => {
            const toasterOptions = { ...defaultToastOptions, ...this.props.options || {} };
            const time = toasterOptions.time;
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                callBack();
            }, time);
        };
    }
    static getDerivedStateFromProps(nextProps, state) {
        if (nextProps.show !== state.show) {
            return {
                show: nextProps.show,
                prevShow: state.show
            };
        }
        return null;
    }
    generateAnimationCss() {
        const toasterOptions = { ...defaultToastOptions, ...this.props.options || {} };
        const time = ((toasterOptions.time || 5000) - 2000) / 1000;
        return `fade-in 0.5s, expand 0.5s 0.5s, stay ${time}s 1s, shrink 0.5s ${time + 1}s, fade-out 0.5s ${time + 1.5}s`;
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
            return (React.createElement("div", Object.assign({ onClick: () => {
                    if (toasterOptions.closeOnClick === true)
                        this.clear(true);
                }, className: 'ui-toast ' + (this.state.show === true ? 'show ' : '')
                    + (toasterOptions.autoClose === true ? ' auto-close ' : ' ')
                    + (className || ''), style: {
                    ...{
                        WebkitAnimation: animationCss,
                        animation: animationCss
                    }, ...style
                } }, customProps),
                React.createElement("div", { className: "ui-toast-img" }, title || 'Alert'),
                React.createElement("div", { className: "ui-toast-desc" }, this.props.children)));
        }
        else {
            return React.createElement(React.Fragment, null);
        }
    }
}
export default Toast;
