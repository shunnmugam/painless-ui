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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./TabGroup.css");
var Tab_1 = __importDefault(require("../Tab/Tab"));
var TabGroup = /** @class */ (function (_super) {
    __extends(TabGroup, _super);
    function TabGroup(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            activeIndex: 0,
            visibleStatus: false,
            prevLiIndex: -1,
            lastLiIndex: 0,
            isScrollable: false,
            visibleWidth: '1000',
            isNext: false,
            ul: {
                width: '100%',
                left: 0
            },
            activeBar: {
                width: 0,
                left: 0
            }
        };
        _this.calculateDimonsions = function () {
            var tabContainer = _this.containerRef.current.querySelector('.ui-tabs');
            var visibleWidth = tabContainer.getBoundingClientRect().width;
            var isScrollable = false;
            var isNext = false;
            if (visibleWidth < _this.state.ul.width) {
                isScrollable = true;
                isNext = true;
            }
            _this.setState({
                visibleWidth: visibleWidth,
                isScrollable: isScrollable,
                isNext: isNext
            }, function () {
                _this.setNext();
                _this.setPrev();
                _this.setActiveTab(_this.state.activeIndex);
            });
        };
        _this.setPrev = function () {
            var ul = _this.containerRef.current.querySelector('.nav.nav-tabs');
            var left = _this.state.ul.left;
            var totalWidth = 0;
            var i = 0;
            var prevLiIndex = 0;
            for (var _i = 0, _a = ul.children; _i < _a.length; _i++) {
                var li = _a[_i];
                if (totalWidth < (-left)) {
                    prevLiIndex = i;
                }
                totalWidth += li.getBoundingClientRect().width;
                i++;
            }
            _this.setState({
                prevLiIndex: prevLiIndex
            });
        };
        _this.setNext = function () {
            var tabContainer = _this.containerRef.current.querySelector('.ui-tabs');
            var visibleWidth = tabContainer.getBoundingClientRect().width;
            var ul = _this.containerRef.current.querySelector('.nav.nav-tabs');
            var left = _this.state.ul.left;
            var totalWidth = 0;
            var isLastClass = false;
            var i = 0;
            for (var _i = 0, _a = ul.children; _i < _a.length; _i++) {
                var li = _a[_i];
                totalWidth += li.getBoundingClientRect().width;
                if (!isLastClass && totalWidth > (visibleWidth - left)) {
                    isLastClass = true;
                    //check its last
                    if (ul.children.length - 1 === i && i === _this.state.lastLiIndex - 1) {
                        i = i + 1;
                    }
                    _this.setState({
                        lastLiIndex: i
                    });
                }
                i++;
            }
            var isNext = true;
            if (Math.round(-left) === parseInt(_this.state.ul.width) - visibleWidth) {
                isNext = false;
            }
            _this.setState({
                isNext: isNext
            });
        };
        _this.moveRight = function () {
            if (_this.state.visibleWidth < _this.state.ul.width) {
                var ul = _this.containerRef.current.querySelector('.nav.nav-tabs');
                var totalWidth = 0;
                for (var _i = 0, _a = ul.children; _i < _a.length; _i++) {
                    var li = _a[_i];
                    totalWidth += li.getBoundingClientRect().width;
                    if (li.classList.contains('last')) {
                        break;
                    }
                }
                _this.setState({
                    ul: {
                        width: _this.state.ul.width,
                        left: parseInt(_this.state.visibleWidth) - totalWidth
                    }
                }, function () {
                    _this.setNext();
                    _this.setPrev();
                    _this.setActiveTab(_this.state.activeIndex);
                });
            }
        };
        _this.moveLeft = function () {
            if (_this.state.visibleWidth < _this.state.ul.width) {
                var ul = _this.containerRef.current.querySelector('.nav.nav-tabs');
                var prevLi = ul.querySelector('li.prev');
                var totalWidth = 0;
                if (prevLi !== null) {
                    for (var _i = 0, _a = ul.children; _i < _a.length; _i++) {
                        var li = _a[_i];
                        if (li.classList.contains('prev')) {
                            break;
                        }
                        totalWidth += li.getBoundingClientRect().width;
                    }
                    _this.setState({
                        ul: {
                            width: _this.state.ul.width,
                            left: -totalWidth
                        }
                    }, function () {
                        _this.setNext();
                        _this.setPrev();
                        _this.setActiveTab(_this.state.activeIndex);
                    });
                }
            }
        };
        _this.setActiveTab = function (index) {
            _this.setState({
                activeIndex: index
            });
            var ul = _this.containerRef.current.querySelector('.nav.nav-tabs');
            var width = 0;
            var left = 0;
            var i = 0;
            for (var _i = 0, _a = ul.children; _i < _a.length; _i++) {
                var li = _a[_i];
                if (i === index) {
                    width = li.getBoundingClientRect().width;
                    break;
                }
                left += li.getBoundingClientRect().width;
                i++;
            }
            if (_this.state.isScrollable === true) {
                left -= (-_this.state.ul.left);
            }
            _this.setState({
                activeBar: {
                    left: left,
                    width: width
                }
            });
            if (_this.props.onClick && typeof _this.props.onClick === 'function') {
                _this.props.onClick(index);
            }
        };
        react_1.default.Children.forEach(_this.props.children, function (child) {
            if (child === null || child.type !== Tab_1.default) {
                throw new Error('`Tabgroup` children should be of type `Tab`.');
            }
        });
        _this.containerRef = react_1.default.createRef();
        return _this;
    }
    TabGroup.prototype.componentDidMount = function () {
        var _this = this;
        var totalWidth = 0;
        var ul = this.containerRef.current.querySelector('.nav.nav-tabs');
        for (var _i = 0, _a = ul.children; _i < _a.length; _i++) {
            var li = _a[_i];
            totalWidth += li.getBoundingClientRect().width;
        }
        this.setState({
            ul: {
                width: totalWidth,
                left: this.state.ul.left,
            }
        }, function () {
            _this.calculateDimonsions();
            setTimeout(function () {
                _this.setState({
                    visibleStatus: true
                });
            }, 1000);
        });
        this.setActiveTab(this.state.activeIndex);
        window.addEventListener('resize', this.calculateDimonsions);
    };
    TabGroup.prototype.componentDidUpdate = function (oldProps) {
        var _this = this;
        if (this.props.children !== oldProps.children) {
            var totalWidth = 0;
            var ul = this.containerRef.current.querySelector('.nav.nav-tabs');
            for (var _i = 0, _a = ul.children; _i < _a.length; _i++) {
                var li = _a[_i];
                totalWidth += li.getBoundingClientRect().width;
            }
            this.setState({
                ul: {
                    width: totalWidth,
                    left: this.state.ul.left,
                }
            }, function () {
                _this.calculateDimonsions();
                setTimeout(function () {
                    _this.setState({
                        visibleStatus: true
                    });
                }, 1000);
            });
            // this.setActiveTab(0);
        }
    };
    TabGroup.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement("div", { style: __assign({ width: this.props.width || '100%' }, this.props.style || {}), className: "ui-tabgroup " + (this.state.visibleStatus === false ? 'v-hidden' : 'show'), ref: this.containerRef },
            react_1.default.createElement("div", { className: "ui-tabs ui-tabs-bg ui-tabs-scroll", style: {
                    backgroundColor: this.props.bgColor || '#4285f4'
                } },
                react_1.default.createElement("div", { onClick: this.moveLeft, className: "ui-tabs-scroll-left", style: { display: (this.state.isScrollable && this.state.ul.left !== 0) ? 'block' : 'none' } },
                    react_1.default.createElement("i", { className: "material-icons ui-sm" }, "chevron_left")),
                react_1.default.createElement("div", { className: 'ui-tabs-scroll-container' },
                    react_1.default.createElement("div", { className: "ui-tab-active-bar", style: __assign({}, this.state.activeBar, { backgroundColor: this.props.activeColor || '#ffc107' }) }),
                    react_1.default.createElement("ul", { className: "nav nav-tabs", role: "tablist", style: this.state.ul }, react_1.default.Children.map(this.props.children, function (tab, i) {
                        return (react_1.default.createElement("li", { role: "tab", onClick: function () { return _this.setActiveTab(i); }, className: (_this.state.activeIndex === i ? ' active ' : '') +
                                (_this.state.lastLiIndex === i ? 'last' : (_this.state.prevLiIndex === i ? 'prev' : '')) },
                            react_1.default.createElement("a", { style: {
                                    color: _this.props.color || 'white'
                                }, onClick: function (e) { return e.preventDefault(); }, href: "#", className: _this.state.activeIndex === i ? 'active' : '' }, tab)));
                    }))),
                react_1.default.createElement("div", { onClick: this.moveRight, className: "ui-tabs-scroll-right", style: { display: (this.state.isScrollable && this.state.isNext ? 'block' : 'none') } },
                    react_1.default.createElement("i", { className: "material-icons ui-sm" }, "chevron_right")))));
    };
    return TabGroup;
}(react_1.default.Component));
exports.default = TabGroup;
