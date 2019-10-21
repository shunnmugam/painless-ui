import React from 'react';
const Option = (props) => {
    const { value, children, ...customProps } = props;
    return (React.createElement("option", Object.assign({ value: value }, customProps), children));
};
export default Option;
