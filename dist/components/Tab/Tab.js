"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Tab = function (props) {
    return react_1.default.createElement(react_1.default.Fragment, null, props.label && props.label !== '' ? props.label : props.children);
};
exports.default = Tab;
