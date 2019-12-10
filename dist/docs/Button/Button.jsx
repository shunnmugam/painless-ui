import React from 'react';
import { Link } from "react-router-dom";
import { Button, Table } from '../../components';
import ThemeProvider from '../../providers/ThemeProvider';
import CodeAndExample from '../CodeAndExample';
const ButtonExample = (props) => {
    return (<>
        <h1>Button</h1>
        {<p>We have 3 types of buttons, you can switch using <b>styleType</b> prop
            <ol>
                <li>Background (Default)</li>
                <li>Outline</li>
                <li>Text</li>
            </ol>
        </p>}
        <CodeAndExample example={<>
                <Button>
                    Default
                </Button>
                <Button styleType="outline">
                    Outline
                </Button>
                <Button styleType="text">
                    Text
                </Button>
            </>} code={`
<>
    <Button>
        Default
    </Button>
    <Button styleType="outline">
        Outline
    </Button>
    <Button styleType="text">
        Text
    </Button>
</>`}></CodeAndExample>
        <h3>BgColor & Color</h3>
        <p>You can change BgColor & Color of button using <b>bgColor and color</b> prop</p>
        <CodeAndExample example={<>
                <Button bgColor="#1976d2" color="white">
                    Default
                </Button>
                <Button bgColor="#1976d2" color="#1976d2" styleType="outline">
                    Outline
                </Button>
                <Button styleType="text" color="#1976d2">
                    Text
                </Button>
                <br />
                <br />
                <Button bgColor="#4caf50" color="white">
                    Default
                </Button>
                <Button bgColor="#4caf50" color="#4caf50" styleType="outline">
                    Outline
                </Button>
                <Button styleType="text" color="#4caf50">
                    Text
                </Button>
                <br />
                <br />
                <Button bgColor="#dc004e" color="white">
                    Default
                </Button>
                <Button bgColor="#dc004e" color="#dc004e" styleType="outline">
                    Outline
                </Button>
                <Button styleType="text" color="#dc004e">
                    Text
                </Button>
            </>} code={`
<>
    <Button bgColor="#1976d2" color="white">
        Default
    </Button>
    <Button bgColor="#1976d2" color="#1976d2" styleType="outline">
        Outline
    </Button>
    <Button styleType="text" color="#1976d2">
        Text
    </Button>
    <br />
    <br />
    <Button bgColor="#4caf50" color="white">
        Default
    </Button>
    <Button bgColor="#4caf50" color="#4caf50" styleType="outline">
        Outline
    </Button>
    <Button styleType="text" color="#4caf50">
        Text
    </Button>
    <br />
    <br />
    <Button bgColor="#dc004e" color="white">
        Default
    </Button>
    <Button bgColor="#dc004e" color="#dc004e" styleType="outline">
        Outline
    </Button>
    <Button styleType="text" color="#dc004e">
        Text
    </Button>
</>`}></CodeAndExample>
        <h3>Rounded Button</h3>
        <p>You can change shape of button using <b>rounded</b> prop</p>
        <CodeAndExample example={<>
                <Button rounded bgColor="#1976d2" color="white">
                    +
                </Button>
                <Button rounded bgColor="#1976d2" color="#1976d2" styleType="outline">
                    +
                </Button>
                <br />
                <br />
                <Button rounded bgColor="#4caf50" color="white">
                    +
                </Button>
                <Button rounded bgColor="#4caf50" color="#4caf50" styleType="outline">
                    +
                </Button>
                <br />
                <br />
                <Button rounded bgColor="#dc004e" color="white">
                    +
                </Button>
                <Button rounded bgColor="#dc004e" color="#dc004e" styleType="outline">
                    +
                </Button>
            </>} code={`
<>
    <Button rounded bgColor="#1976d2" color="white">
        +
    </Button>
    <Button rounded bgColor="#1976d2" color="#1976d2" styleType="outline">
        +
    </Button>
    <br />
    <br />
    <Button rounded bgColor="#4caf50" color="white">
        +
    </Button>
    <Button rounded bgColor="#4caf50" color="#4caf50" styleType="outline">
        +
    </Button>
    <br />
    <br />
    <Button rounded bgColor="#dc004e" color="white">
        +
    </Button>
    <Button rounded bgColor="#dc004e" color="#dc004e" styleType="outline">
        +
    </Button>
</>`}></CodeAndExample>
        <h3>Custom style</h3>
        <CodeAndExample example={<Button style={{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px'
    }}>Custom Styled button</Button>} code={`
<Button style={{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px'}}
    >Custom Styled button</Button>`}/>
        <h3>Theme</h3>
        <p>Button with theme using <Link>ThemeProvider</Link></p>
        <CodeAndExample example={<ThemeProvider>
                <Button>
                    Default
                </Button>
                <Button styleType="outline">
                    Outline
                </Button>
                <Button styleType="text">
                    Text
                </Button>
            </ThemeProvider>} code={`
<ThemeProvider>
    <Button>
        Default
    </Button>
    <Button styleType="outline">
        Outline
    </Button>
    <Button styleType="text">
        Text
    </Button>
</ThemeProvider>`}></CodeAndExample>
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
            default: "#ddd"
        },
        {
            name: "color",
            type: "string",
            default: "black"
        },
        {
            name: "children",
            type: "any",
            default: "-"
        },
        {
            name: "rounded",
            type: "bool",
            default: "false"
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
export default ButtonExample;
