import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Input from './Input';
import ReactDOM from 'react-dom';
describe('test input behaviour', () => {
    it('should render', () => {
        let shallowRenderer = ShallowRenderer;
        const renderer = new shallowRenderer();
        expect(() => renderer.render(<Input type='checkbox'/>)).not.toThrowError();
    });
});
describe('test input type', () => {
    var div = document.createElement('div');
    document.body.appendChild(div);
    it('test checkbox', () => {
        ReactDOM.render(<Input type='checkbox'/>, div);
        const checkbox = div.querySelector('[type=checkbox]');
        expect(checkbox).not.toBeNull();
    });
    it('test radio', () => {
        ReactDOM.render(<Input type='radio'/>, div);
        const checkbox = div.querySelector('[type=radio]');
        expect(checkbox).not.toBeNull();
    });
    it('test submit', () => {
        ReactDOM.render(<Input type='submit'/>, div);
        const checkbox = div.querySelector('button[type=submit]');
        expect(checkbox).not.toBeNull();
    });
    it('test reset', () => {
        ReactDOM.render(<Input type='reset'/>, div);
        const checkbox = div.querySelector('button[type=reset]');
        expect(checkbox).not.toBeNull();
    });
});
