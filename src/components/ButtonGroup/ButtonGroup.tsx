import React from 'react';
import { withTheme } from '../../providers/ThemeProvider';
import { componentTheme } from "../../providers/theme";
import './ButtonGroup.css';

interface ButtonGroupProps {
    children: any
    className?: string
    fullWidth?: boolean
    style?: object
    vertical?: boolean
    theme?: componentTheme
    [key: string]: any
}

const defaultProps: object = {
    className: ''
}
const ButtonGroup: React.FC<ButtonGroupProps> = (props) : JSX.Element => {
    if(props.children === undefined) {
        throw new Error('children is mandatory for button group');
    }
    const {children, className, fullWidth, style, vertical, theme, ...customProps } = props;
    let defaultButtonGroupStyle = {};
    if(theme &&  theme.style && theme.style.container) {
        defaultButtonGroupStyle = theme.style.container
    }
    if(style) {
        defaultButtonGroupStyle = {...defaultButtonGroupStyle,...style}
    }
    
    return (<div className={'ui-button-group '+ className + (fullWidth ? 'full ' : '') + 
        (vertical ? 'vertical ' : 'horizontal ') + (theme && theme.className ? " " + theme.className : '')} style={defaultButtonGroupStyle}
     {...customProps}>
        {children}
    </div>);
    
}

ButtonGroup.defaultProps = defaultProps;

export default withTheme(ButtonGroup,'ButtonGroup');