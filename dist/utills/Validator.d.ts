export default class Validator {
    private rules;
    private value;
    private message;
    constructor(value: any, rules: object);
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
