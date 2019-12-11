import React, { useState } from 'react';
import { TabContainer, TabGroup, Tab, TabWrapper, Table } from '../../components';
import CodeAndExample from '../CodeAndExample';
const TabExample = (props) => {
    const [activeTab, changeActiveTab] = useState(0);
    return <>
        <h1>Tab</h1>
        <pre className="import-section">
            {`import {TabContainer, TabGroup, Tab, TabWrapper} from 'painless-ui/components'`}
        </pre>
        <p>there are 4 sub-components in tab component</p>
        <ol>
            <li>TabWrapper</li>
            <li>TabGroup</li>
            <li>Tab</li>
            <li>TabContainer</li>
        </ol>
        <h3>TabWrapper</h3>
        <p>main wrapper for entire tab</p>
        <h3>TabGroup</h3>
        <p>wrapper for tab link</p>
        <h3>Tab</h3>
        <p>link or head section</p>
        <h3>TabContainer</h3>
        <p>tab body</p>
        <CodeAndExample example={<>
            <TabWrapper>
            <TabGroup onClick={changeActiveTab}>
                <Tab>
                    Tab 1
                </Tab>
                <Tab>
                    Tab 2
                </Tab>
                <Tab>
                    Tab 3
                </Tab>
            </TabGroup>
            <TabContainer active={0 === activeTab}>
                Tab 1 content
            </TabContainer>
            <TabContainer active={1 === activeTab}>
                Tab 2 content
            </TabContainer>
            <TabContainer active={2 === activeTab}>
                Tab 3 content
            </TabContainer>
        </TabWrapper>
            </>} code={`
const [ activeTab, changeActiveTab ] = useState(0);
return (<>
    <TabWrapper>
        <TabGroup onClick={changeActiveTab}>
            <Tab>
                Tab 1
            </Tab>
            <Tab>
                Tab 2
            </Tab>
            <Tab>
                Tab 3
            </Tab>
        </TabGroup>
        <TabContainer active={0 === activeTab}>
            Tab 1 content
        </TabContainer>
        <TabContainer active={1 === activeTab}>
            Tab 2 content
        </TabContainer>
        <TabContainer active={2 === activeTab}>
            Tab 3 content
        </TabContainer>
    </TabWrapper>
</>)`}/>
    <h3>TabWrapper props</h3>
    <Table columns={[{
            selector: "name",
            name: "Name"
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
        }, {
            name: "width",
            type: "string",
            default: "100%"
        }]}/>
    <h3>TabGroup props</h3>
    <Table columns={[{
            selector: "name",
            name: "Name"
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
        }, {
            name: "activeColor",
            type: "string",
            default: <><span style={{ padding: "1px 10px", background: "#ffc107", marginRight: "3px" }}></span> #ffc107</>
        }, {
            name: "color",
            type: "string",
            default: "white"
        },
        {
            name: "defaultActive",
            type: "number",
            default: 0
        },
        {
            name: "onClick",
            type: "Function",
            default: '-'
        },
        {
            name: "width",
            type: "string",
            default: '100%'
        },
    ]}/>
    <h3>Tab props</h3>
    <Table columns={[{
            selector: "name",
            name: "Name"
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
        }]}/>
    <h3>TabContainer props</h3>
    <Table columns={[{
            selector: "name",
            name: "Name"
        }, {
            name: "Type",
            selector: "type"
        }, {
            name: "Default",
            selector: "default"
        }]} data={[{
            name: 'active',
            type: 'boolean',
            default: '-'
        },
        {
            name: "className",
            type: "string",
            default: "-"
        }]}/>
    
    </>;
};
export default TabExample;
