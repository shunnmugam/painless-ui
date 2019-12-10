import React from 'react';
import { Link } from "react-router-dom";
import { Accordion, AccordionGroup, Table } from '../../components';
import CodeAndExample from '../CodeAndExample';
const AccordionExample = (props) => {
    return (<>
        <h1>Accordion</h1>
        <p>Accordions are useful when you want to toggle between hiding and showing large amount of content</p>
        <CodeAndExample example={<>
            <Accordion title="section 1">
                <p>
                Test
                </p>
            </Accordion>
            <Accordion title="section 2">
                <p>
                Test
                </p>
            </Accordion></>} code={`
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
</>`}></CodeAndExample>
        <h3>Animation duration</h3>
        <p>You can change animation duration using <b>style</b> prop</p>
        <CodeAndExample example={<>
            <Accordion style={{ transitionDuration: '4s' }} title="section 1">
                <p>
                Animation duration is 4s
                </p>
            </Accordion>
            <Accordion style={{ transitionDuration: '10s' }} title="section 2">
                <p>
                Animation duration is 10s
                </p>
            </Accordion></>} code={`
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
</>`}></CodeAndExample>

        <h3>Collapsible Accordion</h3>
        <p>If you want collapsible feature, you should use <Link to="/accordion-group">AccordionGroup</Link> with collapsible true</p>
        <CodeAndExample example={<AccordionGroup collapsible>
            <Accordion title="section 1">
                <p>
                Test
                </p>
            </Accordion>
            <Accordion title="section 2">
                <p>
                Test
                </p>
            </Accordion></AccordionGroup>} code={`
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
</AccordionGroup>`}></CodeAndExample>

        <h3>Props</h3>
        <Table columns={[{
            name: "Name",
            selector: "name",
        }, {
            name: "Type",
            selector: "type"
        }, {
            name: "Default",
            selector: "default"
        }]} data={[{
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
    ]}>

        </Table>
       
    </>);
};
export default AccordionExample;
