import React from 'react';
import CodeAndExample from '../CodeAndExample';
import { DialogContainer, dialog, Button, Table } from '../../components';
const DialogExample = () => {
    return React.createElement(React.Fragment, null,
        React.createElement("h1", null, "dialog"),
        React.createElement("p", null, "Dialogs inform users about a task or notification without affecting a main UI."),
        React.createElement("pre", { className: "import-section" }, `import {DialogContainer, dialog} from 'painless-ui/components'`),
        React.createElement("ol", null,
            React.createElement("li", null, "DialogContainer"),
            React.createElement("li", null, "dialog")),
        React.createElement("h3", null, "DialogContainer"),
        React.createElement("p", null,
            "DialogContainer is component for dialog wrapper, it's mandatory,",
            React.createElement("b", null, "containerId"),
            " props is unique id for DialogContainer"),
        React.createElement("h3", null, "dialog"),
        React.createElement("p", null,
            "To view function options click ",
            React.createElement("a", { href: "#", onClick: (e) => {
                    var _a;
                    e.preventDefault();
                    (_a = document.getElementById('dialog-options')) === null || _a === void 0 ? void 0 : _a.scrollIntoView();
                } }, "here")),
        React.createElement("code", null, `dialog(dialogContent:any,containerId:string,options:object)`),
        React.createElement("h3", null, "Simple Example"),
        React.createElement(DialogContainer, { containerId: "1" }),
        React.createElement(DialogContainer, { containerId: "2", position: "top-left" }),
        React.createElement(DialogContainer, { containerId: "3", position: "top-right" }),
        React.createElement(DialogContainer, { containerId: "4", position: "bottom-right" }),
        React.createElement(DialogContainer, { containerId: "5", position: "bottom-left" }),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Button, { onClick: () => {
                        dialog("Simple Dialog", "1");
                    } }, "Show")), code: `
        <>
        <DialogContainer containerId={"1"} />
            <Button onClick={() => {
                dialog("Simple Dialog", "1");
            }}>Show</Button>
        </>
        ` }),
        React.createElement("h3", null, "containerId"),
        React.createElement("p", null,
            React.createElement("b", null, "containerId"),
            " prop is unique string for DialogContainer, you can create multiple container"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(DialogContainer, { containerId: "container-1" }),
                React.createElement(DialogContainer, { containerId: "container-2" }),
                React.createElement(Button, { onClick: () => {
                        dialog("Simple Dialog From Container 1", "container-1");
                    } }, "Show dialog in Container 1"),
                React.createElement(Button, { onClick: () => {
                        dialog("Simple Dialog From Container 2", "container-2");
                    } }, "Show dialog in Container 2")), code: `
            <>
                <DialogContainer containerId={"container-1"} />
                <DialogContainer containerId={"container-2"} />
                <Button onClick={() => {
                    dialog("Simple Dialog From Container 1", "container-1");
                }}>Show dialog in Container 1</Button>
                <Button onClick={() => {
                    dialog("Simple Dialog From Container 2", "container-2");
                }}>Show dialog in Container 2</Button>
            </>
        ` }),
        React.createElement("h3", null, "position"),
        React.createElement("p", null,
            "You can control position of dialog using ",
            React.createElement("b", null, "position"),
            " prop"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Button, { onClick: () => {
                        dialog("Top left dialog", "2");
                    } }, "top-left"),
                React.createElement(Button, { onClick: () => {
                        dialog("Top right dialog", "3");
                    } }, "top-right"),
                React.createElement(Button, { onClick: () => {
                        dialog("Bottom right dialog", "4");
                    } }, "bottom-right"),
                React.createElement(Button, { onClick: () => {
                        dialog("Bottom left dialog", "5");
                    } }, "bottom-left")), code: `
            <>
                <DialogContainer containerId={"2"} position="top-left" />
                <DialogContainer containerId={"3"} position="top-right" />
                <DialogContainer containerId={"4"} position="bottom-right" />
                <DialogContainer containerId={"5"} position="bottom-left"/>
                <Button onClick={() => {
                    dialog("Top left dialog", "2");
                }}>top-left</Button>
                <Button onClick={() => {
                    dialog("Top right dialog", "3");
                }}>top-right</Button>
                <Button onClick={() => {
                    dialog("Bottom right dialog", "4");
                }}>bottom-right</Button>
                <Button onClick={() => {
                    dialog("Bottom left dialog", "4");
                }}>bottom-left</Button>
            </>
        ` }),
        React.createElement("h3", null, "animationAxis"),
        React.createElement("p", null,
            React.createElement("b", null, "animationAxis"),
            " prop is used to change animation side"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Button, { onClick: () => {
                        dialog("Top left dialog", "2", { animationAxis: "x" });
                    } }, "top-left animationAxis x"),
                React.createElement(Button, { onClick: () => {
                        dialog("Top left dialog", "2", { animationAxis: "y" });
                    } }, "top-left animationAxis y"),
                React.createElement(Button, { onClick: () => {
                        dialog("Top right dialog", "3", { animationAxis: "x" });
                    } }, "top-right animationAxis x"),
                React.createElement(Button, { onClick: () => {
                        dialog("Top right dialog", "3", { animationAxis: "y" });
                    } }, "top-right animationAxis y"),
                React.createElement(Button, { onClick: () => {
                        dialog("Bottom right dialog", "4", { animationAxis: "x" });
                    } }, "bottom-right animationAxis x"),
                React.createElement(Button, { onClick: () => {
                        dialog("Bottom right dialog", "4", { animationAxis: "y" });
                    } }, "bottom-right animationAxis y"),
                React.createElement(Button, { onClick: () => {
                        dialog("Bottom left dialog", "5", { animationAxis: "x" });
                    } }, "bottom-left animationAxis x"),
                React.createElement(Button, { onClick: () => {
                        dialog("Bottom left dialog", "5", { animationAxis: "y" });
                    } }, "bottom-left animationAxis y")), code: `
            <>
                <DialogContainer containerId={"2"} position="top-left" />
                <DialogContainer containerId={"3"} position="top-right" />
                <DialogContainer containerId={"4"} position="bottom-right" />
                <DialogContainer containerId={"5"} position="bottom-left"/>
                <Button onClick={() => {
                    dialog("Top left dialog", "2", {animationAxis: "x"});
                }}>top-left animationAxis x</Button>
                <Button onClick={() => {
                    dialog("Top left dialog", "2", {animationAxis: "y"});
                }}>top-left animationAxis y</Button>

                <Button onClick={() => {
                    dialog("Top right dialog", "3",{animationAxis: "x"});
                }}>top-right animationAxis x</Button>
                <Button onClick={() => {
                    dialog("Top right dialog", "3", {animationAxis: "y"});
                }}>top-right animationAxis y</Button>

                <Button onClick={() => {
                    dialog("Bottom right dialog", "4", {animationAxis: "x"});
                }}>bottom-right animationAxis x</Button>
                <Button onClick={() => {
                    dialog("Bottom right dialog", "4", {animationAxis: "y"});
                }}>bottom-right animationAxis y</Button>

                <Button onClick={() => {
                    dialog("Bottom left dialog", "5", {animationAxis: "x"});
                }}>bottom-left animationAxis x</Button>
                <Button onClick={() => {
                    dialog("Bottom left dialog", "5", {animationAxis: "y"});
                }}>bottom-left animationAxis y</Button>
            </>
        ` }),
        React.createElement("h3", null, "autoClose"),
        React.createElement("p", null,
            "If you want to disable auto close functionality then you can use ",
            React.createElement("b", null, "autoClose"),
            " prop"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Button, { onClick: () => {
                        dialog("I don't have auto close functionality", "1", { autoClose: false });
                    } }, "Show")), code: `
            <>
            <DialogContainer containerId={"1"} />
                <Button onClick={() => {
                    dialog("I don't have auto close functionality", "1", {autoClose: false});
                }}>Show</Button>
            </>
        ` }),
        React.createElement("h3", null, "autoCloseTime"),
        React.createElement("p", null,
            "If you want to change auto close time interval then you can use ",
            React.createElement("b", null, "autoCloseTime"),
            " prop"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Button, { onClick: () => {
                        dialog("This will close after 10s", "1", { autoCloseTime: 10000 });
                    } }, "Show")), code: `
            <>
            <DialogContainer containerId={"1"} />
                <Button onClick={() => {
                    dialog("This will close after 10s", "1", {autoCloseTime: 10000});
                }}>Show</Button>
            </>
        ` }),
        React.createElement("h3", null, "custom ui"),
        React.createElement("p", null, "you can add custom JSX tag"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Button, { onClick: () => {
                        dialog(({ onClose }) => {
                            return React.createElement("div", { className: "cookie-dialog" },
                                React.createElement("div", { style: { position: 'relative' } },
                                    React.createElement("img", { width: "50", className: "avatar", style: { width: '45px',
                                            height: '45px',
                                            position: 'absolute',
                                            top: '20px'
                                        }, src: "/images/cookie.png", alt: "Cookie Icon" }),
                                    React.createElement("div", { style: { width: 'calc(100% - 60px)', marginLeft: '60px' } },
                                        React.createElement("p", null,
                                            "We use cookies to ensure that we give you the best experience on our\u00A0website. ",
                                            React.createElement("a", { href: "/" }, "Privacy\u00A0Statement"),
                                            "."))),
                                React.createElement("ul", { style: { listStyle: 'none', padding: 0, width: '100%', display: 'flex', justifyContent: 'flex-end', margin: 0 } },
                                    React.createElement("li", null,
                                        React.createElement(Button, { onClick: onClose }, "I disagree")),
                                    React.createElement("li", null,
                                        React.createElement(Button, { onClick: onClose }, "I agree"))));
                        }, "1", { autoClose: false });
                    } }, "Show")), code: `
            <>
            <DialogContainer containerId={"1"} />
            <Button onClick={() => {
                dialog(({onClose}) => {

                    return <div className="cookie-dialog">
                        <div style={{position: 'relative'}}>
                            <img width="50" className="avatar" style={{width: '45px',
                                height: '45px',
                                position: 'absolute',
                                top: '20px'
                                }} src="/images/cookie.png" alt="Cookie Icon" />
                            <div style={{width: 'calc(100% - 60px)',marginLeft: '60px'}}>
                                <p>We use cookies to ensure that we give you the best experience on our&nbsp;website. <a href="/">Privacy&nbsp;Statement</a>.</p></div>
                        </div>
                        <ul style={{listStyle: 'none',padding: 0,width: '100%',display: 'flex',justifyContent: 'flex-end',margin: 0}}>
                                <li>
                                    <Button>I disagree</Button>
                                </li>
                                <li>
                                    <Button>I agree</Button>
                                
                                </li>
                            </ul>
                    </div>
                }, "1", {autoClose: false});
            }}>Show</Button>
            </>
        ` }),
        React.createElement("h3", null, "DialogContainer Props"),
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
                    name: "position",
                    type: '"top-left" | "top-right" | "bottom-right" | "bottom-left"',
                    default: "bottom-right"
                },
                {
                    name: "containerId",
                    type: "string",
                    default: "-"
                },
            ] }),
        React.createElement("h3", { id: "dialog-options" }, "dialog options"),
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
                    name: "closeBtn",
                    type: "boolean",
                    default: "true"
                },
                {
                    name: "animationAxis",
                    type: '"x" | "y"',
                    default: "x"
                },
                {
                    name: "autoClose",
                    type: 'boolean',
                    default: "false"
                },
                {
                    name: "autoCloseTime",
                    type: 'number',
                    default: "5000"
                },
                {
                    name: "onClose",
                    type: '() => void',
                    default: "-"
                },
            ] }));
};
export default DialogExample;
