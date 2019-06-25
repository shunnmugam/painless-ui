"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Select_1 = __importDefault(require("./Select"));
var enzyme_adapter_react_16_1 = __importDefault(require("enzyme-adapter-react-16"));
var enzyme_1 = require("enzyme");
var Option_1 = __importDefault(require("../Option/Option"));
enzyme_1.configure({ adapter: new enzyme_adapter_react_16_1.default() });
describe('select box behaviour test', function () {
    var component = enzyme_1.mount(react_1.default.createElement(Select_1.default, null));
    it('should have 1 select container', function () {
        expect(component.find('.ui-select-container').length).toEqual(1);
    });
    it('should have 1 dropdown container', function () {
        expect(component.find('.ui-select-container .dropdown').length).toEqual(1);
    });
    it('class name is should empty', function () {
        expect(component.find('.ui-select-container .dropdown .select').hasClass('empty')).toBeTruthy();
    });
});
describe('test toggle method and on click event', function () {
    var onOpenCallBack = jest.fn();
    var onChangeCallBack = jest.fn();
    var component = enzyme_1.mount(react_1.default.createElement(Select_1.default, { onOpen: onOpenCallBack, onChange: onChangeCallBack },
        react_1.default.createElement(Option_1.default, { value: "1" }, "A"),
        react_1.default.createElement(Option_1.default, { value: "2" }, "B")));
    var select = component.find('.ui-select-container .dropdown .select');
    select.simulate("click");
    expect(component.find('.dropdown-menu').hasClass('toggle')).toBeTruthy();
    expect(onOpenCallBack).toBeCalled();
    test('on click event', function () {
        component.find('.dropdown-menu li').at(0).simulate('click');
        expect(onChangeCallBack).toBeCalledWith({ child: 'A', text: undefined, value: "1" });
    });
});
