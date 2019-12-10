import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import renderer from 'react-test-renderer';
import Checkbox from './Checkbox';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
describe('test checkbox behaviour', () => {
    it('should render', () => {
        let shallowRenderer = ShallowRenderer;
        const renderer = new shallowRenderer();
        expect(() => renderer.render(<Checkbox />)).not.toThrowError();
    });
    it('test default props', () => {
        const component = renderer.create(<Checkbox />);
        let tree = component.toJSON();
        expect(tree.props.style.backgroundColor).toBe('#2196F3');
        expect(tree.children[0].props.className).toBe('ui-checkbox');
        //  expect(tree.children[1].props.style.height).toBe('25px');
    });
});
describe('test checkbox events', () => {
    let event;
    const eventHandler = (e) => {
        event = e;
    };
    var div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(<Checkbox onClick={eventHandler}/>, div);
    const checkbox = div.querySelector('.ui-checkbox-container');
    afterEach(() => {
        event = undefined;
    });
    it('test click event', () => {
        ReactTestUtils.Simulate.click(checkbox);
    });
    it('test touch start event', () => {
        ReactTestUtils.Simulate.touchStart(checkbox);
    });
});
