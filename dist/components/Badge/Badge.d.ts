import React from 'react';
import './Badge.css';
interface BadgeProps {
    animation?: boolean;
    bgColor?: string;
    color?: string;
    children?: any;
    className?: string;
    style?: object;
    [key: string]: any;
}
declare const Badge: React.FC<BadgeProps>;
export default Badge;
