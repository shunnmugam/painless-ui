import React from 'react';
import './Table.css';
import Input from '../InputBox/InputBox';
import Button from '../Button/Button';
import Select from '../Select/Select';
import Option from '../Option/Option';
const defaultPaginationOptions = {
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
    paginationOptions: defaultPaginationOptions
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
            filterColumnData: {}
        };
        this.rowSpanSkipDetails = {};
        this.colSpanSkipDetails = {};
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
        const filnalData = data.filter((row, i) => {
            const f = [];
            searchColumns.forEach((s) => {
                if (row[s] !== undefined && ('' + row[s]).toLowerCase().includes(this.state.searchKeyword.toLowerCase())) {
                    f.push(row[s]);
                }
            });
            return f.length > 0;
        });
        if (filnalData.length !== 0 && d.length !== filnalData.length) {
            this.setState({
                currentPage: 1
            });
        }
        return filnalData;
    }
    /*
     * sort a table data
     * @params d: Array<any>
     * @return data:Array<any>
     */
    sort(d) {
        if (this.state.sortBy === '') {
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
        if (this.props.serverSide === true) {
            return d;
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
     * filter
     * @params d: Array<any>
     * @return data: Array<any>
     */
    filter(d) {
        if (Object.keys(this.state.filterColumnData).length === 0)
            return d;
        if (this.props.serverSide) {
            return d;
        }
        return d.filter((data) => {
            for (const key in this.state.filterColumnData) {
                let index = key;
                if (this.state.filterColumnData.hasOwnProperty(key)) {
                    const element = this.state.filterColumnData[key];
                    if (this.props.dataType !== 'array') {
                        index = key;
                    }
                    else {
                        index = key;
                    }
                    const columnData = this.props.columns.find((column, i) => {
                        if (this.props.dataType !== 'array') {
                            return column.selector === key;
                        }
                        else {
                            return "" + i === "" + key;
                        }
                    });
                    if (columnData && columnData.filterData && typeof columnData.filterData === "function") {
                        const filterData = columnData.filterData(data[index], element, data);
                        return filterData === true ? true : false;
                    }
                    if (data[index] !== element)
                        return false;
                }
            }
            return true;
        });
    }
    /*
     * pagination
     * @params d:Array<any>
     * @return details:object
     */
    paginate(d) {
        const limit = this.props.paginationOptions !== undefined && this.props.paginationOptions.limit ? this.props.paginationOptions.limit : 10;
        const currentPage = this.state.currentPage;
        const totalNoOfData = this.props.paginationOptions !== undefined && this.props.paginationOptions.totalNoOfData ? this.props.paginationOptions.totalNoOfData : d.length;
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
     * on page change event it will call when pagination button is click
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
     * get rowSpan
     */
    getRowSpan(column, c, r) {
        if (column.rowSpan && column.rowSpan[r + 1]) {
            for (let i = 1; i < column.rowSpan[r + 1]; i++) {
                if (!this.rowSpanSkipDetails[r + i])
                    this.rowSpanSkipDetails[r + i] = [];
                this.rowSpanSkipDetails[r + i].push(c);
            }
            return column.rowSpan[r + 1];
        }
        return 1;
    }
    /*
     * get colSpan
     */
    getColSpan(column, c, r) {
        if (column.colSpan && column.colSpan[r + 1]) {
            for (let i = 1; i < column.colSpan[r + 1]; i++) {
                if (!this.colSpanSkipDetails[r])
                    this.colSpanSkipDetails[r] = [];
                this.colSpanSkipDetails[r].push(c + i);
            }
            return column.colSpan[r + 1];
        }
        return 1;
    }
    /*
     * get derived state from props
     */
    static getDerivedStateFromProps(nextProps, state) {
        if (state.localChange) {
            return {
                localChange: false
            };
        }
        if (nextProps.loading !== state.loading) {
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
        //filter
        data = this.filter(data);
        //sort
        data = this.sort(data);
        //pagination
        let paginationUi = React.createElement(React.Fragment, null);
        if (this.props.paginationOptions !== undefined && this.props.paginationOptions.pagination === true) {
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
                    React.createElement("li", { className: "ui-table-pagination-next", onClick: () => {
                            if (this.state.currentPage > 1) {
                                this.pageChange(1);
                            }
                        } },
                        React.createElement(Button, { disabled: !(this.state.currentPage > 1), styleType: "text", rounded: true }, "|\u2039")),
                    React.createElement("li", { className: "ui-table-pagination-prev", onClick: () => {
                            if (this.state.currentPage > 1) {
                                this.pageChange(this.state.currentPage - 1);
                            }
                        } },
                        React.createElement(Button, { disabled: !(this.state.currentPage > 1), styleType: "text", rounded: true }, "\u2039")),
                    React.createElement("li", { className: "ui-table-pagination-next", onClick: () => {
                            if (this.state.currentPage < totalPage) {
                                this.pageChange(this.state.currentPage + 1);
                            }
                        } },
                        React.createElement(Button, { disabled: !(this.state.currentPage < totalPage), styleType: "text", rounded: true }, "\u203A")),
                    React.createElement("li", { className: "ui-table-pagination-next", onClick: () => {
                            if (this.state.currentPage < totalPage) {
                                this.pageChange(totalPage);
                            }
                        } },
                        React.createElement(Button, { disabled: !(this.state.currentPage < totalPage), styleType: "text", rounded: true }, "\u203A|")))));
        }
        return (React.createElement("div", { className: 'ui-table-container ', style: this.props.containerStyle || {} },
            React.createElement("div", { className: 'ui-table-toolbar-wrapper pull-left ui-w-100' }, (this.props.searchOptions !== undefined && this.props.searchOptions.searchable === true) ?
                React.createElement("div", { className: "ui-table-search-container pull-right" }, this.props.searchOptions.searchComponent !== undefined &&
                    typeof this.props.searchOptions.searchComponent === 'function' ? React.createElement(React.Fragment, null, this.props.searchOptions.searchComponent((v) => {
                    //onchange event
                    this.setState({
                        searchKeyword: v,
                        localChange: true
                    });
                    if (props.searchOptions !== undefined && props.searchOptions.onSearch !== undefined && typeof props.searchOptions.onSearch === 'function') {
                        props.searchOptions.onSearch(v);
                    }
                })) :
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
            React.createElement("div", { className: 'ui-table-wrapper ' + (props.responsive ? 'responsive ' : '') },
                React.createElement("table", { className: 'ui-table ' + (props.className || '') + (props.noBg ? ' no-bg' : '') + (props.border ? ' border' : ''), style: this.props.style || {} },
                    this.props.noHeader === true ? React.createElement(React.Fragment, null) :
                        React.createElement("thead", { className: "ui-table-header" }, React.createElement("tr", null, props.columns.map((column, i) => {
                            let selector = '';
                            const tempFilterData = new Set();
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
                                }, key: 'th-' + i, className: (column.sortable === true ? 'sort-column' : '') + sortClassName },
                                column.name,
                                column.filter ? React.createElement(React.Fragment, null, column.filterRender ? column.filterRender((v) => {
                                    const t = { ...this.state.filterColumnData };
                                    let index = i;
                                    if (this.props.dataType !== 'array' && column.selector)
                                        index = column.selector;
                                    if (v === '' || v === undefined) {
                                        delete t[index];
                                    }
                                    else
                                        t[index] = v;
                                    this.setState({
                                        filterColumnData: t
                                    }, () => {
                                        if (column.onFilter) {
                                            column.onFilter(this.state.filterColumnData, index);
                                        }
                                    });
                                }) : React.createElement(Select, { searchable: true, style: { width: '100%', display: 'block' }, onClick: (e) => e.stopPropagation(), onChange: (e) => {
                                        const t = { ...this.state.filterColumnData };
                                        let index = i;
                                        if (this.props.dataType !== 'array' && column.selector)
                                            index = column.selector;
                                        if (e.value === '' || e.value === undefined) {
                                            delete t[index];
                                        }
                                        else
                                            t[index] = e.value;
                                        this.setState({
                                            filterColumnData: t
                                        }, () => {
                                            if (column.onFilter) {
                                                column.onFilter(this.state.filterColumnData, index);
                                            }
                                        });
                                    } }, this.props.data.map((row, i) => {
                                    if (props.dataType === 'array') {
                                        row.map((d, c) => {
                                            if (!tempFilterData.has(d)) {
                                                tempFilterData.add(d);
                                                return React.createElement(Option, { value: d, key: 'filter-option-' + c + '-' + column.name }, d);
                                            }
                                            return React.createElement(React.Fragment, null);
                                        });
                                    }
                                    else {
                                        if (column.selector) {
                                            const d = row[column.selector];
                                            if (!tempFilterData.has(d)) {
                                                tempFilterData.add(d);
                                                return React.createElement(Option, { value: d, key: 'filter-option-' + i + '-' + column.name }, d);
                                            }
                                            return React.createElement(React.Fragment, null);
                                        }
                                        else
                                            return React.createElement(React.Fragment, null);
                                    }
                                    return React.createElement(React.Fragment, null);
                                    // (column.selector)  ? (
                                    //     console.log(column.selector)
                                    //     const d = row[column.selector];
                                    //     const tempFilterData = new Set();
                                    //     if(!tempFilterData.has(d)) {
                                    //         tempFilterData.add(d);
                                    //         return <option value={d} key={'filter-option-'+c+'-'+column.name}>{d}</option>
                                    //     }
                                    // }) : <></>
                                }))) : React.createElement(React.Fragment, null)));
                        }))),
                    this.state.loading === true ? (React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", { colSpan: this.props.columns.length }, "Loading...")))) :
                        (React.createElement("tbody", { className: "ui-table-body" }, data.length === 0 ? React.createElement("tr", null,
                            React.createElement("td", { colSpan: this.props.columns.length }, "No data found")) :
                            data.map((row, r) => {
                                return (React.createElement("tr", { key: 'tr-' + r }, props.dataType === 'array' ? (row.map((d, c) => {
                                    return React.createElement("td", { key: 'td-' + c + '-' + r }, d);
                                })) : (props.columns.map((column, c) => {
                                    if (this.rowSpanSkipDetails[r] && this.rowSpanSkipDetails[r].indexOf(c) !== -1) {
                                        return React.createElement(React.Fragment, null);
                                    }
                                    else if (this.colSpanSkipDetails[r] && this.colSpanSkipDetails[r].indexOf(c) !== -1) {
                                        return React.createElement(React.Fragment, null);
                                    }
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
                                    return React.createElement("td", { rowSpan: this.getRowSpan(column, c, r), colSpan: this.getColSpan(column, c, r), key: 'td-' + c + '-' + r }, value);
                                }))));
                            }))))),
            this.state.loading === true ? (React.createElement(React.Fragment, null)) : (paginationUi)));
    }
}
export default Table;
