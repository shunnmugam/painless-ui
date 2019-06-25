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
    var _c = react_1.useState('top-center'), toastPosition = _c[0], changeToastPosition = _c[1];
    var _d = react_1.useState(false), toastShow = _d[0], changeToastShow = _d[1];
    var _e = react_1.useState(false), toastShow2 = _e[0], changeToastShow2 = _e[1];
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(index_1.Input, { rounded: false, type: "email", placeholder: "Email id", onChange: function (e) {
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
            react_1.default.createElement(index_1.Input, { type: "radio" }),
            react_1.default.createElement(index_1.Input, { type: "checkbox", rounded: true }),
            react_1.default.createElement(react_1.Suspense, { fallback: 'loading' },
                react_1.default.createElement(Switch, null)),
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
            react_1.default.createElement(index_1.Select, { multiple: checkBoxHook, label: react_1.default.createElement("label", null, "Choose") },
                react_1.default.createElement(index_1.Option, { value: "1" }, "male"),
                react_1.default.createElement(index_1.Option, { text: "female", value: "2" }, "Fe Male"),
                checkBoxHook ? react_1.default.createElement(index_1.Option, { value: "8" }, "Fe Male") : react_1.default.createElement(react_1.default.Fragment, null)),
            react_1.default.createElement(index_1.Modal, { open: false },
                react_1.default.createElement("p", null, "Some text in the Modal..")),
            react_1.default.createElement("div", null,
                react_1.default.createElement(index_1.Select, { value: toastPosition, onChange: function (v) { return changeToastPosition(v.value); }, label: react_1.default.createElement("label", null, "Toast Position") },
                    react_1.default.createElement(index_1.Option, { value: "top-center", text: "top-center" }, "top-center"),
                    react_1.default.createElement(index_1.Option, { value: "top-left", text: "top-left" }, "top-left"),
                    react_1.default.createElement(index_1.Option, { value: "top-right", text: "top-right" }, "top-right"),
                    react_1.default.createElement(index_1.Option, { value: "bottom-center", text: "bottom-center" }, "bottom-center"),
                    react_1.default.createElement(index_1.Option, { value: "bottom-left", text: "bottom-left" }, "bottom-left"),
                    react_1.default.createElement(index_1.Option, { value: "bottom-right", text: "bottom-right" }, "bottom-right")),
                react_1.default.createElement(index_1.Button, { bgColor: "rgb(66, 133, 244)", color: "white", onClick: function () {
                        changeToastShow(true);
                    } }, "Show Toast"),
                react_1.default.createElement(index_1.Button, { bgColor: "rgb(66, 133, 244)", color: "white", onClick: function () {
                        changeToastShow2(true);
                    } }, "Show Toast 2")),
            react_1.default.createElement(index_1.ToastContainer, { position: toastPosition },
                react_1.default.createElement(index_1.Toast, { onClose: changeToastShow, options: {
                        autoClose: true,
                        closeOnClick: true
                    }, show: toastShow }, "show notification message ..."),
                react_1.default.createElement(index_1.Toast, { onClose: changeToastShow2, title: "info", options: {
                        autoClose: true,
                        closeOnClick: true,
                        time: 10000
                    }, show: toastShow2 }, " 2 show notification message ...")))));
};
exports.default = App;
