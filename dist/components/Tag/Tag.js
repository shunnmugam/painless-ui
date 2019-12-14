import React from 'react';
import './Tag.css';
const defaultProps = {
    className: '',
    style: {},
    addOnsStyle: {}
};
const Tag = (props) => {
    const { addons, className, style, addOnsStyle, ...customProps } = props;
    return (React.createElement("div", Object.assign({ style: style, className: "ui-tags " + (addons !== undefined ? "has-addons " : '') + className }, customProps),
        React.createElement("span", { className: "tag" }, props.children),
        addons !== undefined ?
            React.createElement("span", { className: "tag bg-default", style: addOnsStyle }, addons)
            : React.createElement(React.Fragment, null)));
};
Tag.defaultProps = defaultProps;
export default Tag;
