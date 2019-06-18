"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./Switch.css");
var defaultProps = {
    className: '',
    height: '23px',
    width: '20px',
    style: {}
};
var Switch = function (props) {
    var className = props.className, style = props.style, height = props.height, width = props.width, customProps = __rest(props, ["className", "style", "height", "width"]);
    return (react_1.default.createElement("label", __assign({ className: "ui-switch" + className }, __assign({ style: {
            width: width,
            height: height
        } }, style)),
        react_1.default.createElement("input", __assign({ type: "checkbox", className: "ui-switch-input" }, customProps)),
        react_1.default.createElement("div", { className: "ui-switch-toggle " },
            react_1.default.createElement("div", { className: "ui-switch-handle" }))));
};
Switch.defaultProps = defaultProps;
exports.default = Switch;
