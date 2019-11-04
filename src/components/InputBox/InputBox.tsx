import React from 'react';
import Validator from '../../utills/Validator';
import { withTheme } from '../../providers/ThemeProvider';
import { componentTheme, themeColors } from "../../providers/theme";

import './InputBox.css';
import Button from '../Button/Button';

interface ValidationOptions {
    event?:string,
    rules: string,
    validationCallback?: Function,
    validateNow?: boolean
}

interface InputBoxProps {
    className?: string,
    type: string,
    rounded?: boolean
    theme?: componentTheme
    style?:object
    colors?: themeColors 
    validation?: boolean,
    validationOptions?: ValidationOptions,
    [key:string]: any
}

const noValidateField = ['submit','reset','button','file'];

class InputBox extends React.Component<InputBoxProps> {
    static defaultProps = {
        className: '',
        type: 'text',
        rounded: false,
        validation: true
    }

    state = {
       isValid : true,
    }

    inputElement:any = null;

    onValidationHandler(v,e:any = undefined) {
        if(this.props.validation === true) {
            let rules = '';
            //validation based on type
            switch(this.props.type) {
                case 'email':
                    rules =  'email';
                    break;
                case 'number':
                    rules = 'number';
                    break;
            }
            if(this.props.validationOptions && this.props.validationOptions.rules) {
                rules+='|'+this.props.validationOptions.rules;
            }
            const validatorObj = new Validator({
                input : v
            },{
                'input' : rules
            });
            const isValid:boolean = validatorObj.validate();
            if(this.state.isValid !== isValid) {
                this.setState({
                    isValid : isValid
                })
            }
            
            const message = validatorObj.getMessage();

            if(this.props.validationOptions && typeof this.props.validationOptions.validationCallback === "function") {
                this.props.validationOptions.validationCallback(
                    {
                        isValid,
                        message
                    },
                    e
                );
            }
        }

    }
    
    makeClassName(): string {
        let className = '';
        className+=this.state.isValid ? ' valid' : ' not-valid';
        return className;
    }

    componentDidUpdate(prevProps) {
        if(prevProps.validationOptions 
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
    render(): JSX.Element {
        const { type, className, validation, validationOptions, rounded, style, theme, colors, ...customProps} = this.props;
        const customClassName = this.makeClassName();
        const validationEventName:string = (validationOptions && validationOptions.event) ? validationOptions.event : "onBlur";
        const validationEvent:object = {
            [validationEventName] : (e) => this.onValidationHandler(e.target.value,e)
        }
        let defaultClassName = "";
        if(className) {
            defaultClassName = className;
        }
        if(theme && theme.className) {
            defaultClassName+=" " + theme.className;
        }
        let customStyle = {};
        if(theme && theme.style && theme.style.input) {
            customStyle = theme.style.input;
        }
        if(style) {
            customStyle = {...customStyle,...style}
        }

        if(type === 'file') {

            return (
                <label className="file-input-container">
                <input className={'ui-input file ' + defaultClassName} type="file" aria-label="File browser" style={customStyle}  {...customProps} />
                <span className="file-custom"></span>
                </label>
            );
        } else if(type === 'submit') {
            return <Button type='submit' text={"Submit"} {...customProps} className={defaultClassName} rounded={rounded} />
        } else if(type === 'reset') {
            return <Button type='reset' text={"Reset"} {...customProps} className={defaultClassName} rounded={rounded} />
        } else if(type === 'button') {
            return <Button type='button' text={"Click"} {...customProps} className={defaultClassName} rounded={rounded} />
        }
        return <input ref={input => this.inputElement = input} type={type} {...validationEvent}
            className={'ui-input '+ type + ' '+ customClassName + defaultClassName + (rounded ? ' rounded' : '') }  {...customProps} 
            style={customStyle}
        />
    }

    componentDidMount() {
        if(this.props.validationOptions && this.props.validationOptions.validateNow === true 
            && noValidateField.indexOf(this.props.type) === -1 ) {
            this.onValidationHandler(this.inputElement.value);
        }
    }
}

export default withTheme(InputBox,"Input");