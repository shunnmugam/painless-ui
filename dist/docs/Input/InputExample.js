import React, { useState } from 'react';
import { Checkbox, Input, Table } from '../../components';
import CodeAndExample from '../CodeAndExample';
const InputExample = (props) => {
    const [eventMsg, changeMsg] = useState("un checked");
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Input"),
        React.createElement("p", null, "Input is referring "),
        " ",
        React.createElement("pre", null,
            " ",
            "<input />"),
        React.createElement("pre", { className: "import-section" }, `import {Input} from 'painless-ui/components'`),
        React.createElement("p", null,
            React.createElement("b", null, "Note:"),
            " type prop is mandatory"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Input, { type: "text", placeholder: "This is simple text input " })), code: `
<Input type="text" placeholder="This is simple text input "/>
` }),
        React.createElement("h3", null, "Type"),
        React.createElement("p", null, "Supported types:"),
        React.createElement("ol", null,
            React.createElement("li", null, "text"),
            React.createElement("li", null, "email"),
            React.createElement("li", null, "number"),
            React.createElement("li", null, "radio"),
            React.createElement("li", null, "checkbox"),
            React.createElement("li", null, "button"),
            React.createElement("li", null, "reset"),
            React.createElement("li", null, "submit"),
            React.createElement("li", null, "file")),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Input, { type: "text", placeholder: "This is simple text input " }),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(Input, { type: "email", placeholder: "This is simple email input with validation" }),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(Input, { type: "number", placeholder: "This is simple number input with validation" }),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(Input, { type: "radio" }),
                React.createElement("label", null, "This is simple radio input "),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(Input, { type: "checkbox" }),
                React.createElement("label", null, "This is simple checkbox "),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(Input, { type: "button", text: "Button" }),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(Input, { type: "reset", text: "Reset" }),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(Input, { type: "submit", text: "Submit" }),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(Input, { type: "file", text: "Submit" })), code: `
<>
    <Input type="text" placeholder="This is simple text input "/>
    <br />
    <br />
    <Input type="email" placeholder="This is simple email input with validation"/>
    <br />
    <br />
    <Input type="number" placeholder="This is simple number input with validation"/>
    <br />
    <br />
    <Input type="radio" />
    <label>This is simple radio input </label>
    <br />
    <br />
    <Input type="checkbox" />
    <label>This is simple checkbox </label>
    <br />
    <br />
    <Input type="button" text="Button" />
    <br />
    <br />
    <Input type="reset" text="Reset" />
    <br />
    <br />
    <Input type="submit" text="Submit" />
</>
` }),
        React.createElement("h3", null, "Validation"),
        React.createElement("p", null, "we have validation feature for input"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Input, { type: "email", placeholder: "this input have email validation on onBlur event" })), code: `
<Input type="email" placeholder="this input have email validation on onBlur event"/>
` }),
        React.createElement("h3", null, "Validation Options"),
        React.createElement("p", null,
            "You can change control validation using ",
            React.createElement("b", null, "validationOptions"),
            " prop"),
        React.createElement("ol", null,
            React.createElement("li", null, "event  : event name "),
            React.createElement("li", null, "rules  : validation rules "),
            React.createElement("li", null, "validationCallback  : callback method"),
            React.createElement("li", null, "validateNow  : if validateNow is true, it will validate immediately")),
        React.createElement("h3", null, "Validation Rules"),
        React.createElement("p", null, "You can add rules using rules key"),
        React.createElement("ul", null,
            React.createElement("li", null, "email -> it will check input is email or not "),
            React.createElement("li", null, "min:$length -> it will minimum length of input"),
            React.createElement("li", null, "max:$length -> it will maximum length of input"),
            React.createElement("li", null, "number -> it will input is number or not"),
            React.createElement("li", null, "required -> it will input is present or not")),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement("p", null, "This is email validation"),
                React.createElement(Input, { type: "text", placeholder: "", validationOptions: {
                        rules: 'email'
                    } }),
                React.createElement("p", null, "min and max validation"),
                React.createElement(Input, { type: "text", placeholder: "Min 2 and max 5", validationOptions: {
                        rules: 'min:2|max:5'
                    } }),
                React.createElement("p", null, "number validation"),
                React.createElement(Input, { type: "text", placeholder: "it should number", validationOptions: {
                        rules: 'number'
                    } }),
                React.createElement("p", null, "required validation"),
                React.createElement(Input, { type: "text", placeholder: "required field", validationOptions: {
                        rules: 'required'
                    } })), code: `
<>
    <p>This is email validation</p>
    <Input type="text" placeholder="" validationOptions={{
        rules: 'email'
    }}/>
    <p>min and max validation</p>
    <Input type="text" placeholder="Min 2 and max 5" validationOptions={{
        rules: 'min:2|max:5'
    }}/>
    <p>number validation</p>
    <Input type="text" placeholder="it should number" validationOptions={{
        rules: 'number'
    }}/>
    <p>required validation</p>
    <Input type="text" placeholder="required field" validationOptions={{
        rules: 'required'
    }}/>
</>
` }),
        React.createElement("p", null,
            "You can change validation event using ",
            React.createElement("b", null, "event"),
            " option"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement("p", null, "This is email validation for on change"),
                React.createElement(Input, { type: "text", placeholder: "", validationOptions: {
                        rules: 'email',
                        event: 'onChange'
                    } }),
                React.createElement("p", null, "min and max validation for on change"),
                React.createElement(Input, { type: "text", placeholder: "Min 2 and max 5", validationOptions: {
                        rules: 'min:2|max:5',
                        event: 'onChange'
                    } }),
                React.createElement("p", null, "number validation for on change"),
                React.createElement(Input, { type: "text", placeholder: "it should number", validationOptions: {
                        rules: 'number',
                        event: 'onChange'
                    } }),
                React.createElement("p", null, "required validation for on change"),
                React.createElement(Input, { type: "text", placeholder: "required field", validationOptions: {
                        rules: 'required',
                        event: 'onChange'
                    } })), code: `
<>
    <Input type="text" placeholder="" validationOptions={{
        rules: 'email',
        event: 'onChange'
    }}/>
    <p>min and max validation for on change</p>
    <Input type="text" placeholder="Min 2 and max 5" validationOptions={{
        rules: 'min:2|max:5',
        event: 'onChange'
    }}/>
    <p>number validation for on change</p>
    <Input type="text" placeholder="it should number" validationOptions={{
        rules: 'number',
        event: 'onChange'
    }}/>
    <p>required validation for on change</p>
    <Input type="text" placeholder="required field" validationOptions={{
        rules: 'required',
        event: 'onChange'
    }}/>
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
                    name: "validation",
                    type: "bool",
                    default: "true"
                },
                {
                    name: "validationOptions",
                    type: "object",
                    default: `{
                rules: '',
                event: 'onBlur',
                validationCallback: undefined,
                validateNow: undefined
            }`
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
export default InputExample;
