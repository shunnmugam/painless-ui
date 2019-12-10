import React from 'react';
import { Table } from '../../components'

class DataTableExample extends React.Component {

    state = {
        loading: true,
        totalData: 0,
        data : [],
        columns: [
            {
                name: "id",
                selector: "id",
                sortable: true
            },
            {
                name: "email",
                selector: "email",
                sortable: true,
                filter: true
            },
            {
                name: "first_name",
                selector: "first_name",
                sortable: true,
                filter: true
            },
            {
                name: "last_name",
                selector: "last_name",
                sortable: true
            },
            {
                name: "avatar",
                render: (row,column) => {
                    return <>
                        {/* <img src={row['avatar']} /> */}
                    </>
                }
            }
        ]
    }

    getDatasFromApi(page,limit) {
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
            })
    }

    componentWillMount() {
        console.log(this.props['theme']);
        this.getDatasFromApi(1,5);
    }

    render() {
        return (<Table loading={this.state.loading} 
            serverSide={true}
            paginationOptions={{
                paginagtion: true,
                totalNoOfData:this.state.totalData,
                limit: 5,
                onChange:(currentPage,data) => {
                   this.getDatasFromApi(currentPage,5);
                }
            }}
            searchOptions={{
                searchable: true,
                onSearch: (k) => {
                    console.log(k);
                }
            }}
            sortOptions = {{
                onSort:(n,order) => {
                    console.log(n,order);
                }
            }}
            data={this.state.data}
            columns={this.state.columns}
        ></Table>)
    }
}

export default DataTableExample;