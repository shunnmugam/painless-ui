import { ReactElement } from 'react';
import './Confirm.css';
interface withCustomUI {
    customUI: ({ onClose }: {
        onClose: any;
    }) => ReactElement;
    buttons?: Array<{
        className?: string;
        styleType?: 'outline' | 'text';
        label: string;
        onClick: ({ onClose: Function }: {
            onClose: any;
        }) => void;
    }>;
}
interface withoutCustomUI {
    customUI?: ({ onClose }: {
        onClose: any;
    }) => ReactElement;
    buttons: Array<{
        className?: string;
        styleType?: 'outline' | 'text';
        label: string;
        onClick: ({ onClose: Function }: {
            onClose: any;
        }) => void;
    }>;
}
interface ConfirmInterface {
    className?: string;
    title?: string;
    message?: string;
    titleClassName?: string;
    messageClassName?: string;
    outsideListener?: boolean;
    onClose?: () => void;
}
declare type ConfirmType = ConfirmInterface & (withoutCustomUI | withCustomUI);
declare const confirm: (options: ConfirmType) => void;
export default confirm;
