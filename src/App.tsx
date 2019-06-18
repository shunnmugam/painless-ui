import React, { useState, Suspense } from 'react';
import './App.css';
import { Button, ButtonGroup, Checkbox, Input } from './components/index';

const Switch = React.lazy(() => import('./components/Switch/Switch'));


const App: React.FC = () => {
  const [ checkBoxHook, setChecboxCheck ] = useState(false);
 
  return (
    <div className="App">
      {/* <Input rounded={false} type="text" placeholder="Email id" onChange={ (e) => {
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
      }} /> */}
      <Input type="radio" />
      <Input type="checkbox" rounded />
      <Suspense fallback={'loading'}>
      <Switch />
      </Suspense>
    </div>
  );
}

export default App;
