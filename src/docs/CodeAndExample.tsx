import React, { FunctionComponent, useState } from 'react'
import { TabContainer, TabGroup, Tab, TabWrapper } from '../components';

interface CodeAndExampleProps {
    example : any,
    code : any
}
const CodeAndExample: FunctionComponent<CodeAndExampleProps> = (props) => {
    const [ activeTab, changeActiveTab ] = useState(0);
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
                <pre>
                    <code>
                        {props.code}
                    </code>
                </pre>
            </TabContainer>
        </TabWrapper>
    </>
}

export default CodeAndExample;