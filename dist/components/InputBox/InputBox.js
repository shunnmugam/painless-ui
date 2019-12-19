import React from 'react';
import Validator from '../../utills/Validator';
import { withTheme } from '../../providers/ThemeProvider';
import './InputBox.css';
import Button from '../Button/Button';
import TextArea from '../TextArea/TextArea';
const noValidateField = ['submit', 'reset', 'button', 'file'];
class InputBox extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            isValid: true,
            isFocus: false
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
            const validatorObj = new Validator({
                input: v
            }, {
                'input': rules
            });
            const isValid = validatorObj.validate();
            if (this.state.isValid !== isValid) {
                this.setState({
                    isValid: isValid
                });
            }
            const message = validatorObj.getMessage();
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
        className += this.state.isValid ? ' valid ' : ' not-valid ';
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
        const { type, className, validation, validationOptions, rounded, style, theme, colors, floatingLabel, ...customProps } = this.props;
        const customClassName = this.makeClassName();
        const validationEventName = (validationOptions && validationOptions.event) ? validationOptions.event : "onBlur";
        const validationEvent = {
            [validationEventName]: (e) => this.onValidationHandler(e.target.value, e)
        };
        let defaultClassName = "";
        if (className) {
            defaultClassName = className;
        }
        if (theme && theme.className) {
            defaultClassName += " " + theme.className;
        }
        let customStyle = {};
        if (theme && theme.style && theme.style.input) {
            customStyle = theme.style.input;
        }
        if (style) {
            customStyle = { ...customStyle, ...style };
        }
        if (type === 'file') {
            return (React.createElement("label", { className: "file-input-container" },
                React.createElement("input", Object.assign({ className: 'ui-input file ' + defaultClassName, type: "file", "aria-label": "File browser", style: customStyle }, customProps)),
                React.createElement("span", { className: "file-custom" })));
        }
        else if (type === 'submit') {
            return React.createElement(Button, Object.assign({ type: 'submit', text: "Submit" }, customProps, { className: defaultClassName, rounded: rounded }));
        }
        else if (type === 'reset') {
            return React.createElement(Button, Object.assign({ type: 'reset', text: "Reset" }, customProps, { className: defaultClassName, rounded: rounded }));
        }
        else if (type === 'button') {
            return React.createElement(Button, Object.assign({ type: 'button', text: "Click" }, customProps, { className: defaultClassName, rounded: rounded }));
        }
        else if (type === 'textarea') {
            return React.createElement(TextArea, Object.assign({}, this.props), this.props.children);
        }
        if (floatingLabel === true) {
            const { placeholder, onFocus, onBlur, ...customFocusProps } = customProps;
            return React.createElement(React.Fragment, null,
                React.createElement("div", { className: "float-container ui-input " + (this.state.isFocus ? ' active' : '') },
                    React.createElement("input", Object.assign({ ref: input => this.inputElement = input, type: type }, validationEvent, { className: 'ui-input-field ' + type + ' ' + customClassName + defaultClassName +
                            (rounded ? ' rounded' : '') + ' floating-label-field ' }, customFocusProps, { onFocus: (e) => {
                            this.setState({
                                isFocus: true
                            });
                            if (onFocus) {
                                onFocus(e);
                            }
                        }, onBlur: (e) => {
                            if (!e.target.value) {
                                this.setState({
                                    isFocus: false
                                });
                            }
                            if (onBlur) {
                                onBlur(e);
                            }
                        } })),
                    React.createElement("label", { htmlFor: "field-1", className: "floating-label" }, placeholder)));
        }
        return React.createElement("input", Object.assign({ ref: input => this.inputElement = input, type: type }, validationEvent, { className: 'ui-input ' + type + ' ' + customClassName + defaultClassName + (rounded ? ' rounded' : '') }, customProps, { style: customStyle }));
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
export default withTheme(InputBox, "Input");
