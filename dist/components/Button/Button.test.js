import React from 'react';
import Button from './Button';
import ReactTestUtils from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
describe('test button behaviour', () => {
    const component = renderer.create(React.createElement(Button, null));
    let tree = component.toJSON();
    it('test render', () => {
        expect(tree).not.toBeNull();
    });
    it('test default props', () => {
        expect(tree.props.style.backgroundColor).toBe(null);
        expect(tree.props.style.color).toBe(null);
        expect(tree.props.className).toEqual(expect.stringContaining('ui-button ripple '));
        expect(tree.props['data-style-type']).toBe('background');
    });
});
describe('test button events', () => {
    let event;
    const eventHandler = (e) => {
        event = e;
    };
    var div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(React.createElement(Button, { onClick: eventHandler }), div);
    const button = div.querySelector('button');
    afterEach(() => {
        event = undefined;
    });
    it('check on click event', () => {
        ReactTestUtils.Simulate.click(button);
        expect(event).not.toBeUndefined;
    });
    it('check on touch start event', () => {
        ReactTestUtils.Simulate.touchStart(button);
        expect(event).not.toBeUndefined;
    });
    afterAll(() => {
        ReactDOM.unmountComponentAtNode(div);
    });
});
