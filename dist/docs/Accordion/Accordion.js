import React from 'react';
import { Link } from "react-router-dom";
import { Accordion, AccordionGroup, Table } from '../../components';
import CodeAndExample from '../CodeAndExample';
const AccordionExample = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Accordion"),
        React.createElement("p", null, "Accordions are useful when you want to toggle between hiding and showing large amount of content"),
        React.createElement("pre", { className: "import-section" }, `import {Accordion} from 'painless-ui/components'`),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Accordion, { title: "section 1" },
                    React.createElement("p", null, "Test")),
                React.createElement(Accordion, { title: "section 2" },
                    React.createElement("p", null, "Test"))), code: `
<>
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
</>` }),
        React.createElement("h3", null, "Animation duration"),
        React.createElement("p", null,
            "You can change animation duration using ",
            React.createElement("b", null, "style"),
            " prop"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Accordion, { style: { transitionDuration: '4s' }, title: "section 1" },
                    React.createElement("p", null, "Animation duration is 4s")),
                React.createElement(Accordion, { style: { transitionDuration: '10s' }, title: "section 2" },
                    React.createElement("p", null, "Animation duration is 10s"))), code: `
<>
    <Accordion style={{transitionDuration: '4s'}} title="section 1">
        <p>
        Animation duration is 4s
        </p>
    </Accordion>
    <Accordion style={{transitionDuration: '10s'}} title="section 2">
        <p>
        Animation duration is 10s
        </p>
    </Accordion>
</>` }),
        React.createElement("h3", null, "Collapsible Accordion"),
        React.createElement("p", null,
            "If you want collapsible feature, you should use ",
            React.createElement(Link, { to: "/accordion-group" }, "AccordionGroup"),
            " with collapsible true"),
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
                    name: "open",
                    type: "bool",
                    default: "false"
                },
                {
                    name: "title",
                    type: "string",
                    default: "-"
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
export default AccordionExample;
