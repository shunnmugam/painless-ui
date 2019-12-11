import React, { useState } from 'react';
import { Radio, Table } from '../../components';
import CodeAndExample from '../CodeAndExample';
const RadioExample = (props) => {
    const [eventMsg, changeMsg] = useState("un checked");
    return (<>
        <h1>Radio</h1>
        <p>Radio is input</p>
        <pre className="import-section">
            {`import {Radio} from 'painless-ui/components'`}
        </pre>
        <CodeAndExample example={<>
            <Radio value="1" id="default-radio"/>
            <label htmlFor="default-radio">Default</label>
            <Radio value="1" defaultChecked id="checked-radio"/>
            <label htmlFor="checked-radio">Checked</label>
        </>} code={`
<>
    <Radio value="1" id="default-radio" />
    <label htmlFor="default-radio">Default</label>
    <Radio value="1" defaultChecked id="checked-radio" />
    <label htmlFor="checked-radio">Checked</label>
</>
`}/>   
        <h3>Background color</h3>
        <p>You can change bg color using <b>bgColor</b> prop</p>
        <CodeAndExample example={<>
            <Radio defaultChecked bgColor="rgb(220, 0, 78)" value="1"/>
            <Radio value="1" defaultChecked/>
            <Radio value="1" bgColor="rgb(76, 175, 80)" defaultChecked/>
        </>} code={`
<>
    <Radio defaultChecked bgColor="rgb(220, 0, 78)" value="1" />
    <Radio value="1" defaultChecked />
    <Radio value="1" bgColor="rgb(76, 175, 80)" defaultChecked />
</>
`}/>
        <h3>Height & Width</h3>
        <p>You can change height and Width using <b>height</b> and <b>width</b> prop</p>
        <CodeAndExample example={<>
            <Radio value="1" bgColor="rgb(76, 175, 80)" defaultChecked/>
            <Radio width="30px" height="30px" value="1" defaultChecked/>
            <Radio height="40px" width="40px" defaultChecked bgColor="rgb(220, 0, 78)" value="1"/>
        </>} code={`
<>
    <Radio value="1" bgColor="rgb(76, 175, 80)" defaultChecked />
    <Radio width="30px" height="30px" value="1" defaultChecked />
    <Radio height="40px" width="40px" defaultChecked bgColor="rgb(220, 0, 78)" value="1" />
</>
`}/>
        <h3>Events</h3>
        <CodeAndExample example={<>
            <Radio onClick={(e) => {
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
    <Radio onClick={(e) => {
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
export default RadioExample;
