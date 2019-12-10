import React from 'react';
import './ToastContainer.css';
import toast from './util/toast';
interface ToastContainerProps {
    position?: string;
    className?: string;
    containerId: string | number;
    [key: string]: any;
}
interface toast {
    content: any;
    config: ToastProps;
}
interface ToastProps {
    className?: string;
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
declare class ToastContainer extends React.PureComponent<ToastContainerProps> {
    static defaultProps: any;
    state: {
        toast: Array<toast>;
    };
    count: number;
    componentDidMount(): void;
    remove(id: any): void;
    render(): JSX.Element;
}
export default ToastContainer;
