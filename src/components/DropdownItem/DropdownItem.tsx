import React from 'react';

interface DropdownItemProps {
    children: any
    [key:string]: any
}
const DropdownItem: React.FC<DropdownItemProps> = (props) => {
    const { className, value, children, ...customProps } = props;
    return (
        <span className={'ui-dropdown-item '+ (className || '')} {...customProps}>
            {children}
        </span>
    )
}

export default DropdownItem;