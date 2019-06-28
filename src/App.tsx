import React, { useState, Suspense } from 'react';
import './App.css';
//import Modal from './Modal/Modal';
import { Button, ButtonGroup, Checkbox, Input, Badge, TabGroup, Tab, TabWrapper, Accordion, AccordionGroup, Tag, Breadcrumb, Select, Option, Modal, Toast, ToastContainer, Table } from './components/index';
// import TabContainer from './components/TabContainer/TabContainer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DataTableExample from './examples/DataTable/DataTable';
import { NavBar } from './components';
import ThemeProvider from './providers/ThemeProvider';

const Switch = React.lazy(() => import('./components/Switch/Switch'));

let tableData = {
  data: []
};


const App: React.FC = (props) => {
  // const [ checkBoxHook, setChecboxCheck ] = useState(false);
  // const [ activeTab, changeActiveTab ] = useState(0);
  // const [toastPosition,changeToastPosition] = useState('top-center');
  // const [toastShow,changeToastShow] = useState(false);
  // const [toastShow2,changeToastShow2] = useState(false);
  return (
    <ThemeProvider >
      {console.log(props)}
      <AccordionGroup collapsible onToggle={(s,i) => console.log(s,i)}>
      <Accordion title="section 1">
        <p>
        Test
        </p>
      </Accordion>
      <Accordion title="sectiocontainern 1">
        <p>
        Test
        </p>
      </Accordion>
      </AccordionGroup>
    <div className="App">
      <Router>
        <NavBar />
      {/* <Input rounded={false} type="email" placeholder="Email id" onChange={ (e) => {
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
      <Accordion title="sectiocontainern 1">
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

     <Table columns={[
       {
         name: 'S.no',
         render : (row,column,i) => {
            return i+1;
         }
       },
       {
         name : 'Name',
         selector: 'name',
         sortable: true
       },
       {
        name : 'Place',
        selector: 'name',
        sortable: true
      },
      {
        name : 'No',
        selector: 'name',
        sortable: true
      },
      {
        name : 'Date',
        selector: 'name',
        sortable: true
      },
      {
        name : 'Amount',
        selector: 'name',
        sortable: true,
        onSort: (data,order,sortBy) => {
          data.sort((d1,d2) => {
            const modifiedAmount1 = d1[sortBy].replace('$','').replace(/,/g, '');
            const modifiedAmount2 = d2[sortBy].replace('$','').replace(/,/g, '');
            if(order === 'asc') {
              return parseInt(modifiedAmount1) - parseInt(modifiedAmount2);
            } else {
              return parseInt(modifiedAmount2) - parseInt(modifiedAmount1);
            }
          })
          return data;
        }
      }
     ]}
     data={tableData.data}
     dataType='array'
     paginationOptions={{
       limit: 15
     }}>

     </Table> */}
      {/* <Switch> */}
        <Route path='/examples/data-table' component={DataTableExample} />
      {/* </Switch> */}
      </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
