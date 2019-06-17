import React from 'react';
import Validater from '../../utills/Validator';

interface InputBoxProps {
    className?: string,
    type: string,
    validation?: boolean,
    validationOptions?: object,
    [key:string]: any
}
class InputBox extends React.Component<InputBoxProps> {
    static defaultProps = {
        className: '',
        type: 'text',
        validation: true
    }

    state = {
       isValid : true,
    }

    onBlurHandler(e) {
        if(this.props.validation === true) {
            let rules = {};
            //validation based on type
            switch(this.props.type) {
                case 'email':
                    rules = {
                        'input' : 'email'
                    };
                    break;
                case 'number':
                    rules = {
                        'input' : 'number'
                    };
                    break;
            }
            const validaterObj = new Validater({
                input : e.target.value
            },rules);
            const isValid:boolean = validaterObj.validate();
            this.setState({
                isValid : isValid
            })
        }
    }
    
    makeClassName(): string {
        let className = '';
        className+=this.state.isValid ? ' valid ' : ' not-valid';
        return className;
    }

    /*
     * render
     */       
    render(): JSX.Element {
        const { type, className, validation, ...customProps} = this.props;
        const customClassName = this.makeClassName();
        return <input type={type} onBlur={(e) => this.onBlurHandler(e) } className={'ui-input '+ customClassName + className}  {...customProps} />
    }
}

export default InputBox;