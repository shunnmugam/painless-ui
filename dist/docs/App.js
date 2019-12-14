import React from 'react';
import { HashRouter as Router, Route, NavLink as Link, Switch } from "react-router-dom";
import './App.css';
import ThemeProvider from '../providers/ThemeProvider';
import { NavBar } from '../components';
import AccordionExample from './Accordion/Accordion';
import AccordionGroupExample from './AccordionGroup/AccordionGroup';
import BadgeExample from './Badge/Badge';
import BreadcrumbExample from './Breadcrumb/Breadcrumb';
import ButtonExample from './Button/Button';
import ButtonGroupExample from './ButtonGroup/ButtonGroup';
import CheckboxExample from './Checkbox/Checkbox';
import InputExample from './Input/InputExample';
import ModalExample from './Modal/ModalExample';
import NavBarExample from './NavBar/NavBarExample';
import RadioExample from './Radio/Radio';
import SelectExample from './Select/Select';
import SwitchExample from './Switch/Switch';
import ToastExample from './Toast/Toast';
import TabExample from './Tab/Tab';
import TagExample from './Tag/Tag';
import TableExample from './Table/Table';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (React.createElement("div", { className: "main-container container-fluid" },
            React.createElement(ThemeProvider, { value: "d" },
                React.createElement(NavBar, { position: 'fixed' },
                    React.createElement("h1", { className: "text-center", style: { color: "white", margin: "12px 0px", textAlign: "center" } }, "Painless-ui")),
                React.createElement(Router, null,
                    React.createElement("div", { className: "row", style: { marginTop: "80px" } },
                        React.createElement("div", { className: "col-12 col-sm-4 col-md-2" },
                            React.createElement("div", { className: "sidebar" },
                                React.createElement("h4", null, "Components"),
                                React.createElement("ul", null,
                                    React.createElement("li", null,
                                        React.createElement(Link, { activeClassName: "active", to: "/accordion" }, "Accordion")),
                                    React.createElement("li", null,
                                        React.createElement(Link, { activeClassName: "active", to: "/accordion-group" }, "AccordionGroup")),
                                    React.createElement("li", null,
                                        React.createElement(Link, { activeClassName: "active", to: "/badge" }, "Badge")),
                                    React.createElement("li", null,
                                        React.createElement(Link, { activeClassName: "active", to: "/breadcrumb" }, "Breadcrumb")),
                                    React.createElement("li", null,
                                        React.createElement(Link, { activeClassName: "active", to: "/button" }, "Button")),
                                    React.createElement("li", null,
                                        React.createElement(Link, { activeClassName: "active", to: "/button-group" }, "ButtonGroup")),
                                    React.createElement("li", null,
                                        React.createElement(Link, { activeClassName: "active", to: "/checkbox" }, "Checkbox")),
                                    React.createElement("li", null,
                                        React.createElement(Link, { activeClassName: "active", to: "/input" }, "Input")),
                                    React.createElement("li", null,
                                        React.createElement(Link, { activeClassName: "active", to: "/modal" }, "Modal")),
                                    React.createElement("li", null,
                                        React.createElement(Link, { activeClassName: "active", to: "/navbar" }, "NavBar")),
                                    React.createElement("li", null,
                                        React.createElement(Link, { activeClassName: "active", to: "/radio" }, "Radio")),
                                    React.createElement("li", null,
                                        React.createElement(Link, { activeClassName: "active", to: "/select" }, "Select")),
                                    React.createElement("li", null,
                                        React.createElement(Link, { activeClassName: "active", to: "/switch" }, "Switch")),
                                    React.createElement("li", null,
                                        React.createElement(Link, { activeClassName: "active", to: "/tab" }, "Tab")),
                                    React.createElement("li", null,
                                        React.createElement(Link, { activeClassName: "active", to: "/tag" }, "Tag")),
                                    React.createElement("li", null,
                                        React.createElement(Link, { activeClassName: "active", to: "/table" }, "Table / Data table")),
                                    React.createElement("li", null,
                                        React.createElement(Link, { activeClassName: "active", to: "/toast" }, "Toast"))))),
                        React.createElement("div", { className: "col-12 col-sm-8 col-md-10" },
                            React.createElement(Switch, null,
                                React.createElement(Route, { path: '/', exact: true, render: () => {
                                        return React.createElement(React.Fragment, null,
                                            "A rich and customizable React UI Components Library",
                                            React.createElement("h1", null));
                                    } }),
                                React.createElement(Route, { path: '/accordion', component: AccordionExample }),
                                React.createElement(Route, { path: '/accordion-group', component: AccordionGroupExample }),
                                React.createElement(Route, { path: '/badge', component: BadgeExample }),
                                React.createElement(Route, { path: '/breadcrumb', component: BreadcrumbExample }),
                                React.createElement(Route, { path: '/button', component: ButtonExample }),
                                React.createElement(Route, { path: '/button-group', component: ButtonGroupExample }),
                                React.createElement(Route, { path: '/checkbox', component: CheckboxExample }),
                                React.createElement(Route, { path: '/input', component: InputExample }),
                                React.createElement(Route, { path: '/modal', component: ModalExample }),
                                React.createElement(Route, { path: '/navbar', component: NavBarExample }),
                                React.createElement(Route, { path: '/radio', component: RadioExample }),
                                React.createElement(Route, { path: '/select', component: SelectExample }),
                                React.createElement(Route, { path: '/switch', component: SwitchExample }),
                                React.createElement(Route, { path: '/toast', component: ToastExample }),
                                React.createElement(Route, { path: '/tab', component: TabExample }),
                                React.createElement(Route, { path: '/tag', component: TagExample }),
                                React.createElement(Route, { path: '/table', component: TableExample })))),
                    React.createElement("div", { className: "footer", style: { padding: "100px 0px" } })))));
    }
}
export default App;
