import React, { useState, Suspense } from 'react';
import './App.css';
//import Modal from './Modal/Modal';
import { Button, ButtonGroup, Checkbox, Input, Badge, TabGroup, Tab, TabWrapper, Accordion, AccordionGroup, Tag, Breadcrumb, Select, Option, Modal, Toast, ToastContainer } from './components/index';
import TabContainer from './components/TabContainer/TabContainer';
import { BrowserRouter as Router, Link } from "react-router-dom";

const Switch = React.lazy(() => import('./components/Switch/Switch'));

const App: React.FC = () => {
  const [ checkBoxHook, setChecboxCheck ] = useState(false);
  const [ activeTab, changeActiveTab ] = useState(0);
  const [toastPosition,changeToastPosition] = useState('top-center');
  const [toastShow,changeToastShow] = useState(false);
  const [toastShow2,changeToastShow2] = useState(false);
  return (
    <div className="App">
      <Router>
      <Input rounded={false} type="email" placeholder="Email id" onChange={ (e) => {
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
      <Input type="radio" />
      <Input type="checkbox" rounded />
      <Suspense fallback={'loading'}>
      <Switch />
      </Suspense>
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

      <Select multiple={checkBoxHook} label={<label>Choose</label>}>
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
      <Modal open={false}>
        <p>Some text in the Modal..</p>
      </Modal>
      <div>
      <Select value={toastPosition} onChange={(v) => changeToastPosition(v.value)} label={<label>Toast Position</label>}>
        <Option value="top-center" text="top-center">top-center</Option>  
        <Option value="top-left" text="top-left">top-left</Option>  
        <Option value="top-right" text="top-right">top-right</Option>  
        <Option value="bottom-center" text="bottom-center">bottom-center</Option>  
        <Option value="bottom-left" text="bottom-left">bottom-left</Option>  
        <Option value="bottom-right" text="bottom-right">bottom-right</Option>  
      </Select>
      <Button bgColor="rgb(66, 133, 244)" color="white" onClick={() => {
        changeToastShow(true);
      }}>Show Toast</Button>

      <Button bgColor="rgb(66, 133, 244)" color="white" onClick={() => {
        changeToastShow2(true);
      }}>Show Toast 2</Button>

      </div>
      <ToastContainer position={toastPosition}>
      <Toast onClose={changeToastShow} options={
        {
          autoClose: true,
          closeOnClick: true
        }
      } show={toastShow}>show notification message ...</Toast>

      <Toast onClose={changeToastShow2} title="info"  options={
              {
                autoClose: true,
                closeOnClick: true,
                time: 10000
              }
            } show={toastShow2}> 2 show notification message ...</Toast>
     </ToastContainer>
      </Router>
    </div>
  );
}

export default App;
