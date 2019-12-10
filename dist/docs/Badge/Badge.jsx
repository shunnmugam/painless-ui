import React from 'react';
import { Table, Badge } from '../../components';
import CodeAndExample from '../CodeAndExample';
const BadgeExample = (props) => {
    return (<>
        <h1>Badge</h1>
        <p>Badges can be used as part of links or buttons to provide a counter.</p>
        <CodeAndExample example={<Badge>14
        </Badge>} code={`
<Badge>14</Badge>`}></CodeAndExample>

        <h3>Badge color</h3>
        <p>You can change badge background color using <b>bgColor</b> prop</p>
        <CodeAndExample example={<>
                <Badge bgColor="green">14</Badge>
                &nbsp;
                <Badge bgColor="orange">14</Badge>
                &nbsp;
                <Badge bgColor="#4285f4">14</Badge>
                &nbsp;
                <Badge bgColor="black" color="white">14</Badge>
                &nbsp;
                <Badge bgColor="gray" color="black">14</Badge>
            </>} code={`
<>
<Badge bgColor="green">14</Badge>

<Badge bgColor="orange">14</Badge>

<Badge bgColor="#4285f4">14</Badge>

<Badge bgColor="black" color="white">14</Badge>

<Badge bgColor="gray" color="black">14</Badge>
</>`}></CodeAndExample>

        <h3>Rounded Badge</h3>
        <p>You can change badge shape using <b>rounded</b> prop</p>
        <CodeAndExample example={<>
                <Badge bgColor="green" rounded>14</Badge>
                &nbsp;
                <Badge bgColor="orange" rounded>14</Badge>
                &nbsp;
                <Badge bgColor="#4285f4" rounded>14</Badge>
                &nbsp;
                <Badge bgColor="black" color="white" rounded>14</Badge>
                &nbsp;
                <Badge bgColor="gray" color="black" rounded>14</Badge>
            </>} code={`
<>
<Badge bgColor="green" rounded>14</Badge>

<Badge bgColor="orange" rounded>14</Badge>

<Badge bgColor="#4285f4" rounded>14</Badge>

<Badge bgColor="black" color="white" rounded>14</Badge>

<Badge bgColor="gray" color="black" rounded>14</Badge>
</>`}></CodeAndExample>

        <h3>Badge Animation</h3>
        <p>You can animate badge using <b>animation</b> prop</p>
        <CodeAndExample example={<>
                <Badge bgColor="green" animation>14</Badge>
                <br />
                <br />
                <Badge bgColor="#4285f4" rounded animation>14</Badge>
            </>} code={`
<>
<Badge bgColor="green" animation>14</Badge>

<Badge bgColor="#4285f4" rounded animation>14</Badge>
</>`}></CodeAndExample>

        <h3>Custom style</h3>
        <p>You can add your own style using <b>style</b> prop</p>
        <CodeAndExample example={<>
                <span>Slow animation using style attribute &nbsp;</span>
                <Badge bgColor="green" animation style={{ animationDuration: "4s", padding: "2px 10px" }}>14</Badge>
                <br />
                <br />
                <span>different border radius using style attribute &nbsp;</span>
                <Badge bgColor="#4285f4" rounded style={{ borderRadius: "1px" }}>14</Badge>
            </>} code={`
<>
<Badge bgColor="green" animation style={{animationDuration : "4s", padding : "2px 10px"}}>14</Badge>

<Badge bgColor="#4285f4" rounded style={{borderRadius : "1px"}}>14</Badge>
</>`}></CodeAndExample>

        <h3>Custom props</h3>
        <p>You can add your own prop also</p>
        <CodeAndExample example={<>
                <span>I am clickable badge &nbsp;</span>
                <Badge bgColor="green" onClick={(e) => { alert("badge clicked"); }}>14</Badge>
            </>} code={`
<>
<Badge bgColor="green" onClick={(e) => {alert("badge clicked")}}>14</Badge>
</>`}></CodeAndExample>

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
    ]}>

        </Table>
       
    </>);
};
export default BadgeExample;
