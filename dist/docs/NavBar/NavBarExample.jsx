import React from 'react';
import { NavBar, Table } from '../../components';
import CodeAndExample from '../CodeAndExample';
const NavBarExample = (props) => {
    return (<>
        <h1>NavBar</h1>
        <CodeAndExample example={<NavBar>
                <h3 style={{ textAlign: "center" }}>this is simple navbar</h3>
            </NavBar>} code={`<NavBar> <h3 style={{textAlign: "center"}}>this is simple navbar</h3> </NavBar>`}/>
        <h3>Background color</h3>
        <p>You can change background color using <b>bgColor</b> prop</p>
        <CodeAndExample example={<>
                <NavBar bgColor="red">
                    <h3 style={{ textAlign: "center" }}>Navbar with custom bgColor</h3>
                </NavBar>
                <br />
                <NavBar bgColor="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)">
                    <h3 style={{ textAlign: "center" }}>Navbar with linear gradient</h3>
                </NavBar>
            </>} code={`
<>
    <NavBar bgColor="red">
        <h3 style={{textAlign: "center"}}>Navbar with custom bgColor</h3>
    </NavBar>
    <br />
    <NavBar bgColor="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)">
        <h3 style={{textAlign: "center"}}>Navbar with linear gradient</h3>
    </NavBar>
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
            name: "position",
            type: "string",
            default: '-'
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
export default NavBarExample;
