import React from 'react';
const Option = (props) => {
    const { value, children, ...customProps } = props;
    return (<option value={value} {...customProps}>
            {children}
        </option>);
};
export default Option;
