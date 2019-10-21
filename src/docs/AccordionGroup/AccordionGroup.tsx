import React from 'react';
import {Link } from "react-router-dom";
import { Accordion, AccordionGroup, Table } from '../../components';
import CodeAndExample from '../CodeAndExample';

const AccordionGroupExample = (props) => {
    return (
    <>
        <h1>AccordionGroup</h1>
        <p>AccordionGroup is Accordion container or group of <Link to="/accordion" >Accordions</Link> </p>
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
            name : "Name",
            selector: "name",
        },{
            name : "Type",
            selector: "type"
        },{
            name : "Default",
            selector: "default"
        }]} 
        data={[{
            name : "className",
            type: "string",
            default : "-"
        },
        {
            name : "collapsible",
            type: "bool",
            default : "false"
        },
        {
            name : "title",
            type: "bool",
            default : "-"
        },
        {
            name : "children",
            type: <Link to="/accordion">Accordions</Link>,
            default : "-"
        },
        {
            name : "[key:string]",
            type: "any",
            default : "-"
        }
        ]}>

        </Table>
       
    </>
    )
}

export default AccordionGroupExample;