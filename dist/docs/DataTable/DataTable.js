import React from 'react';
import { Table } from '../../components';
import { withTheme } from '../../providers/ThemeProvider';
class DataTableExample extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
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
                    render: (row, column) => {
                        return React.createElement(React.Fragment, null);
                    }
                }
            ]
        };
    }
    getDatasFromApi(page, limit) {
        this.setState({
            loading: true
        });
        fetch(`https://reqres.in/api/users?page=${page}&per_page=${limit}`)
            .then(res => res.json())
            .then((res) => {
            this.setState({
                data: res.data,
                loading: false,
                totalData: res.total
            });
        });
    }
    componentWillMount() {
        console.log(this.props['theme']);
        this.getDatasFromApi(1, 5);
    }
    render() {
        return (React.createElement(Table, { loading: this.state.loading, serverSide: true, paginationOptions: {
                paginagtion: true,
                totalNoOfData: this.state.totalData,
                limit: 5,
                onChange: (currentPage, data) => {
                    this.getDatasFromApi(currentPage, 5);
                }
            }, searchOptions: {
                searchable: true,
                onSearch: (k) => {
                    console.log(k);
                }
            }, sortOptions: {
                onSort: (n, order) => {
                    console.log(n, order);
                }
            }, data: this.state.data, columns: this.state.columns }));
    }
}
export default withTheme(DataTableExample);
