import React from 'react';
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Table } from '../../components';
import CodeAndExample from '../CodeAndExample';
const ButtonGroupExample = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "ButtonGroup"),
        React.createElement("p", null,
            "ButtonGroup is Button container or group of ",
            React.createElement(Link, { to: "/button" }, "Buttons"),
            " "),
        React.createElement("pre", { className: "import-section" }, `import {ButtonGroup} from 'painless-ui/components'`),
        React.createElement(CodeAndExample, { example: React.createElement(ButtonGroup, null,
                React.createElement(Button, null, "Button 1"),
                React.createElement(Button, null, "Button 2")), code: `
<ButtonGroup>
    <Button>
        Button 1
    </Button>
    <Button>
    Button 2
    </Button>
</ButtonGroup>` }),
        React.createElement("h3", null, "ButtonGroup with different buttons"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(ButtonGroup, null,
                    React.createElement(Button, { bgColor: "#1976d2", color: "white" }, "Button 1"),
                    React.createElement(Button, { bgColor: "#4caf50", color: "white" }, "Button 2"),
                    React.createElement(Button, { bgColor: "#dc004e    ", color: "white" }, "Button 2")),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(ButtonGroup, null,
                    React.createElement(Button, { styleType: "outline", bgColor: "#dc004e", color: "#dc004e" }, "Button 1"),
                    React.createElement(Button, { styleType: "outline", bgColor: "#dc004e", color: "#dc004e" }, "Button 2"),
                    React.createElement(Button, { styleType: "outline", bgColor: "#dc004e", color: "#dc004e" }, "Button 2"))), code: `
<>
<ButtonGroup>
    <Button bgColor="#1976d2" color="white">
    Button 1
    </Button>
    <Button bgColor="#4caf50" color="white">
    Button 2
    </Button>
    <Button bgColor="#dc004e    " color="white">
    Button 2
    </Button>
</ButtonGroup>
<ButtonGroup>
    <Button styleType="outline" bgColor="#dc004e" color="#dc004e">
        Button 1
    </Button>
    <Button styleType="outline" bgColor="#dc004e" color="#dc004e">
    Button 2
    </Button>
    <Button styleType="outline" bgColor="#dc004e" color="#dc004e">
    Button 2
    </Button>
</ButtonGroup></>` }),
        React.createElement("h3", null, "Vertical ButtonGroup"),
        React.createElement("p", null,
            "you can change alignment using ",
            React.createElement("b", null, "vertical"),
            " prop"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(ButtonGroup, { vertical: true },
                    React.createElement(Button, { bgColor: "#1976d2", color: "white" }, "Button 1"),
                    React.createElement(Button, { bgColor: "#1976d2", color: "white" }, "Button 2"),
                    React.createElement(Button, { bgColor: "#1976d2", color: "white" }, "Button 2"))), code: `
<>
<ButtonGroup vertical>
    <Button bgColor="#1976d2" color="white">
        Button 1
    </Button>
    <Button bgColor="#1976d2" color="white">
    Button 2
    </Button>
    <Button bgColor="#1976d2" color="white">
    Button 2
    </Button>
</ButtonGroup></>` }),
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
                    name: "collapsible",
                    type: "bool",
                    default: "false"
                },
                {
                    name: "title",
                    type: "bool",
                    default: "-"
                }, {
                    name: "children",
                    type: React.createElement(Link, { to: "/accordion" }, "Accordions"),
                    default: "-"
                }, {
                    name: "[key:string]",
                    type: "any",
                    default: "-"
                }] })));
};
export default ButtonGroupExample;
