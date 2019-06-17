"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Validater = /** @class */ (function () {
    /*
     * constructor method
     * @params value: any
     * @params rules: object
     */
    function Validater(value, rules) {
        this.value = value;
        this.rules = rules;
        this.message = {};
    }
    Validater.prototype.min = function (value, ruleOptions) {
        if (ruleOptions === undefined) {
            throw new Error('minimum is required one parameter');
        }
        var result = {
            isValid: true,
            msg: ''
        };
        if (value.length < ruleOptions[0]) {
            result.isValid = false;
            result.msg = '${input} should minimum ' + ruleOptions[0] + ' charecters';
        }
        return result;
    };
    Validater.prototype.max = function (value, ruleOptions) {
        if (ruleOptions === undefined) {
            throw new Error('maximum is required one parameter');
        }
        var result = {
            isValid: true,
            msg: ''
        };
        if (value.length > ruleOptions[0]) {
            result.isValid = false;
            result.msg = '${input} should minimum ' + ruleOptions[0] + ' charecters';
        }
        return result;
    };
    Validater.prototype.email = function (value, ruleOptioons) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var result = {
            isValid: true,
            msg: ''
        };
        if (re.test(String(value).toLowerCase()) === false) {
            result.isValid = false;
            result.msg = '${input} is not valid email';
        }
        return result;
    };
    Validater.prototype.number = function (value, ruleOptioons) {
        var re = /[0-9]/;
        var result = {
            isValid: true,
            msg: ''
        };
        if (re.test(String(value).toLowerCase()) === false) {
            result.isValid = false;
            result.msg = '${input} is not valid number';
        }
        return result;
    };
    Validater.prototype.validate = function () {
        var _this = this;
        var isValid = true;
        var _loop_1 = function (key) {
            var rules = this_1.rules[key];
            rules.split('|').forEach(function (rule) {
                var _a = rule.split(':'), ruleName = _a[0], ruleOptions = _a[1];
                if (ruleOptions !== undefined) {
                    ruleOptions = ruleOptions.split(',');
                }
                var result = _this[ruleName](_this.value[key], ruleOptions);
                if (result.isValid === false) {
                    _this.message[key] = result.msg;
                    isValid = false;
                }
            });
        };
        var this_1 = this;
        for (var key in this.rules) {
            _loop_1(key);
        }
        return isValid;
    };
    Validater.prototype.getMessage = function () {
        return this.message;
    };
    return Validater;
}());
exports.default = Validater;
