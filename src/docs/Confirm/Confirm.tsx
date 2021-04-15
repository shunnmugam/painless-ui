import React from 'react';
import { Button, confirm, Table } from '../../components';
import CodeAndExample from '../CodeAndExample';

const ConfirmExample:React.FC = (props) => {
    return <>
        
        <h1>confirm</h1>
        <p>The confirm method displays a dialog box with a specified message, along with custom buttons.</p>
        <pre className="import-section">
            {`import {confirm} from 'painless-ui/components'`}
        </pre>

        <CodeAndExample example={<>
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
        </>} code={`
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
        `} />
        <h3>customUI</h3>
        <p>You can customize ui using <b>customUI</b> prop</p>
        <CodeAndExample example={<>
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
        </>} code={`
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
        `} />

        <h3>outsideListener</h3>
        <p><b>outsideListener</b> prop is used to close the confirm while clicking outside overlay</p>
        <CodeAndExample example={<>
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
        </>} code={`
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
        `} />

        <h3>DialogContainer Props</h3>
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
            name : "title",
            type: 'string',
            default : "-"
        },
        {
            name : "message",
            type: "string",
            default : "-"
        },
        {
            name : "titleClassName",
            type: "string",
            default : "-"
        },
        {
            name : "messageClassName",
            type: "string",
            default : "-"
        },
        {
            name : "outsideListener",
            type: "boolean",
            default : "false"
        },
        {
            name : "buttons",
            type: `Array<{className? : string,
                styleType?: 'outline' | 'text',
                label: string,
                onClick: ({ onClose: Function }) => void}>`,
            default : "-"
        },
        {
            name : "customUI",
            type: "({ onClose }) => ReactElement",
            default : "-"
        },
        {
            name : "onClose",
            type: "() => void",
            default : "-"
        },
        
        ]}>

        </Table>
       

    </>
}

export default ConfirmExample;