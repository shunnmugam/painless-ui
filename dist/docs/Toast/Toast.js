import React, { useState } from 'react';
import { ToastContainer, toast, Button, Table, Select, Option } from '../../components';
import CodeAndExample from '../CodeAndExample';
const ToastExample = (props) => {
    const [toastPosition, changeToastPosition] = useState('top-center');
    return React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Toast"),
        React.createElement("p", null, "A toast provides simple feedback about an operation in a small popup."),
        React.createElement("pre", { className: "import-section" }, `import {ToastContainer, toast} from 'painless-ui/components'`),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Button, { onClick: () => {
                        toast("Simple toast", "4", {
                            options: {
                                closeOnClick: true
                            }
                        });
                    } }, "Click here to open a toast")), code: `<>
<ToastContainer containerId="1" position="top-center" />
<Button onClick={() => {
    toast("Simple toast","1",{
        options : {
            closeOnClick : true
        }
    })
}}>Click</Button></>` }),
        React.createElement("h2", null, "2 main things in toast"),
        React.createElement("ol", null,
            React.createElement("li", null, "ToastContainer"),
            React.createElement("li", null, "toast")),
        React.createElement("h3", null, "ToastContainer"),
        React.createElement("p", null,
            "ToastContainer is component for toast wrapper, it's mandatory, Remember to render the ToastContainer once in your application tree",
            React.createElement("b", null, "containerId"),
            " props is unique id for ToastContainer"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Button, { onClick: () => {
                        toast("Simple toast", "4", {
                            options: {
                                closeOnClick: true
                            }
                        });
                    } }, "Click here to open a toast")), code: `<>
<ToastContainer containerId="1" position="top-center" />
<Button onClick={() => {
    toast("Simple toast","1",{
        options : {
            closeOnClick : true
        }
    })
}}>Click</Button></>` }),
        React.createElement("h3", null, "toast"),
        React.createElement("code", null, `toast(toastMessage:any,containerId:string,config:object)`),
        React.createElement("h3", null, "position"),
        React.createElement("p", null,
            "you can change position using ",
            React.createElement("b", null, "position"),
            " props in ToastContainer, currently there are 6 positions"),
        React.createElement("ol", null,
            React.createElement("li", null, "top-center"),
            React.createElement("li", null, "top-left"),
            React.createElement("li", null, "top-right"),
            React.createElement("li", null, "bottom-center"),
            React.createElement("li", null, "bottom-left"),
            React.createElement("li", null, "bottom-right")),
        React.createElement(CodeAndExample, { code: `<>
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
            </>`, example: React.createElement(React.Fragment, null,
                React.createElement(Select, { value: toastPosition, onChange: (v) => changeToastPosition(v.value), label: React.createElement("label", null, "Toast Position") },
                    React.createElement(Option, { value: "top-center", text: "top-center" }, "top-center"),
                    React.createElement(Option, { value: "top-left", text: "top-left" }, "top-left"),
                    React.createElement(Option, { value: "top-right", text: "top-right" }, "top-right"),
                    React.createElement(Option, { value: "bottom-center", text: "bottom-center" }, "bottom-center"),
                    React.createElement(Option, { value: "bottom-left", text: "bottom-left" }, "bottom-left"),
                    React.createElement(Option, { value: "bottom-right", text: "bottom-right" }, "bottom-right")),
                React.createElement(Button, { onClick: () => {
                        toast("Simple toast on" + toastPosition, "11", {
                            options: {
                                closeOnClick: true
                            }
                        });
                    } }, "Click here to open a toast"),
                React.createElement(ToastContainer, { containerId: "11", position: toastPosition })) }),
        React.createElement("h3", null, "config"),
        React.createElement("p", null, "you can customize toast using config params, basically config params have below property and methods"),
        React.createElement("ol", null,
            React.createElement("li", null, "className: string"),
            React.createElement("li", null, "title: string"),
            React.createElement("li", null, "options: ToastOptions"),
            React.createElement("li", null, "style: object"),
            React.createElement("li", null, "onClose: Function"),
            React.createElement("li", null, "[key:string]: any")),
        React.createElement(CodeAndExample, { code: `
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
</>`, example: React.createElement(React.Fragment, null,
                React.createElement(Button, { onClick: () => {
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
                    } }, "Click here to open a toast")) }),
        React.createElement("h3", null, "Types of toast"),
        React.createElement("p", null, "currently we have 3 types of tooltip"),
        React.createElement("ol", null,
            React.createElement("li", null, "error"),
            React.createElement("li", null, "info"),
            React.createElement("li", null, "success")),
        React.createElement(CodeAndExample, { code: `
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
`, example: React.createElement(React.Fragment, null,
                React.createElement(Button, { onClick: () => {
                        toast.error("This is error message", "4", {
                            title: "OOPS!"
                        });
                    } }, "Error"),
                React.createElement(Button, { onClick: () => {
                        toast.info("This is info message", "4", {
                            title: "info",
                        });
                    } }, "Info"),
                React.createElement(Button, { onClick: () => {
                        toast.success("This is success message", "4", {
                            title: "success"
                        });
                    } }, "Success")) }),
        React.createElement("h3", null, "ToastContainer property"),
        React.createElement(Table, { columns: [{
                    name: "Name",
                    selector: "name",
                }, {
                    name: "Type",
                    selector: "type"
                }, {
                    name: "Default",
                    selector: "default"
                }], data: [{
                    name: "containerId",
                    type: "string",
                    default: "-"
                },
                {
                    name: "position",
                    type: "string",
                    default: "bottom-center"
                },
            ] }),
        React.createElement("h3", null, "config property"),
        React.createElement(Table, { columns: [{
                    name: "Name",
                    selector: "name",
                }, {
                    name: "Type",
                    selector: "type"
                }, {
                    name: "Default",
                    selector: "default"
                }], data: [{
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
                }] }),
        React.createElement("h3", null, "ToastOptions"),
        React.createElement(Table, { columns: [{
                    name: "Name",
                    selector: "name",
                }, {
                    name: "Type",
                    selector: "type"
                }, {
                    name: "Default",
                    selector: "default"
                }], data: [{
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
            ] }),
        React.createElement(ToastContainer, { containerId: "4", position: "bottom-center" }));
};
export default ToastExample;
