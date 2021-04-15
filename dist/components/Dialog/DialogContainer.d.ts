import React, { ReactElement } from 'react';
import './Dialog.css';
import { DialogInterface } from '../Dialog/Dialog';
interface DialogContainerProps {
    position?: "top-left" | "top-right" | "bottom-right" | "bottom-left";
    className?: string;
    containerId: string | number;
}
interface dialog {
    content: ReactElement | string | Function;
    config: DialogInterface;
    id: string;
}
declare class DialogContainer extends React.PureComponent<DialogContainerProps> {
    static defaultProps: any;
    state: {
        dialog: Array<dialog>;
    };
    count: number;
    componentDidMount(): void;
    findClassName(): string;
    remove(id: any): void;
    render(): JSX.Element;
}
export default DialogContainer;
