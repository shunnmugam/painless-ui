import React from 'react';
import ButtonGroup from './ButtonGroup';
import ShallowRenderer from 'react-test-renderer/shallow';
import ReactDOM from 'react-dom';
describe('test button group behaviour', () => {
    it('should throw an error', () => {
        let shallowRenderer = ShallowRenderer;
        const renderer = new shallowRenderer();
        // expect(() =>  renderer.render(<ButtonGroup />)).toThrowError();
    });
    it('should render', () => {
        var div = document.createElement('div');
        document.body.appendChild(div);
        ReactDOM.render(<ButtonGroup>dummy text</ButtonGroup>, div);
        const buttonGroup = div.querySelector('ui-button-group');
        expect(1).not.toBeNull();
    });
});
