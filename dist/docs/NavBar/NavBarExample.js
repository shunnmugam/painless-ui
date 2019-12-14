import React from 'react';
import { NavBar, Table } from '../../components';
import CodeAndExample from '../CodeAndExample';
const NavBarExample = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "NavBar"),
        React.createElement("pre", { className: "import-section" }, `import {NavBar} from 'painless-ui/components'`),
        React.createElement(CodeAndExample, { example: React.createElement(NavBar, null,
                React.createElement("h3", { style: { textAlign: "center" } }, "this is simple navbar")), code: `<NavBar> <h3 style={{textAlign: "center"}}>this is simple navbar</h3> </NavBar>` }),
        React.createElement("h3", null, "Background color"),
        React.createElement("p", null,
            "You can change background color using ",
            React.createElement("b", null, "bgColor"),
            " prop"),
        React.createElement(CodeAndExample, { example: React.createElement(React.Fragment, null,
                React.createElement(NavBar, { bgColor: "red" },
                    React.createElement("h3", { style: { textAlign: "center" } }, "Navbar with custom bgColor")),
                React.createElement("br", null),
                React.createElement(NavBar, { bgColor: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" },
                    React.createElement("h3", { style: { textAlign: "center" } }, "Navbar with linear gradient"))), code: `
<>
    <NavBar bgColor="red">
        <h3 style={{textAlign: "center"}}>Navbar with custom bgColor</h3>
    </NavBar>
    <br />
    <NavBar bgColor="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)">
        <h3 style={{textAlign: "center"}}>Navbar with linear gradient</h3>
    </NavBar>
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
                    name: "bgColor",
                    type: "string",
                    default: "-"
                },
                {
                    name: "position",
                    type: "string",
                    default: '-'
                },
                {
                    name: "[key:string]",
                    type: "any",
                    default: "-"
                }
            ] })));
};
export default NavBarExample;
