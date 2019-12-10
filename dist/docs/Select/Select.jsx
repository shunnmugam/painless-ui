import React, { useState } from 'react';
import { Select, Option, Table } from '../../components';
import CodeAndExample from '../CodeAndExample';
const SelectExample = (props) => {
    const [value, changeValue] = useState("1");
    const [multipleValue, changeMulValue] = useState(["1", "3"]);
    return (<>
        <h1>Select (Dropdown)</h1>
        <p>Select is input</p>
        <p><b>You should use Option component for option</b></p>
        <CodeAndExample example={<>
            <Select onChange={(v) => {
        console.log(v);
    }}>
                <Option value="1">ABC</Option>
                <Option value="2">DEF</Option>
                <Option value="3">GHI</Option>
                <Option value="4">JKL</Option>
                <Option value="5">MNO</Option>
                <Option value="6">PQR</Option>
                <Option value="7">XYZ</Option>
            </Select>
        </>} code={`
<>
    <Select onChange={(v) => {
        console.log(v);
    }}>
        <Option value="1">ABC</Option>
        <Option value="2">DEF</Option>
        <Option value="3">GHI</Option>
        <Option value="4">JKL</Option>
        <Option value="5">MNO</Option>
        <Option value="6">PQR</Option>
        <Option value="7">XYZ</Option>
    </Select>
</>
`}/>   
        <h3>Placeholder</h3>
        <p>You can change placeholder text using <b>placeholder</b> prop</p>
        <CodeAndExample example={<>
            <Select placeholder={"Custom place holder"}>
                <Option value="1">ABC</Option>
                <Option value="2">DEF</Option>
                <Option value="3">GHI</Option>
                <Option value="4">JKL</Option>
                <Option value="5">MNO</Option>
                <Option value="6">PQR</Option>
                <Option value="7">XYZ</Option>
            </Select>
        </>} code={`
<>
    <Select placeholder={"Custom place holder"}>
        <Option value="1">ABC</Option>
        <Option value="2">DEF</Option>
        <Option value="3">GHI</Option>
        <Option value="4">JKL</Option>
        <Option value="5">MNO</Option>
        <Option value="6">PQR</Option>
        <Option value="7">XYZ</Option>
    </Select>
</>
`}/>   
        <h3>hover</h3>
        <p>If you use <b>hover</b> prop then dropdown will open on hover</p>
        <CodeAndExample example={<>
            <Select hover placeholder={"hover here"}>
                <Option value="1">ABC</Option>
                <Option value="2">DEF</Option>
                <Option value="3">GHI</Option>
                <Option value="4">JKL</Option>
                <Option value="5">MNO</Option>
                <Option value="6">PQR</Option>
                <Option value="7">XYZ</Option>
            </Select>
        </>} code={`
<>
    <Select hover placeholder={"hover here"}>
        <Option value="1">ABC</Option>
        <Option value="2">DEF</Option>
        <Option value="3">GHI</Option>
        <Option value="4">JKL</Option>
        <Option value="5">MNO</Option>
        <Option value="6">PQR</Option>
        <Option value="7">XYZ</Option>
    </Select>
</>
`}/>   
        <h3>multiple</h3>
        <p>You can use select as multi select using <b>multiple</b> prop</p>
        <CodeAndExample example={<>
            <Select multiple>
                <Option value="1">ABC</Option>
                <Option value="2">DEF</Option>
                <Option value="3">GHI</Option>
                <Option value="4">JKL</Option>
                <Option value="5">MNO</Option>
                <Option value="6">PQR</Option>
                <Option value="7">XYZ</Option>
            </Select>
        </>} code={`
<>
    <Select multiple >
        <Option value="1">ABC</Option>
        <Option value="2">DEF</Option>
        <Option value="3">GHI</Option>
        <Option value="4">JKL</Option>
        <Option value="5">MNO</Option>
        <Option value="6">PQR</Option>
        <Option value="7">XYZ</Option>
    </Select>
</>
`}/>  
        <h3>value</h3>
        <p>You can set default value using <b>value</b> prop</p>
        <CodeAndExample example={<>
            <Select value="1">
                <Option value="1">ABC</Option>
                <Option value="2">DEF</Option>
                <Option value="3">GHI</Option>
                <Option value="4">JKL</Option>
                <Option value="5">MNO</Option>
                <Option value="6">PQR</Option>
                <Option value="7">XYZ</Option>
            </Select>
            <br />
            <Select multiple value={["1", "7"]}>
                <Option value="1">ABC</Option>
                <Option value="2">DEF</Option>
                <Option value="3">GHI</Option>
                <Option value="4">JKL</Option>
                <Option value="5">MNO</Option>
                <Option value="6">PQR</Option>
                <Option value="7">XYZ</Option>
            </Select>
        </>} code={`
<>
    <Select value="1">
        <Option value="1">ABC</Option>
        <Option value="2">DEF</Option>
        <Option value="3">GHI</Option>
        <Option value="4">JKL</Option>
        <Option value="5">MNO</Option>
        <Option value="6">PQR</Option>
        <Option value="7">XYZ</Option>
    </Select>
    <br />
    <Select multiple value={["1","7"]}>
        <Option value="1">ABC</Option>
        <Option value="2">DEF</Option>
        <Option value="3">GHI</Option>
        <Option value="4">JKL</Option>
        <Option value="5">MNO</Option>
        <Option value="6">PQR</Option>
        <Option value="7">XYZ</Option>
    </Select>
</>
`}/>  
        <h3>Controlled</h3>
        <CodeAndExample example={<>
            <Select onChange={(e) => {
        console.log(e);
        changeValue(e.value);
    }} value={value}>
                <Option value="1">ABC</Option>
                <Option value="2">DEF</Option>
                <Option value="3">GHI</Option>
                <Option value="4">JKL</Option>
                <Option value="5">MNO</Option>
                <Option value="6">PQR</Option>
                <Option value="7">XYZ</Option>
            </Select>
            {" value is " + value}
            <br />
            <Select multiple value={multipleValue} onChange={(e) => {
        console.log(e);
        const n = [];
        e.forEach((element) => {
            n.push(element.value);
        });
        changeMulValue(n);
    }}>
                <Option value="1">ABC</Option>
                <Option value="2">DEF</Option>
                <Option value="3">GHI</Option>
                <Option value="4">JKL</Option>
                <Option value="5">MNO</Option>
                <Option value="6">PQR</Option>
                <Option value="7">XYZ</Option>
            </Select>
            {" value is " + multipleValue}
        </>} code={`
<>
    <Select onChange={(e) => {
        console.log(e);
        changeValue(e.value);
    }} value={value}>
        <Option value="1">ABC</Option>
        <Option value="2">DEF</Option>
        <Option value="3">GHI</Option>
        <Option value="4">JKL</Option>
        <Option value="5">MNO</Option>
        <Option value="6">PQR</Option>
        <Option value="7">XYZ</Option>
    </Select>
    {" value is " + value}
    <br />
    <Select multiple value={multipleValue} onChange={(e) => {
        console.log(e);
        const n: any = [];
        e.forEach((element: any) => {
            n.push(element.value)
        });
        changeMulValue(n);
    }}>
        <Option value="1">ABC</Option>
        <Option value="2">DEF</Option>
        <Option value="3">GHI</Option>
        <Option value="4">JKL</Option>
        <Option value="5">MNO</Option>
        <Option value="6">PQR</Option>
        <Option value="7">XYZ</Option>
    </Select>
    {" value is " + multipleValue}
</>
`}/> 
        <h3>disabled</h3>
        <p>You can disabled using <b>disabled</b> prop</p>
        <CodeAndExample example={<>
            <Select disabled value="1">
                <Option value="1">ABC</Option>
                <Option value="2">DEF</Option>
                <Option value="3">GHI</Option>
                <Option value="4">JKL</Option>
                <Option value="5">MNO</Option>
                <Option value="6">PQR</Option>
                <Option value="7">XYZ</Option>
            </Select>
            <br />
            <Select disabled multiple value={["1", "7"]}>
                <Option value="1">ABC</Option>
                <Option value="2">DEF</Option>
                <Option value="3">GHI</Option>
                <Option value="4">JKL</Option>
                <Option value="5">MNO</Option>
                <Option value="6">PQR</Option>
                <Option value="7">XYZ</Option>
            </Select>
        </>} code={`
<>
    <Select disabled value="1">
        <Option value="1">ABC</Option>
        <Option value="2">DEF</Option>
        <Option value="3">GHI</Option>
        <Option value="4">JKL</Option>
        <Option value="5">MNO</Option>
        <Option value="6">PQR</Option>
        <Option value="7">XYZ</Option>
    </Select>
    <br />
    <Select disabled multiple value={["1","7"]}>
        <Option value="1">ABC</Option>
        <Option value="2">DEF</Option>
        <Option value="3">GHI</Option>
        <Option value="4">JKL</Option>
        <Option value="5">MNO</Option>
        <Option value="6">PQR</Option>
        <Option value="7">XYZ</Option>
    </Select>
</>
`}/>
        <h3>searchable</h3>
        <p>You can enable search option using <b>searchable</b> prop</p>
        <CodeAndExample example={<>
            <Select searchable value="1">
                <Option value="1">ABC</Option>
                <Option value="2">DEF</Option>
                <Option value="3">GHI</Option>
                <Option value="4">JKL</Option>
                <Option value="5">MNO</Option>
                <Option value="6">PQR</Option>
                <Option value="7">XYZ</Option>
            </Select>
            <br />
            <Select searchable multiple value={["1", "7"]}>
                <Option value="1">ABC</Option>
                <Option value="2">DEF</Option>
                <Option value="3">GHI</Option>
                <Option value="4">JKL</Option>
                <Option value="5">MNO</Option>
                <Option value="6">PQR</Option>
                <Option value="7">XYZ</Option>
            </Select>
        </>} code={`
<>
    <Select disabled value="1">
        <Option value="1">ABC</Option>
        <Option value="2">DEF</Option>
        <Option value="3">GHI</Option>
        <Option value="4">JKL</Option>
        <Option value="5">MNO</Option>
        <Option value="6">PQR</Option>
        <Option value="7">XYZ</Option>
    </Select>
    <br />
    <Select disabled multiple value={["1","7"]}>
        <Option value="1">ABC</Option>
        <Option value="2">DEF</Option>
        <Option value="3">GHI</Option>
        <Option value="4">JKL</Option>
        <Option value="5">MNO</Option>
        <Option value="6">PQR</Option>
        <Option value="7">XYZ</Option>
    </Select>
</>
`}/>
        <h3>events</h3>
        <ol>
            <li>onChange</li>
            <li>onOpen</li>
            <li>onClose</li>
            <li>onSearch</li>
        </ol>
        <p>You can use dom events like onClick, onMouseIn,etc.. also  </p>
        <CodeAndExample example={<>
            <Select searchable onChange={(v) => {
        console.log("on change called ", v);
    }} onOpen={() => {
        console.log("on open called ");
    }} onClose={(v) => {
        console.log("on close called ");
    }} onSearch={(searchKeyword) => {
        console.log("on search called ", searchKeyword);
    }} value="1">
                <Option value="1">ABC</Option>
                <Option value="2">DEF</Option>
                <Option value="3">GHI</Option>
                <Option value="4">JKL</Option>
                <Option value="5">MNO</Option>
                <Option value="6">PQR</Option>
                <Option value="7">XYZ</Option>
            </Select>
        </>} code={`
<>
<Select searchable onChange={(v) => {
        console.log("on change called ", v)
    }} onOpen={() => {
        console.log("on open called ")
    }} onClose={(v) => {
        console.log("on close called ")
    }} onSearch={(searchKeyword) => {
        console.log("on search called ", searchKeyword)
    }} value="1">
    <Option value="1">ABC</Option>
    <Option value="2">DEF</Option>
    <Option value="3">GHI</Option>
    <Option value="4">JKL</Option>
    <Option value="5">MNO</Option>
    <Option value="6">PQR</Option>
    <Option value="7">XYZ</Option>
</Select>
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
            name: "multiple",
            type: "bool",
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
            name: "placeholder",
            type: "string",
            default: "Please select"
        },
        {
            name: "value",
            type: "string | Array",
            default: "-"
        },
        {
            name: "hover",
            type: "bool",
            default: "false"
        },
        {
            name: "disabled",
            type: "bool",
            default: "false"
        },
        {
            name: "searchable",
            type: "bool",
            default: "false"
        },
        {
            name: "onOpen",
            type: "function",
            default: "-"
        },
        {
            name: "onClose",
            type: "function",
            default: "-"
        },
        {
            name: "onSearch",
            type: "function",
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
export default SelectExample;
