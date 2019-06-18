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
var Switch = react_1.default.lazy(function () { return Promise.resolve().then(function () { return __importStar(require('./components/Switch/Switch')); }); });
var App = function () {
    var _a = react_1.useState(false), checkBoxHook = _a[0], setChecboxCheck = _a[1];
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(index_1.Input, { type: "radio" }),
        react_1.default.createElement(index_1.Input, { type: "checkbox", rounded: true }),
        react_1.default.createElement(react_1.Suspense, { fallback: 'loading' },
            react_1.default.createElement(Switch, null))));
};
exports.default = App;
