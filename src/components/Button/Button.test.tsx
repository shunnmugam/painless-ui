import React from 'react';
import Button from './Button';
import ReactTestUtils from 'react-dom/test-utils'; 
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

describe('test button behaviour',() => {
    const component = renderer.create(
        <Button />,
    );
    let tree: any = component.toJSON();

    it('test render',() => {
        expect(tree).not.toBeNull();
    })
    it('test default props', () => {
        expect(tree.props.style.backgroundColor).toBe('transparent');
        expect(tree.props.style.color).toBe('black');
        expect(tree.props.className).toBe('ui-button ripple ');
        expect(tree.props['data-style-type']).toBe('background');
    });
});

describe('test button events',() => {
    let event:any;
    const eventHandler = (e:any) => {
        event = e;
    }

    var div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(<Button onClick={eventHandler}/>, div);
    const button:any = div.querySelector('button');
    afterEach(() => {
        event = undefined;
    })
    it('check on click event',() => {
       ReactTestUtils.Simulate.click(button)
       expect(event).not.toBeUndefined;
    })
    it('check on touch start event',() => {
        ReactTestUtils.Simulate.touchStart(button)
        expect(event).not.toBeUndefined;
    })

    afterAll(() => {
        ReactDOM.unmountComponentAtNode(div);
    })
    
});