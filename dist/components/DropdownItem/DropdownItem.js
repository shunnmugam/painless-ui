import React from 'react';
const DropdownItem = (props) => {
    const { className, value, children, ...customProps } = props;
    return (React.createElement("span", Object.assign({ className: 'ui-dropdown-item ' + (className || '') }, customProps), children));
};
export default DropdownItem;
