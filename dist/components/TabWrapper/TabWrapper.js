import React from 'react';
import TabGroup from '../TabGroup/TabGroup';
import TabContainer from '../TabContainer/TabContainer';
const TabWrapper = (props) => {
    return (React.createElement("div", { style: { width: props.width || '100%' }, className: "ui-card ui-z-depth " + props.className },
        React.Children.toArray(props.children).find((child) => {
            if (child.type === TabGroup) {
                return child;
            }
            return false;
        }),
        React.createElement("div", { className: "ui-card-body" },
            React.createElement("div", { className: "tab-content" }, React.Children.toArray(props.children).map((child) => {
                if (child.type === TabContainer) {
                    return child;
                }
                return false;
            })))));
};
export default TabWrapper;
