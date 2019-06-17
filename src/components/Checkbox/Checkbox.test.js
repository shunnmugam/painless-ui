"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var shallow_1 = __importDefault(require("react-test-renderer/shallow"));
var react_test_renderer_1 = __importDefault(require("react-test-renderer"));
var Checkbox_1 = __importDefault(require("./Checkbox"));
var react_dom_1 = __importDefault(require("react-dom"));
var test_utils_1 = __importDefault(require("react-dom/test-utils"));
describe('test checkbox behaviour', function () {
    it('should render', function () {
        var shallowRenderer = shallow_1.default;
        var renderer = new shallowRenderer();
        expect(function () { return renderer.render(react_1.default.createElement(Checkbox_1.default, null)); }).not.toThrowError();
    });
    it('test default props', function () {
        var component = react_test_renderer_1.default.create(react_1.default.createElement(Checkbox_1.default, null));
        var tree = component.toJSON();
        expect(tree.props.style.backgroundColor).toBe('#2196F3');
        expect(tree.children[0].props.className).toBe('ui-checkbox ');
        expect(tree.children[1].props.style.height).toBe('25px');
    });
});
describe('test checkbox events', function () {
    var event;
    var eventHandler = function (e) {
        event = e;
    };
    var div = document.createElement('div');
    document.body.appendChild(div);
    react_dom_1.default.render(react_1.default.createElement(Checkbox_1.default, { onClick: eventHandler }), div);
    var checkbox = div.querySelector('.ui-checkbox-container');
    afterEach(function () {
        event = undefined;
    });
    it('test click event', function () {
        test_utils_1.default.Simulate.click(checkbox);
    });
    it('test touch start event', function () {
        test_utils_1.default.Simulate.touchStart(checkbox);
    });
});
