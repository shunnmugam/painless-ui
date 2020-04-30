export default class Validator {
    private rules;
    private value;
    private message;
    private customMessages;
    constructor(value: any, rules: object, customMessages?: object);
    private email;
    private min;
    private max;
    private number;
    private required;
    private type;
    private regex;
    validate(): boolean;
    getMessage(): object;
}
