import React from 'react';
import { Link } from "react-router-dom";
import { Breadcrumb, Table } from '../../components';
import CodeAndExample from '../CodeAndExample';
const BreadcrumbExample = (props) => {
    return (<>
        <h1>Breadcrumb</h1>
        <p>A breadcrumb navigation provide links back to each previous page the user navigated through, 
            and shows the user's current location in a website. </p>
        <pre className="import-section">
            {`import {Breadcrumb} from 'painless-ui/components'`}
        </pre>
        <CodeAndExample example={<Breadcrumb>
                <Link to={'/'}>Home</Link>
                <span>User</span>
                <span>Profile</span>
            </Breadcrumb>} code={`
<Breadcrumb>
    <Link to={'/'}>Home</Link>
    <span>User</span>
    <span>Profile</span>
</Breadcrumb>`}></CodeAndExample>
        <h3>Separator</h3>
        <p>You can change Separator of breadcrumb using <b>separator</b> prop</p>
        <CodeAndExample example={<Breadcrumb separator={<span>-></span>}>
                <Link to={'/'}>Home</Link>
                <span>User</span>
                <span>Profile</span>
            </Breadcrumb>} code={`
<Breadcrumb separator={<span>-></span>}>
    <Link to={'/'}>Home</Link>
    <span>User</span>
    <span>Profile</span>
</Breadcrumb>`}></CodeAndExample>
        <h3>Styled Breadcrumb</h3>
        <p>You can change style of breadcrumb using <b>stype</b> prop</p>
        <CodeAndExample example={<Breadcrumb style={{ backgroundColor: "black", color: "white" }}>
                <Link to={'/'}>Home</Link>
                <span>User</span>
                <span>Profile</span>
            </Breadcrumb>} code={`
<Breadcrumb style={{backgroundColor : "black", color : "white"}}>
    <Link to={'/'}>Home</Link>
    <span>User</span>
    <span>Profile</span>
</Breadcrumb>`}></CodeAndExample>
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
            name: "separator",
            type: "any",
            default: "/"
        },
        {
            name: "children",
            type: "any",
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
    ]}>

        </Table>
       
    </>);
};
export default BreadcrumbExample;
