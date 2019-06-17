"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Button_1 = __importDefault(require("./Button"));
var test_utils_1 = __importDefault(require("react-dom/test-utils"));
var react_test_renderer_1 = __importDefault(require("react-test-renderer"));
var react_dom_1 = __importDefault(require("react-dom"));
describe('test button behaviour', function () {
    var component = react_test_renderer_1.default.create(<Button_1.default />);
    var tree = component.toJSON();
    it('test render', function () {
        expect(tree).not.toBeNull();
    });
    it('test default props', function () {
        expect(tree.props.style.backgroundColor).toBe('transparent');
        expect(tree.props.style.color).toBe('black');
        expect(tree.props.className).toBe('ui-button ripple ');
        expect(tree.props['data-style-type']).toBe('background');
    });
});
describe('test button events', function () {
    var event;
    var eventHandler = function (e) {
        event = e;
    };
    var div = document.createElement('div');
    document.body.appendChild(div);
    react_dom_1.default.render(<Button_1.default onClick={eventHandler}/>, div);
    var button = div.querySelector('button');
    afterEach(function () {
        event = undefined;
    });
    it('check on click event', function () {
        test_utils_1.default.Simulate.click(button);
        expect(event).not.toBeUndefined;
    });
    it('check on touch start event', function () {
        test_utils_1.default.Simulate.touchStart(button);
        expect(event).not.toBeUndefined;
    });
    afterAll(function () {
        react_dom_1.default.unmountComponentAtNode(div);
    });
});
//# sourceMappingURL=Button.test.jsx.map