import React from 'react';
import './Checkbox.css';
interface CheckboxProps {
    bgColor?: string;
    height?: string;
    rounded?: boolean;
    width?: string;
    onClick?: Function;
    [key: string]: any;
}
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
