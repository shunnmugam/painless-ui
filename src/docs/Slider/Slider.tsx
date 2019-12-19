import React from 'react';
import { Slider, Table } from '../../components';
import CodeAndExample from '../CodeAndExample';

const SliderExample:React.FC<any> = (props) => {
    return (
        <>
            <h1>Slider</h1>
            <p>Slider allowing users to input numeric values within a specific range. 
            It can accept a single value, or a range of values (min/max). 
            By default, basic styles are applied, but can be overridden depending on your design requirements.</p>
            <CodeAndExample code={`
<Slider />
            `} example={
                <Slider />
            } />
            <h3>min and max</h3>
            <p>you can set minimum and maximum range using <b>min</b> and <b>max</b> props</p>
            <CodeAndExample code={`
<Slider min={10} max={20} />
            `} example={
                <Slider min={10} max={20}/>
            } />
            <h3>grid</h3>
            <p>you can grid line using <b>grid</b> prop</p>
            <CodeAndExample code={`
<Slider grid min={10} max={20} />
            `} example={
                <Slider grid min={10} max={20}/>
            } />
            <h3>step</h3>
            <p>you can control step using <b>step</b> prop</p>
            <CodeAndExample code={`
<Slider grid step={2} min={10} max={20} />
            `} example={
                <Slider grid step={2} min={10} max={20}/>
            } />
            <h3>range</h3>
            <p>you can select specific range using <b>range</b> prop</p>
            <CodeAndExample code={`
<Slider range grid step={2} min={10} max={20} />
            `} example={
                <Slider range grid min={10} max={20}/>
            } />
            <h3>discrete</h3>
            <p>you can movement using <b>discrete</b> prop</p>
            <CodeAndExample code={`
<Slider discrete range grid step={2} min={10} max={20} />
            `} example={
                <Slider discrete range grid min={10} max={20}/>
            } />
            <h3>value</h3>
            <p>you can set value using <b>value</b> prop</p>
            <CodeAndExample code={`
<Slider min={10} max={20} value={18}/>
<Slider range grid min={10} max={20} value={[15,18]} />
            `} example={
                <>
                <Slider min={10} max={20} value={18}/>
                <Slider range grid min={10} max={20} value={[15,18]} />
                </>
            } />
            <h3>color,controlColor and textColor</h3>
            <p>you can change color using <b>color, controlColor and textColor</b> </p>
            <CodeAndExample code={`
<Slider value={10} color={'linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)'}/>
<Slider value={50} controlColor={'black'} />
<Slider value={50} textColor={'red'} />
            `} example={
                <>
                <Slider value={10} color={'linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)'}/>
                <Slider value={50} controlColor={'black'} />
                <Slider value={50} textColor={'red'} />
                </>
            } />
            <h3>Events</h3>
            <p>Slider have 2 events</p>
            <ol>
                <li>onChange</li>
                <li>onChangeComplete</li>
            </ol>
            <h3>onChange</h3>
            <p>onChange will call while slider change</p>
            <h3>onChangeComplete</h3>
            <p>onChangeComplete will call while slider moves end</p>
            <CodeAndExample code={`
<>
<Slider min={10} max={20} value={18} onChange={(v) => {
    console.log(v)
}} onChangeComplete={(v) => {
    alert("on change complete, value is " + v)
}}/>
<Slider range grid min={10} max={20} value={[15,18]} onChange={(v) => {
    console.log(v)
}} onChangeComplete={(v) => {
    alert("on change complete, value is " + v)
}}/>
</>
            `} example={
                <>
                <Slider min={10} max={20} value={18} onChange={(v) => {
                    console.log(v)
                }} onChangeComplete={(v) => {
                    alert("on change complete, value is " + v)
                }}/>
                <Slider range grid min={10} max={20} value={[15,18]} onChange={(v) => {
                    console.log(v)
                }} onChangeComplete={(v) => {
                    alert("on change complete, value is " + v)
                }}/>
                </>
            } />
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
                name : "color",
                type: "string",
                default : "-"
            },
            {
                name : "controlColor",
                type: "string",
                default : "-"
            },
            {
                name : "discrete",
                type: "boolean",
                default : "false"
            },
            {
                name : "min",
                type: "number",
                default : "0"
            },
            {
                name : "max",
                type: "number",
                default : "100"
            },
            {
                name : "step",
                type: "number",
                default : "1"
            },
            {
                name : "textColor",
                type: "string",
                default : "-"
            },
            {
                name : "value",
                type: "number",
                default : "0"
            },
            {
                name : "grid",
                type: "boolean",
                default : "false"
            },
            {
                name : "onChange",
                type: "function",
                default : "-"
            },
            {
                name : "onChangeComplete",
                type: "function",
                default : "-"
            },
            ]} />
        </>
    )
}

export default SliderExample;