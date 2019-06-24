"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./App.css");
//import Modal from './Modal/Modal';
var index_1 = require("./components/index");
var TabContainer_1 = __importDefault(require("./components/TabContainer/TabContainer"));
var react_router_dom_1 = require("react-router-dom");
var Switch = react_1.default.lazy(function () { return Promise.resolve().then(function () { return __importStar(require('./components/Switch/Switch')); }); });
var App = function () {
    var _a = react_1.useState(false), checkBoxHook = _a[0], setChecboxCheck = _a[1];
    var _b = react_1.useState(0), activeTab = _b[0], changeActiveTab = _b[1];
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(index_1.Input, { rounded: false, type: "text", placeholder: "Email id", onChange: function (e) {
                    console.log(e.target.value);
                }, validationOptions: {
                    event: "onInput",
                    rules: 'required',
                    validateNow: checkBoxHook,
                    validationCallback: function (res, e) {
                        console.log(res);
                    }
                } }),
            react_1.default.createElement(index_1.Input, { type: "radio", width: "20px", height: "20px", name: "a" }),
            react_1.default.createElement(index_1.Input, { type: "radio", width: "20px", height: "20px", name: "a" }),
            react_1.default.createElement(index_1.Button, { color: "white", bgColor: "#2196f3", id: 'ui-button-1', styleType: 'background', rounded: true }, "C"),
            react_1.default.createElement(index_1.ButtonGroup, null,
                react_1.default.createElement(index_1.Button, { color: "red", bgColor: "red", id: 'ui-button-1', styleType: 'outline' }, "click"),
                react_1.default.createElement(index_1.Button, { disabled: true, color: "green", bgColor: "red", id: 'ui-button-1', styleType: 'outline' }, "click"),
                react_1.default.createElement(index_1.Button, { color: "blue", bgColor: "red", id: 'ui-button-1', styleType: 'outline' }, "click")),
            react_1.default.createElement(index_1.Checkbox, { width: "20px", height: "20px", checked: checkBoxHook, onChange: function (e) {
                    setChecboxCheck(!checkBoxHook);
                } }),
            react_1.default.createElement(index_1.Button, { color: "white", bgColor: "#2196f3", id: 'ui-button-1', styleType: 'background' }, "C"),
            react_1.default.createElement(index_1.Badge, null, "10"),
            react_1.default.createElement(index_1.TabWrapper, null,
                react_1.default.createElement(index_1.TabGroup, { onClick: changeActiveTab },
                    react_1.default.createElement(index_1.Tab, null,
                        react_1.default.createElement("span", null, "Default")),
                    react_1.default.createElement(index_1.Tab, null, "Tab 2")),
                react_1.default.createElement(TabContainer_1.default, { active: 0 === activeTab }, "abc"),
                react_1.default.createElement(TabContainer_1.default, { active: 1 === activeTab }, "2 nd tab")),
            react_1.default.createElement(index_1.AccordionGroup, { collapsible: true, onToggle: function (s, i) { return console.log(s, i); } },
                react_1.default.createElement(index_1.Accordion, { title: "section 1" },
                    react_1.default.createElement("p", null, "Test")),
                react_1.default.createElement(index_1.Accordion, { title: "section 1" },
                    react_1.default.createElement("p", null, "Test"))),
            react_1.default.createElement(index_1.Breadcrumb, null,
                react_1.default.createElement(react_router_dom_1.Link, { to: '' }, "Home"),
                react_1.default.createElement("span", null, "hai"),
                react_1.default.createElement("span", null, "hai2")),
            react_1.default.createElement(index_1.Tag, { addons: react_1.default.createElement("span", null, "addons") }),
            react_1.default.createElement(index_1.Select, { multiple: true, label: react_1.default.createElement("label", null, "Choose") },
                react_1.default.createElement(index_1.Option, { value: "1" }, "male"),
                react_1.default.createElement(index_1.Option, { text: "female", value: "2" }, "Fe Male"),
                checkBoxHook ? react_1.default.createElement(index_1.Option, { value: "8" }, "Fe Male") : react_1.default.createElement(react_1.default.Fragment, null)),
            react_1.default.createElement(index_1.Modal, { open: true },
                react_1.default.createElement("p", null, "Some text in the Modal..")))));
};
exports.default = App;
