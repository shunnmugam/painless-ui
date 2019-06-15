import React from 'react';

import './Checkbox.scss';
interface CheckboxProps {
    bgColor?: string
    height?: string;
    width?: string;
    onClick?: Function;
    [key:string] : any
}

const defaultProps = {
  bgColor: '#2196F3',
  className : '',
  height: '25px',
  width: '25px'
}

const onChangeHandler = ($e:React.SyntheticEvent,props:any) => {
  if(props.onClick)
    props.onClick($e);
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
    const { bgColor, height, width, className, style, onClick, ...customProps } = props;
    return (<label className="ui-checkbox-container" style={
      {...{
        backgroundColor : bgColor
      },...style}
    }
    {...customProps}
    >
        <input onClick={($e) => onChangeHandler($e,props)} className={'ui-checkbox '+className} type="checkbox" {...customProps}/>
        <span className={'checkmark '} style={{width,height}}></span>
    </label>
  );
}

Checkbox.defaultProps = defaultProps;
export default Checkbox;