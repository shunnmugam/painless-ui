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

    private email(value, ruleOptioons): validationResult {
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

    private number(value, ruleOptioons): validationResult {
        const re = /[0-9]/;
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

    public validate(): boolean {
        let isValid = true; 
        for (const key in this.rules) {
            const rules = this.rules[key];
            rules.split('|').forEach(rule => {
               let [ruleName, ruleOptions] = rule.split(':');
               if(ruleOptions !== undefined) {
                    ruleOptions = ruleOptions.split(',');
               }
               const result: validationResult = this[ruleName](this.value[key],ruleOptions);
               if(result.isValid === false) {
                    this.message[key] = result.msg;
                    isValid = false;
               }
            });
        }
        return isValid;
    }

    public getMessage(): object {
        return this.message;
    }

}