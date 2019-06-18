interface validationResult {
    isValid: boolean,
    msg?: string
}
export default class Validater {
    /*
     * validation condtion
     */
    private rules: object;
    /*
     * input value
     */
    private value: any;
    /*
     * validation message
     */
    private message: object;
    /*
     * constructor method
     * @params value: any
     * @params rules: object
     */
    constructor(value: any,rules: object) {
        this.value = value;
        this.rules = rules;
        this.message = {};
    }

    private email(value, ruleOptions): validationResult {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const result:validationResult = {
            isValid: true,
            msg: ''
        };
        if(re.test(String(value).toLowerCase()) === false) {
            result.isValid = false;
            result.msg = '${input} is not valid email';
        }
        return result;
    }

    private min(value,ruleOptions): validationResult {
        if(ruleOptions === undefined) {
            throw new Error('minimum is required one parameter');
        }
        const result: validationResult = {
            isValid: true,
            msg: ''
        };
        if(value.length < ruleOptions[0]) {
            result.isValid = false;
            result.msg = '${input} should minimum '+ruleOptions[0]+' charecters';
        }
        return result;
    }

    private max(value,ruleOptions): validationResult {
        if(ruleOptions === undefined) {
            throw new Error('maximum is required one parameter');
        }
        const result:validationResult = {
            isValid: true,
            msg: ''
        };
        if(value.length > ruleOptions[0]) {
            result.isValid = false;
            result.msg = '${input} should minimum '+ruleOptions[0]+' charecters';
        }
        return result;
    }

    private number(value, ruleOptioons): validationResult {
        const re = /^\d+$/;
        const result:validationResult = {
            isValid: true,
            msg: ''
        };
        if(re.test(String(value).toLowerCase()) === false) {
            result.isValid = false;
            result.msg = '${input} is not valid number';
        }
        return result;
    }

    private required(value, ruleOptions): validationResult {
        const result:validationResult = {
            isValid: true,
            msg: ''
        };
        if(value == undefined || value == '') {
            result.isValid = false;
            result.msg = '${input} is required';
        }
        return result;
    }

    private type(value, ruleOptions): validationResult {
        if(ruleOptions[0] === undefined) {
            throw new Error('type is required');
        }
        const result:validationResult = {
            isValid: true,
            msg: ''
        };
        if(typeof value !== ruleOptions[0]) {
            result.isValid = false;
            result.msg = '${input} is wrong type, expected type is '+ruleOptions[0];
        }
        return result;
    }

    public validate(): boolean {
        let isValid = true; 
        for (const key in this.rules) {
            const rules = this.rules[key];
            rules.split('|').forEach(rule => {
               let [ruleName, ruleOptions] = rule.split(':');
               if(ruleOptions !== undefined) {
                    ruleOptions = ruleOptions.split(',');
               }
               if(ruleName !== '') {
                const result: validationResult = this[ruleName](this.value[key],ruleOptions);
                if(result.isValid === false) {
                        if(this.message[key] === undefined)
                            this.message[key] = [];
                        const msg = result.msg ? result.msg.replace('${input}',key) : ''
                        this.message[key].push(msg);
                        isValid = false;
                }
                }
            });
        }
        return isValid;
    }

    public getMessage(): object {
        return this.message;
    }

}