import React from 'react';
const defaultProps = {
    active: false,
    className: '',
};
const TabContainer = (props) => {
    const { className, active, ...customProps } = props;
    return (React.createElement("div", Object.assign({ role: "tabpanel", className: "tab-pane " + (active ? 'active ' : '') + className }, customProps), props.children));
};
TabContainer.defaultProps = defaultProps;
export default TabContainer;
