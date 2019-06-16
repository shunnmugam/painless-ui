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
exports.__esModule = true;
var react_1 = require("react");
var Checkbox_1 = require("../Checkbox/Checkbox");
var defaultProps = {
    className: ''
};
var Input = function (props) {
    if (props.type === 'checkbox') {
        var modifiedProps = __assign({}, props);
        delete modifiedProps.type;
        return <Checkbox_1["default"] {...modifiedProps}/>;
    }
    return <></>;
};
Input.defaultProps = defaultProps;
exports["default"] = Input;
