import React from 'react';
import './Tooltip.css';
interface TooltipProps {
    element: string;
    toolTip: any;
    position?: string;
    event?: string;
    [key: string]: any;
}
declare const Tooltip: React.FC<TooltipProps>;
export default Tooltip;
