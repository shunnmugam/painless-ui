import React from 'react';
import Select from './Select';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import Option from '../Option/Option';
configure({ adapter: new Adapter() });
describe('select box behaviour test', () => {
    const component = mount(<Select />);
    it('should have 1 select container', () => {
        expect(component.find('.ui-select-container').length).toEqual(1);
    });
    it('should have 1 dropdown container', () => {
        expect(component.find('.ui-select-container .dropdown').length).toEqual(1);
    });
    it('class name is should empty', () => {
        expect(component.find('.ui-select-container .dropdown .select').hasClass('empty')).toBeTruthy();
    });
});
describe('test toggle method and on click event', () => {
    const onOpenCallBack = jest.fn();
    const onChangeCallBack = jest.fn();
    const component = mount(<Select onOpen={onOpenCallBack} onChange={onChangeCallBack}>
            <Option value="1">A</Option>
            <Option value="2">B</Option>
        </Select>);
    const select = component.find('.ui-select-container .dropdown .select');
    select.simulate("click");
    expect(component.find('.dropdown-menu').hasClass('toggle')).toBeTruthy();
    expect(onOpenCallBack).toBeCalled();
    test('on click event', () => {
        component.find('.dropdown-menu li').at(0).simulate('click');
        expect(onChangeCallBack).toBeCalledWith({ child: 'A', text: undefined, value: "1" });
    });
});
