import React from 'react';
import './Switch.css';

interface SwitchProps {
    className?: string,
    height?: string | number,
    width?: string | number,
    [key:string]: any
}

const defaultProps: object = {
    className: '',
    height: '23px',
    width: '20px',
    style: {}
}
const Switch:React.FC<SwitchProps> = (props):JSX.Element => {
    const { className, style, height, width, ...customProps } = props;
    return (
        <label className={"ui-switch" + className} {
            ...{
                style : {
                    width,
                    height
                },
                ...style
            }
            
            }>
            <input type="checkbox" className={"ui-switch-input"} {...customProps} />
            <div className="ui-switch-toggle ">
                <div className="ui-switch-handle"></div>
            </div>
        </label>
    )
}
Switch.defaultProps = defaultProps;
export default Switch;