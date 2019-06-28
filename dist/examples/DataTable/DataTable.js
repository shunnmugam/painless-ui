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
var components_1 = require("../../components");
var ThemeProvider_1 = require("../../providers/ThemeProvider");
var DataTableExample = /** @class */ (function (_super) {
    __extends(DataTableExample, _super);
    function DataTableExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            loading: true,
            totalData: 0,
            data: [],
            columns: [
                {
                    name: "id",
                    selector: "id",
                    sortable: true
                },
                {
                    name: "email",
                    selector: "email",
                    sortable: true
                },
                {
                    name: "first_name",
                    selector: "first_name",
                    sortable: true
                },
                {
                    name: "last_name",
                    selector: "last_name",
                    sortable: true
                },
                {
                    name: "avatar",
                    render: function (row, column) {
                        return react_1.default.createElement(react_1.default.Fragment, null);
                    }
                }
            ]
        };
        return _this;
    }
    DataTableExample.prototype.getDatasFromApi = function (page, limit) {
        var _this = this;
        this.setState({
            loading: true
        });
        fetch("https://reqres.in/api/users?page=" + page + "&per_page=" + limit)
            .then(function (res) { return res.json(); })
            .then(function (res) {
            _this.setState({
                data: res.data,
                loading: false,
                totalData: res.total
            });
        });
    };
    DataTableExample.prototype.componentWillMount = function () {
        console.log(this.props['theme']);
        this.getDatasFromApi(1, 5);
    };
    DataTableExample.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(components_1.Table, { loading: this.state.loading, serverSide: true, paginationOptions: {
                paginagtion: true,
                totalNoOfData: this.state.totalData,
                limit: 5,
                onChange: function (currentPage, data) {
                    _this.getDatasFromApi(currentPage, 5);
                }
            }, searchOptions: {
                searchable: true,
                onSearch: function (k) {
                    console.log(k);
                }
            }, sortOptions: {
                onSort: function (n, order) {
                    console.log(n, order);
                }
            }, data: this.state.data, columns: this.state.columns }));
    };
    return DataTableExample;
}(react_1.default.Component));
exports.default = ThemeProvider_1.withTheme(DataTableExample);
