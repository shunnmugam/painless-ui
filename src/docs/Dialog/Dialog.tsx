import React from 'react';
import CodeAndExample from '../CodeAndExample';
import { DialogContainer, dialog, Button, Table } from '../../components';
const DialogExample:React.FC = () => {
    return <>
        
        <h1>dialog</h1>
        <p>Dialogs inform users about a task or notification without affecting a main UI.</p>
        <pre className="import-section">
            {`import {DialogContainer, dialog} from 'painless-ui/components'`}
        </pre>
        <ol>
            <li>DialogContainer</li>
            <li>dialog</li>
        </ol>
        <h3>DialogContainer</h3>
        <p>DialogContainer is component for dialog wrapper, it's mandatory, 
            <b>containerId</b> props is unique id for DialogContainer
        </p>
        <h3>dialog</h3>
        <p>To view function options click <a href="#" onClick={(e) => {
            e.preventDefault();

            document.getElementById('dialog-options')?.scrollIntoView() 

        }}>here</a></p>
        <code>
            {
                `dialog(dialogContent:any,containerId:string,options:object)`
            }
        </code>
        <h3>Simple Example</h3>

        <DialogContainer containerId={"1"} />
        <DialogContainer containerId={"2"} position="top-left" />
        <DialogContainer containerId={"3"} position="top-right" />
        <DialogContainer containerId={"4"} position="bottom-right" />
        <DialogContainer containerId={"5"} position="bottom-left"/>

        <CodeAndExample example={<>
            
            <Button onClick={() => {
                dialog("Simple Dialog", "1");
            }}>Show</Button>
        </>} code={`
        <>
        <DialogContainer containerId={"1"} />
            <Button onClick={() => {
                dialog("Simple Dialog", "1");
            }}>Show</Button>
        </>
        `} />

        <h3>containerId</h3>
        <p><b>containerId</b> prop is unique string for DialogContainer, you can create multiple container</p>
        <CodeAndExample example={<>
            <DialogContainer containerId={"container-1"} />
                <DialogContainer containerId={"container-2"} />
                <Button onClick={() => {
                    dialog("Simple Dialog From Container 1", "container-1");
                }}>Show dialog in Container 1</Button>
                <Button onClick={() => {
                    dialog("Simple Dialog From Container 2", "container-2");
                }}>Show dialog in Container 2</Button>
        </>} code={`
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
        `} />

        <h3>position</h3>
        <p>You can control position of dialog using <b>position</b> prop</p>
        <CodeAndExample example={<>
                
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
                    dialog("Bottom left dialog", "5");
                }}>bottom-left</Button>
            </>} code={`
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
        `} />
        

        <h3>animationAxis</h3>
        <p><b>animationAxis</b> prop is used to change animation side</p>
        <CodeAndExample example={<>
                
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
            </>} code={`
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
        `} />

        <h3>autoClose</h3>
        <p>If you want to disable auto close functionality then you can use <b>autoClose</b> prop</p>
        <CodeAndExample example={<> 
            <Button onClick={() => {
                dialog("I don't have auto close functionality", "1", {autoClose: false});
            }}>Show</Button>
            </>} code={`
            <>
            <DialogContainer containerId={"1"} />
                <Button onClick={() => {
                    dialog("I don't have auto close functionality", "1", {autoClose: false});
                }}>Show</Button>
            </>
        `} />

        <h3>autoCloseTime</h3>
        <p>If you want to change auto close time interval then you can use <b>autoCloseTime</b> prop</p>
        <CodeAndExample example={<> 
            <Button onClick={() => {
                dialog("This will close after 10s", "1", {autoCloseTime: 10000});
            }}>Show</Button>
            </>} code={`
            <>
            <DialogContainer containerId={"1"} />
                <Button onClick={() => {
                    dialog("This will close after 10s", "1", {autoCloseTime: 10000});
                }}>Show</Button>
            </>
        `} />

        <h3>custom ui</h3>
        <p>you can add custom JSX tag</p>
        <CodeAndExample example={<> 
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
                                    <Button onClick={onClose}>I disagree</Button>
                                </li>
                                <li>
                                    <Button onClick={onClose}>I agree</Button>
                                </li>
                            </ul>
                    </div>
                }, "1", {autoClose: false});
            }}>Show</Button>
            </>} code={`
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
            name : "position",
            type: '"top-left" | "top-right" | "bottom-right" | "bottom-left"',
            default : "bottom-right"
        },
        {
            name : "containerId",
            type: "string",
            default : "-"
        },
        
        ]}>

        </Table>
       
        <h3 id="dialog-options">dialog options</h3>
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
            name : "closeBtn",
            type: "boolean",
            default : "true"
        },
        {
            name : "animationAxis",
            type: '"x" | "y"',
            default : "x"
        },
        {
            name : "autoClose",
            type: 'boolean',
            default : "false"
        },
        {
            name : "autoCloseTime",
            type: 'number',
            default : "5000"
        },
        {
            name : "onClose",
            type: '() => void',
            default : "-"
        },
        
        ]}>

        </Table>
       
    </>

}

export default DialogExample;