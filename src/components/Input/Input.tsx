import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import InputBox from '../InputBox/InputBox';
interface InputProps {
    className?: string
    type: string
    [key: string]: any
}

const defaultProps = {
    className: ''
}

const Input: React.FC<InputProps> = (props): JSX.Element => {
    switch(props.type) {
        case 'checkbox':
            const modifiedProps = {...props}
            delete modifiedProps.type;
            return <Checkbox {...modifiedProps} />
        default:
            return <InputBox {...props} />
    }
}

Input.defaultProps = defaultProps;
export default Input;