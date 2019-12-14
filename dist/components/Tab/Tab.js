import React from 'react';
const Tab = (props) => {
    return React.createElement(React.Fragment, null, props.label && props.label !== '' ? props.label : props.children);
};
export default Tab;
