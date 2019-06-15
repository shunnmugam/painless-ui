import React, { useState } from 'react';
import './App.scss';
import { Button, ButtonGroup, Checkbox } from './components';

const App: React.FC = () => {
  const [ checkBoxHook, setChecboxCheck ] = useState(true);
  return (
    <div className="App">
      <Button color="white" bgColor="#2196f3" id='ui-button-1' styleType='background' rounded>C</Button>
      {/* <ButtonGroup>
        <Button color="red" bgColor="red" id='ui-button-1' styleType='outline'>click</Button>
        <Button disabled color="green" bgColor="red" id='ui-button-1' styleType='outline'>click</Button>
        <Button color="blue" bgColor="red" id='ui-button-1' styleType='outline'>click</Button>
      </ButtonGroup>
      <Checkbox width="20px" height="20px" checked={checkBoxHook} onChange={(e:any) => {
        setChecboxCheck(!checkBoxHook)
      }} /> */}
    </div>
  );
}

export default App;
