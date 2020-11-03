import React, {useState} from 'react';
import { Checkbox, Input, Table } from '../../components';
import CodeAndExample from '../CodeAndExample';

const InputExample:React.FC = (props) => {
    const [eventMsg, changeMsg] = useState("un checked");
    return (
        <>
        <h1>Input</h1>
        <p>Input is referring </p> <pre> {"<input />"}</pre>
        <pre className="import-section">
            {`import {Input} from 'painless-ui/components'`}
        </pre>
        <p><b>Note:</b> type prop is mandatory</p>
        <CodeAndExample example={<>
            <Input type="text" placeholder="This is simple text input "/>
        </>} code={`
<Input type="text" placeholder="This is simple text input "/>
`} />   
        <h3>Type</h3>
        <p>Supported types:</p>
        <ol>
            <li>text</li>
            <li>email</li>
            <li>number</li>
            <li>radio</li>
            <li>checkbox</li>
            <li>button</li>
            <li>reset</li>
            <li>submit</li>
            <li>file</li>
            <li>textarea</li>
        </ol>
        <CodeAndExample example={<>
            <Input type="text" placeholder="This is simple text input "/>
            <br />
            <br />
            <Input type="email" placeholder="This is simple email input with validation"/>
            <br />
            <br />
            <Input type="number" placeholder="This is simple number input with validation"/>
            <br />
            <br />
            <Input type="radio" />
            <label>This is simple radio input </label>
            <br />
            <br />
            <Input type="checkbox" />
            <label>This is simple checkbox </label>
            <br />
            <br />
            <Input type="button" text="Button" />
            <br />
            <br />
            <Input type="reset" text="Reset" />
            <br />
            <br />
            <Input type="submit" text="Submit" />
            <br />
            <br />
            <Input type="file" text="Submit" />
            <br />
            <br />
            <Input type="textarea" placeholder={'this is simple textarea'}/>
        </>} code={`
<>
    <Input type="text" placeholder="This is simple text input "/>
    <br />
    <br />
    <Input type="email" placeholder="This is simple email input with validation"/>
    <br />
    <br />
    <Input type="number" placeholder="This is simple number input with validation"/>
    <br />
    <br />
    <Input type="radio" />
    <label>This is simple radio input </label>
    <br />
    <br />
    <Input type="checkbox" />
    <label>This is simple checkbox </label>
    <br />
    <br />
    <Input type="button" text="Button" />
    <br />
    <br />
    <Input type="reset" text="Reset" />
    <br />
    <br />
    <Input type="submit" text="Submit" />
    <br />
    <br />
    <Input type="textarea" placeholder={'this is simple textarea'}/>
</>
`} />
        <h3>Floating label</h3>
        <p></p>
        <CodeAndExample example={
            <Input floatingLabel={true} type="text" placeholder="username"/>
        } code={'<Input floatingLabel={true} type="text" placeholder="username"/>'} />
        <h3>Validation</h3>
        <p>we have validation feature for input</p>
        
        <CodeAndExample example={<>
            <Input type="email" placeholder="this input have email validation on onBlur event"/>
        </>} code={`
<Input type="email" placeholder="this input have email validation on onBlur event"/>
`} />
        <h3>Validation Options</h3>
        <p>You can change control validation using <b>validationOptions</b> prop</p>
        <ol>
            <li>event  : event name </li>
            <li>rules  : validation rules </li>
            <li>validationCallback  : callback method</li>
            <li>validateNow  : if validateNow is true, it will validate immediately</li>
        </ol>
        <h3>Validation Rules</h3>
        <p>You can add rules using rules key</p>
        <ul>
            <li>email : it will check input is email or not </li>
            <li>min:$length : it will minimum length of input</li>
            <li>max:$length : it will maximum length of input</li>
            <li>number : it will input is number or not</li>
            <li>required : it will input is present or not</li>
            {/* <li>regex:$regex -> it will input is present or not</li> */}
        </ul>
        <CodeAndExample example={<>
            <p>This is email validation</p>
            <Input type="text" placeholder="" validationOptions={{
                rules: 'email'
            }}/>
            <p>min and max validation</p>
            <Input type="text" placeholder="Min 2 and max 5" validationOptions={{
                rules: 'min:2|max:5'
            }}/>
            <p>number validation</p>
            <Input type="text" placeholder="it should number" validationOptions={{
                rules: 'number'
            }}/>
            <p>required validation</p>
            <Input type="text" placeholder="required field" validationOptions={{
                rules: 'required'
            }}/>
            {/* <p>custom validation with regular expression validation</p>
            <Input type="text" placeholder="required field" validationOptions={{
                rules: 'regex:/Hello/'
            }}/> */}
        </>} code={`
<>
    <p>This is email validation</p>
    <Input type="text" placeholder="" validationOptions={{
        rules: 'email'
    }}/>
    <p>min and max validation</p>
    <Input type="text" placeholder="Min 2 and max 5" validationOptions={{
        rules: 'min:2|max:5'
    }}/>
    <p>number validation</p>
    <Input type="text" placeholder="it should number" validationOptions={{
        rules: 'number'
    }}/>
    <p>required validation</p>
    <Input type="text" placeholder="required field" validationOptions={{
        rules: 'required'
    }}/>
</>
`} />
        <p>You can change validation event using <b>event</b> option</p>
        <CodeAndExample example={<>
            <p>This is email validation for on change</p>
            <Input type="text" placeholder="" validationOptions={{
                rules: 'email',
                event: 'onChange'
            }}/>
            <p>min and max validation for on change</p>
            <Input type="text" placeholder="Min 2 and max 5" validationOptions={{
                rules: 'min:2|max:5',
                event: 'onChange'
            }}/>
            <p>number validation for on change</p>
            <Input type="text" placeholder="it should number" validationOptions={{
                rules: 'number',
                event: 'onChange'
            }}/>
            <p>required validation for on change</p>
            <Input type="text" placeholder="required field" validationOptions={{
                rules: 'required',
                event: 'onChange'
            }}/>
            {/* <p>custom validation with regular expression validation</p>
            <Input type="text" placeholder="required field" validationOptions={{
                rules: 'regex:/Hello/'
            }}/> */}
        </>} code={`
<>
    <Input type="text" placeholder="" validationOptions={{
        rules: 'email',
        event: 'onChange'
    }}/>
    <p>min and max validation for on change</p>
    <Input type="text" placeholder="Min 2 and max 5" validationOptions={{
        rules: 'min:2|max:5',
        event: 'onChange'
    }}/>
    <p>number validation for on change</p>
    <Input type="text" placeholder="it should number" validationOptions={{
        rules: 'number',
        event: 'onChange'
    }}/>
    <p>required validation for on change</p>
    <Input type="text" placeholder="required field" validationOptions={{
        rules: 'required',
        event: 'onChange'
    }}/>
</>
`} />
        <h3>Events</h3>
        <CodeAndExample example={<>
            <Checkbox onClick={(e) => {
                const value = e.target.value;
                if(e.target.checked) {
                    changeMsg("checked value is " +value)
                } else {
                    changeMsg("un checked")
                }
            }} bgColor="rgb(220, 0, 78)" value="1" />
            {eventMsg}
        </>} code={`
<>
    <Checkbox onClick={(e) => {
        const value = e.target.value;
        if(e.target.checked) {
            changeMsg("checked" + " value is " +value)
        } else {
            changeMsg("un checked")
        }
    }} bgColor="rgb(220, 0, 78)" value="1" />
    {eventMsg}
</>
`} />
        <h3>Props</h3>
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
            name : "validation",
            type: "bool",
            default : "true"
        },
        {
            name : "validationOptions",
            type: "object",
            default : `{
                rules: '',
                event: 'onBlur',
                validationCallback: undefined,
                validateNow: undefined
            }`
        },
        {
            name : "height",
            type: "string",
            default : "-"
        },
        {
            name : "width",
            type: "string",
            default : "-"
        },
        {
            name : "style",
            type: "css",
            default : "-"
        },
        {
            name : "[key:string]",
            type: "any",
            default : "-"
        }
        ]}>

        </Table>
        </>
        
    )
}

export default InputExample;