import React, { useState } from 'react';
import { Checkbox, Table } from '../../components';
import CodeAndExample from '../CodeAndExample';
const CheckboxExample = (props) => {
    const [eventMsg, changeMsg] = useState("un checked");
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Checkbox"),
        React.createElement("p", null, "Checkbox is input"),
        React.createElement("pre", { className: "import-section" }, `import {Checkbox} from 'painless-ui/components'`),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Checkbox, { value: "1", id: "default-checkbox" }),
                React.createElement("label", { htmlFor: "default-checkbox" }, "Default"),
                React.createElement(Checkbox, { value: "1", defaultChecked: true, id: "checked-checkbox" }),
                React.createElement("label", { htmlFor: "checked-checkbox" }, "Checked")), code: `
<>
    <Checkbox value="1" id="default-checkbox" />
    <label htmlFor="default-checkbox">Default</label>
    <Checkbox value="1" defaultChecked id="checked-checkbox" />
    <label htmlFor="checked-checkbox">Checked</label>
</>
` }),
        React.createElement("h3", null, "Background color"),
        React.createElement("p", null,
            "You can change bg color using ",
            React.createElement("b", null, "bgColor"),
            " prop"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Checkbox, { defaultChecked: true, bgColor: "rgb(220, 0, 78)", value: "1" }),
                React.createElement(Checkbox, { value: "1", defaultChecked: true }),
                React.createElement(Checkbox, { value: "1", bgColor: "rgb(76, 175, 80)", defaultChecked: true })), code: `
<>
    <Checkbox defaultChecked bgColor="rgb(220, 0, 78)" value="1" />
    <Checkbox value="1" defaultChecked />
    <Checkbox value="1" bgColor="rgb(76, 175, 80)" defaultChecked />
</>
` }),
        React.createElement("h3", null, "Height & Width"),
        React.createElement("p", null,
            "You can change height and Width using ",
            React.createElement("b", null, "height"),
            " and ",
            React.createElement("b", null, "width"),
            " prop"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Checkbox, { height: "40px", width: "40px", defaultChecked: true, bgColor: "rgb(220, 0, 78)", value: "1" }),
                React.createElement(Checkbox, { width: "30px", height: "30px", value: "1", defaultChecked: true }),
                React.createElement(Checkbox, { value: "1", bgColor: "rgb(76, 175, 80)", defaultChecked: true })), code: `
<>
    <Checkbox height="40px" width="40px" defaultChecked bgColor="rgb(220, 0, 78)" value="1" />
    <Checkbox width="30px" height="30px" value="1" defaultChecked />
    <Checkbox value="1" bgColor="rgb(76, 175, 80)" defaultChecked />
</>
` }),
        React.createElement("h3", null, "Rounded"),
        React.createElement("p", null,
            "You can change shape using ",
            React.createElement("b", null, "rounded"),
            " prop"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Checkbox, { height: "40px", rounded: true, width: "40px", defaultChecked: true, bgColor: "rgb(220, 0, 78)", value: "1" }),
                React.createElement(Checkbox, { width: "30px", rounded: true, height: "30px", value: "1", defaultChecked: true }),
                React.createElement(Checkbox, { value: "1", rounded: true, bgColor: "rgb(76, 175, 80)", defaultChecked: true })), code: `
<>
    <Checkbox height="40px" rounded width="40px" defaultChecked bgColor="rgb(220, 0, 78)" value="1" />
    <Checkbox width="30px" rounded height="30px" value="1" defaultChecked  />
    <Checkbox value="1" rounded bgColor="rgb(76, 175, 80)" defaultChecked />
</>
` }),
        React.createElement("h3", null, "Events"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Checkbox, { onClick: (e) => {
                        const value = e.target.value;
                        if (e.target.checked) {
                            changeMsg("checked value is " + value);
                        }
                        else {
                            changeMsg("un checked");
                        }
                    }, bgColor: "rgb(220, 0, 78)", value: "1" }),
                eventMsg), code: `
<>
    <Checkbox onClick={(e) => {
        const value = e.target.value;
        if(e.target.checked) {
            changeMsg("checked" + " value is " +value)
        } else {
            changeMsg("un checked")
        }
    }} bgColor="rgb(220, 0, 78)" value="1" />
    {eventMsg}
</>
` }),
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
                    name: "rounded",
                    type: "bool",
                    default: "false"
                },
                {
                    name: "bgColor",
                    type: "string",
                    default: "-"
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
export default CheckboxExample;
