import React from 'react';
import Validater from '../../utills/Validator';
import './InputBox.css';
import Button from '../Button/Button';
const noValidateField = ['submit', 'reset', 'button', 'file'];
class InputBox extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            isValid: true,
        };
        this.inputElement = null;
    }
    onValidationHandler(v, e = undefined) {
        if (this.props.validation === true) {
            let rules = '';
            //validation based on type
            switch (this.props.type) {
                case 'email':
                    rules = 'email';
                    break;
                case 'number':
                    rules = 'number';
                    break;
            }
            if (this.props.validationOptions && this.props.validationOptions.rules) {
                rules += '|' + this.props.validationOptions.rules;
            }
            const validaterObj = new Validater({
                input: v
            }, {
                'input': rules
            });
            const isValid = validaterObj.validate();
            if (this.state.isValid !== isValid) {
                this.setState({
                    isValid: isValid
                });
            }
            const message = validaterObj.getMessage();
            if (this.props.validationOptions && typeof this.props.validationOptions.validationCallback === "function") {
                this.props.validationOptions.validationCallback({
                    isValid,
                    message
                }, e);
            }
        }
    }
    makeClassName() {
        let className = '';
        className += this.state.isValid ? ' valid' : ' not-valid';
        return className;
    }
    componentDidUpdate(prevProps) {
        if (prevProps.validationOptions
            && prevProps.validationOptions.validateNow === false
            && this.props.validationOptions
            && this.props.validationOptions.validateNow === true
            && noValidateField.indexOf(this.props.type) === -1) {
            this.onValidationHandler(this.inputElement.value);
        }
    }
    /*
     * render
     */
    render() {
        const { type, className, validation, validationOptions, rounded, ...customProps } = this.props;
        const customClassName = this.makeClassName();
        const validationEventName = (validationOptions && validationOptions.event) ? validationOptions.event : "onBlur";
        const validationEvent = {
            [validationEventName]: (e) => this.onValidationHandler(e.target.value, e)
        };
        if (type === 'file') {
            return (React.createElement("label", { className: "file-input-container" },
                React.createElement("input", Object.assign({ className: 'ui-input file ' + className, type: "file", "aria-label": "File browser" }, customProps)),
                React.createElement("span", { className: "file-custom" })));
        }
        else if (type === 'submit') {
            return React.createElement(Button, Object.assign({ type: 'submit', text: "Submit" }, customProps, { className: className, rounded: rounded }));
        }
        else if (type === 'reset') {
            return React.createElement(Button, Object.assign({ type: 'reset', text: "Reset" }, customProps, { className: className, rounded: rounded }));
        }
        else if (type === 'button') {
            return React.createElement(Button, Object.assign({ type: 'button', text: "Click" }, customProps, { className: className, rounded: rounded }));
        }
        return React.createElement("input", Object.assign({ ref: input => this.inputElement = input, type: type }, validationEvent, { className: 'ui-input ' + type + ' ' + customClassName + className + (rounded ? ' rounded' : '') }, customProps));
    }
    componentDidMount() {
        if (this.props.validationOptions && this.props.validationOptions.validateNow === true
            && noValidateField.indexOf(this.props.type) === -1) {
            this.onValidationHandler(this.inputElement.value);
        }
    }
}
InputBox.defaultProps = {
    className: '',
    type: 'text',
    rounded: false,
    validation: true
};
export default InputBox;
