"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./App.css");
var index_1 = require("./components/index");
var App = function () {
    var _a = react_1.useState(true), checkBoxHook = _a[0], setChecboxCheck = _a[1];
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(index_1.Input, { type: "number" }),
        react_1.default.createElement(index_1.Button, { color: "white", bgColor: "#2196f3", id: 'ui-button-1', styleType: 'background', rounded: true }, "C"),
        react_1.default.createElement(index_1.ButtonGroup, null,
            react_1.default.createElement(index_1.Button, { color: "red", bgColor: "red", id: 'ui-button-1', styleType: 'outline' }, "click"),
            react_1.default.createElement(index_1.Button, { disabled: true, color: "green", bgColor: "red", id: 'ui-button-1', styleType: 'outline' }, "click"),
            react_1.default.createElement(index_1.Button, { color: "blue", bgColor: "red", id: 'ui-button-1', styleType: 'outline' }, "click")),
        react_1.default.createElement(index_1.Checkbox, { width: "20px", height: "20px", checked: checkBoxHook, onChange: function (e) {
                setChecboxCheck(!checkBoxHook);
            } })));
};
exports.default = App;
