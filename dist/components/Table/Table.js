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
require("./Table.scss");
var __1 = require("..");
var Button_1 = __importDefault(require("../Button/Button"));
var defaultPAginationOptions = {
    currentPage: 1,
    limit: 10
};
var defaultProps = {
    className: '',
    data: [],
    dataType: 'object',
    columns: [],
    loading: false,
    serverSide: false,
    responsive: false,
    paginationOptions: defaultPAginationOptions
};
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            currentPage: 1,
            sortBy: '',
            loading: _this.props.loading,
            order: 'asc',
            searchKeyword: '',
        };
        return _this;
    }
    Table.prototype.setSortController = function (sortBy) {
        var order = 'asc';
        if (this.state.sortBy === sortBy && this.state.order === 'asc') {
            order = 'desc';
        }
        ;
        this.setState({
            sortBy: sortBy,
            order: order,
            localChange: true
        });
        if (this.props.sortOptions !== undefined && this.props.sortOptions.onSort !== undefined && typeof this.props.sortOptions.onSort === 'function') {
            this.props.sortOptions.onSort(sortBy, order);
        }
    };
    /*
     * search table data
     * @params d: Array<any>
     * @return data:Array<any>
     */
    Table.prototype.search = function (d) {
        var _this = this;
        if (this.state.searchKeyword === '' || this.props.serverSide === true) {
            return d;
        }
        var data = d.slice();
        var searchColumns = [];
        this.props.columns.forEach(function (c, i) {
            var index = i;
            if (_this.props.dataType !== 'array') {
                index = c.selector;
            }
            if (c.selector !== undefined && c.searchable !== false)
                searchColumns.push(index);
        });
        return data.filter(function (row, i) {
            var f = [];
            searchColumns.map(function (s) {
                if (row[s] !== undefined && ('' + row[s]).toLowerCase().includes(_this.state.searchKeyword.toLowerCase())) {
                    f.push(row[s]);
                }
            });
            return f.length > 0;
        });
    };
    /*
     * sort a table data
     * @params d: Array<any>
     * @return data:Array<any>
     */
    Table.prototype.sort = function (d) {
        var _this = this;
        if (this.state.sortBy === '' || this.props.serverSide === true) {
            return d;
        }
        var data = d.slice();
        var _a = this.state, sortBy = _a.sortBy, order = _a.order;
        var sortByColumn = this.props.columns.find(function (column, i) {
            if (_this.props.dataType === 'array') {
                return i === parseInt(sortBy);
            }
            return column.selector === sortBy;
        });
        if (sortByColumn !== undefined && sortByColumn.onSort !== undefined && typeof sortByColumn.onSort === 'function') {
            var sortedDataFromView = sortByColumn.onSort(data, order, sortBy);
            if (sortedDataFromView !== undefined) {
                return sortedDataFromView;
            }
        }
        data.sort(function (d1, d2) {
            if (d1[sortBy] < d2[sortBy]) {
                return order === 'asc' ? -1 : 1;
            }
            if (d1[sortBy] > d2[sortBy]) {
                return order === 'asc' ? 1 : -1;
            }
            return 0;
        });
        return data;
    };
    /*
     * pagination
     * @params d:Array<any>
     * @return details:object
     */
    Table.prototype.paginate = function (d) {
        var limit = this.props.paginationOptions !== undefined && this.props.paginationOptions.limit || 10;
        var currentPage = this.state.currentPage;
        var totalNoOfData = this.props.paginationOptions !== undefined && this.props.paginationOptions.totalNoOfData || d.length;
        var totalPage = Math.ceil(totalNoOfData / limit);
        var data = d;
        if (this.props.serverSide === false)
            data = d.slice((currentPage - 1) * limit, limit * currentPage);
        if (currentPage > totalPage && this.state.currentPage !== 1) {
            // setTimeout(() => {
            //     this.setState({
            //         currentPage : 1,
            //         oldState: this.state
            //     })
            // },0);
        }
        return {
            data: data,
            totalPage: totalPage,
            totalNoOfData: totalNoOfData,
            limit: limit
        };
    };
    /*
     * on page change event it will call when pagenation button is click
     */
    Table.prototype.pageChange = function (page) {
        if (this.props.paginationOptions && this.props.paginationOptions.onChange
            && typeof this.props.paginationOptions.onChange === 'function') {
            this.props.paginationOptions.onChange(page, this.props.data);
        }
        this.setState({
            currentPage: page,
            loading: this.props.serverSide === true,
            localChange: true
        });
    };
    /*
     * get erived state from props
     */
    Table.getDerivedStateFromProps = function (nextProps, state) {
        if (state.localChange) {
            return {
                localChange: false
            };
        }
        if (nextProps.loading != state.loading) {
            return {
                loading: nextProps.loading
            };
        }
        return null;
    };
    Table.prototype.render = function () {
        var _this = this;
        var props = __assign({}, defaultProps, this.props);
        var data = this.props.data;
        //search
        if (this.props.searchOptions !== undefined && this.props.searchOptions.searchable === true) {
            data = this.search(this.props.data);
        }
        //sort
        data = this.sort(data);
        //pagination
        var paginationUi = react_1.default.createElement(react_1.default.Fragment, null);
        if (this.props.paginationOptions !== undefined && this.props.paginationOptions.paginagtion === true) {
            var paginationResult = this.paginate(data);
            var totalPage_1 = 1;
            data = paginationResult.data;
            totalPage_1 = paginationResult.totalPage;
            var totalNoOfData = paginationResult.totalNoOfData;
            var limit = paginationResult.limit;
            var from = ((this.state.currentPage - 1) * limit) + 1;
            var to = (from + limit) - 1;
            paginationUi = (react_1.default.createElement("div", { className: "ui-table-pagination-control" },
                react_1.default.createElement("span", null,
                    from,
                    " to ",
                    to > totalNoOfData ? totalNoOfData : to,
                    " of ",
                    totalNoOfData),
                react_1.default.createElement("ul", { className: "pull-right" },
                    react_1.default.createElement("li", { className: "ui-table-pagination-prev" },
                        react_1.default.createElement(Button_1.default, { rounded: true, onClick: function () {
                                if (_this.state.currentPage > 1) {
                                    _this.pageChange(_this.state.currentPage - 1);
                                }
                            } }, "\u2039")),
                    react_1.default.createElement("li", { className: "ui-table-pagination-next", onClick: function () {
                            if (_this.state.currentPage < totalPage_1) {
                                _this.pageChange(_this.state.currentPage + 1);
                            }
                        } },
                        react_1.default.createElement(Button_1.default, { rounded: true }, "\u203A")))));
        }
        return (react_1.default.createElement("div", { className: 'ui-table-container ', style: this.props.containerStyle || {} },
            react_1.default.createElement("div", { className: 'ui-table-toolbar-wrapper pull-left ui-w-100' },
                react_1.default.createElement("div", { className: "ui-table-search-container pull-right" },
                    react_1.default.createElement(__1.Input, { type: "text", placeholder: "Type something...", style: {
                            width: "150px"
                        }, value: this.state.searchKeyword, onChange: function (e) {
                            _this.setState({
                                searchKeyword: e.target.value,
                                localChange: true
                            });
                            if (props.searchOptions !== undefined && props.searchOptions.onSearch !== undefined && typeof props.searchOptions.onSearch === 'function') {
                                props.searchOptions.onSearch(e.target.value);
                            }
                        } }))),
            react_1.default.createElement("div", { className: 'ui-table-wrapper' + (props.responsive ? 'responsive ' : '') },
                react_1.default.createElement("table", { className: 'ui-table ' + (props.className || ''), style: this.props.style || {} },
                    react_1.default.createElement("thead", { className: "ui-table-header" }, react_1.default.createElement("tr", null, props.columns.map(function (column, i) {
                        var selector = '';
                        if (props.dataType === 'array' || column.selector === undefined) {
                            selector = i;
                        }
                        else {
                            selector = column.selector;
                        }
                        var sortClassName = selector === _this.state.sortBy ? (' sorting ' + _this.state.order) : '';
                        return (react_1.default.createElement("th", { onClick: function () {
                                if (column.sortable === true)
                                    _this.setSortController(selector);
                            }, key: 'th-' + i, className: (column.sortable === true ? 'sort-column' : '') + sortClassName }, column.name));
                    }))),
                    this.state.loading === true ? (react_1.default.createElement("tbody", null,
                        react_1.default.createElement("tr", null,
                            react_1.default.createElement("td", { colSpan: this.props.columns.length }, "Loading...")))) :
                        (react_1.default.createElement("tbody", { className: "ui-table-body" }, data.map(function (row, r) {
                            return (react_1.default.createElement("tr", { key: 'tr-' + r }, props.dataType === 'array' ? (row.map(function (d, c) {
                                return react_1.default.createElement("td", { key: 'td-' + c + '-' + r }, d);
                            })) : (props.columns.map(function (column, c) {
                                var value = '';
                                if (column.render && typeof column.render === 'function') {
                                    value = column.render(row, column, r);
                                }
                                else if (column.selector) {
                                    value = row[column.selector];
                                }
                                else {
                                    throw new Error('column should have selector property or render function');
                                }
                                return react_1.default.createElement("td", { key: 'td-' + c + '-' + r }, value);
                            }))));
                        }))))),
            this.state.loading === true ? (react_1.default.createElement(react_1.default.Fragment, null)) : (paginationUi)));
    };
    return Table;
}(react_1.default.PureComponent));
exports.default = Table;
