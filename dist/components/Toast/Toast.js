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
require("./Toast.css");
var defaultToastOptions = {
    autoClose: true,
    closeOnClick: false,
    time: 5000
};
var Toast = /** @class */ (function (_super) {
    __extends(Toast, _super);
    function Toast() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timer = null;
        _this.state = {
            show: _this.props.show || false,
            prevShow: undefined
        };
        _this.clear = function (forceClick) {
            if (forceClick === void 0) { forceClick = false; }
            if (forceClick === true || (_this.props.options && _this.props.options.autoClose === true)) {
                _this.setState({
                    show: false,
                    prevShow: _this.state.show
                });
                if (_this.props.onClose && typeof _this.props.onClose === 'function') {
                    _this.props.onClose(false);
                }
            }
        };
        _this.setTimer = function (callBack) {
            var toasterOptions = __assign({}, defaultToastOptions, _this.props.options || {});
            var time = toasterOptions.time;
            clearTimeout(_this.timer);
            _this.timer = setTimeout(function () {
                callBack();
            }, time);
        };
        return _this;
    }
    Toast.getDerivedStateFromProps = function (nextProps, state) {
        if (nextProps.show !== state.show) {
            return {
                show: nextProps.show,
                prevShow: state.show
            };
        }
        return null;
    };
    Toast.prototype.generateAnimationCss = function () {
        var toasterOptions = __assign({}, defaultToastOptions, this.props.options || {});
        var time = ((toasterOptions.time || 5000) - 2000) / 1000;
        return "fade-in 0.5s, expand 0.5s 0.5s, stay " + time + "s 1s, shrink 0.5s " + (time + 1) + "s, fade-out 0.5s " + (time + 1.5) + "s";
    };
    // eslint-disable-next-line
    Toast.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (this.state.show === true && prevState.show !== true) {
            this.setTimer(this.clear);
        }
    };
    Toast.prototype.componentDidMount = function () {
        if (this.state.show === true) {
            this.setTimer(this.clear);
        }
    };
    Toast.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, show = _a.show, title = _a.title, options = _a.options, style = _a.style, customProps = __rest(_a, ["className", "show", "title", "options", "style"]);
        var toasterOptions = __assign({}, defaultToastOptions, options || {});
        if (show === true) {
            var animationCss = this.generateAnimationCss();
            return (react_1.default.createElement("div", __assign({ onClick: function () {
                    if (toasterOptions.closeOnClick === true)
                        _this.clear(true);
                }, className: 'ui-toast ' + (this.state.show === true ? 'show ' : '')
                    + (toasterOptions.autoClose === true ? ' auto-close ' : ' ')
                    + (className || ''), style: __assign({
                    WebkitAnimation: animationCss,
                    animation: animationCss
                }, style) }, customProps),
                react_1.default.createElement("div", { className: "ui-toast-img" }, title || 'Alert'),
                react_1.default.createElement("div", { className: "ui-toast-desc" }, this.props.children)));
        }
        else {
            return react_1.default.createElement(react_1.default.Fragment, null);
        }
    };
    return Toast;
}(react_1.default.PureComponent));
exports.default = Toast;
