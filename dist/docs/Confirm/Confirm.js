import React from 'react';
import { Button, confirm, Table } from '../../components';
import CodeAndExample from '../CodeAndExample';
const ConfirmExample = (props) => {
    return React.createElement(React.Fragment, null,
        React.createElement("h1", null, "confirm"),
        React.createElement("p", null, "The confirm method displays a dialog box with a specified message, along with custom buttons."),
        React.createElement("pre", { className: "import-section" }, `import {confirm} from 'painless-ui/components'`),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Button, { onClick: () => {
                        confirm({
                            title: "Confirm to submit",
                            message: "Are you sure to do this.",
                            buttons: [{
                                    label: "No",
                                    onClick: ({ onClose }) => {
                                        onClose();
                                    }
                                }, {
                                    label: "Yes",
                                    onClick: ({ onClose }) => {
                                        onClose();
                                    }
                                }]
                        });
                    } }, "Open")), code: `
        <>
            <Button onClick={() => {
                confirm({
                    title: "Confirm to submit",
                    message: "Are you sure to do this.",
                    buttons: [{
                        label: "No",
                        onClick: ({onClose}) => {
                            onClose()
                        }
                    },{
                        label: "Yes",
                        onClick: ({onClose}) => {
                            onClose()
                        }
                    }]
                })
            }}>Open</Button>
        </>
        ` }),
        React.createElement("h3", null, "customUI"),
        React.createElement("p", null,
            "You can customize ui using ",
            React.createElement("b", null, "customUI"),
            " prop"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Button, { onClick: () => {
                        confirm({
                            customUI: (({ onClose }) => {
                                return React.createElement(React.Fragment, null,
                                    "This is custom ui",
                                    React.createElement("div", null,
                                        React.createElement("button", { onClick: () => {
                                                onClose();
                                            } }, "Okay")));
                            })
                        });
                    } }, "Open")), code: `
        <>
            <Button onClick={() => {
                confirm({
                    customUI: (({onClose}) => {
                        return <>
                            This is custom ui
                            <div>
                            <button onClick={() => {
                                onClose()
                            }}>Okay</button>
                            </div>
                        </>
                    })
                })
            }}>Open</Button>
        </>
        ` }),
        React.createElement("h3", null, "outsideListener"),
        React.createElement("p", null,
            React.createElement("b", null, "outsideListener"),
            " prop is used to close the confirm while clicking outside overlay"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Button, { onClick: () => {
                        confirm({
                            outsideListener: true,
                            customUI: (({ onClose }) => {
                                return React.createElement(React.Fragment, null,
                                    "This is custom ui with outsideListener, confirm will close while clicking outside overlay",
                                    React.createElement("div", null,
                                        React.createElement("button", { onClick: () => {
                                                onClose();
                                            } }, "Okay")));
                            })
                        });
                    } }, "Open")), code: `
        <>
            <Button onClick={() => {
                confirm({
                    outsideListener: true,
                    customUI: (({onClose}) => {
                        return <>
                            This is custom ui with outsideListener, confirm will close while clicking outside overlay
                            <div>
                            <button onClick={() => {
                                onClose()
                            }}>Okay</button>
                            </div>
                        </>
                    })
                })
            }}>Open</Button>
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
                    name: "title",
                    type: 'string',
                    default: "-"
                },
                {
                    name: "message",
                    type: "string",
                    default: "-"
                },
                {
                    name: "titleClassName",
                    type: "string",
                    default: "-"
                },
                {
                    name: "messageClassName",
                    type: "string",
                    default: "-"
                },
                {
                    name: "outsideListener",
                    type: "boolean",
                    default: "false"
                },
                {
                    name: "buttons",
                    type: `Array<{className? : string,
                styleType?: 'outline' | 'text',
                label: string,
                onClick: ({ onClose: Function }) => void}>`,
                    default: "-"
                },
                {
                    name: "customUI",
                    type: "({ onClose }) => ReactElement",
                    default: "-"
                },
                {
                    name: "onClose",
                    type: "() => void",
                    default: "-"
                },
            ] }));
};
export default ConfirmExample;
