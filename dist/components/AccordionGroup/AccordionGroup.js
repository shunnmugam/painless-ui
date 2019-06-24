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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Accordion_1 = __importDefault(require("../Accordion/Accordion"));
var AccordionGroup = /** @class */ (function (_super) {
    __extends(AccordionGroup, _super);
    function AccordionGroup(props) {
        var _this = _super.call(this, props) || this;
        _this.collapseChange = function (i, isOpen, onToggle) {
            if (isOpen) {
                _this.setState({
                    activeIndex: i
                });
            }
            if (onToggle !== undefined) {
                onToggle(isOpen);
            }
            if (_this.props.onToggle !== undefined && typeof _this.props.onToggle === 'function') {
                _this.props.onToggle(isOpen, i);
            }
        };
        _this.state = {
            activeIndex: -1
        };
        return _this;
    }
    AccordionGroup.prototype.componentWillMount = function () {
        this.validChild();
    };
    AccordionGroup.prototype.validChild = function () {
        var _this = this;
        var i = 0;
        react_1.default.Children.forEach(this.props.children, function (child) {
            if (child === null || child.type !== Accordion_1.default) {
                throw new Error('`Tabgroup` children should be of type `Tab`.');
            }
            else {
                if (child.props.open === true) {
                    _this.setState({
                        activeIndex: i
                    });
                }
            }
            i++;
        });
    };
    AccordionGroup.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement("div", { className: "ui-accordion-group" }, this.props.collapsible && this.props.children ? (react_1.default.Children.map(this.props.children, function (accordion, i) {
            var isOpen = (_this.state.activeIndex == i);
            var onToggle = function (open) {
                //if(open) {
                _this.collapseChange(i, open, accordion.props.onToggle);
                //}
            };
            return react_1.default.cloneElement(accordion, { open: isOpen, onToggle: onToggle });
        })) : this.props.children));
    };
    return AccordionGroup;
}(react_1.default.Component));
exports.default = AccordionGroup;
