"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var shallow_1 = __importDefault(require("react-test-renderer/shallow"));
var Input_1 = __importDefault(require("./Input"));
var react_dom_1 = __importDefault(require("react-dom"));
describe('test input behaviour', function () {
    it('should render', function () {
        var shallowRenderer = shallow_1.default;
        var renderer = new shallowRenderer();
        expect(function () { return renderer.render(react_1.default.createElement(Input_1.default, { type: 'checkbox' })); }).not.toThrowError();
    });
});
describe('test input type', function () {
    var div = document.createElement('div');
    document.body.appendChild(div);
    it('test checkbox', function () {
        react_dom_1.default.render(react_1.default.createElement(Input_1.default, { type: 'checkbox' }), div);
        var checkbox = div.querySelector('[type=checkbox]');
        expect(checkbox).not.toBeNull();
    });
    it('test radio', function () {
        react_dom_1.default.render(react_1.default.createElement(Input_1.default, { type: 'radio' }), div);
        var checkbox = div.querySelector('[type=radio]');
        expect(checkbox).not.toBeNull();
    });
    it('test submit', function () {
        react_dom_1.default.render(react_1.default.createElement(Input_1.default, { type: 'submit' }), div);
        var checkbox = div.querySelector('button[type=submit]');
        expect(checkbox).not.toBeNull();
    });
    it('test reset', function () {
        react_dom_1.default.render(react_1.default.createElement(Input_1.default, { type: 'reset' }), div);
        var checkbox = div.querySelector('button[type=reset]');
        expect(checkbox).not.toBeNull();
    });
});
