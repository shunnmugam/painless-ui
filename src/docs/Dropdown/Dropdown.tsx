import React from 'react';
import Dropdown from '../../components/Dropdown/Dropdown';
import DropdownItem from '../../components/DropdownItem/DropdownItem';
import Table from '../../components/Table/Table';
import CodeAndExample from '../CodeAndExample';

const DropdownExample = (props) => {
    return (
        <>
        <h1>Dropdown</h1>
        <p>A dropdown menu is a toggleable menu that allows the user to choose one value from a predefined list:</p>
        <pre className="import-section">
            {`import {Dropdown, DropdownItem} from 'painless-ui/components'`}
        </pre>
        <p><b>Note:</b> text prop is mandatory</p>
        <CodeAndExample example={<>
            <Dropdown style={{border: '1px solid #c5c5c5'}} text={'Dropdown'}>
                <DropdownItem><span>Menu 1</span></DropdownItem>
                <DropdownItem><span>Menu 2</span></DropdownItem>
            </Dropdown>
        </>} code={`<Dropdown text={'Dropdown'}>
    <DropdownItem><span>Menu 1</span></DropdownItem>
    <DropdownItem><span>Menu 2</span></DropdownItem>
</Dropdown>
`} />
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
            name : "text",
            type: "JSX.Element",
            default : "-"
        },
        {
            name : "children",
            type: "JSX.Element[]",
            default : "-"
        },
        {
            name : "style",
            type: "css",
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

export default DropdownExample;