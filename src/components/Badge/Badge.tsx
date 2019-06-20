import React from 'react';

import './Badge.css';
interface BadgeProps {
    animation?: boolean
    bgColor?: string
    color?: string
    children?: any
    className?: string
    style?: object
    [key:string]: any
}
const defaultProps = {
    animation: true,
    bgColor: '#fe3824',
    color: 'white',
    className: '',
    children: '',
    style: {}
}

const Badge:React.FC<BadgeProps> = (props): JSX.Element => {
    const { animation, bgColor, color, className, children, style, ...customProps } = props;
    return (<span style={
        {...{backgroundColor : bgColor, color, borderColor: bgColor},...{style}}
        } className={'ui-badge ' + (animation ? 'animation ': '') + className + (children === '' ? ' empty' : '') } {...customProps} >
        {children}
    </span>);
}

Badge.defaultProps = defaultProps;

export default Badge;