import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow'; 
import Radio from './Radio';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils'; 

describe('test radio button behaviour',() => {
    it('should render',() => {
        let shallowRenderer: any = ShallowRenderer;
        const renderer = new shallowRenderer();
        expect(() =>  renderer.render(<Radio />)).not.toThrowError()
    })

});

describe('test radio bittons events',() => {
    let event:any;
    const eventHandler = (e:any) => {
        event = e;
    };

    var div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(<Radio onClick={eventHandler}/>, div);
    const radioButton: any = div.querySelector('.ui-radio-container input[type=radio]');
    afterEach(() => {
        event = undefined;
    })

    it('test click event',() => {
        ReactTestUtils.Simulate.click(radioButton);
        expect(event).not.toBeUndefined();
    })
})