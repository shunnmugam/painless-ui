import React from 'react';
interface ControlProps {
    color?: string;
    textColor?: string;
    position: number;
    max: number;
    min: number;
    dragHandler: any;
    mouseUp: any;
    value: any;
}
declare const Control: React.FC<ControlProps>;
export default Control;
