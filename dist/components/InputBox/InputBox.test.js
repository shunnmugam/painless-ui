"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var shallow_1 = __importDefault(require("react-test-renderer/shallow"));
var InputBox_1 = __importDefault(require("./InputBox"));
var react_dom_1 = __importDefault(require("react-dom"));
var test_utils_1 = __importDefault(require("react-dom/test-utils"));
describe('test input behaviour', function () {
    it('should render', function () {
        var shallowRenderer = shallow_1.default;
        var renderer = new shallowRenderer();
        expect(function () { return renderer.render(react_1.default.createElement(InputBox_1.default, { type: 'text' })); }).not.toThrowError();
    });
});
describe('test input type', function () {
    var div = document.createElement('div');
    document.body.appendChild(div);
    it('test checkbox', function () {
        react_dom_1.default.render(react_1.default.createElement(InputBox_1.default, { type: 'checkbox' }), div);
        var checkbox = div.querySelector('[type=checkbox]');
        expect(checkbox).not.toBeNull();
    });
    it('test radio', function () {
        react_dom_1.default.render(react_1.default.createElement(InputBox_1.default, { type: 'radio' }), div);
        var checkbox = div.querySelector('[type=radio]');
        expect(checkbox).not.toBeNull();
    });
    it('test submit', function () {
        react_dom_1.default.render(react_1.default.createElement(InputBox_1.default, { type: 'submit' }), div);
        var checkbox = div.querySelector('button[type=submit]');
        expect(checkbox).not.toBeNull();
    });
    it('test reset', function () {
        react_dom_1.default.render(react_1.default.createElement(InputBox_1.default, { type: 'reset' }), div);
        var checkbox = div.querySelector('button[type=reset]');
        expect(checkbox).not.toBeNull();
    });
});
describe('test validation ', function () {
    var div = document.createElement('div');
    document.body.appendChild(div);
    var validationResult;
    var validationCallBack = function (res, e) {
        validationResult = res;
    };
    afterEach(function () {
        validationResult = undefined;
    });
    it('check email validation', function () {
        var validationOptions = {
            event: 'onClick',
            rules: 'required|email',
            validationCallback: validationCallBack
        };
        react_dom_1.default.render(react_1.default.createElement(InputBox_1.default, { type: 'email', validation: true, validationOptions: validationOptions, value: 'shunramit', onChange: function () { } }), div);
        var inputBox = div.querySelector('input[type=email]');
        test_utils_1.default.Simulate.click(inputBox);
        expect(validationResult).not.toBeUndefined();
        expect(validationResult.isValidate).toBeFalsy();
    });
    it('check min validation', function () {
        var validationOptions = {
            event: 'onClick',
            rules: 'required|min:10',
            validationCallback: validationCallBack
        };
        react_dom_1.default.render(react_1.default.createElement(InputBox_1.default, { type: 'text', validation: true, validationOptions: validationOptions, value: '12', onChange: function () { } }), div);
        var inputBox = div.querySelector('input[type=text]');
        test_utils_1.default.Simulate.click(inputBox);
        expect(validationResult).not.toBeUndefined();
        expect(validationResult.isValidate).toBeFalsy();
    });
});
