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
require("./Tag.css");
var defaultProps = {
    className: '',
    style: {},
    addOnsStyle: {}
};
var Tag = function (props) {
    var addons = props.addons, className = props.className, style = props.style, addOnsStyle = props.addOnsStyle, custonProps = __rest(props, ["addons", "className", "style", "addOnsStyle"]);
    return (react_1.default.createElement("div", __assign({ style: style, className: "tags " + (addons !== undefined ? "has-addons " : '') + className }, custonProps),
        react_1.default.createElement("span", { className: "tag" }, "Variables"),
        addons !== undefined ?
            react_1.default.createElement("span", { className: "tag bg-default", style: addOnsStyle }, addons)
            : react_1.default.createElement(react_1.default.Fragment, null)));
};
Tag.defaultProps = defaultProps;
exports.default = Tag;
