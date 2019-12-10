import React, { useState } from 'react';
import { ToastContainer, toast, Button, Table, Select, Option } from '../../components';
import CodeAndExample from '../CodeAndExample';
const ToastExample = (props) => {
    const [toastPosition, changeToastPosition] = useState('top-center');
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
        <h2>2 main things in toast</h2>
        <ol>
            <li>ToastContainer</li>
            <li>toast</li>
        </ol>
        <h3>ToastContainer</h3>
        <p>ToastContainer is component for toast wrapper, it's mandatory, 
            Remember to render the ToastContainer once in your application tree
            <b>containerId</b> props is unique id for ToastContainer
        </p>
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
        <h3>toast</h3>
        <code>
            {`toast(toastMessage:any,containerId:string,config:object)`}
        </code>
        <h3>position</h3>
        <p>you can change position using <b>position</b> props in ToastContainer, currently there are 6 positions</p>
        <ol>
            <li>top-center</li>
            <li>top-left</li>
            <li>top-right</li>
            <li>bottom-center</li>
            <li>bottom-left</li>
            <li>bottom-right</li>
        </ol>
        <CodeAndExample code={`<>
                <Select value={toastPosition} onChange={(v) => changeToastPosition(v.value)} label={<label>Toast Position</label>}>
                    <Option value="top-center" text="top-center">top-center</Option>  
                    <Option value="top-left" text="top-left">top-left</Option>  
                    <Option value="top-right" text="top-right">top-right</Option>  
                    <Option value="bottom-center" text="bottom-center">bottom-center</Option>  
                    <Option value="bottom-left" text="bottom-left">bottom-left</Option>  
                    <Option value="bottom-right" text="bottom-right">bottom-right</Option>  
                </Select>
                <Button onClick={() => {
                    toast("Simple toast on"+ toastPosition,"11",{
                        options : {
                            closeOnClick : true
                        }
                    })
                }}>Click here to open a toast</Button>
                <ToastContainer containerId="11" position={toastPosition} />
            </>`} example={<>
                <Select value={toastPosition} onChange={(v) => changeToastPosition(v.value)} label={<label>Toast Position</label>}>
                    <Option value="top-center" text="top-center">top-center</Option>  
                    <Option value="top-left" text="top-left">top-left</Option>  
                    <Option value="top-right" text="top-right">top-right</Option>  
                    <Option value="bottom-center" text="bottom-center">bottom-center</Option>  
                    <Option value="bottom-left" text="bottom-left">bottom-left</Option>  
                    <Option value="bottom-right" text="bottom-right">bottom-right</Option>  
                </Select>
                <Button onClick={() => {
        toast("Simple toast on" + toastPosition, "11", {
            options: {
                closeOnClick: true
            }
        });
    }}>Click here to open a toast</Button>
                <ToastContainer containerId="11" position={toastPosition}/>
            </>}/>
        <h3>config</h3>
        <p>you can customize toast using config params, basically config params have below property and methods</p>
         <ol>
             <li>className: string</li>
            <li>title: string</li>
            <li>options: ToastOptions</li>
            <li>style: object</li>
            <li>onClose: Function</li>
            <li>[key:string]: any</li>
         </ol>
         <CodeAndExample code={`
<>
    <Button onClick={() => {
        toast("Simple toast","4",{
            className: "custom-toast",
            title: "info",
            titleStyle: {
                fontStyle: "italic"
            },
            options : {
                closeOnClick : true,
                time: 10000
            },
            style: {
                fontWeight : "bold"
            }
        })
    }}>Click here to open a toast</Button>
</>`} example={<>
                <Button onClick={() => {
        toast("Simple toast", "4", {
            className: "custom-toast",
            title: "info",
            titleStyle: {
                fontStyle: "italic"
            },
            options: {
                closeOnClick: true,
                time: 10000
            },
            style: {
                fontWeight: "bold"
            }
        });
    }}>Click here to open a toast</Button>
             </>}/>
         <h3>Types of toast</h3>
         <p>currently we have 3 types of tooltip</p>
         <ol>
             <li>error</li>
             <li>info</li>
             <li>success</li>
         </ol>
         <CodeAndExample code={`
<>
    <Button onClick={() => {
        toast.error("This is error message","4",{
            title: "OOPS!"
        })
    }}>
        Error
    </Button>
    <Button onClick={() => {
        toast.info("This is info message","4",{
            title: "info",
        })
    }}>
        Info
    </Button>
    <Button onClick={() => {
        toast.success("This is success message","4",{
            title: "success"
        })
    }}>
        Success
    </Button>
</>
`} example={<>
                <Button onClick={() => {
        toast.error("This is error message", "4", {
            title: "OOPS!"
        });
    }}>
                    Error
                </Button>
                <Button onClick={() => {
        toast.info("This is info message", "4", {
            title: "info",
        });
    }}>
                    Info
                </Button>
                <Button onClick={() => {
        toast.success("This is success message", "4", {
            title: "success"
        });
    }}>
                    Success
                </Button>
             </>}/>
         <h3>ToastContainer property</h3>
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
            name: "containerId",
            type: "string",
            default: "-"
        },
        {
            name: "position",
            type: "string",
            default: "bottom-center"
        },
    ]}></Table>
         <h3>config property</h3>
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
            name: "title",
            type: "string",
            default: "Alert"
        },
        {
            name: "style",
            type: "object",
            default: "-"
        }, {
            name: "titleStyle",
            type: "string",
            default: "-"
        }, {
            name: "onClose",
            type: "Function",
            default: "-"
        }, {
            name: "options",
            type: "ToastOptions",
            default: `{
                    autoClose: true,
                    closeOnClick: false,
                    time: 5000
                }`
        }]}>   
        </Table>
        <h3>ToastOptions</h3>
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
            name: "autoClose",
            type: "boolean",
            default: "false"
        },
        {
            name: "closeOnClick",
            type: "boolean",
            default: "false"
        }, {
            name: "time",
            type: "number",
            default: "5000 //ms"
        }
    ]}></Table>
        <ToastContainer containerId="4" position="bottom-center"/>
    </>;
};
export default ToastExample;
