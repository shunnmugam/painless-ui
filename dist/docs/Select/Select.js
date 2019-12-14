import React, { useState } from 'react';
import { Select, Option, Table } from '../../components';
import CodeAndExample from '../CodeAndExample';
const SelectExample = (props) => {
    const [value, changeValue] = useState("1");
    const [multipleValue, changeMulValue] = useState(["1", "3"]);
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Select (Dropdown)"),
        React.createElement("p", null, "Select is input"),
        React.createElement("p", null,
            React.createElement("b", null, "You should use Option component for option")),
        React.createElement("pre", { className: "import-section" }, `import {Select, Option} from 'painless-ui/components'`),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Select, { onChange: (v) => {
                        console.log(v);
                    } },
                    React.createElement(Option, { value: "1" }, "ABC"),
                    React.createElement(Option, { value: "2" }, "DEF"),
                    React.createElement(Option, { value: "3" }, "GHI"),
                    React.createElement(Option, { value: "4" }, "JKL"),
                    React.createElement(Option, { value: "5" }, "MNO"),
                    React.createElement(Option, { value: "6" }, "PQR"),
                    React.createElement(Option, { value: "7" }, "XYZ"))), code: `
<>
    <Select onChange={(v) => {
        console.log(v);
    }}>
        <Option value="1">ABC</Option>
        <Option value="2">DEF</Option>
        <Option value="3">GHI</Option>
        <Option value="4">JKL</Option>
        <Option value="5">MNO</Option>
        <Option value="6">PQR</Option>
        <Option value="7">XYZ</Option>
    </Select>
</>
` }),
        React.createElement("h3", null, "Placeholder"),
        React.createElement("p", null,
            "You can change placeholder text using ",
            React.createElement("b", null, "placeholder"),
            " prop"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Select, { placeholder: "Custom place holder" },
                    React.createElement(Option, { value: "1" }, "ABC"),
                    React.createElement(Option, { value: "2" }, "DEF"),
                    React.createElement(Option, { value: "3" }, "GHI"),
                    React.createElement(Option, { value: "4" }, "JKL"),
                    React.createElement(Option, { value: "5" }, "MNO"),
                    React.createElement(Option, { value: "6" }, "PQR"),
                    React.createElement(Option, { value: "7" }, "XYZ"))), code: `
<>
    <Select placeholder={"Custom place holder"}>
        <Option value="1">ABC</Option>
        <Option value="2">DEF</Option>
        <Option value="3">GHI</Option>
        <Option value="4">JKL</Option>
        <Option value="5">MNO</Option>
        <Option value="6">PQR</Option>
        <Option value="7">XYZ</Option>
    </Select>
</>
` }),
        React.createElement("h3", null, "hover"),
        React.createElement("p", null,
            "If you use ",
            React.createElement("b", null, "hover"),
            " prop then dropdown will open on hover"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Select, { hover: true, placeholder: "hover here" },
                    React.createElement(Option, { value: "1" }, "ABC"),
                    React.createElement(Option, { value: "2" }, "DEF"),
                    React.createElement(Option, { value: "3" }, "GHI"),
                    React.createElement(Option, { value: "4" }, "JKL"),
                    React.createElement(Option, { value: "5" }, "MNO"),
                    React.createElement(Option, { value: "6" }, "PQR"),
                    React.createElement(Option, { value: "7" }, "XYZ"))), code: `
<>
    <Select hover placeholder={"hover here"}>
        <Option value="1">ABC</Option>
        <Option value="2">DEF</Option>
        <Option value="3">GHI</Option>
        <Option value="4">JKL</Option>
        <Option value="5">MNO</Option>
        <Option value="6">PQR</Option>
        <Option value="7">XYZ</Option>
    </Select>
</>
` }),
        React.createElement("h3", null, "multiple"),
        React.createElement("p", null,
            "You can use select as multi select using ",
            React.createElement("b", null, "multiple"),
            " prop"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Select, { multiple: true },
                    React.createElement(Option, { value: "1" }, "ABC"),
                    React.createElement(Option, { value: "2" }, "DEF"),
                    React.createElement(Option, { value: "3" }, "GHI"),
                    React.createElement(Option, { value: "4" }, "JKL"),
                    React.createElement(Option, { value: "5" }, "MNO"),
                    React.createElement(Option, { value: "6" }, "PQR"),
                    React.createElement(Option, { value: "7" }, "XYZ"))), code: `
<>
    <Select multiple >
        <Option value="1">ABC</Option>
        <Option value="2">DEF</Option>
        <Option value="3">GHI</Option>
        <Option value="4">JKL</Option>
        <Option value="5">MNO</Option>
        <Option value="6">PQR</Option>
        <Option value="7">XYZ</Option>
    </Select>
</>
` }),
        React.createElement("h3", null, "value"),
        React.createElement("p", null,
            "You can set default value using ",
            React.createElement("b", null, "value"),
            " prop"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Select, { value: "1" },
                    React.createElement(Option, { value: "1" }, "ABC"),
                    React.createElement(Option, { value: "2" }, "DEF"),
                    React.createElement(Option, { value: "3" }, "GHI"),
                    React.createElement(Option, { value: "4" }, "JKL"),
                    React.createElement(Option, { value: "5" }, "MNO"),
                    React.createElement(Option, { value: "6" }, "PQR"),
                    React.createElement(Option, { value: "7" }, "XYZ")),
                React.createElement("br", null),
                React.createElement(Select, { multiple: true, value: ["1", "7"] },
                    React.createElement(Option, { value: "1" }, "ABC"),
                    React.createElement(Option, { value: "2" }, "DEF"),
                    React.createElement(Option, { value: "3" }, "GHI"),
                    React.createElement(Option, { value: "4" }, "JKL"),
                    React.createElement(Option, { value: "5" }, "MNO"),
                    React.createElement(Option, { value: "6" }, "PQR"),
                    React.createElement(Option, { value: "7" }, "XYZ"))), code: `
<>
    <Select value="1">
        <Option value="1">ABC</Option>
        <Option value="2">DEF</Option>
        <Option value="3">GHI</Option>
        <Option value="4">JKL</Option>
        <Option value="5">MNO</Option>
        <Option value="6">PQR</Option>
        <Option value="7">XYZ</Option>
    </Select>
    <br />
    <Select multiple value={["1","7"]}>
        <Option value="1">ABC</Option>
        <Option value="2">DEF</Option>
        <Option value="3">GHI</Option>
        <Option value="4">JKL</Option>
        <Option value="5">MNO</Option>
        <Option value="6">PQR</Option>
        <Option value="7">XYZ</Option>
    </Select>
</>
` }),
        React.createElement("h3", null, "Controlled"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Select, { onChange: (e) => {
                        console.log(e);
                        changeValue(e.value);
                    }, value: value },
                    React.createElement(Option, { value: "1" }, "ABC"),
                    React.createElement(Option, { value: "2" }, "DEF"),
                    React.createElement(Option, { value: "3" }, "GHI"),
                    React.createElement(Option, { value: "4" }, "JKL"),
                    React.createElement(Option, { value: "5" }, "MNO"),
                    React.createElement(Option, { value: "6" }, "PQR"),
                    React.createElement(Option, { value: "7" }, "XYZ")),
                " value is " + value,
                React.createElement("br", null),
                React.createElement(Select, { multiple: true, value: multipleValue, onChange: (e) => {
                        console.log(e);
                        const n = [];
                        e.forEach((element) => {
                            n.push(element.value);
                        });
                        changeMulValue(n);
                    } },
                    React.createElement(Option, { value: "1" }, "ABC"),
                    React.createElement(Option, { value: "2" }, "DEF"),
                    React.createElement(Option, { value: "3" }, "GHI"),
                    React.createElement(Option, { value: "4" }, "JKL"),
                    React.createElement(Option, { value: "5" }, "MNO"),
                    React.createElement(Option, { value: "6" }, "PQR"),
                    React.createElement(Option, { value: "7" }, "XYZ")),
                " value is " + multipleValue), code: `
<>
    <Select onChange={(e) => {
        console.log(e);
        changeValue(e.value);
    }} value={value}>
        <Option value="1">ABC</Option>
        <Option value="2">DEF</Option>
        <Option value="3">GHI</Option>
        <Option value="4">JKL</Option>
        <Option value="5">MNO</Option>
        <Option value="6">PQR</Option>
        <Option value="7">XYZ</Option>
    </Select>
    {" value is " + value}
    <br />
    <Select multiple value={multipleValue} onChange={(e) => {
        console.log(e);
        const n: any = [];
        e.forEach((element: any) => {
            n.push(element.value)
        });
        changeMulValue(n);
    }}>
        <Option value="1">ABC</Option>
        <Option value="2">DEF</Option>
        <Option value="3">GHI</Option>
        <Option value="4">JKL</Option>
        <Option value="5">MNO</Option>
        <Option value="6">PQR</Option>
        <Option value="7">XYZ</Option>
    </Select>
    {" value is " + multipleValue}
</>
` }),
        React.createElement("h3", null, "disabled"),
        React.createElement("p", null,
            "You can disabled using ",
            React.createElement("b", null, "disabled"),
            " prop"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Select, { disabled: true, value: "1" },
                    React.createElement(Option, { value: "1" }, "ABC"),
                    React.createElement(Option, { value: "2" }, "DEF"),
                    React.createElement(Option, { value: "3" }, "GHI"),
                    React.createElement(Option, { value: "4" }, "JKL"),
                    React.createElement(Option, { value: "5" }, "MNO"),
                    React.createElement(Option, { value: "6" }, "PQR"),
                    React.createElement(Option, { value: "7" }, "XYZ")),
                React.createElement("br", null),
                React.createElement(Select, { disabled: true, multiple: true, value: ["1", "7"] },
                    React.createElement(Option, { value: "1" }, "ABC"),
                    React.createElement(Option, { value: "2" }, "DEF"),
                    React.createElement(Option, { value: "3" }, "GHI"),
                    React.createElement(Option, { value: "4" }, "JKL"),
                    React.createElement(Option, { value: "5" }, "MNO"),
                    React.createElement(Option, { value: "6" }, "PQR"),
                    React.createElement(Option, { value: "7" }, "XYZ"))), code: `
<>
    <Select disabled value="1">
        <Option value="1">ABC</Option>
        <Option value="2">DEF</Option>
        <Option value="3">GHI</Option>
        <Option value="4">JKL</Option>
        <Option value="5">MNO</Option>
        <Option value="6">PQR</Option>
        <Option value="7">XYZ</Option>
    </Select>
    <br />
    <Select disabled multiple value={["1","7"]}>
        <Option value="1">ABC</Option>
        <Option value="2">DEF</Option>
        <Option value="3">GHI</Option>
        <Option value="4">JKL</Option>
        <Option value="5">MNO</Option>
        <Option value="6">PQR</Option>
        <Option value="7">XYZ</Option>
    </Select>
</>
` }),
        React.createElement("h3", null, "searchable"),
        React.createElement("p", null,
            "You can enable search option using ",
            React.createElement("b", null, "searchable"),
            " prop"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Select, { searchable: true, value: "1" },
                    React.createElement(Option, { value: "1" }, "ABC"),
                    React.createElement(Option, { value: "2" }, "DEF"),
                    React.createElement(Option, { value: "3" }, "GHI"),
                    React.createElement(Option, { value: "4" }, "JKL"),
                    React.createElement(Option, { value: "5" }, "MNO"),
                    React.createElement(Option, { value: "6" }, "PQR"),
                    React.createElement(Option, { value: "7" }, "XYZ")),
                React.createElement("br", null),
                React.createElement(Select, { searchable: true, multiple: true, value: ["1", "7"] },
                    React.createElement(Option, { value: "1" }, "ABC"),
                    React.createElement(Option, { value: "2" }, "DEF"),
                    React.createElement(Option, { value: "3" }, "GHI"),
                    React.createElement(Option, { value: "4" }, "JKL"),
                    React.createElement(Option, { value: "5" }, "MNO"),
                    React.createElement(Option, { value: "6" }, "PQR"),
                    React.createElement(Option, { value: "7" }, "XYZ"))), code: `
<>
    <Select disabled value="1">
        <Option value="1">ABC</Option>
        <Option value="2">DEF</Option>
        <Option value="3">GHI</Option>
        <Option value="4">JKL</Option>
        <Option value="5">MNO</Option>
        <Option value="6">PQR</Option>
        <Option value="7">XYZ</Option>
    </Select>
    <br />
    <Select disabled multiple value={["1","7"]}>
        <Option value="1">ABC</Option>
        <Option value="2">DEF</Option>
        <Option value="3">GHI</Option>
        <Option value="4">JKL</Option>
        <Option value="5">MNO</Option>
        <Option value="6">PQR</Option>
        <Option value="7">XYZ</Option>
    </Select>
</>
` }),
        React.createElement("h3", null, "events"),
        React.createElement("ol", null,
            React.createElement("li", null, "onChange"),
            React.createElement("li", null, "onOpen"),
            React.createElement("li", null, "onClose"),
            React.createElement("li", null, "onSearch")),
        React.createElement("p", null, "You can use dom events like onClick, onMouseIn,etc.. also  "),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Select, { searchable: true, onChange: (v) => {
                        console.log("on change called ", v);
                    }, onOpen: () => {
                        console.log("on open called ");
                    }, onClose: (v) => {
                        console.log("on close called ");
                    }, onSearch: (searchKeyword) => {
                        console.log("on search called ", searchKeyword);
                    }, value: "1" },
                    React.createElement(Option, { value: "1" }, "ABC"),
                    React.createElement(Option, { value: "2" }, "DEF"),
                    React.createElement(Option, { value: "3" }, "GHI"),
                    React.createElement(Option, { value: "4" }, "JKL"),
                    React.createElement(Option, { value: "5" }, "MNO"),
                    React.createElement(Option, { value: "6" }, "PQR"),
                    React.createElement(Option, { value: "7" }, "XYZ"))), code: `
<>
<Select searchable onChange={(v) => {
        console.log("on change called ", v)
    }} onOpen={() => {
        console.log("on open called ")
    }} onClose={(v) => {
        console.log("on close called ")
    }} onSearch={(searchKeyword) => {
        console.log("on search called ", searchKeyword)
    }} value="1">
    <Option value="1">ABC</Option>
    <Option value="2">DEF</Option>
    <Option value="3">GHI</Option>
    <Option value="4">JKL</Option>
    <Option value="5">MNO</Option>
    <Option value="6">PQR</Option>
    <Option value="7">XYZ</Option>
</Select>
</>
` }),
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
                    name: "multiple",
                    type: "bool",
                    default: "-"
                },
                {
                    name: "height",
                    type: "string",
                    default: "-"
                },
                {
                    name: "width",
                    type: "string",
                    default: "-"
                },
                {
                    name: "placeholder",
                    type: "string",
                    default: "Please select"
                },
                {
                    name: "value",
                    type: "string | Array",
                    default: "-"
                },
                {
                    name: "hover",
                    type: "bool",
                    default: "false"
                },
                {
                    name: "disabled",
                    type: "bool",
                    default: "false"
                },
                {
                    name: "searchable",
                    type: "bool",
                    default: "false"
                },
                {
                    name: "onOpen",
                    type: "function",
                    default: "-"
                },
                {
                    name: "onClose",
                    type: "function",
                    default: "-"
                },
                {
                    name: "onSearch",
                    type: "function",
                    default: "-"
                },
                {
                    name: "[key:string]",
                    type: "any",
                    default: "-"
                }
            ] })));
};
export default SelectExample;
