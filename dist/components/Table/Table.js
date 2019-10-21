import React from 'react';
import './Table.scss';
import { Input } from '..';
import Button from '../Button/Button';
const defaultPAginationOptions = {
    currentPage: 1,
    limit: 10
};
const defaultProps = {
    className: '',
    data: [],
    dataType: 'object',
    columns: [],
    loading: false,
    serverSide: false,
    responsive: false,
    paginationOptions: defaultPAginationOptions
};
class Table extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            currentPage: 1,
            sortBy: '',
            loading: this.props.loading,
            order: 'asc',
            searchKeyword: '',
        };
    }
    setSortController(sortBy) {
        let order = 'asc';
        if (this.state.sortBy === sortBy && this.state.order === 'asc') {
            order = 'desc';
        }
        ;
        this.setState({
            sortBy,
            order,
            localChange: true
        });
        if (this.props.sortOptions !== undefined && this.props.sortOptions.onSort !== undefined && typeof this.props.sortOptions.onSort === 'function') {
            this.props.sortOptions.onSort(sortBy, order);
        }
    }
    /*
     * search table data
     * @params d: Array<any>
     * @return data:Array<any>
     */
    search(d) {
        if (this.state.searchKeyword === '' || this.props.serverSide === true) {
            return d;
        }
        const data = [...d];
        const searchColumns = [];
        this.props.columns.forEach((c, i) => {
            let index = i;
            if (this.props.dataType !== 'array') {
                index = c.selector;
            }
            if (c.selector !== undefined && c.searchable !== false)
                searchColumns.push(index);
        });
        return data.filter((row, i) => {
            const f = [];
            searchColumns.map((s) => {
                if (row[s] !== undefined && ('' + row[s]).toLowerCase().includes(this.state.searchKeyword.toLowerCase())) {
                    f.push(row[s]);
                }
            });
            return f.length > 0;
        });
    }
    /*
     * sort a table data
     * @params d: Array<any>
     * @return data:Array<any>
     */
    sort(d) {
        if (this.state.sortBy === '' || this.props.serverSide === true) {
            return d;
        }
        const data = [...d];
        const { sortBy, order } = this.state;
        const sortByColumn = this.props.columns.find((column, i) => {
            if (this.props.dataType === 'array') {
                return i === parseInt(sortBy);
            }
            return column.selector === sortBy;
        });
        if (sortByColumn !== undefined && sortByColumn.onSort !== undefined && typeof sortByColumn.onSort === 'function') {
            const sortedDataFromView = sortByColumn.onSort(data, order, sortBy);
            if (sortedDataFromView !== undefined) {
                return sortedDataFromView;
            }
        }
        data.sort((d1, d2) => {
            if (d1[sortBy] < d2[sortBy]) {
                return order === 'asc' ? -1 : 1;
            }
            if (d1[sortBy] > d2[sortBy]) {
                return order === 'asc' ? 1 : -1;
            }
            return 0;
        });
        return data;
    }
    /*
     * pagination
     * @params d:Array<any>
     * @return details:object
     */
    paginate(d) {
        const limit = this.props.paginationOptions !== undefined && this.props.paginationOptions.limit || 10;
        const currentPage = this.state.currentPage;
        const totalNoOfData = this.props.paginationOptions !== undefined && this.props.paginationOptions.totalNoOfData || d.length;
        const totalPage = Math.ceil(totalNoOfData / limit);
        let data = d;
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
            data,
            totalPage,
            totalNoOfData,
            limit
        };
    }
    /*
     * on page change event it will call when pagenation button is click
     */
    pageChange(page) {
        if (this.props.paginationOptions && this.props.paginationOptions.onChange
            && typeof this.props.paginationOptions.onChange === 'function') {
            this.props.paginationOptions.onChange(page, this.props.data);
        }
        this.setState({
            currentPage: page,
            loading: this.props.serverSide === true,
            localChange: true
        });
    }
    /*
     * get erived state from props
     */
    static getDerivedStateFromProps(nextProps, state) {
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
    }
    render() {
        const props = { ...defaultProps, ...this.props };
        let data = this.props.data;
        //search
        if (this.props.searchOptions !== undefined && this.props.searchOptions.searchable === true) {
            data = this.search(this.props.data);
        }
        //sort
        data = this.sort(data);
        //pagination
        let paginationUi = React.createElement(React.Fragment, null);
        if (this.props.paginationOptions !== undefined && this.props.paginationOptions.paginagtion === true) {
            const paginationResult = this.paginate(data);
            let totalPage = 1;
            data = paginationResult.data;
            totalPage = paginationResult.totalPage;
            const totalNoOfData = paginationResult.totalNoOfData;
            const limit = paginationResult.limit;
            const from = ((this.state.currentPage - 1) * limit) + 1;
            const to = (from + limit) - 1;
            paginationUi = (React.createElement("div", { className: "ui-table-pagination-control" },
                React.createElement("span", null,
                    from,
                    " to ",
                    to > totalNoOfData ? totalNoOfData : to,
                    " of ",
                    totalNoOfData),
                React.createElement("ul", { className: "pull-right" },
                    React.createElement("li", { className: "ui-table-pagination-prev" },
                        React.createElement(Button, { rounded: true, onClick: () => {
                                if (this.state.currentPage > 1) {
                                    this.pageChange(this.state.currentPage - 1);
                                }
                            } }, "\u2039")),
                    React.createElement("li", { className: "ui-table-pagination-next", onClick: () => {
                            if (this.state.currentPage < totalPage) {
                                this.pageChange(this.state.currentPage + 1);
                            }
                        } },
                        React.createElement(Button, { rounded: true }, "\u203A")))));
        }
        return (React.createElement("div", { className: 'ui-table-container ', style: this.props.containerStyle || {} },
            React.createElement("div", { className: 'ui-table-toolbar-wrapper pull-left ui-w-100' }, (this.props.searchOptions !== undefined && this.props.searchOptions.searchable === true) ?
                React.createElement("div", { className: "ui-table-search-container pull-right" },
                    React.createElement(Input, { type: "text", placeholder: "Type something...", style: {
                            width: "150px"
                        }, value: this.state.searchKeyword, onChange: (e) => {
                            this.setState({
                                searchKeyword: e.target.value,
                                localChange: true
                            });
                            if (props.searchOptions !== undefined && props.searchOptions.onSearch !== undefined && typeof props.searchOptions.onSearch === 'function') {
                                props.searchOptions.onSearch(e.target.value);
                            }
                        } })) : React.createElement(React.Fragment, null)),
            React.createElement("div", { className: 'ui-table-wrapper' + (props.responsive ? 'responsive ' : '') },
                React.createElement("table", { className: 'ui-table ' + (props.className || ''), style: this.props.style || {} },
                    React.createElement("thead", { className: "ui-table-header" }, React.createElement("tr", null, props.columns.map((column, i) => {
                        let selector = '';
                        if (props.dataType === 'array' || column.selector === undefined) {
                            selector = i;
                        }
                        else {
                            selector = column.selector;
                        }
                        const sortClassName = selector === this.state.sortBy ? (' sorting ' + this.state.order) : '';
                        return (React.createElement("th", { onClick: () => {
                                if (column.sortable === true)
                                    this.setSortController(selector);
                            }, key: 'th-' + i, className: (column.sortable === true ? 'sort-column' : '') + sortClassName }, column.name));
                    }))),
                    this.state.loading === true ? (React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", { colSpan: this.props.columns.length }, "Loading...")))) :
                        (React.createElement("tbody", { className: "ui-table-body" }, data.map((row, r) => {
                            return (React.createElement("tr", { key: 'tr-' + r }, props.dataType === 'array' ? (row.map((d, c) => {
                                return React.createElement("td", { key: 'td-' + c + '-' + r }, d);
                            })) : (props.columns.map((column, c) => {
                                let value = '';
                                if (column.render && typeof column.render === 'function') {
                                    value = column.render(row, column, r);
                                }
                                else if (column.selector) {
                                    value = row[column.selector];
                                }
                                else {
                                    throw new Error('column should have selector property or render function');
                                }
                                return React.createElement("td", { key: 'td-' + c + '-' + r }, value);
                            }))));
                        }))))),
            this.state.loading === true ? (React.createElement(React.Fragment, null)) : (paginationUi)));
    }
}
export default Table;
