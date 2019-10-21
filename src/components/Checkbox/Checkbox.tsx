import React from 'react';
import { withTheme } from '../../providers/ThemeProvider';
import { componentTheme, themeColors } from "../../providers/theme";
import './Checkbox.css';

interface CheckboxProps {
    bgColor?: string
    height?: string
    rounded?: boolean
    id?:string
    width?: string
    onClick?: Function
    theme?: componentTheme
    colors?: themeColors
    [key:string] : any
}

const defaultProps = {
  className : '',
  rounded: false,
  height: '18px',
  width: '18px'
}

const onChangeHandler = ($e:React.SyntheticEvent,props:any) => {
  if(props.onClick)
    props.onClick($e);
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
    const { bgColor, height, rounded, width, className, id, style, onClick, theme, colors, ...customProps } = props;

    let defaultCheckboxStyle: any= {
      backgroundColor : colors ? (colors.primary ? colors.primary : "#2196F3") : "#2196F3",
      // color : colors ? (colors.secondary ? colors.secondary : "white") : "white"
    }
    if(theme && theme.style && theme.style.container) {
      defaultCheckboxStyle = {...defaultCheckboxStyle,...theme.style.container}
    }
    if(bgColor) {
      defaultCheckboxStyle.backgroundColor = bgColor;
      defaultCheckboxStyle.borderColor = bgColor;
    }
    return (<label className={'ui-checkbox-container' + (rounded ? ' rounded' : '') } style={
      {...{
        width,
        height
      },...defaultCheckboxStyle,...style}
    }
    {...customProps}
    >
        <input id={id} onClick={($e) => onChangeHandler($e,props)}
        className={'ui-checkbox' + className + (theme && theme.className ? " " + theme.className : "")} 
        type="checkbox" {...customProps}
        />
        <span
        className={'checkmark ' + (rounded ? ' rounded' : '') } 
        ></span>
    </label>
  );
}

Checkbox.defaultProps = defaultProps;
export default withTheme(Checkbox,"Checkbox");