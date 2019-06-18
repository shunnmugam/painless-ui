import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import InputBox from '../InputBox/InputBox';
import { Button } from '..';
import Radio from '../Radio/Radio';
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
        case 'radio':
            return <Radio {...props} />
        case 'submit':
            return <Button text="submit" {...props} styleType="outline" />
        case 'reset':
            return <Button text="reset" {...props} styleType="outline" />
        default:
            return <InputBox {...props} />
    }
}

Input.defaultProps = defaultProps;
export default Input;