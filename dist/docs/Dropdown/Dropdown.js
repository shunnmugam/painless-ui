import React from 'react';
import Dropdown from '../../components/Dropdown/Dropdown';
import DropdownItem from '../../components/DropdownItem/DropdownItem';
import Table from '../../components/Table/Table';
import CodeAndExample from '../CodeAndExample';
const DropdownExample = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Dropdown"),
        React.createElement("p", null, "A dropdown menu is a toggleable menu that allows the user to choose one value from a predefined list:"),
        React.createElement("pre", { className: "import-section" }, `import {Dropdown, DropdownItem} from 'painless-ui/components'`),
        React.createElement("p", null,
            React.createElement("b", null, "Note:"),
            " text prop is mandatory"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(Dropdown, { style: { border: '1px solid #c5c5c5' }, text: 'Dropdown' },
                    React.createElement(DropdownItem, null,
                        React.createElement("span", null, "Menu 1")),
                    React.createElement(DropdownItem, null,
                        React.createElement("span", null, "Menu 2")))), code: `<Dropdown text={'Dropdown'}>
    <DropdownItem><span>Menu 1</span></DropdownItem>
    <DropdownItem><span>Menu 2</span></DropdownItem>
</Dropdown>
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
                    name: "text",
                    type: "JSX.Element",
                    default: "-"
                },
                {
                    name: "children",
                    type: "JSX.Element[]",
                    default: "-"
                },
                {
                    name: "style",
                    type: "css",
                    default: "-"
                },
                {
                    name: "[key:string]",
                    type: "any",
                    default: "-"
                }
            ] })));
};
export default DropdownExample;
