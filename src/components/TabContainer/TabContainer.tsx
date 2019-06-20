import React from 'react';

interface TabContainerProps {
    active?: boolean,
    className?: string,
    [key:string] : any
}
const defaultProps = {
    active: false,
    className : '',
}
const TabContainer:React.FC<TabContainerProps> = (props) => {
    const { className, active, ...customProps } = props;
    return (
        <div role="tabpanel" className={"tab-pane "+ (active ? 'active ' : '') + className } {...customProps}>
            {props.children}
        </div>
    )
}

TabContainer.defaultProps = defaultProps;

export default TabContainer;