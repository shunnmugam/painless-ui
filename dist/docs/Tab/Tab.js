import React, { useState } from 'react';
import { TabContainer, TabGroup, Tab, TabWrapper, Table } from '../../components';
import CodeAndExample from '../CodeAndExample';
const TabExample = (props) => {
    const [activeTab, changeActiveTab] = useState(0);
    return React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Tab"),
        React.createElement("pre", { className: "import-section" }, `import {TabContainer, TabGroup, Tab, TabWrapper} from 'painless-ui/components'`),
        React.createElement("p", null, "there are 4 sub-components in tab component"),
        React.createElement("ol", null,
            React.createElement("li", null, "TabWrapper"),
            React.createElement("li", null, "TabGroup"),
            React.createElement("li", null, "Tab"),
            React.createElement("li", null, "TabContainer")),
        React.createElement("h3", null, "TabWrapper"),
        React.createElement("p", null, "main wrapper for entire tab"),
        React.createElement("h3", null, "TabGroup"),
        React.createElement("p", null, "wrapper for tab link"),
        React.createElement("h3", null, "Tab"),
        React.createElement("p", null, "link or head section"),
        React.createElement("h3", null, "TabContainer"),
        React.createElement("p", null, "tab body"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(TabWrapper, null,
                    React.createElement(TabGroup, { onClick: changeActiveTab, id: "test" },
                        React.createElement(Tab, null, "Tab 1"),
                        React.createElement(Tab, null, "Tab 2"),
                        React.createElement(Tab, null, "Tab 3")),
                    React.createElement(TabContainer, { active: 0 === activeTab }, "Tab 1 content"),
                    React.createElement(TabContainer, { active: 1 === activeTab }, "Tab 2 content"),
                    React.createElement(TabContainer, { active: 2 === activeTab }, "Tab 3 content"))), code: `
const [ activeTab, changeActiveTab ] = useState(0);
return (<>
    <TabWrapper>
        <TabGroup onClick={changeActiveTab}>
            <Tab>
                Tab 1
            </Tab>
            <Tab>
                Tab 2
            </Tab>
            <Tab>
                Tab 3
            </Tab>
        </TabGroup>
        <TabContainer active={0 === activeTab}>
            Tab 1 content
        </TabContainer>
        <TabContainer active={1 === activeTab}>
            Tab 2 content
        </TabContainer>
        <TabContainer active={2 === activeTab}>
            Tab 3 content
        </TabContainer>
    </TabWrapper>
</>)` }),
        React.createElement("h3", null, "TabWrapper props"),
        React.createElement(Table, { columns: [{
                    selector: "name",
                    name: "Name"
                }, {
                    name: "Type",
                    selector: "type"
                }, {
                    name: "Default",
                    selector: "default"
                }], data: [{
                    name: "className",
                    type: "string",
                    default: "-"
                }, {
                    name: "width",
                    type: "string",
                    default: "100%"
                }] }),
        React.createElement("h3", null, "TabGroup props"),
        React.createElement(Table, { columns: [{
                    selector: "name",
                    name: "Name"
                }, {
                    name: "Type",
                    selector: "type"
                }, {
                    name: "Default",
                    selector: "default"
                }], data: [{
                    name: "className",
                    type: "string",
                    default: "-"
                }, {
                    name: "activeColor",
                    type: "string",
                    default: React.createElement(React.Fragment, null,
                        React.createElement("span", { style: { padding: "1px 10px", background: "#ffc107", marginRight: "3px" } }),
                        " #ffc107")
                }, {
                    name: "color",
                    type: "string",
                    default: "white"
                },
                {
                    name: "defaultActive",
                    type: "number",
                    default: 0
                },
                {
                    name: "onClick",
                    type: "Function",
                    default: '-'
                },
                {
                    name: "width",
                    type: "string",
                    default: '100%'
                },
                {
                    name: "navType",
                    type: "button|swipe",
                    default: "button"
                }
            ] }),
        React.createElement("h3", null, "Tab props"),
        React.createElement(Table, { columns: [{
                    selector: "name",
                    name: "Name"
                }, {
                    name: "Type",
                    selector: "type"
                }, {
                    name: "Default",
                    selector: "default"
                }], data: [{
                    name: "className",
                    type: "string",
                    default: "-"
                }] }),
        React.createElement("h3", null, "TabContainer props"),
        React.createElement(Table, { columns: [{
                    selector: "name",
                    name: "Name"
                }, {
                    name: "Type",
                    selector: "type"
                }, {
                    name: "Default",
                    selector: "default"
                }], data: [{
                    name: 'active',
                    type: 'boolean',
                    default: '-'
                },
                {
                    name: "className",
                    type: "string",
                    default: "-"
                }] }));
};
export default TabExample;
