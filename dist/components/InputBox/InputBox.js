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
var Validator_1 = __importDefault(require("../../utills/Validator"));
var InputBox = /** @class */ (function (_super) {
    __extends(InputBox, _super);
    function InputBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isValid: true,
        };
        return _this;
    }
    InputBox.prototype.onBlurHandler = function (e) {
        if (this.props.validation === true) {
            var rules = {};
            //validation based on type
            switch (this.props.type) {
                case 'email':
                    rules = {
                        'input': 'email'
                    };
                    break;
                case 'number':
                    rules = {
                        'input': 'number'
                    };
                    break;
            }
            var validaterObj = new Validator_1.default({
                input: e.target.value
            }, rules);
            var isValid = validaterObj.validate();
            this.setState({
                isValid: isValid
            });
        }
    };
    InputBox.prototype.makeClassName = function () {
        var className = '';
        className += this.state.isValid ? ' valid ' : ' not-valid';
        return className;
    };
    /*
     * render
     */
    InputBox.prototype.render = function () {
        var _this = this;
        var _a = this.props, type = _a.type, className = _a.className, validation = _a.validation, customProps = __rest(_a, ["type", "className", "validation"]);
        var customClassName = this.makeClassName();
        return react_1.default.createElement("input", __assign({ type: type, onBlur: function (e) { return _this.onBlurHandler(e); }, className: 'ui-input ' + customClassName + className }, customProps));
    };
    InputBox.defaultProps = {
        className: '',
        type: 'text',
        validation: true
    };
    return InputBox;
}(react_1.default.Component));
exports.default = InputBox;
