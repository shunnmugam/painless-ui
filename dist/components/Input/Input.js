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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Checkbox_1 = __importDefault(require("../Checkbox/Checkbox"));
var InputBox_1 = __importDefault(require("../InputBox/InputBox"));
var __1 = require("..");
var Radio_1 = __importDefault(require("../Radio/Radio"));
var defaultProps = {
    className: ''
};
var Input = function (props) {
    switch (props.type) {
        case 'checkbox':
            var modifiedProps = __assign({}, props);
            delete modifiedProps.type;
            return react_1.default.createElement(Checkbox_1.default, __assign({}, modifiedProps));
        case 'radio':
            return react_1.default.createElement(Radio_1.default, __assign({}, props));
        case 'submit':
            return react_1.default.createElement(__1.Button, __assign({ text: "submit" }, props, { styleType: "outline" }));
        case 'reset':
            return react_1.default.createElement(__1.Button, __assign({ text: "reset" }, props, { styleType: "outline" }));
        default:
            return react_1.default.createElement(InputBox_1.default, __assign({}, props));
    }
};
Input.defaultProps = defaultProps;
exports.default = Input;
