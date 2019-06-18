import React from 'react';

import './Checkbox.scss';
interface CheckboxProps {
    bgColor?: string
    height?: string
    rounded?: boolean
    width?: string
    onClick?: Function
    [key:string] : any
}

const defaultProps = {
  bgColor: '#2196F3',
  className : '',
  rounded: false,
  height: '25px',
  width: '25px'
}

const onChangeHandler = ($e:React.SyntheticEvent,props:any) => {
  if(props.onClick)
    props.onClick($e);
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
    const { bgColor, height, rounded, width, className, style, onClick, ...customProps } = props;
    return (<label className={'ui-checkbox-container' + (rounded ? ' rounded' : '') } style={
      {...{
        backgroundColor : bgColor,
        width,
        height
      },...style}
    }
    {...customProps}
    >
        <input onClick={($e) => onChangeHandler($e,props)}
        className={'ui-checkbox'} 
        type="checkbox" {...customProps}
        />
        <span
        className={'checkmark '+className + (rounded ? ' rounded' : '') } 
        ></span>
    </label>
  );
}

Checkbox.defaultProps = defaultProps;
export default Checkbox;