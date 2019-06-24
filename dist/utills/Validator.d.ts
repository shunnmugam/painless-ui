export default class Validater {
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
    validate(): boolean;
    getMessage(): object;
}
