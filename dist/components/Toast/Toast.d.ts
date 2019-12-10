import React from 'react';
import './Toast.css';
interface ToastProps {
    className?: string;
    show?: boolean;
    title?: string;
    options?: ToastOptions;
    style?: object;
    onClose?: Function;
    titleStyle?: object;
    [key: string]: any;
}
interface ToastOptions {
    autoClose?: boolean;
    closeOnClick?: boolean;
    time?: number;
}
declare class Toast extends React.PureComponent<ToastProps> {
    static defaultProps: any;
    private timer;
    clear: (forceClick?: boolean) => void;
    setTimer: (callBack: Function) => void;
    generateAnimationCss(): string;
    componentDidMount(): void;
    render(): JSX.Element;
}
export default Toast;
