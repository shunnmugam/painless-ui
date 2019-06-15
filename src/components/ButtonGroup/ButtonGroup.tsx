import React from 'react';

import './ButtonGroup.scss';

interface ButtonGroupProps {
    children: any,
    className?: string,
    fullWidth?: boolean,
    vertical?: boolean
}

const defaultProps: object = {
    className: ''
}
const ButtonGroup: React.FC<ButtonGroupProps> = (props) : JSX.Element => {
    if(props.children === undefined) {
        throw new Error('children is mandatory for button group');
    }
    const {children, className, fullWidth, vertical, ...customProps } = props;
    return (<div className={'ui-button-group '+ className + (fullWidth ? 'full' : '') + (vertical ? 'vertical' : 'horizontal')} {...customProps}>
        {children}
    </div>);
    
}

ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;