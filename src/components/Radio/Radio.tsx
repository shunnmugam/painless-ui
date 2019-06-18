import React from 'react';

import './Radio.css';
interface RadioProps {
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

const Radio: React.FC<RadioProps> = (props) => {
    const { bgColor, height, width, className, style, onClick, label, ...customProps } = props;
    return (
      <label className="ui-radio-container">
    <label  style={
      {...{
        backgroundColor : bgColor
      },...style}
    }
    {...customProps}
    >
        <input onClick={($e) => onChangeHandler($e,props)} className={'ui-radio '+className} type="radio" {...customProps}/>
        <span className={'checkmark '} style={{width,height}}></span>
        
    </label>
          
          { label !== undefined ? label : '' }
     </label>
  );
}

Radio.defaultProps = defaultProps;
export default Radio;