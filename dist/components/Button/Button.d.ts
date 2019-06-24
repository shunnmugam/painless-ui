import React from 'react';
import './Button.css';
interface ButtonProps {
    bgColor?: string;
    className?: string;
    color?: string;
    text?: string;
    style?: object;
    onClick?: Function;
    rounded?: boolean;
    styleType?: string;
    [key: string]: any;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
