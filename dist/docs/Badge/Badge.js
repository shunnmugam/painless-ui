import React from 'react';
import { Table, Badge } from '../../components';
import CodeAndExample from '../CodeAndExample';
const BadgeExample = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Badge"),
        React.createElement("p", null, "Badges can be used as part of links or buttons to provide a counter."),
        React.createElement("pre", { className: "import-section" }, `import {Badge} from 'painless-ui/components'`),
        React.createElement(CodeAndExample, { example: React.createElement(Badge, null, "14"), code: `
<Badge>14</Badge>` }),
        React.createElement("h3", null, "Badge color"),
        React.createElement("p", null,
            "You can change badge background color using ",
            React.createElement("b", null, "bgColor"),
            " prop"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Badge, { bgColor: "green" }, "14"),
                "\u00A0",
                React.createElement(Badge, { bgColor: "orange" }, "14"),
                "\u00A0",
                React.createElement(Badge, { bgColor: "#4285f4" }, "14"),
                "\u00A0",
                React.createElement(Badge, { bgColor: "black", color: "white" }, "14"),
                "\u00A0",
                React.createElement(Badge, { bgColor: "gray", color: "black" }, "14")), code: `
<>
<Badge bgColor="green">14</Badge>

<Badge bgColor="orange">14</Badge>

<Badge bgColor="#4285f4">14</Badge>

<Badge bgColor="black" color="white">14</Badge>

<Badge bgColor="gray" color="black">14</Badge>
</>` }),
        React.createElement("h3", null, "Rounded Badge"),
        React.createElement("p", null,
            "You can change badge shape using ",
            React.createElement("b", null, "rounded"),
            " prop"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Badge, { bgColor: "green", rounded: true }, "14"),
                "\u00A0",
                React.createElement(Badge, { bgColor: "orange", rounded: true }, "14"),
                "\u00A0",
                React.createElement(Badge, { bgColor: "#4285f4", rounded: true }, "14000"),
                "\u00A0",
                React.createElement(Badge, { bgColor: "black", color: "white", rounded: true }, "14"),
                "\u00A0",
                React.createElement(Badge, { bgColor: "gray", color: "black", rounded: true }, "14")), code: `
<>
<Badge bgColor="green" rounded>14</Badge>

<Badge bgColor="orange" rounded>14</Badge>

<Badge bgColor="#4285f4" rounded>14</Badge>

<Badge bgColor="black" color="white" rounded>14</Badge>

<Badge bgColor="gray" color="black" rounded>14</Badge>
</>` }),
        React.createElement("h3", null, "Badge Animation"),
        React.createElement("p", null,
            "You can animate badge using ",
            React.createElement("b", null, "animation"),
            " prop"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Badge, { bgColor: "green", animation: true }, "14"),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(Badge, { bgColor: "#4285f4", rounded: true, animation: true }, "14")), code: `
<>
<Badge bgColor="green" animation>14</Badge>

<Badge bgColor="#4285f4" rounded animation>14</Badge>
</>` }),
        React.createElement("h3", null, "Custom style"),
        React.createElement("p", null,
            "You can add your own style using ",
            React.createElement("b", null, "style"),
            " prop"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement("span", null, "Slow animation using style attribute \u00A0"),
                React.createElement(Badge, { bgColor: "green", animation: true, style: { animationDuration: "4s", padding: "2px 10px" } }, "14"),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("span", null, "different border radius using style attribute \u00A0"),
                React.createElement(Badge, { bgColor: "#4285f4", rounded: true, style: { borderRadius: "1px" } }, "14")), code: `
<>
<Badge bgColor="green" animation style={{animationDuration : "4s", padding : "2px 10px"}}>14</Badge>

<Badge bgColor="#4285f4" rounded style={{borderRadius : "1px"}}>14</Badge>
</>` }),
        React.createElement("h3", null, "Custom props"),
        React.createElement("p", null, "You can add your own prop also"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement("span", null, "I am clickable badge \u00A0"),
                React.createElement(Badge, { bgColor: "green", onClick: (e) => { alert("badge clicked"); } }, "14")), code: `
<>
<Badge bgColor="green" onClick={(e) => {alert("badge clicked")}}>14</Badge>
</>` }),
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
                    name: "animation",
                    type: "bool",
                    default: "false"
                },
                {
                    name: "bgColor",
                    type: "string",
                    default: "#fe3824"
                },
                {
                    name: "color",
                    type: "string",
                    default: "white"
                },
                {
                    name: "style",
                    type: "css style",
                    default: "-"
                },
                {
                    name: "rounded",
                    type: "bool",
                    default: "false"
                },
                {
                    name: "children",
                    type: "any",
                    default: "-"
                },
                {
                    name: "[key:string]",
                    type: "any",
                    default: "-"
                }
            ] })));
};
export default BadgeExample;
