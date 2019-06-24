"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./Breadcrumb.css");
var Breadcrumb = function (props) {
    return (react_1.default.createElement("ul", { className: "ui-breadcrumb" }, react_1.default.Children.map(props.children, function (child, i) {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            (i !== 0) ? (react_1.default.createElement("li", { className: "ui-breadcrumb-item ui-breadcrumb-seperator" }, props.seperator)) : react_1.default.createElement(react_1.default.Fragment, null),
            react_1.default.createElement("li", { className: "ui-breadcrumb-item" }, child)));
    })));
};
var defaultProps = {
    className: '',
    seperator: ' / '
};
Breadcrumb.defaultProps = defaultProps;
exports.default = Breadcrumb;
