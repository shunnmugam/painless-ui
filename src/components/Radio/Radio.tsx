import React from 'react';
import { withTheme } from '../../providers/ThemeProvider';
import { componentTheme, themeColors } from "../../providers/theme";
import './Radio.css';
interface RadioProps {
    bgColor?: string
    height?: string
    width?: string
    onClick?: Function
    theme?: componentTheme
    colors?: themeColors
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
    const { bgColor, height, width, className, style, onClick, label, theme, colors, ...customProps } = props;

    let defaultRadioStyle: any= {
      backgroundColor : colors ? (colors.primary ? colors.primary : "#2196F3") : "#2196F3",
      // color : colors ? (colors.secondary ? colors.secondary : "white") : "white"
    }

    if(theme && theme.style && theme.style.container) {
      defaultRadioStyle = {...defaultRadioStyle,...theme.style.container}
    }
    if(bgColor) {
      defaultRadioStyle.backgroundColor = bgColor;
      defaultRadioStyle.borderColor = bgColor;
    }

    return (
      <label className="ui-radio-container" style={{width,height}}>
    <label  style={
      {...{
        backgroundColor : bgColor
      },...defaultRadioStyle,...style}
    }
    {...customProps}
    >
        <input onClick={($e) => onChangeHandler($e,props)} className={'ui-radio '+className +' ' + (theme && theme.className ? " " + theme.className : "")} 
        type="radio" {...customProps}/>
        <span className={'checkmark '} style={{width,height}}></span>
        
    </label>
          
          { label !== undefined ? label : '' }
     </label>
  );
}

Radio.defaultProps = defaultProps;
export default withTheme(Radio,"Radio");