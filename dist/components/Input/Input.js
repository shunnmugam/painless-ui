import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import InputBox from '../InputBox/InputBox';
import { Button } from '..';
import Radio from '../Radio/Radio';
const defaultProps = {
    className: ''
};
const Input = (props) => {
    switch (props.type) {
        case 'checkbox':
            const modifiedProps = { ...props };
            delete modifiedProps.type;
            return React.createElement(Checkbox, Object.assign({}, modifiedProps));
        case 'radio':
            return React.createElement(Radio, Object.assign({}, props));
        case 'submit':
            return React.createElement(Button, Object.assign({ text: "submit" }, props, { styleType: "outline" }));
        case 'reset':
            return React.createElement(Button, Object.assign({ text: "reset" }, props, { styleType: "outline" }));
        default:
            return React.createElement(InputBox, Object.assign({}, props));
    }
};
Input.defaultProps = defaultProps;
export default Input;
