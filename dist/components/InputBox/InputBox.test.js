import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import InputBox from './InputBox';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
describe('test input behaviour', () => {
    it('should render', () => {
        let shallowRenderer = ShallowRenderer;
        const renderer = new shallowRenderer();
        expect(() => renderer.render(React.createElement(InputBox, { type: 'text' }))).not.toThrowError();
    });
});
describe('test input type', () => {
    var div = document.createElement('div');
    document.body.appendChild(div);
    it('test checkbox', () => {
        ReactDOM.render(React.createElement(InputBox, { type: 'checkbox' }), div);
        const checkbox = div.querySelector('[type=checkbox]');
        expect(checkbox).not.toBeNull();
    });
    it('test radio', () => {
        ReactDOM.render(React.createElement(InputBox, { type: 'radio' }), div);
        const checkbox = div.querySelector('[type=radio]');
        expect(checkbox).not.toBeNull();
    });
    it('test submit', () => {
        ReactDOM.render(React.createElement(InputBox, { type: 'submit' }), div);
        const checkbox = div.querySelector('button[type=submit]');
        expect(checkbox).not.toBeNull();
    });
    it('test reset', () => {
        ReactDOM.render(React.createElement(InputBox, { type: 'reset' }), div);
        const checkbox = div.querySelector('button[type=reset]');
        expect(checkbox).not.toBeNull();
    });
});
describe('test validation ', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    let validationResult;
    const validationCallBack = (res, e) => {
        validationResult = res;
    };
    afterEach(() => {
        validationResult = undefined;
    });
    it('check email validation', () => {
        const validationOptions = {
            event: 'onClick',
            rules: 'required|email',
            validationCallback: validationCallBack
        };
        ReactDOM.render(React.createElement(InputBox, { type: 'email', validation: true, validationOptions: validationOptions, value: 'shunramit', onChange: () => { } }), div);
        const inputBox = div.querySelector('input[type=email]');
        ReactTestUtils.Simulate.click(inputBox);
        expect(validationResult).not.toBeUndefined();
        expect(validationResult.isValidate).toBeFalsy();
    });
    it('check min validation', () => {
        const validationOptions = {
            event: 'onClick',
            rules: 'required|min:10',
            validationCallback: validationCallBack
        };
        ReactDOM.render(React.createElement(InputBox, { type: 'text', validation: true, validationOptions: validationOptions, value: '12', onChange: () => { } }), div);
        const inputBox = div.querySelector('input[type=text]');
        ReactTestUtils.Simulate.click(inputBox);
        expect(validationResult).not.toBeUndefined();
        expect(validationResult.isValidate).toBeFalsy();
    });
});
