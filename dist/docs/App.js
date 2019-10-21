import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import DataTable from './DataTable/DataTable';
import { NavBar } from '../components';
import AccordionExample from './Accordion/Accordion';
import AccordionGroupExample from './AccordionGroup/AccordionGroup';
import BadgeExample from './Badge/Badge';
import BreadcrumbExample from './Breadcrumb/Breadcrumb';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (React.createElement("div", { className: "main-container container-fluid" },
            React.createElement(NavBar, { position: 'fixed' },
                React.createElement("h1", { className: "text-center", style: { color: "white", margin: "12px 0px", textAlign: "center" } }, "Painless-ui")),
            React.createElement(Router, null,
                React.createElement("div", { className: "row", style: { marginTop: "80px" } },
                    React.createElement("div", { className: "col-12 col-sm-4 col-md-2" },
                        React.createElement("ul", null,
                            React.createElement("li", null,
                                React.createElement(Link, { to: "/accordion" }, "Accordion")),
                            React.createElement("li", null,
                                React.createElement(Link, { to: "/accordion-group" }, "AccordionGroup")),
                            React.createElement("li", null,
                                React.createElement(Link, { to: "/badge" }, "Badge")),
                            React.createElement("li", null,
                                React.createElement(Link, { to: "/breadcrumb" }, "Breadcrumb")))),
                    React.createElement("div", { className: "col-12 col-sm-8 col-md-10" },
                        React.createElement(Switch, null,
                            React.createElement(Route, { path: '/accordion', component: AccordionExample }),
                            React.createElement(Route, { path: '/accordion-group', component: AccordionGroupExample }),
                            React.createElement(Route, { path: '/badge', component: BadgeExample }),
                            React.createElement(Route, { path: '/breadcrumb', component: BreadcrumbExample }),
                            React.createElement(Route, { path: '/data-table', component: DataTable })))))));
    }
}
export default App;
