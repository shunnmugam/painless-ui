import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
interface InputProps {
    className?: string
    type: string
    [key: string]: any
}

const defaultProps = {
    className: ''
}

const Input: React.FC<InputProps> = (props): JSX.Element => {
    if(props.type === 'checkbox') {
        const modifiedProps = {...props}
        delete modifiedProps.type;
        return <Checkbox {...modifiedProps} />
    }
    return <></>
}

Input.defaultProps = defaultProps;
export default Input;