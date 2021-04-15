import React, { ReactElement } from 'react';
declare const Dialog: React.FC<DialogInterface>;
export interface DialogInterface {
    className?: string;
    closeBtn?: boolean;
    animationAxis?: 'y' | 'x';
    autoClose?: boolean;
    autoCloseTime?: number;
    onClose?: () => void;
}
export declare const dialog: (content: ReactElement | string | Function, containerId: string | number, options?: DialogInterface) => void;
export default Dialog;
