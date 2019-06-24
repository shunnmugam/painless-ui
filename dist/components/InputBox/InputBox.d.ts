import React from 'react';
import './InputBox.css';
interface ValidationOptions {
    event?: string;
    rules: string;
    validationCallback?: Function;
    validateNow?: boolean;
}
interface InputBoxProps {
    className?: string;
    type: string;
    rounded?: boolean;
    validation?: boolean;
    validationOptions?: ValidationOptions;
    [key: string]: any;
}
declare class InputBox extends React.Component<InputBoxProps> {
    static defaultProps: {
        className: string;
        type: string;
        rounded: boolean;
        validation: boolean;
    };
    state: {
        isValid: boolean;
    };
    inputElement: any;
    onValidationHandler(v: any, e?: any): void;
    makeClassName(): string;
    componentDidUpdate(prevProps: any): void;
    render(): JSX.Element;
    componentDidMount(): void;
}
export default InputBox;
