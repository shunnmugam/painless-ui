import React from 'react';
import './Toast.css';
interface ToastProps {
    className?: string;
    show?: boolean;
    title?: string;
    options?: ToastOptions;
    onClose?: Function;
    [key: string]: any;
}
interface ToastOptions {
    autoClose?: boolean;
    closeOnClick?: boolean;
    time?: number;
}
declare class Toast extends React.PureComponent<ToastProps> {
    private timer;
    state: {
        show: boolean;
        prevShow: any;
    };
    clear: (forceClick?: boolean) => void;
    setTimer: (callBack: Function) => void;
    static getDerivedStateFromProps(nextProps: any, state: any): {
        show: any;
        prevShow: any;
    };
    componentDidUpdate(prevProps: any, prevState: any): void;
    componentDidMount(): void;
    render(): JSX.Element;
}
export default Toast;
