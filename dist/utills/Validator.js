export default class Validator {
    /*
     * constructor method
     * @params value: any
     * @params rules: object
     */
    constructor(value, rules, customMessages = {}) {
        this.value = value;
        this.rules = rules;
        this.customMessages = customMessages;
        this.message = {};
    }
    email(value, ruleOptions) {
        // eslint-disable-next-line
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const result = {
            isValid: true,
            msg: ''
        };
        if (re.test(String(value).toLowerCase()) === false) {
            result.isValid = false;
            // eslint-disable-next-line
            result.msg = '${input} is not valid email';
        }
        return result;
    }
    min(value, ruleOptions) {
        if (ruleOptions === undefined) {
            throw new Error('minimum is required one parameter');
        }
        const result = {
            isValid: true,
            msg: ''
        };
        if (value.length < ruleOptions[0]) {
            result.isValid = false;
            // eslint-disable-next-line
            result.msg = '${input} should minimum ' + ruleOptions[0] + ' characters';
        }
        return result;
    }
    max(value, ruleOptions) {
        if (ruleOptions === undefined) {
            throw new Error('maximum is required one parameter');
        }
        const result = {
            isValid: true,
            msg: ''
        };
        if (value.length > ruleOptions[0]) {
            result.isValid = false;
            // eslint-disable-next-line
            result.msg = '${input} should minimum ' + ruleOptions[0] + ' characters';
        }
        return result;
    }
    number(value, ruleOptioons) {
        // eslint-disable-next-line
        const re = /^\d+$/;
        const result = {
            isValid: true,
            msg: ''
        };
        if (re.test(String(value).toLowerCase()) === false) {
            result.isValid = false;
            // eslint-disable-next-line
            result.msg = '${input} is not valid number';
        }
        return result;
    }
    required(value, ruleOptions) {
        const result = {
            isValid: true,
            msg: ''
        };
        if (value === undefined || value === '') {
            result.isValid = false;
            // eslint-disable-next-line
            result.msg = '${input} is required';
        }
        return result;
    }
    type(value, ruleOptions) {
        if (ruleOptions[0] === undefined) {
            throw new Error('type is required');
        }
        const result = {
            isValid: true,
            msg: ''
        };
        if (typeof value !== ruleOptions[0]) {
            result.isValid = false;
            // eslint-disable-next-line
            result.msg = '${input} is wrong type, expected type is ' + ruleOptions[0];
        }
        return result;
    }
    regex(value, ruleOptions) {
        if (ruleOptions[0] === undefined) {
            throw new Error('regex statement is required');
        }
        const result = {
            isValid: true,
            msg: ''
        };
        const regex = ruleOptions.join(",");
        console.log(regex, new RegExp(regex).test(value));
        if (new RegExp(regex).test(value) === false) {
            result.isValid = false;
            // eslint-disable-next-line
            result.msg = '${input} is invalid ';
        }
        return result;
    }
    validate() {
        let isValid = true;
        const cb = (rule, key) => {
            let [ruleName, ruleOptions] = rule.split(':');
            if (ruleOptions !== undefined) {
                ruleOptions = ruleOptions.split(',');
            }
            if (ruleName !== '') {
                const result = this[ruleName](this.value[key], ruleOptions);
                if (result.isValid === false) {
                    if (this.message[key] === undefined)
                        this.message[key] = [];
                    // eslint-disable-next-line
                    let msg = result.msg ? result.msg : '';
                    if (this.customMessages[key + '.' + rule]) {
                        msg = this.customMessages[key + '.' + rule];
                    }
                    else if (this.customMessages[key]) {
                        msg = this.customMessages[key];
                    }
                    msg = msg.replace('${input}', key);
                    this.message[key].push(msg);
                    isValid = false;
                }
            }
        };
        for (const key in this.rules) {
            const rules = this.rules[key];
            rules.split('|').forEach((rule) => {
                cb(rule, key);
            });
        }
        return isValid;
    }
    getMessage() {
        return this.message;
    }
}
