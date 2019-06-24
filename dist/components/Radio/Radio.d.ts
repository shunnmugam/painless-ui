import React from 'react';
import './Radio.css';
interface RadioProps {
    bgColor?: string;
    height?: string;
    width?: string;
    onClick?: Function;
    [key: string]: any;
}
declare const Radio: React.FC<RadioProps>;
export default Radio;
