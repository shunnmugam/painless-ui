"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var defaultThme_1 = __importDefault(require("./defaultThme"));
exports.ThemeContext = React.createContext("painless-ui-theme");
exports.withTheme = function (Component, componentName) {
    if (componentName === void 0) { componentName = undefined; }
    return function WrapperComponent(props) {
        return (React.createElement(exports.ThemeContext.Consumer, null, function (state) { return React.createElement(Component, __assign({}, props, { theme: componentName !== undefined ? state.components[componentName] : state })); }));
    };
};
var ThemeProvider = function (props) {
    var value = props.value ? props.value : defaultThme_1.default;
    return (React.createElement(exports.ThemeContext.Provider, { value: value }, props.children));
};
exports.default = ThemeProvider;
