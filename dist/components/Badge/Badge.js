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
require("./Badge.css");
var defaultProps = {
    animation: true,
    bgColor: '#fe3824',
    color: 'white',
    className: '',
    children: '',
    style: {}
};
var Badge = function (props) {
    var animation = props.animation, bgColor = props.bgColor, color = props.color, className = props.className, children = props.children, style = props.style, customProps = __rest(props, ["animation", "bgColor", "color", "className", "children", "style"]);
    return (react_1.default.createElement("span", __assign({ style: __assign({ backgroundColor: bgColor, color: color, borderColor: bgColor }, { style: style }), className: 'ui-badge ' + (animation ? 'animation ' : '') + className + (children === '' ? ' empty' : '') }, customProps), children));
};
Badge.defaultProps = defaultProps;
exports.default = Badge;
