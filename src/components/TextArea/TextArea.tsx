import React from 'react';
import { withTheme } from '../../providers/ThemeProvider';
import { componentTheme, themeColors } from "../../providers/theme";
import './TextArea.css';

interface TextAreaProps {
    className?: any
    style?: object
    rows?: number
    placeholder?: string
    theme?: componentTheme
    [key:string]: any
}
const TextArea:React.FC<TextAreaProps> = (props) => {
    const { className, theme, style, ...customProps} = props;
    let defaultClassName = "";
    if(className) {
        defaultClassName = className;
    }
    if(theme && theme.className) {
        defaultClassName+=" " + theme.className;
    }
    let customStyle = {};
    if(theme && theme.style && theme.style.textarea) {
        customStyle = theme.style.textarea;
    }
    if(style) {
        customStyle = {...customStyle,...style}
    }

    return <textarea className={'ui-textarea ' + defaultClassName} style={style} {...customProps}>
        {props.children}
    </textarea>
}

export default withTheme(TextArea, "TextArea");