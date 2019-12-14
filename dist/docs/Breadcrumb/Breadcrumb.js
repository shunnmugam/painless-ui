import React from 'react';
import { Link } from "react-router-dom";
import { Breadcrumb, Table } from '../../components';
import CodeAndExample from '../CodeAndExample';
const BreadcrumbExample = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Breadcrumb"),
        React.createElement("p", null, "A breadcrumb navigation provide links back to each previous page the user navigated through, and shows the user's current location in a website. "),
        React.createElement("pre", { className: "import-section" }, `import {Breadcrumb} from 'painless-ui/components'`),
        React.createElement(CodeAndExample, { example: React.createElement(Breadcrumb, null,
                React.createElement(Link, { to: '/' }, "Home"),
                React.createElement("span", null, "User"),
                React.createElement("span", null, "Profile")), code: `
<Breadcrumb>
    <Link to={'/'}>Home</Link>
    <span>User</span>
    <span>Profile</span>
</Breadcrumb>` }),
        React.createElement("h3", null, "Separator"),
        React.createElement("p", null,
            "You can change Separator of breadcrumb using ",
            React.createElement("b", null, "separator"),
            " prop"),
        React.createElement(CodeAndExample, { example: React.createElement(Breadcrumb, { separator: React.createElement("span", null, "->") },
                React.createElement(Link, { to: '/' }, "Home"),
                React.createElement("span", null, "User"),
                React.createElement("span", null, "Profile")), code: `
<Breadcrumb separator={<span>-></span>}>
    <Link to={'/'}>Home</Link>
    <span>User</span>
    <span>Profile</span>
</Breadcrumb>` }),
        React.createElement("h3", null, "Styled Breadcrumb"),
        React.createElement("p", null,
            "You can change style of breadcrumb using ",
            React.createElement("b", null, "stype"),
            " prop"),
        React.createElement(CodeAndExample, { example: React.createElement(Breadcrumb, { style: { backgroundColor: "black", color: "white" } },
                React.createElement(Link, { to: '/' }, "Home"),
                React.createElement("span", null, "User"),
                React.createElement("span", null, "Profile")), code: `
<Breadcrumb style={{backgroundColor : "black", color : "white"}}>
    <Link to={'/'}>Home</Link>
    <span>User</span>
    <span>Profile</span>
</Breadcrumb>` }),
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
                    name: "separator",
                    type: "any",
                    default: "/"
                },
                {
                    name: "children",
                    type: "any",
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
export default BreadcrumbExample;
