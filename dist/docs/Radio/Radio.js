import React, { useState } from 'react';
import { Radio, Table } from '../../components';
import CodeAndExample from '../CodeAndExample';
const RadioExample = (props) => {
    const [eventMsg, changeMsg] = useState("un checked");
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Radio"),
        React.createElement("p", null, "Radio is input"),
        React.createElement("pre", { className: "import-section" }, `import {Radio} from 'painless-ui/components'`),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Radio, { value: "1", id: "default-radio" }),
                React.createElement("label", { htmlFor: "default-radio" }, "Default"),
                React.createElement(Radio, { value: "1", defaultChecked: true, id: "checked-radio" }),
                React.createElement("label", { htmlFor: "checked-radio" }, "Checked")), code: `
<>
    <Radio value="1" id="default-radio" />
    <label htmlFor="default-radio">Default</label>
    <Radio value="1" defaultChecked id="checked-radio" />
    <label htmlFor="checked-radio">Checked</label>
</>
` }),
        React.createElement("h3", null, "Background color"),
        React.createElement("p", null,
            "You can change bg color using ",
            React.createElement("b", null, "bgColor"),
            " prop"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Radio, { defaultChecked: true, bgColor: "rgb(220, 0, 78)", value: "1" }),
                React.createElement(Radio, { value: "1", defaultChecked: true }),
                React.createElement(Radio, { value: "1", bgColor: "rgb(76, 175, 80)", defaultChecked: true })), code: `
<>
    <Radio defaultChecked bgColor="rgb(220, 0, 78)" value="1" />
    <Radio value="1" defaultChecked />
    <Radio value="1" bgColor="rgb(76, 175, 80)" defaultChecked />
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
                React.createElement(Radio, { value: "1", bgColor: "rgb(76, 175, 80)", defaultChecked: true }),
                React.createElement(Radio, { width: "30px", height: "30px", value: "1", defaultChecked: true }),
                React.createElement(Radio, { height: "40px", width: "40px", defaultChecked: true, bgColor: "rgb(220, 0, 78)", value: "1" })), code: `
<>
    <Radio value="1" bgColor="rgb(76, 175, 80)" defaultChecked />
    <Radio width="30px" height="30px" value="1" defaultChecked />
    <Radio height="40px" width="40px" defaultChecked bgColor="rgb(220, 0, 78)" value="1" />
</>
` }),
        React.createElement("h3", null, "Events"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Radio, { onClick: (e) => {
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
    <Radio onClick={(e) => {
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
export default RadioExample;
