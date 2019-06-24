import React, { useState, Suspense } from 'react';
import './App.css';
// import Modal from './Modal';
import { Button, ButtonGroup, Checkbox, Input, Badge, TabGroup, Tab, TabWrapper, Accordion, AccordionGroup, Tag, Breadcrumb, Select, Option, Modal } from './components/index';
import TabContainer from './components/TabContainer/TabContainer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Switch = React.lazy(() => import('./components/Switch/Switch'));

const App: React.FC = () => {
  const [ checkBoxHook, setChecboxCheck ] = useState(false);
  const [ activeTab, changeActiveTab ] = useState(0);

  return (
    <div className="App">
      <Router>
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
      <Input type="radio" width="20px" height="20px" name="a" />
      <Input type="radio" width="20px" height="20px" name="a" />
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
      <Breadcrumb>
        <Link to={''}>Home</Link>
        <span>hai</span>
        <span>hai2</span>
      </Breadcrumb>
      <Tag addons={<span>addons</span>}/>

      <Select multiple={true} label={<label>Choose</label>}>
        <Option value="1">male</Option>
        <Option text="female" value="2">Fe Male</Option>
        {/* <Option value="3">Male Male MaleMaleMale MaleMale  Male Male Male</Option>
        <Option value="4">Fe Male</Option>
        <Option value="5">Male Male MaleMaleMale MaleMale  Male Male Male</Option>
        <Option value="6">Fe Male</Option>
        <Option value="7">Male Male MaleMaleMale MaleMale  Male Male Male</Option>
        <Option value="8">Fe Male</Option> */}
        {checkBoxHook ? <Option value="8">Fe Male</Option> : <></>}
      </Select>

      <Modal open={true}>
        <p>Some text in the Modal..</p>
      </Modal> 
      </Router>
    </div>
  );
}

export default App;
