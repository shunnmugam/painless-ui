import React, { useState } from 'react';
import { Switch, Table } from '../../components';
import CodeAndExample from '../CodeAndExample';
const SwitchExample = () => {
    const [v, changeV] = useState("Off");
    return (<>
            <h1>Switch</h1>
            <p>Modern checkbox</p>
            <pre className="import-section">
                {`import {Switch} from 'painless-ui/components'`}
            </pre>
            <CodeAndExample code={` <Switch />`} example={<Switch />}/>
            <h3>Default checked</h3>
            <p></p>
            <CodeAndExample code={` <Switch defaultChecked />`} example={<Switch defaultChecked/>}/>
            <h3>Background color</h3>
            <p>You can change background color using <b>bgColor</b> prop</p>
            <CodeAndExample code={` <Switch defaultChecked bgColor="#22fb22" />`} example={<Switch defaultChecked bgColor="#22fb22"/>}/>
            <h3>Width and height</h3>
            <p>You can change width and height using <b>width</b> and <b>height</b> props</p>
            <CodeAndExample code={` <Switch defaultChecked bgColor="#22fb22" width="100px" height="40px" />`} example={<Switch bgColor="#22fb22" width="100px" height="40px"/>}/>
            <h3>Disabled</h3>
            <p>You can make Disabled using <b>disabled</b> prop</p>
            <CodeAndExample code={` <>
    <Switch disabled bgColor="#22fb22" />
    <Switch disabled defaultChecked bgColor="#22fb22"  />
</>`} example={<><Switch disabled bgColor="#22fb22"/>
                <Switch disabled defaultChecked bgColor="#22fb22"/> </>}/>
            <h3>Events</h3>
            <CodeAndExample code={` <>
    <Switch onChange={(e) => {
        changeV(e.target.checked ? "On" : "Off")
    }} bgColor="#22fb22" />
</>`} example={<><Switch onChange={(e) => {
        changeV(e.target.checked ? "On" : "Off");
    }} bgColor="#22fb22"/> {v}</>}/>

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
            name: "bgColor",
            type: "string",
            default: "-"
        },
        {
            name: "disabled",
            type: "bool",
            default: "false"
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
    ]}>

        </Table>
        </>);
};
export default SwitchExample;
