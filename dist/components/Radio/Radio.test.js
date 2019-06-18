"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var shallow_1 = __importDefault(require("react-test-renderer/shallow"));
var Radio_1 = __importDefault(require("./Radio"));
var react_dom_1 = __importDefault(require("react-dom"));
var test_utils_1 = __importDefault(require("react-dom/test-utils"));
describe('test radio button behaviour', function () {
    it('should render', function () {
        var shallowRenderer = shallow_1.default;
        var renderer = new shallowRenderer();
        expect(function () { return renderer.render(react_1.default.createElement(Radio_1.default, null)); }).not.toThrowError();
    });
});
describe('test radio bittons events', function () {
    var event;
    var eventHandler = function (e) {
        event = e;
    };
    var div = document.createElement('div');
    document.body.appendChild(div);
    react_dom_1.default.render(react_1.default.createElement(Radio_1.default, { onClick: eventHandler }), div);
    var radioButton = div.querySelector('.ui-radio-container input[type=radio]');
    afterEach(function () {
        event = undefined;
    });
    it('test click event', function () {
        test_utils_1.default.Simulate.click(radioButton);
        expect(event).not.toBeUndefined();
    });
});
