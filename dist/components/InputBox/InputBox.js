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
require("./InputBox.css");
var Button_1 = __importDefault(require("../Button/Button"));
var noValidateField = ['submit', 'reset', 'button', 'file'];
var InputBox = /** @class */ (function (_super) {
    __extends(InputBox, _super);
    function InputBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isValid: true,
        };
        _this.inputElement = null;
        return _this;
    }
    InputBox.prototype.onValidationHandler = function (v, e) {
        if (e === void 0) { e = undefined; }
        if (this.props.validation === true) {
            var rules = '';
            //validation based on type
            switch (this.props.type) {
                case 'email':
                    rules = 'email';
                    break;
                case 'number':
                    rules = 'number';
                    break;
            }
            if (this.props.validationOptions && this.props.validationOptions.rules) {
                rules += '|' + this.props.validationOptions.rules;
            }
            var validaterObj = new Validator_1.default({
                input: v
            }, {
                'input': rules
            });
            var isValid = validaterObj.validate();
            if (this.state.isValid !== isValid) {
                this.setState({
                    isValid: isValid
                });
            }
            var message = validaterObj.getMessage();
            if (this.props.validationOptions && typeof this.props.validationOptions.validationCallback === "function") {
                this.props.validationOptions.validationCallback({
                    isValid: isValid,
                    message: message
                }, e);
            }
        }
    };
    InputBox.prototype.makeClassName = function () {
        var className = '';
        className += this.state.isValid ? ' valid' : ' not-valid';
        return className;
    };
    InputBox.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.validationOptions
            && prevProps.validationOptions.validateNow === false
            && this.props.validationOptions
            && this.props.validationOptions.validateNow === true
            && noValidateField.indexOf(this.props.type) === -1) {
            this.onValidationHandler(this.inputElement.value);
        }
    };
    /*
     * render
     */
    InputBox.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this.props, type = _b.type, className = _b.className, validation = _b.validation, validationOptions = _b.validationOptions, rounded = _b.rounded, customProps = __rest(_b, ["type", "className", "validation", "validationOptions", "rounded"]);
        var customClassName = this.makeClassName();
        var validationEventName = (validationOptions && validationOptions.event) ? validationOptions.event : "onBlur";
        var validationEvent = (_a = {},
            _a[validationEventName] = function (e) { return _this.onValidationHandler(e.target.value, e); },
            _a);
        if (type === 'file') {
            return (react_1.default.createElement("label", { className: "file-input-container" },
                react_1.default.createElement("input", __assign({ className: 'ui-input file ' + className, type: "file", "aria-label": "File browser" }, customProps)),
                react_1.default.createElement("span", { className: "file-custom" })));
        }
        else if (type === 'submit') {
            return react_1.default.createElement(Button_1.default, __assign({ type: 'submit', text: "Submit" }, customProps, { className: className, rounded: rounded }));
        }
        else if (type === 'reset') {
            return react_1.default.createElement(Button_1.default, __assign({ type: 'reset', text: "Reset" }, customProps, { className: className, rounded: rounded }));
        }
        else if (type === 'button') {
            return react_1.default.createElement(Button_1.default, __assign({ type: 'button', text: "Click" }, customProps, { className: className, rounded: rounded }));
        }
        return react_1.default.createElement("input", __assign({ ref: function (input) { return _this.inputElement = input; }, type: type }, validationEvent, { className: 'ui-input ' + type + ' ' + customClassName + className + (rounded ? ' rounded' : '') }, customProps));
    };
    InputBox.prototype.componentDidMount = function () {
        if (this.props.validationOptions && this.props.validationOptions.validateNow === true
            && noValidateField.indexOf(this.props.type) === -1) {
            this.onValidationHandler(this.inputElement.value);
        }
    };
    InputBox.defaultProps = {
        className: '',
        type: 'text',
        rounded: false,
        validation: true
    };
    return InputBox;
}(react_1.default.Component));
exports.default = InputBox;
