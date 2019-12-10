import React from 'react';
const Tab = (props) => {
    return <>{props.label && props.label !== '' ? props.label : props.children}</>;
};
export default Tab;
