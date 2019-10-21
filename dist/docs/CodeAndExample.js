import React, { useState } from 'react';
import { TabContainer, TabGroup, Tab, TabWrapper } from '../components';
const CodeAndExample = (props) => {
    const [activeTab, changeActiveTab] = useState(0);
    return React.createElement(React.Fragment, null,
        React.createElement(TabWrapper, null,
            React.createElement(TabGroup, { onClick: changeActiveTab },
                React.createElement(Tab, null, "Example"),
                React.createElement(Tab, null, "Code")),
            React.createElement(TabContainer, { active: 0 === activeTab }, props.example),
            React.createElement(TabContainer, { active: 1 === activeTab },
                React.createElement("pre", null,
                    React.createElement("code", null, props.code)))));
};
export default CodeAndExample;
