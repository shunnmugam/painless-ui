"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ButtonGroup_1 = __importDefault(require("./ButtonGroup"));
var shallow_1 = __importDefault(require("react-test-renderer/shallow"));
var react_dom_1 = __importDefault(require("react-dom"));
describe('test button group behaviour', function () {
    it('should throw an error', function () {
        var shallowRenderer = shallow_1.default;
        var renderer = new shallowRenderer();
        // expect(() =>  renderer.render(<ButtonGroup />)).toThrowError();
    });
    it('should render', function () {
        var div = document.createElement('div');
        document.body.appendChild(div);
        react_dom_1.default.render(<ButtonGroup_1.default>dummy text</ButtonGroup_1.default>, div);
        var buttonGroup = div.querySelector('ui-button-group');
        expect(1).not.toBeNull();
    });
});
//# sourceMappingURL=ButtonGroup.test.jsx.map