"use strict";
exports.__esModule = true;
var react_1 = require("react");
var shallow_1 = require("react-test-renderer/shallow");
var Input_1 = require("./Input");
var react_dom_1 = require("react-dom");
describe('test input behaviour', function () {
    it('should render', function () {
        var shallowRenderer = shallow_1["default"];
        var renderer = new shallowRenderer();
        expect(function () { return renderer.render(<Input_1["default"] type='checkbox'/>); }).not.toThrowError();
    });
});
describe('test input type', function () {
    var div = document.createElement('div');
    document.body.appendChild(div);
    it('test checkbox', function () {
        react_dom_1["default"].render(<Input_1["default"] type='checkbox'/>, div);
        var checkbox = div.querySelector('[type=checkbox]');
        expect(checkbox).not.toBeNull();
    });
});
