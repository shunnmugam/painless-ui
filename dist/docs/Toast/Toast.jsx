import React from 'react';
import { ToastContainer, toast, Button } from '../../components';
import CodeAndExample from '../CodeAndExample';
const ToastExample = (props) => {
    return <>
        <h1>Toast</h1>
        <p>A toast provides simple feedback about an operation in a small popup.</p>
        <CodeAndExample example={<>
        <Button onClick={() => {
        toast("Simple toast", "4", {
            options: {
                closeOnClick: true
            }
        });
    }}>Click here to open a toast</Button></>} code={`<>
<ToastContainer containerId="1" position="top-center" />
<Button onClick={() => {
    toast("Simple toast","1",{
        options : {
            closeOnClick : true
        }
    })
}}>Click</Button></>`}/>
        <ToastContainer containerId="4" position="bottom-center"/>
    </>;
};
export default ToastExample;
