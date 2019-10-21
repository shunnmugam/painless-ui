import React from 'react';
import {Link } from "react-router-dom";
import { Button, ButtonGroup, Table } from '../../components';
import CodeAndExample from '../CodeAndExample';

const ButtonGroupExample = (props) => {
    return (
    <>
        <h1>ButtonGroup</h1>
        <p>ButtonGroup is Button container or group of <Link to="/button" >Buttons</Link> </p>
        <CodeAndExample example={<ButtonGroup>
            <Button>
                Button 1
            </Button>
            <Button>
               Button 2
            </Button></ButtonGroup>} code={`
<ButtonGroup>
    <Button>
        Button 1
    </Button>
    <Button>
    Button 2
    </Button>
</ButtonGroup>`}></CodeAndExample>

        <h3>ButtonGroup with different buttons</h3>
        <CodeAndExample example={
        <>
            <ButtonGroup>
                <Button bgColor="#1976d2" color="white">
                    Button 1
                </Button>
                <Button bgColor="#4caf50" color="white">
                Button 2
                </Button>
                <Button bgColor="#dc004e    " color="white">
                Button 2
                </Button>
            </ButtonGroup>
            <br/> 
            <br/> 
            <ButtonGroup>
                <Button styleType="outline" bgColor="#dc004e" color="#dc004e">
                    Button 1
                </Button>
                <Button styleType="outline" bgColor="#dc004e" color="#dc004e">
                Button 2
                </Button>
                <Button styleType="outline" bgColor="#dc004e" color="#dc004e">
                Button 2
                </Button>
            </ButtonGroup>   
        </>} code={`
<>
<ButtonGroup>
    <Button bgColor="#1976d2" color="white">
    Button 1
    </Button>
    <Button bgColor="#4caf50" color="white">
    Button 2
    </Button>
    <Button bgColor="#dc004e    " color="white">
    Button 2
    </Button>
</ButtonGroup>
<ButtonGroup>
    <Button styleType="outline" bgColor="#dc004e" color="#dc004e">
        Button 1
    </Button>
    <Button styleType="outline" bgColor="#dc004e" color="#dc004e">
    Button 2
    </Button>
    <Button styleType="outline" bgColor="#dc004e" color="#dc004e">
    Button 2
    </Button>
</ButtonGroup></>`}></CodeAndExample>

        <h3>Vertical ButtonGroup</h3>
        <p>you can change alignment using <b>vertical</b> prop</p>
        <CodeAndExample example={
        <>
            <ButtonGroup vertical>
                <Button bgColor="#1976d2" color="white">
                    Button 1
                </Button>
                <Button bgColor="#1976d2" color="white">
                Button 2
                </Button>
                <Button bgColor="#1976d2" color="white">
                Button 2
                </Button>
            </ButtonGroup></>} code={`
<>
<ButtonGroup vertical>
    <Button bgColor="#1976d2" color="white">
        Button 1
    </Button>
    <Button bgColor="#1976d2" color="white">
    Button 2
    </Button>
    <Button bgColor="#1976d2" color="white">
    Button 2
    </Button>
</ButtonGroup></>`} />

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

export default ButtonGroupExample;