import React from 'react';
import { Link } from "react-router-dom";
import { Accordion, AccordionGroup, Table } from '../../components';
import CodeAndExample from '../CodeAndExample';
const AccordionGroupExample = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "AccordionGroup"),
        React.createElement("p", null,
            "AccordionGroup is Accordion container or group of ",
            React.createElement(Link, { to: "/accordion" }, "Accordions"),
            " "),
        React.createElement("pre", { className: "import-section" }, `import {AccordionGroup} from 'painless-ui/components'`),
        React.createElement(CodeAndExample, { example: React.createElement(AccordionGroup, { collapsible: true },
                React.createElement(Accordion, { title: "section 1" },
                    React.createElement("p", null, "Test")),
                React.createElement(Accordion, { title: "section 2" },
                    React.createElement("p", null, "Test"))), code: `
<AccordionGroup collapsible>
    <Accordion title="section 1">
        <p>
        Content 1 ......
        </p>
    </Accordion>
    <Accordion title="section 2">
        <p>
        Content 2 ......
        </p>
    </Accordion>
</AccordionGroup>` }),
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
                },
                {
                    name: "children",
                    type: React.createElement(Link, { to: "/accordion" }, "Accordions"),
                    default: "-"
                },
                {
                    name: "[key:string]",
                    type: "any",
                    default: "-"
                }
            ] })));
};
export default AccordionGroupExample;
