"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var WatchClickOutside = /** @class */ (function (_super) {
    __extends(WatchClickOutside, _super);
    function WatchClickOutside(props) {
        var _this = _super.call(this, props) || this;
        _this.refs = null;
        _this.handleClick = function (event) {
            var container = _this.refs.container; // get container that we'll wait to be clicked outside
            var onClickOutside = _this.props.onClickOutside; // get click outside callback
            var target = event.target; // get direct click event target
            // if there is no proper callback - no point of checking
            if (typeof onClickOutside !== 'function') {
                return;
            }
            // if target is container - container was not clicked outside
            // if container contains clicked target - click was not outside of it
            if (target !== container && !container.contains(target)) {
                onClickOutside(event); // clicked outside - fire callback
            }
        };
        _this.refs = react_1.default.createRef();
        return _this;
    }
    WatchClickOutside.prototype.componentWillMount = function () {
        window.addEventListener('click', this.handleClick);
    };
    WatchClickOutside.prototype.componentWillUnmount = function () {
        // remember to remove all events to avoid memory leaks
        window.removeEventListener('click', this.handleClick);
    };
    WatchClickOutside.prototype.render = function () {
        return (react_1.default.createElement("div", { ref: "container", style: this.props.style || {} }, this.props.children));
    };
    return WatchClickOutside;
}(react_1.Component));
exports.default = WatchClickOutside;
