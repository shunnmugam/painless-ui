import React, { FunctionComponent, useState } from 'react'
import { TabContainer, TabGroup, Tab, TabWrapper, Button, ToastContainer, toast } from '../components';

interface CodeAndExampleProps {
    example : any,
    code : any
}



const copyToClipboard = function(secretInfo) {
    const $body = document.getElementsByTagName('body')[0];
    const $tempInput: any = document.createElement('INPUT');
    $body.appendChild($tempInput);
    $tempInput.setAttribute('value', secretInfo)
    $tempInput.select();
    document.execCommand('copy');
    $body.removeChild($tempInput);
   
  }


const CodeAndExample: FunctionComponent<CodeAndExampleProps> = (props) => {
    const [ activeTab, changeActiveTab ] = useState(0);
    let uniqueId = Math.random().toString(36).substring(2) + Date.now().toString(36);
    return <>
        <TabWrapper>
            <TabGroup onClick={changeActiveTab}>
                <Tab>
                    Example
                </Tab>
                <Tab>
                    Code
                </Tab>
            </TabGroup>
            <TabContainer active={0 === activeTab}>
                {props.example}
            </TabContainer>
            <TabContainer active={1 === activeTab}>
                <pre style={{display:"inline-block"}}>
                    <code>
                        {props.code}
                    </code>
                </pre>
                <Button onClick={() => {
                    copyToClipboard(props.code);
                    const c = <div>Copied </div>
                    toast.success(c,uniqueId,{
                        title: "Info",
                        options : {
                            time: 5000000,
                            closeOnClick: true
                        }
                    });
                }} style={{float: "right"}} rounded> <img alt="copy" src={process.env.PUBLIC_URL + '/images/copy.svg'} /> </Button>
            </TabContainer>
        </TabWrapper>
        <ToastContainer containerId={uniqueId} />
    </>
}

export default CodeAndExample;