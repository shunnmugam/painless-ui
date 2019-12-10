import React from 'react';
const defaultProps = {
    active: false,
    className: '',
};
const TabContainer = (props) => {
    const { className, active, ...customProps } = props;
    return (<div role="tabpanel" className={"tab-pane " + (active ? 'active ' : '') + className} {...customProps}>
            {props.children}
        </div>);
};
TabContainer.defaultProps = defaultProps;
export default TabContainer;
