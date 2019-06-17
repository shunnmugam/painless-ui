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
require("./Checkbox.scss");
var defaultProps = {
    bgColor: '#2196F3',
    className: '',
    height: '25px',
    width: '25px'
};
var onChangeHandler = function ($e, props) {
    if (props.onClick)
        props.onClick($e);
};
var Checkbox = function (props) {
    var bgColor = props.bgColor, height = props.height, width = props.width, className = props.className, style = props.style, onClick = props.onClick, customProps = __rest(props, ["bgColor", "height", "width", "className", "style", "onClick"]);
    return (<label className="ui-checkbox-container" style={__assign({
        backgroundColor: bgColor
    }, style)} {...customProps}>
        <input onClick={function ($e) { return onChangeHandler($e, props); }} className={'ui-checkbox ' + className} type="checkbox" {...customProps}/>
        <span className={'checkmark '} style={{ width: width, height: height }}></span>
    </label>);
};
Checkbox.defaultProps = defaultProps;
exports.default = Checkbox;
//# sourceMappingURL=Checkbox.jsx.map