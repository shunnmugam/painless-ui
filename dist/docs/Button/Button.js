import React from 'react';
import { Link } from "react-router-dom";
import { Button, Table } from '../../components';
import ThemeProvider from '../../providers/ThemeProvider';
import CodeAndExample from '../CodeAndExample';
const ButtonExample = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Button"),
        React.createElement(React.Fragment, null,
            " ",
            React.createElement("p", null,
                "We have 3 types of buttons, you can switch using ",
                React.createElement("b", null, "styleType"),
                " prop "),
            React.createElement("ol", null,
                React.createElement("li", null, "Background (Default)"),
                React.createElement("li", null, "Outline"),
                React.createElement("li", null, "Text"))),
        React.createElement("pre", { className: "import-section" }, `import {Button} from 'painless-ui/components'`),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Button, null, "Default"),
                React.createElement(Button, { styleType: "outline" }, "Outline"),
                React.createElement(Button, { styleType: "text" }, "Text")), code: `
<>
    <Button>
        Default
    </Button>
    <Button styleType="outline">
        Outline
    </Button>
    <Button styleType="text">
        Text
    </Button>
</>` }),
        React.createElement("h3", null, "BgColor & Color"),
        React.createElement("p", null,
            "You can change BgColor & Color of button using ",
            React.createElement("b", null, "bgColor and color"),
            " prop"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Button, { bgColor: "#1976d2", color: "white" }, "Default"),
                React.createElement(Button, { bgColor: "#1976d2", color: "#1976d2", styleType: "outline" }, "Outline"),
                React.createElement(Button, { styleType: "text", color: "#1976d2" }, "Text"),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(Button, { bgColor: "#4caf50", color: "white" }, "Default"),
                React.createElement(Button, { bgColor: "#4caf50", color: "#4caf50", styleType: "outline" }, "Outline"),
                React.createElement(Button, { styleType: "text", color: "#4caf50" }, "Text"),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(Button, { bgColor: "#dc004e", color: "white" }, "Default"),
                React.createElement(Button, { bgColor: "#dc004e", color: "#dc004e", styleType: "outline" }, "Outline"),
                React.createElement(Button, { styleType: "text", color: "#dc004e" }, "Text")), code: `
<>
    <Button bgColor="#1976d2" color="white">
        Default
    </Button>
    <Button bgColor="#1976d2" color="#1976d2" styleType="outline">
        Outline
    </Button>
    <Button styleType="text" color="#1976d2">
        Text
    </Button>
    <br />
    <br />
    <Button bgColor="#4caf50" color="white">
        Default
    </Button>
    <Button bgColor="#4caf50" color="#4caf50" styleType="outline">
        Outline
    </Button>
    <Button styleType="text" color="#4caf50">
        Text
    </Button>
    <br />
    <br />
    <Button bgColor="#dc004e" color="white">
        Default
    </Button>
    <Button bgColor="#dc004e" color="#dc004e" styleType="outline">
        Outline
    </Button>
    <Button styleType="text" color="#dc004e">
        Text
    </Button>
</>` }),
        React.createElement("h3", null, "Rounded Button"),
        React.createElement("p", null,
            "You can change shape of button using ",
            React.createElement("b", null, "rounded"),
            " prop"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Button, { rounded: true, bgColor: "#1976d2", color: "white" }, "+"),
                React.createElement(Button, { rounded: true, bgColor: "#1976d2", color: "#1976d2", styleType: "outline" }, "+"),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(Button, { rounded: true, bgColor: "#4caf50", color: "white" }, "+"),
                React.createElement(Button, { rounded: true, bgColor: "#4caf50", color: "#4caf50", styleType: "outline" }, "+"),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(Button, { rounded: true, bgColor: "#dc004e", color: "white" }, "+"),
                React.createElement(Button, { rounded: true, bgColor: "#dc004e", color: "#dc004e", styleType: "outline" }, "+")), code: `
<>
    <Button rounded bgColor="#1976d2" color="white">
        +
    </Button>
    <Button rounded bgColor="#1976d2" color="#1976d2" styleType="outline">
        +
    </Button>
    <br />
    <br />
    <Button rounded bgColor="#4caf50" color="white">
        +
    </Button>
    <Button rounded bgColor="#4caf50" color="#4caf50" styleType="outline">
        +
    </Button>
    <br />
    <br />
    <Button rounded bgColor="#dc004e" color="white">
        +
    </Button>
    <Button rounded bgColor="#dc004e" color="#dc004e" styleType="outline">
        +
    </Button>
</>` }),
        React.createElement("h3", null, "Custom style"),
        React.createElement(CodeAndExample, { example: React.createElement(Button, { style: {
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    border: 0,
                    borderRadius: 3,
                    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                    color: 'white',
                    height: 48,
                    padding: '0 30px'
                } }, "Custom Styled button"), code: `
<Button style={{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px'}}
    >Custom Styled button</Button>` }),
        React.createElement("h3", null, "Theme"),
        React.createElement("p", null,
            "Button with theme using ",
            React.createElement(Link, { to: '/' }, "ThemeProvider")),
        React.createElement(CodeAndExample, { example: React.createElement(ThemeProvider, null,
                React.createElement(Button, null, "Default"),
                React.createElement(Button, { styleType: "outline" }, "Outline"),
                React.createElement(Button, { styleType: "text" }, "Text")), code: `
<ThemeProvider>
    <Button>
        Default
    </Button>
    <Button styleType="outline">
        Outline
    </Button>
    <Button styleType="text">
        Text
    </Button>
</ThemeProvider>` }),
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
                    default: "#ddd"
                },
                {
                    name: "color",
                    type: "string",
                    default: "black"
                },
                {
                    name: "children",
                    type: "any",
                    default: "-"
                },
                {
                    name: "rounded",
                    type: "bool",
                    default: "false"
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
export default ButtonExample;
