"use strict";
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
require("./ButtonGroup.scss");
var defaultProps = {
    className: ''
};
var ButtonGroup = function (props) {
    if (props.children === undefined) {
        throw new Error('children is mandatory for button group');
    }
    var children = props.children, className = props.className, fullWidth = props.fullWidth, vertical = props.vertical, customProps = __rest(props, ["children", "className", "fullWidth", "vertical"]);
    return (<div className={'ui-button-group ' + className + (fullWidth ? 'full' : '') + (vertical ? 'vertical' : 'horizontal')} {...customProps}>
        {children}
    </div>);
};
ButtonGroup.defaultProps = defaultProps;
exports.default = ButtonGroup;
//# sourceMappingURL=ButtonGroup.jsx.map