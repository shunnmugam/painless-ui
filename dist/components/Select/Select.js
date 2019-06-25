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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./Select.scss");
var Option_1 = __importDefault(require("../Option/Option"));
var WatchClickOutside_1 = __importDefault(require("../WatchClickOutside/WatchClickOutside"));
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /*
         * state
         */
        _this.state = {
            isOpen: false,
            menuStyle: {},
            menuClassName: 'closed',
            selectedDetails: [],
            searchKeyword: '',
            placeholder: _this.props.placeholder
        };
        /*
         * dropdown referance
         */
        _this.dropDownMenuRef = react_1.default.createRef();
        /*
         * height of menu
         */
        _this.heightOfMenu = 0;
        /*
         * event remember
         */
        _this.eventScheduler = {};
        /*
         * search timer
         */
        _this.searchTimer = null;
        /*
         * search keyword
         */
        _this.searchKeyword = '';
        /*
         * toggle event for open/close
         * @params -
         * @return void
         */
        _this.toggle = function (status) {
            if (status === void 0) { status = undefined; }
            if (status === undefined || _this.state.isOpen !== status) {
                var isOpen_1 = status !== undefined ? !status : _this.state.isOpen;
                var menuStyle = __assign({}, _this.state.menuStyle);
                if (isOpen_1 === false) { //open
                    menuStyle.display = 'block';
                    menuStyle.maxHeight = _this.heightOfMenu;
                    menuStyle.visibility = 'visible';
                    if (_this.props.onOpen !== undefined && typeof _this.props.onOpen === 'function') {
                        _this.props.onOpen();
                    }
                }
                else { //close
                    menuStyle.maxHeight = 0;
                    menuStyle.visibility = 'visible';
                    if (_this.props.onClose !== undefined && typeof _this.props.onClose === 'function') {
                        _this.props.onClose();
                    }
                }
                _this.setState({
                    menuClassName: 'toggle',
                    menuStyle: menuStyle,
                    isOpen: !isOpen_1
                }, function () {
                    setTimeout(function () {
                        _this.setState({
                            menuClassName: isOpen_1 ? 'closed' : 'open'
                        });
                        if (!isOpen_1) {
                            if (_this.eventScheduler.onOpen !== undefined) {
                                _this.eventScheduler.onOpen();
                                _this.eventScheduler.onOpen = undefined;
                            }
                        }
                        else {
                            if (_this.eventScheduler.onClose !== undefined) {
                                _this.eventScheduler.onClose();
                                _this.eventScheduler.onClose = undefined;
                            }
                        }
                    }, 500);
                });
            }
        };
        /*
         * option onclick event
         * @params value:any
         * @params child:React.Children
         * @params text:any
         * @return void
         */
        _this.onClick = function (value, child, text) {
            if (text === void 0) { text = undefined; }
            if (_this.props.multiple === true) {
                var isRemoved_1 = _this.unSelect(value);
                setTimeout(function () {
                    var selectedDetails = _this.state.selectedDetails.slice();
                    if (isRemoved_1 === false) {
                        selectedDetails.push({
                            value: value,
                            child: child,
                            text: text
                        });
                        _this.setState({
                            selectedDetails: selectedDetails
                        });
                    }
                    if (_this.props.onChange !== undefined && typeof _this.props.onChange === 'function') {
                        _this.props.onChange(selectedDetails);
                    }
                }, 0);
            }
            else {
                var selectedDetails = [{
                        value: value,
                        child: child,
                        text: text
                    }];
                _this.setState({
                    selectedDetails: selectedDetails
                });
                if (_this.props.onChange !== undefined && typeof _this.props.onChange === 'function') {
                    _this.props.onChange(selectedDetails[0]);
                }
                _this.toggle();
            }
        };
        _this.onKeyPressed = function (e) {
            if (e.target.className === 'ui-select-container') {
                _this.searchKeyword += e.key;
                if (_this.searchTimer) {
                    clearTimeout(_this.searchTimer);
                }
                _this.searchTimer = setTimeout(function () {
                    var selected = false;
                    react_1.default.Children.forEach(_this.props.children, function (child, i) {
                        if (child.type === Option_1.default) {
                            var _a = child.props, value = _a.value, children = _a.children, text = _a.text;
                            if (text && text.toLowerCase().includes(_this.searchKeyword) && selected === false) {
                                _this.onClick(value, children, text);
                                selected = true;
                            }
                        }
                    });
                    _this.searchKeyword = '';
                }, 500);
            }
        };
        _this.onMouseEnter = function () {
            if (_this.props.hover && _this.state.isOpen === false) {
                _this.toggle();
            }
        };
        _this.onMouseLeave = function () {
            if (_this.props.hover && _this.state.isOpen === true) {
                _this.toggle();
            }
        };
        /*
         * find value from selected array
         * @params value:string
         */
        _this.findValue = function (value) {
            return _this.state.selectedDetails.find(function (s) {
                return s.value === value;
            });
        };
        /*
         * un select (remove from select)
         * @params value:any
         * @return isRemoved: boolean
         */
        _this.unSelect = function (value) {
            var i = _this.state.selectedDetails.findIndex(function (s) {
                return s.value === value;
            });
            if (i !== -1) {
                var selectedDetails = _this.state.selectedDetails.slice();
                selectedDetails.splice(i, 1);
                _this.setState({
                    selectedDetails: selectedDetails
                });
                return true;
            }
            return false;
        };
        /*
         * set height of select box for animation
         * @params -
         * @return void
         */
        _this.setHeight = function () {
            _this.setState({
                menuStyle: {
                    display: 'block',
                    maxHeight: 'auto',
                    visibility: 'hidden'
                }
            }, function () {
                var height = _this.dropDownMenuRef.current.getBoundingClientRect().height;
                if (height !== 0)
                    _this.heightOfMenu = height;
                _this.setState({
                    menuStyle: {
                        display: 'none',
                        // maxHeight: 0,
                        visibility: 'show'
                    }
                });
            });
        };
        /*
         * search
         * @params e: $event
         * @return void
         */
        _this.search = function (e) {
            e.stopPropagation();
            _this.setState({
                searchKeyword: e.target.value
            });
        };
        /*
         * clear selected items
         * @params e: $event
         * @return void
         */
        _this.clearAll = function (e) {
            e.stopPropagation();
            _this.setState({
                selectedDetails: []
            }, function () {
                if (_this.props.onChange) {
                    _this.props.onChange(_this.props.multiple === true ? _this.state.selectedDetails : {});
                }
            });
        };
        return _this;
    }
    /*
     * component will mount (lifecycle)
     * @params -
     * @return void
     */
    Select.prototype.componentWillMount = function () {
        var _this = this;
        if (this.props.value !== undefined) {
            if (this.props.multiple === true) {
                var childrens = react_1.default.Children.toArray(this.props.children).filter(function (child) {
                    return _this.props.value && -1 !== _this.props.value.indexOf(child.props.value);
                });
                var selectedDetails_1 = [];
                childrens.forEach(function (children) {
                    selectedDetails_1.push({
                        value: children.props.value,
                        text: children.props.text || children.props.value,
                    });
                });
                this.setState({
                    selectedDetails: selectedDetails_1
                });
            }
            else {
                var children = react_1.default.Children.toArray(this.props.children).find(function (child) {
                    return child.props.value === _this.props.value;
                });
                var selectedDetails = [{
                        value: children.props.value,
                        text: children.props.text || children.props.value,
                    }];
                this.setState({
                    selectedDetails: selectedDetails
                });
            }
        }
    };
    /*
     * component did mount (lifecycle)
     * @params -
     * @return void
     */
    Select.prototype.componentDidMount = function () {
        this.setHeight();
    };
    /*
     * component did update (lifecycle)
     * @params preveProps:object
     * @return void
     */
    Select.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        var asyncFunc = function () {
            var timer = null;
            if (_this.state.menuClassName === 'toggle') {
                clearTimeout(timer);
                timer = setTimeout(function () {
                    _this.setHeight();
                }, 500);
            }
            else {
                _this.setHeight();
            }
        };
        if (react_1.default.Children.toArray(this.props.children).length !== react_1.default.Children.toArray(prevProps.children).length) {
            if (this.state.menuClassName !== 'closed') {
                this.eventScheduler = {
                    onClose: asyncFunc
                };
            }
            else {
                asyncFunc();
            }
        }
    };
    /*
     * render
     */
    Select.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(WatchClickOutside_1.default, { style: { display: "initial" }, onClickOutside: function () { return _this.toggle(false); } },
            react_1.default.createElement("div", { onKeyDown: this.onKeyPressed, tabIndex: 0, className: "ui-select-container", style: { maxWidth: this.props.width || '300px' } },
                react_1.default.createElement("label", { className: "ui-select-label" }, this.props.label),
                react_1.default.createElement("div", { onMouseLeave: this.onMouseLeave, onMouseEnter: this.onMouseEnter, className: "dropdown", style: { height: this.props.height || 'auto' } },
                    react_1.default.createElement("div", { onClick: function () { return _this.toggle(); }, className: "select " + (this.state.selectedDetails.length === 0 ? 'empty ' : 'non-empty ')
                            + (this.props.multiple === true ? 'multiple ' : 'single ') },
                        this.state.selectedDetails.length === 0 ? react_1.default.createElement("span", { className: "ui-select-placeholder" }, this.state.placeholder || 'Please select') :
                            (this.props.multiple !== true ?
                                react_1.default.createElement("span", null, this.state.selectedDetails[0].text || this.state.selectedDetails[0].child) :
                                react_1.default.createElement("div", { className: "ui-select-multiple-select-container" }, this.state.selectedDetails.map(function (o, i) {
                                    return react_1.default.createElement("span", { key: 'ui-multi-select-' + i, className: "ui-multi-select-wrapper" },
                                        react_1.default.createElement("span", { className: "ui-multi-select-text" }, o.text || o.child),
                                        react_1.default.createElement("span", { onClick: function (e) {
                                                e.stopPropagation();
                                                _this.unSelect(o.value);
                                            }, className: "close-btn" }, "x"));
                                }))),
                        react_1.default.createElement("i", { className: "fa fa-chevron-left", onClick: this.clearAll }, "x")),
                    react_1.default.createElement("div", { className: "dropdown-menu " + this.state.menuClassName, ref: this.dropDownMenuRef, style: this.state.menuStyle },
                        react_1.default.createElement("div", { className: "ui-select-search" },
                            react_1.default.createElement("input", { onClick: function (e) { return e.stopPropagation(); }, onChange: this.search, type: "text" })),
                        react_1.default.createElement("ul", null, react_1.default.Children.map(this.props.children, function (child, i) {
                            if (child.type === Option_1.default) {
                                var _a = child.props, value_1 = _a.value, children_1 = _a.children, text_1 = _a.text, className = _a.className, customProps = __rest(_a, ["value", "children", "text", "className"]);
                                if (_this.state.searchKeyword === '' || (text_1 && text_1.toLowerCase().includes(_this.state.searchKeyword))) {
                                    return (react_1.default.createElement("li", __assign({ className: (className ? className : '') +
                                            (_this.props.multiple !== true && _this.state.selectedDetails[0] !== undefined && _this.state.selectedDetails[0].value === value_1 ? ' selected' : '')
                                            + (_this.props.multiple === true && _this.findValue(value_1) !== undefined ? ' selected' : ''), onClick: function () { return _this.onClick(value_1, children_1, text_1); } }, customProps), children_1));
                                }
                                else {
                                    return react_1.default.createElement(react_1.default.Fragment, null);
                                }
                            }
                        })))))));
    };
    return Select;
}(react_1.default.PureComponent));
exports.default = Select;
