import React from 'react';

interface OptionProps {
    children: any
    text?: string
    value: any
    [key:string]: any
}
const Option: React.FC<OptionProps> = (props) => {
    const { value, children, ...customProps } = props;
    return (
        <option value={value} {...customProps}>
            {children}
        </option>
    )
}

export default Option;