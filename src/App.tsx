import React, { useState, Suspense } from 'react';
import './App.css';
import { Button, ButtonGroup, Checkbox, Input, Badge, TabGroup, Tab, TabWrapper, Accordion, AccordionGroup } from './components/index';
import TabContainer from './components/TabContainer/TabContainer';

const Switch = React.lazy(() => import('./components/Switch/Switch'));

const App: React.FC = () => {
  const [ checkBoxHook, setChecboxCheck ] = useState(false);
  const [ activeTab, changeActiveTab ] = useState(0);

  return (
    <div className="App">
      <Input rounded={false} type="text" placeholder="Email id" onChange={ (e) => {
          console.log(e.target.value)
        }}
         validationOptions={{
        event:"onInput",
        rules: 'required',
        validateNow: checkBoxHook,
        validationCallback: (res,e) => {
          console.log(res);
        }
      }} />
      <Input type="radio" width="20px" height="20px" />
      <Button  color="white" bgColor="#2196f3" id='ui-button-1' styleType='background' rounded>C</Button>
      <ButtonGroup>
        <Button color="red" bgColor="red" id='ui-button-1' styleType='outline'>click</Button>
        <Button disabled color="green" bgColor="red" id='ui-button-1' styleType='outline'>click</Button>
        <Button color="blue" bgColor="red" id='ui-button-1' styleType='outline'>click</Button>
      </ButtonGroup>
      <Checkbox width="20px" height="20px" checked={checkBoxHook} onChange={(e:any) => {
        setChecboxCheck(!checkBoxHook)
      }} />
      {/* <Input type="radio" />
      <Input type="checkbox" rounded />
      <Suspense fallback={'loading'}>
      <Switch />
      </Suspense> */}
       <Button  color="white" bgColor="#2196f3" id='ui-button-1' styleType='background'>C</Button>
      <Badge>10</Badge>
      <TabWrapper>
        <TabGroup onClick={changeActiveTab}>
          <Tab>
            <span>Default</span>
          </Tab>
          <Tab>Tab 2</Tab>
        </TabGroup>
        <TabContainer active={0 === activeTab}>abc</TabContainer>
        <TabContainer active={1 === activeTab}>2 nd tab</TabContainer>
      </TabWrapper>
      <AccordionGroup collapsible onToggle={(s,i) => console.log(s,i)}>
      <Accordion title="section 1">
        <p>
        Test
        </p>
      </Accordion>
      <Accordion title="section 1">
        <p>
        Test
        </p>
      </Accordion>
      </AccordionGroup>
    </div>
  );
}

export default App;
