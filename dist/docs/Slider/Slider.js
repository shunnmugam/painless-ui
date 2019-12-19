import React from 'react';
import { Slider, Table } from '../../components';
import CodeAndExample from '../CodeAndExample';
const SliderExample = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Slider"),
        React.createElement("p", null, "Slider allowing users to input numeric values within a specific range. It can accept a single value, or a range of values (min/max). By default, basic styles are applied, but can be overridden depending on your design requirements."),
        React.createElement(CodeAndExample, { code: `
<Slider />
            `, example: React.createElement(Slider, null) }),
        React.createElement("h3", null, "min and max"),
        React.createElement("p", null,
            "you can set minimum and maximum range using ",
            React.createElement("b", null, "min"),
            " and ",
            React.createElement("b", null, "max"),
            " props"),
        React.createElement(CodeAndExample, { code: `
<Slider min={10} max={20} />
            `, example: React.createElement(Slider, { min: 10, max: 20 }) }),
        React.createElement("h3", null, "grid"),
        React.createElement("p", null,
            "you can grid line using ",
            React.createElement("b", null, "grid"),
            " prop"),
        React.createElement(CodeAndExample, { code: `
<Slider grid min={10} max={20} />
            `, example: React.createElement(Slider, { grid: true, min: 10, max: 20 }) }),
        React.createElement("h3", null, "step"),
        React.createElement("p", null,
            "you can control step using ",
            React.createElement("b", null, "step"),
            " prop"),
        React.createElement(CodeAndExample, { code: `
<Slider grid step={2} min={10} max={20} />
            `, example: React.createElement(Slider, { grid: true, step: 2, min: 10, max: 20 }) }),
        React.createElement("h3", null, "range"),
        React.createElement("p", null,
            "you can select specific range using ",
            React.createElement("b", null, "range"),
            " prop"),
        React.createElement(CodeAndExample, { code: `
<Slider range grid step={2} min={10} max={20} />
            `, example: React.createElement(Slider, { range: true, grid: true, min: 10, max: 20 }) }),
        React.createElement("h3", null, "discrete"),
        React.createElement("p", null,
            "you can movement using ",
            React.createElement("b", null, "discrete"),
            " prop"),
        React.createElement(CodeAndExample, { code: `
<Slider discrete range grid step={2} min={10} max={20} />
            `, example: React.createElement(Slider, { discrete: true, range: true, grid: true, min: 10, max: 20 }) }),
        React.createElement("h3", null, "value"),
        React.createElement("p", null,
            "you can set value using ",
            React.createElement("b", null, "value"),
            " prop"),
        React.createElement(CodeAndExample, { code: `
<Slider min={10} max={20} value={18}/>
<Slider range grid min={10} max={20} value={[15,18]} />
            `, example: React.createElement(React.Fragment, null,
                React.createElement(Slider, { min: 10, max: 20, value: 18 }),
                React.createElement(Slider, { range: true, grid: true, min: 10, max: 20, value: [15, 18] })) }),
        React.createElement("h3", null, "color,controlColor and textColor"),
        React.createElement("p", null,
            "you can change color using ",
            React.createElement("b", null, "color, controlColor and textColor"),
            " "),
        React.createElement(CodeAndExample, { code: `
<Slider value={10} color={'linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)'}/>
<Slider value={50} controlColor={'black'} />
<Slider value={50} textColor={'red'} />
            `, example: React.createElement(React.Fragment, null,
                React.createElement(Slider, { value: 10, color: 'linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)' }),
                React.createElement(Slider, { value: 50, controlColor: 'black' }),
                React.createElement(Slider, { value: 50, textColor: 'red' })) }),
        React.createElement("h3", null, "Events"),
        React.createElement("p", null, "Slider have 2 events"),
        React.createElement("ol", null,
            React.createElement("li", null, "onChange"),
            React.createElement("li", null, "onChangeComplete")),
        React.createElement("h3", null, "onChange"),
        React.createElement("p", null, "onChange will call while slider change"),
        React.createElement("h3", null, "onChangeComplete"),
        React.createElement("p", null, "onChangeComplete will call while slider moves end"),
        React.createElement(CodeAndExample, { code: `
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
            `, example: React.createElement(React.Fragment, null,
                React.createElement(Slider, { min: 10, max: 20, value: 18, onChange: (v) => {
                        console.log(v);
                    }, onChangeComplete: (v) => {
                        alert("on change complete, value is " + v);
                    } }),
                React.createElement(Slider, { range: true, grid: true, min: 10, max: 20, value: [15, 18], onChange: (v) => {
                        console.log(v);
                    }, onChangeComplete: (v) => {
                        alert("on change complete, value is " + v);
                    } })) }),
        React.createElement("h3", null, "Props"),
        React.createElement(Table, { columns: [{
                    name: "Name",
                    selector: "name",
                }, {
                    name: "Type",
                    selector: "type"
                }, {
                    name: "Default",
                    selector: "default"
                }], data: [{
                    name: "className",
                    type: "string",
                    default: "-"
                },
                {
                    name: "color",
                    type: "string",
                    default: "-"
                },
                {
                    name: "controlColor",
                    type: "string",
                    default: "-"
                },
                {
                    name: "discrete",
                    type: "boolean",
                    default: "false"
                },
                {
                    name: "min",
                    type: "number",
                    default: "0"
                },
                {
                    name: "max",
                    type: "number",
                    default: "100"
                },
                {
                    name: "step",
                    type: "number",
                    default: "1"
                },
                {
                    name: "textColor",
                    type: "string",
                    default: "-"
                },
                {
                    name: "value",
                    type: "number",
                    default: "0"
                },
                {
                    name: "grid",
                    type: "boolean",
                    default: "false"
                },
                {
                    name: "onChange",
                    type: "function",
                    default: "-"
                },
                {
                    name: "onChangeComplete",
                    type: "function",
                    default: "-"
                },
            ] })));
};
export default SliderExample;
