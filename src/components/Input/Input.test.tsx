import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow'; 
import renderer from 'react-test-renderer';
import Input from './Input';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils'; 

describe('test input behaviour',() => {
    it('should render',() => {
        let shallowRenderer: any = ShallowRenderer;
        const renderer = new shallowRenderer();
        expect(() =>  renderer.render(<Input type='checkbox' />)).not.toThrowError()
    })

});

describe('test input type',() => {
    var div = document.createElement('div');
    document.body.appendChild(div);
    it('test checkbox',() => {
        ReactDOM.render(<Input type='checkbox' />, div);
        const checkbox:any = div.querySelector('[type=checkbox]');
        expect(checkbox).not.toBeNull();
    })

    it('test radio',() => {
        ReactDOM.render(<Input type='radio' />, div);
        const checkbox:any = div.querySelector('[type=radio]');
        expect(checkbox).not.toBeNull();
    })

    it('test submit',() => {
        ReactDOM.render(<Input type='submit' />, div);
        const checkbox:any = div.querySelector('button[type=submit]');
        expect(checkbox).not.toBeNull();
    })

    it('test reset',() => {
        ReactDOM.render(<Input type='reset' />, div);
        const checkbox:any = div.querySelector('button[type=reset]');
        expect(checkbox).not.toBeNull();
    })
})