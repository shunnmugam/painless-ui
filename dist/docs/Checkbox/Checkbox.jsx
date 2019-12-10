import React, { useState } from 'react';
import { Checkbox, Table } from '../../components';
import CodeAndExample from '../CodeAndExample';
const CheckboxExample = (props) => {
    const [eventMsg, changeMsg] = useState("un checked");
    return (<>
        <h1>Checkbox</h1>
        <p>Checkbox is input</p>
        <CodeAndExample example={<>
            <Checkbox value="1" id="default-checkbox"/>
            <label htmlFor="default-checkbox">Default</label>
            <Checkbox value="1" defaultChecked id="checked-checkbox"/>
            <label htmlFor="checked-checkbox">Checked</label>
        </>} code={`
<>
    <Checkbox value="1" id="default-checkbox" />
    <label htmlFor="default-checkbox">Default</label>
    <Checkbox value="1" defaultChecked id="checked-checkbox" />
    <label htmlFor="checked-checkbox">Checked</label>
</>
`}/>   
        <h3>Background color</h3>
        <p>You can change bg color using <b>bgColor</b> prop</p>
        <CodeAndExample example={<>
            <Checkbox defaultChecked bgColor="rgb(220, 0, 78)" value="1"/>
            <Checkbox value="1" defaultChecked/>
            <Checkbox value="1" bgColor="rgb(76, 175, 80)" defaultChecked/>
        </>} code={`
<>
    <Checkbox defaultChecked bgColor="rgb(220, 0, 78)" value="1" />
    <Checkbox value="1" defaultChecked />
    <Checkbox value="1" bgColor="rgb(76, 175, 80)" defaultChecked />
</>
`}/>
        <h3>Height & Width</h3>
        <p>You can change height and Width using <b>height</b> and <b>width</b> prop</p>
        <CodeAndExample example={<>
            <Checkbox height="40px" width="40px" defaultChecked bgColor="rgb(220, 0, 78)" value="1"/>
            <Checkbox width="30px" height="30px" value="1" defaultChecked/>
            <Checkbox value="1" bgColor="rgb(76, 175, 80)" defaultChecked/>
        </>} code={`
<>
    <Checkbox height="40px" width="40px" defaultChecked bgColor="rgb(220, 0, 78)" value="1" />
    <Checkbox width="30px" height="30px" value="1" defaultChecked />
    <Checkbox value="1" bgColor="rgb(76, 175, 80)" defaultChecked />
</>
`}/>
        <h3>Rounded</h3>
        <p>You can change shape using <b>rounded</b> prop</p>
        <CodeAndExample example={<>
            <Checkbox height="40px" rounded width="40px" defaultChecked bgColor="rgb(220, 0, 78)" value="1"/>
            <Checkbox width="30px" rounded height="30px" value="1" defaultChecked/>
            <Checkbox value="1" rounded bgColor="rgb(76, 175, 80)" defaultChecked/>
        </>} code={`
<>
    <Checkbox height="40px" rounded width="40px" defaultChecked bgColor="rgb(220, 0, 78)" value="1" />
    <Checkbox width="30px" rounded height="30px" value="1" defaultChecked  />
    <Checkbox value="1" rounded bgColor="rgb(76, 175, 80)" defaultChecked />
</>
`}/>
        <h3>Events</h3>
        <CodeAndExample example={<>
            <Checkbox onClick={(e) => {
        const value = e.target.value;
        if (e.target.checked) {
            changeMsg("checked value is " + value);
        }
        else {
            changeMsg("un checked");
        }
    }} bgColor="rgb(220, 0, 78)" value="1"/>
            {eventMsg}
        </>} code={`
<>
    <Checkbox onClick={(e) => {
        const value = e.target.value;
        if(e.target.checked) {
            changeMsg("checked" + " value is " +value)
        } else {
            changeMsg("un checked")
        }
    }} bgColor="rgb(220, 0, 78)" value="1" />
    {eventMsg}
</>
`}/>
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
            name: "rounded",
            type: "bool",
            default: "false"
        },
        {
            name: "bgColor",
            type: "string",
            default: "-"
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
export default CheckboxExample;
