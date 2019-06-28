"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./App.css");
//import Modal from './Modal/Modal';
var index_1 = require("./components/index");
// import TabContainer from './components/TabContainer/TabContainer';
var react_router_dom_1 = require("react-router-dom");
var DataTable_1 = __importDefault(require("./examples/DataTable/DataTable"));
var components_1 = require("./components");
var ThemeProvider_1 = __importDefault(require("./providers/ThemeProvider"));
var Switch = react_1.default.lazy(function () { return Promise.resolve().then(function () { return __importStar(require('./components/Switch/Switch')); }); });
var tableData = {
    data: []
};
var App = function (props) {
    // const [ checkBoxHook, setChecboxCheck ] = useState(false);
    // const [ activeTab, changeActiveTab ] = useState(0);
    // const [toastPosition,changeToastPosition] = useState('top-center');
    // const [toastShow,changeToastShow] = useState(false);
    // const [toastShow2,changeToastShow2] = useState(false);
    return (react_1.default.createElement(ThemeProvider_1.default, null,
        console.log(props),
        react_1.default.createElement(index_1.AccordionGroup, { collapsible: true, onToggle: function (s, i) { return console.log(s, i); } },
            react_1.default.createElement(index_1.Accordion, { title: "section 1" },
                react_1.default.createElement("p", null, "Test")),
            react_1.default.createElement(index_1.Accordion, { title: "sectiocontainern 1" },
                react_1.default.createElement("p", null, "Test"))),
        react_1.default.createElement("div", { className: "App" },
            react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                react_1.default.createElement(components_1.NavBar, null),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/examples/data-table', component: DataTable_1.default })))));
};
exports.default = App;
