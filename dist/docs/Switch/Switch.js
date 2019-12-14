import React, { useState } from 'react';
import { Switch, Table } from '../../components';
import CodeAndExample from '../CodeAndExample';
const SwitchExample = () => {
    const [v, changeV] = useState("Off");
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Switch"),
        React.createElement("p", null, "Modern checkbox"),
        React.createElement("pre", { className: "import-section" }, `import {Switch} from 'painless-ui/components'`),
        React.createElement(CodeAndExample, { code: ` <Switch />`, example: React.createElement(Switch, null) }),
        React.createElement("h3", null, "Default checked"),
        React.createElement("p", null),
        React.createElement(CodeAndExample, { code: ` <Switch defaultChecked />`, example: React.createElement(Switch, { defaultChecked: true }) }),
        React.createElement("h3", null, "Background color"),
        React.createElement("p", null,
            "You can change background color using ",
            React.createElement("b", null, "bgColor"),
            " prop"),
        React.createElement(CodeAndExample, { code: ` <Switch defaultChecked bgColor="#22fb22" />`, example: React.createElement(Switch, { defaultChecked: true, bgColor: "#22fb22" }) }),
        React.createElement("h3", null, "Width and height"),
        React.createElement("p", null,
            "You can change width and height using ",
            React.createElement("b", null, "width"),
            " and ",
            React.createElement("b", null, "height"),
            " props"),
        React.createElement(CodeAndExample, { code: ` <Switch defaultChecked bgColor="#22fb22" width="100px" height="40px" />`, example: React.createElement(Switch, { bgColor: "#22fb22", width: "100px", height: "40px" }) }),
        React.createElement("h3", null, "Disabled"),
        React.createElement("p", null,
            "You can make Disabled using ",
            React.createElement("b", null, "disabled"),
            " prop"),
        React.createElement(CodeAndExample, { code: ` <>
    <Switch disabled bgColor="#22fb22" />
    <Switch disabled defaultChecked bgColor="#22fb22"  />
</>`, example: React.createElement(React.Fragment, null,
                React.createElement(Switch, { disabled: true, bgColor: "#22fb22" }),
                React.createElement(Switch, { disabled: true, defaultChecked: true, bgColor: "#22fb22" }),
                " ") }),
        React.createElement("h3", null, "Events"),
        React.createElement(CodeAndExample, { code: ` <>
    <Switch onChange={(e) => {
        changeV(e.target.checked ? "On" : "Off")
    }} bgColor="#22fb22" />
</>`, example: React.createElement(React.Fragment, null,
                React.createElement(Switch, { onChange: (e) => {
                        changeV(e.target.checked ? "On" : "Off");
                    }, bgColor: "#22fb22" }),
                " ",
                v) }),
        React.createElement("h3", null, "Props"),
        React.createElement(Table, { columns: [{
                    name: "Name",
                    selector: "name",
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
                },
                {
                    name: "bgColor",
                    type: "string",
                    default: "-"
                },
                {
                    name: "disabled",
                    type: "bool",
                    default: "false"
                },
                {
                    name: "height",
                    type: "string",
                    default: "-"
                },
                {
                    name: "width",
                    type: "string",
                    default: "-"
                },
                {
                    name: "style",
                    type: "css",
                    default: "-"
                },
                {
                    name: "[key:string]",
                    type: "any",
                    default: "-"
                }
            ] })));
};
export default SwitchExample;
