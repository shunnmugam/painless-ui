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
require("./Button.css");
;
/*
 * default props
 */
var defaultProps = {
    bgColor: 'transparent',
    className: '',
    color: 'black',
    styleType: 'background'
};
var onClickHandler = function ($e, props) {
    if (props.onClick !== undefined && typeof props.onClick === 'function') {
        props.onClick($e);
    }
};
var Button = function (props) {
    var bgColor = props.bgColor, className = props.className, color = props.color, text = props.text, style = props.style, styleType = props.styleType, onClick = props.onClick, children = props.children, rounded = props.rounded, customProps = __rest(props, ["bgColor", "className", "color", "text", "style", "styleType", "onClick", "children", "rounded"]);
    return (<button data-style-type={styleType} className={'ui-button ripple ' + className + (rounded ? 'rounded' : '')} onClick={function (e) { return onClickHandler(e, props); }} {...customProps} style={__assign({
        backgroundColor: styleType === 'background' ? bgColor : 'transparent',
        color: color
    }, style)}>
        {text ? text : children}
    </button>);
};
Button.defaultProps = defaultProps;
exports.default = Button;
//# sourceMappingURL=Button.jsx.map