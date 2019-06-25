"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TabGroup_1 = __importDefault(require("../TabGroup/TabGroup"));
var TabContainer_1 = __importDefault(require("../TabContainer/TabContainer"));
var TabWrapper = function (props) {
    return (react_1.default.createElement("div", { style: { width: props.width || '100%' }, className: "ui-card ui-z-depth " + props.className },
        react_1.default.Children.toArray(props.children).find(function (child) {
            if (child.type === TabGroup_1.default) {
                return child;
            }
            return false;
        }),
        react_1.default.createElement("div", { className: "ui-card-body" },
            react_1.default.createElement("div", { className: "tab-content" }, react_1.default.Children.toArray(props.children).map(function (child) {
                if (child.type === TabContainer_1.default) {
                    return child;
                }
                return false;
            })))));
};
exports.default = TabWrapper;
