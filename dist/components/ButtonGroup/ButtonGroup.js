import React from 'react';
import './ButtonGroup.css';
const defaultProps = {
    className: ''
};
const ButtonGroup = (props) => {
    if (props.children === undefined) {
        throw new Error('children is mandatory for button group');
    }
    const { children, className, fullWidth, vertical, ...customProps } = props;
    return (React.createElement("div", Object.assign({ className: 'ui-button-group ' + className + (fullWidth ? 'full' : '') + (vertical ? 'vertical' : 'horizontal') }, customProps), children));
};
ButtonGroup.defaultProps = defaultProps;
export default ButtonGroup;
