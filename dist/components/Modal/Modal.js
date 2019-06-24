"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
require("./Modal.css");
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            open: _this.props.open || false,
            prevOpen: undefined
        };
        _this.close = function () {
            if (_this.state.open === true) {
                _this.setState({
                    prevOpen: _this.state.open,
                    open: false
                });
            }
        };
        return _this;
    }
    Modal.getDerivedStateFromProps = function (nextProps, prevState) {
        if (nextProps.open !== undefined && prevState.prevOpen !== nextProps.open) {
            return {
                prevOpen: prevState.open,
                open: nextProps.open,
            };
        }
        return null;
    };
    Modal.prototype.render = function () {
        var _a = this.props, className = _a.className, open = _a.open, customProps = __rest(_a, ["className", "open"]);
        return (react_1.default.createElement("div", __assign({ onClick: this.close, className: 'ui-modal ' + (this.state.open === true ? 'show-modal ' : '') + (className || '') }, customProps),
            react_1.default.createElement("div", { onClick: function (e) { return e.stopPropagation(); }, className: 'modal-content ' + (this.state.open === true ? 'open ' : 'closed') },
                react_1.default.createElement("span", { onClick: this.close, className: "close-button" }, "\u00D7"),
                react_1.default.createElement("div", { className: "ui-model-body" }, this.props.children))));
    };
    return Modal;
}(react_1.default.PureComponent));
exports.default = Modal;
