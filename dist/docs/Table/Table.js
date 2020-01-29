import React from 'react';
import CodeAndExample from '../CodeAndExample';
import { Table } from '../../components';
const TableExample = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Table"),
        React.createElement("p", null, "advance table for react project, it's have some cool features like search, filter, sorting, pagination, etc"),
        React.createElement("p", null, "Table have 2 mandatory props, both are array of objects"),
        React.createElement("ol", null,
            React.createElement("li", null, "columns"),
            React.createElement("li", null, "data")),
        React.createElement("h3", null, "1.columns"),
        React.createElement("p", null, "columns props for columns details"),
        React.createElement("h3", null, "2.data"),
        React.createElement("p", null, "data props for table body"),
        React.createElement(CodeAndExample, { code: `<Table columns={[
                {
                    selector: 'no',
                    name: 'Number'
                },
                {
                    selector: 'name',
                    name: 'Name'
                },
                {
                    selector: 'mobile_number',
                    name: 'Mobile Number'
                },
                {
                    selector: 'role',
                    name: 'Role'
                },
            ]} data={[{
                no : 1,
                name: 'user1',
                mobile_number: '0902313XXXX',
                role: 'Admin'
            },
            {
                no : 2,
                name: 'user2',
                mobile_number: '0902513XXXX',
                role: 'Admin'
            },
            {
                no : 3,
                name: 'user3',
                mobile_number: '0901513XXXX',
                role: 'Developer'
            },
            {
                no : 4,
                name: 'user4',
                mobile_number: '0911513XXXX',
                role: 'Developer'
            },
            {
                no : 5,
                name: 'user5',
                mobile_number: '0911513XXXX',
                role: 'Register'
            },
            ]}/>`, example: React.createElement(Table, { columns: [
                    {
                        selector: 'no',
                        name: 'Number'
                    },
                    {
                        selector: 'name',
                        name: 'Name'
                    },
                    {
                        selector: 'mobile_number',
                        name: 'Mobile Number'
                    },
                    {
                        selector: 'role',
                        name: 'Role'
                    },
                ], data: [{
                        no: 1,
                        name: 'user1',
                        mobile_number: '0902313XXXX',
                        role: 'Admin'
                    },
                    {
                        no: 2,
                        name: 'user2',
                        mobile_number: '0902513XXXX',
                        role: 'Admin'
                    },
                    {
                        no: 3,
                        name: 'user3',
                        mobile_number: '0901513XXXX',
                        role: 'Developer'
                    },
                    {
                        no: 4,
                        name: 'user4',
                        mobile_number: '0911513XXXX',
                        role: 'Developer'
                    },
                    {
                        no: 5,
                        name: 'user5',
                        mobile_number: '0911513XXXX',
                        role: 'Register'
                    },
                ] }) }),
        React.createElement("h3", null, "render"),
        React.createElement("p", null, "you can change render behaviour"),
        React.createElement(CodeAndExample, { code: `<Table columns={[
                {
                    selector: 'no',
                    name: 'Number',
                    render: (row) => {
                        return row.no;
                    }
                },
                {
                    selector: 'name',
                    name: 'Name',
                    render: (row) => {
                        return <span style={{color:"red"}}>{row.name}</span>
                    }
                },
                {
                    selector: 'mobile_number',
                    name: 'Mobile Number'
                },
                {
                    selector: 'role',
                    name: 'Role'
                },
            ]} data={[{
                no : 1,
                name: 'user1',
                mobile_number: '0902313XXXX',
                role: 'Admin'
            },
            {
                no : 2,
                name: 'user2',
                mobile_number: '0902513XXXX',
                role: 'Admin'
            },
            {
                no : 3,
                name: 'user3',
                mobile_number: '0901513XXXX',
                role: 'Developer'
            },
            {
                no : 4,
                name: 'user4',
                mobile_number: '0911513XXXX',
                role: 'Developer'
            },
            {
                no : 5,
                name: 'user5',
                mobile_number: '0911513XXXX',
                role: 'Register'
            },
            ]}/>`, example: React.createElement(Table, { columns: [
                    {
                        selector: 'no',
                        name: 'Number',
                        render: (row) => {
                            return row.no;
                        }
                    },
                    {
                        selector: 'name',
                        name: 'Name',
                        render: (row) => {
                            return React.createElement("span", { style: { color: "red" } }, row.name);
                        }
                    },
                    {
                        selector: 'mobile_number',
                        name: 'Mobile Number'
                    },
                    {
                        selector: 'role',
                        name: 'Role'
                    },
                ], data: [{
                        no: 1,
                        name: 'user1',
                        mobile_number: '0902313XXXX',
                        role: 'Admin'
                    },
                    {
                        no: 2,
                        name: 'user2',
                        mobile_number: '0902513XXXX',
                        role: 'Admin'
                    },
                    {
                        no: 3,
                        name: 'user3',
                        mobile_number: '0901513XXXX',
                        role: 'Developer'
                    },
                    {
                        no: 4,
                        name: 'user4',
                        mobile_number: '0911513XXXX',
                        role: 'Developer'
                    },
                    {
                        no: 5,
                        name: 'user5',
                        mobile_number: '0911513XXXX',
                        role: 'Register'
                    },
                ] }) }),
        React.createElement("h3", null, "rowSpan and colSpan"),
        React.createElement("p", null,
            "you can control rowSpan and colSpan using ",
            React.createElement("b", null, "rowSpan & colSpan")),
        React.createElement(CodeAndExample, { code: `<Table noBg border columns={[
                {
                    selector: 'no',
                    name: 'Number'
                },
                {
                    selector: 'name',
                    name: 'Name'
                },
                {
                    selector: 'mobile_number',
                    name: 'Mobile Number'
                },
                {
                    selector: 'role',
                    name: 'Role',
                    rowSpan: {
                        1: 2, //rownumber : rowSpan
                        3: 2
                    }
                },
            ]} data={[{
                no : 1,
                name: 'user1',
                mobile_number: '0902313XXXX',
                role: 'Admin'
            },
            {
                no : 2,
                name: 'user2',
                mobile_number: '0902513XXXX',
                role: 'Admin'
            },
            {
                no : 3,
                name: 'user3',
                mobile_number: '0901513XXXX',
                role: 'Developer'
            },
            {
                no : 4,
                name: 'user4',
                mobile_number: '0911513XXXX',
                role: 'Developer'
            },
            {
                no : 5,
                name: 'user5',
                mobile_number: '0911513XXXX',
                role: 'Register'
            },
            ]}/>`, example: React.createElement(Table, { responsive: true, border: true, noBg: true, columns: [
                    {
                        selector: 'no',
                        name: 'Number',
                    },
                    {
                        selector: 'name',
                        name: 'Name'
                    },
                    {
                        selector: 'mobile_number',
                        name: 'Mobile Number'
                    },
                    {
                        selector: 'role',
                        name: 'Role',
                        rowSpan: {
                            1: 2,
                            3: 2
                        }
                    },
                ], data: [{
                        no: 1,
                        name: 'user1',
                        mobile_number: '0902313XXXX',
                        role: 'Admin'
                    },
                    {
                        no: 2,
                        name: 'user2',
                        mobile_number: '0902513XXXX',
                        role: 'Admin'
                    },
                    {
                        no: 3,
                        name: 'user3',
                        mobile_number: '0901513XXXX',
                        role: 'Developer'
                    },
                    {
                        no: 4,
                        name: 'user4',
                        mobile_number: '0911513XXXX',
                        role: 'Developer'
                    },
                    {
                        no: 5,
                        name: 'user5',
                        mobile_number: '0911513XXXX',
                        role: 'Register'
                    },
                ] }) }),
        React.createElement("h3", null, "search"),
        React.createElement("p", null,
            "you can add searchable feature in table using ",
            React.createElement("b", null, "searchOptions"),
            " prop ",
            React.createElement("b", null, `(searchOptions={{searchable: true}})`)),
        React.createElement(CodeAndExample, { code: `<Table searchOptions={{
                searchable : true
            }} columns={[
                {
                    selector: 'no',
                    name: 'Number'
                },
                {
                    selector: 'name',
                    name: 'Name'
                },
                {
                    selector: 'mobile_number',
                    name: 'Mobile Number'
                },
                {
                    selector: 'role',
                    name: 'Role'
                },
            ]} data={[{
                no : 1,
                name: 'user1',
                mobile_number: '0902313XXXX',
                role: 'Admin'
            },
            {
                no : 2,
                name: 'user2',
                mobile_number: '0902513XXXX',
                role: 'Admin'
            },
            {
                no : 3,
                name: 'user3',
                mobile_number: '0901513XXXX',
                role: 'Developer'
            },
            {
                no : 4,
                name: 'user4',
                mobile_number: '0911513XXXX',
                role: 'Developer'
            },
            {
                no : 5,
                name: 'user5',
                mobile_number: '0911513XXXX',
                role: 'Register'
            },
            ]}/>`, example: React.createElement(Table, { searchOptions: {
                    searchable: true
                }, columns: [
                    {
                        selector: 'no',
                        name: 'Number'
                    },
                    {
                        selector: 'name',
                        name: 'Name'
                    },
                    {
                        selector: 'mobile_number',
                        name: 'Mobile Number'
                    },
                    {
                        selector: 'role',
                        name: 'Role'
                    },
                ], data: [{
                        no: 1,
                        name: 'user1',
                        mobile_number: '0902313XXXX',
                        role: 'Admin'
                    },
                    {
                        no: 2,
                        name: 'user2',
                        mobile_number: '0902513XXXX',
                        role: 'Admin'
                    },
                    {
                        no: 3,
                        name: 'user3',
                        mobile_number: '0901513XXXX',
                        role: 'Developer'
                    },
                    {
                        no: 4,
                        name: 'user4',
                        mobile_number: '0911513XXXX',
                        role: 'Developer'
                    },
                    {
                        no: 5,
                        name: 'user5',
                        mobile_number: '0911513XXXX',
                        role: 'Register'
                    },
                ] }) }),
        React.createElement("p", null,
            "you can customize search component using ",
            React.createElement("b", null, "searchOptions"),
            " props  ",
            React.createElement("b", null, `(searchOptions={{searchable: true,
                searchComponent:(onChange) => {..component}
            }})`)),
        React.createElement(CodeAndExample, { code: `<Table searchOptions={{
                searchable : true,
                searchComponent:(onChange) => {
                    return <input className="custom-search" type="search" onChange={(e) => onChange(e.target.value)}/>
                }
            }} columns={[
                {
                    selector: 'no',
                    name: 'Number'
                },
                {
                    selector: 'name',
                    name: 'Name'
                },
                {
                    selector: 'mobile_number',
                    name: 'Mobile Number'
                },
                {
                    selector: 'role',
                    name: 'Role'
                },
            ]} data={[{
                no : 1,
                name: 'user1',
                mobile_number: '0902313XXXX',
                role: 'Admin'
            },
            {
                no : 2,
                name: 'user2',
                mobile_number: '0902513XXXX',
                role: 'Admin'
            },
            {
                no : 3,
                name: 'user3',
                mobile_number: '0901513XXXX',
                role: 'Developer'
            },
            {
                no : 4,
                name: 'user4',
                mobile_number: '0911513XXXX',
                role: 'Developer'
            },
            {
                no : 5,
                name: 'user5',
                mobile_number: '0911513XXXX',
                role: 'Register'
            },
            ]}/>`, example: React.createElement(Table, { searchOptions: {
                    searchable: true,
                    searchComponent: (onChange) => {
                        return React.createElement("input", { className: "custom-search", type: "search", onChange: (e) => onChange(e.target.value) });
                    }
                }, columns: [
                    {
                        selector: 'no',
                        name: 'Number'
                    },
                    {
                        selector: 'name',
                        name: 'Name'
                    },
                    {
                        selector: 'mobile_number',
                        name: 'Mobile Number'
                    },
                    {
                        selector: 'role',
                        name: 'Role'
                    },
                ], data: [{
                        no: 1,
                        name: 'user1',
                        mobile_number: '0902313XXXX',
                        role: 'Admin'
                    },
                    {
                        no: 2,
                        name: 'user2',
                        mobile_number: '0902513XXXX',
                        role: 'Admin'
                    },
                    {
                        no: 3,
                        name: 'user3',
                        mobile_number: '0901513XXXX',
                        role: 'Developer'
                    },
                    {
                        no: 4,
                        name: 'user4',
                        mobile_number: '0911513XXXX',
                        role: 'Developer'
                    },
                    {
                        no: 5,
                        name: 'user5',
                        mobile_number: '0911513XXXX',
                        role: 'Register'
                    },
                ] }) }),
        React.createElement("p", null,
            "you can disable search for particular columns by adding ",
            React.createElement("b", null, "searchable: false"),
            " in columns props"),
        React.createElement(CodeAndExample, { code: `<Table searchOptions={{
                searchable : true
            }} columns={[
                {
                    selector: 'no',
                    name: 'Number',
                    searchable: false,
                },
                {
                    selector: 'name',
                    name: 'Name'
                },
                {
                    selector: 'mobile_number',
                    name: 'Mobile Number'
                },
                {
                    selector: 'role',
                    name: 'Role'
                },
            ]} data={[{
                no : 1,
                name: 'userA',
                mobile_number: '0902313XXXX',
                role: 'Admin'
            },
            {
                no : 2,
                name: 'userB',
                mobile_number: '0902513XXXX',
                role: 'Admin'
            },
            {
                no : 3,
                name: 'userC',
                mobile_number: '0901513XXXX',
                role: 'Developer'
            },
            {
                no : 4,
                name: 'userD',
                mobile_number: '0911513XXXX',
                role: 'Developer'
            },
            {
                no : 5,
                name: 'userE',
                mobile_number: '0911513XXXX',
                role: 'Register'
            },
            ]}/>`, example: React.createElement(Table, { searchOptions: {
                    searchable: true,
                }, columns: [
                    {
                        selector: 'no',
                        name: 'Number',
                        searchable: false,
                    },
                    {
                        selector: 'name',
                        name: 'Name'
                    },
                    {
                        selector: 'mobile_number',
                        name: 'Mobile Number'
                    },
                    {
                        selector: 'role',
                        name: 'Role'
                    },
                ], data: [{
                        no: 1,
                        name: 'userA',
                        mobile_number: '0902313XXXX',
                        role: 'Admin',
                    },
                    {
                        no: 2,
                        name: 'userB',
                        mobile_number: '0902513XXXX',
                        role: 'Admin'
                    },
                    {
                        no: 3,
                        name: 'userC',
                        mobile_number: '0901513XXXX',
                        role: 'Developer'
                    },
                    {
                        no: 4,
                        name: 'userD',
                        mobile_number: '0911513XXXX',
                        role: 'Developer'
                    },
                    {
                        no: 5,
                        name: 'userE',
                        mobile_number: '0911513XXXX',
                        role: 'Register'
                    },
                ] }) }),
        React.createElement("h3", null, "Sorting"),
        React.createElement("p", null,
            "you can enable sort option using ",
            React.createElement("b", null, "sortable"),
            " in ",
            React.createElement("b", null, "columns"),
            " prop"),
        React.createElement(CodeAndExample, { code: `<Table searchOptions={{
                searchable : true
            }} columns={[
                {
                    selector: 'no',
                    name: 'Number',
                    searchable: false,
                    sortable: true
                },
                {
                    selector: 'name',
                    name: 'Name',
                    sortable: true
                },
                {
                    selector: 'mobile_number',
                    name: 'Mobile Number',
                    sortable: true
                },
                {
                    selector: 'role',
                    name: 'Role',
                    sortable: true
                },
            ]} data={[{
                no : 1,
                name: 'userA',
                mobile_number: '0902313XXXX',
                role: 'Admin'
            },
            {
                no : 2,
                name: 'userB',
                mobile_number: '0902513XXXX',
                role: 'Admin'
            },
            {
                no : 3,
                name: 'userC',
                mobile_number: '0901513XXXX',
                role: 'Developer'
            },
            {
                no : 4,
                name: 'userD',
                mobile_number: '0911513XXXX',
                role: 'Developer'
            },
            {
                no : 5,
                name: 'userE',
                mobile_number: '0911513XXXX',
                role: 'Register'
            },
            ]}/>`, example: React.createElement(Table, { searchOptions: {
                    searchable: true,
                }, columns: [
                    {
                        selector: 'no',
                        name: 'Number',
                        searchable: false,
                        sortable: true
                    },
                    {
                        selector: 'name',
                        name: 'Name',
                        sortable: true
                    },
                    {
                        selector: 'mobile_number',
                        name: 'Mobile Number',
                        sortable: true
                    },
                    {
                        selector: 'role',
                        name: 'Role',
                        sortable: true
                    },
                ], data: [{
                        no: 1,
                        name: 'userA',
                        mobile_number: '0902313XXXX',
                        role: 'Admin',
                    },
                    {
                        no: 2,
                        name: 'userB',
                        mobile_number: '0902513XXXX',
                        role: 'Admin'
                    },
                    {
                        no: 3,
                        name: 'userC',
                        mobile_number: '0901513XXXX',
                        role: 'Developer'
                    },
                    {
                        no: 4,
                        name: 'userD',
                        mobile_number: '0911513XXXX',
                        role: 'Developer'
                    },
                    {
                        no: 5,
                        name: 'userE',
                        mobile_number: '0911513XXXX',
                        role: 'Register'
                    },
                ] }) }),
        React.createElement("p", null,
            "you can customize sorting function using ",
            React.createElement("b", null, "onSort"),
            " in ",
            React.createElement("b", null, "columns"),
            " prop"),
        React.createElement(CodeAndExample, { defaultActive: 1, code: `<Table searchOptions={{
                searchable : true
            }} columns={[
                {
                    selector: 'no',
                    name: 'Number',
                    searchable: false,
                    sortable: true
                },
                {
                    selector: 'name',
                    name: 'Name',
                    sortable: true
                },
                {
                    selector: 'mobile_number',
                    name: 'Mobile Number',
                    sortable: true,
                    onSort: (data,order,sortBy) => {
                        data.sort((a, b) => {
                            if(order === "asc") {
                                if(a[sortBy] < b[sortBy])
                                    return -1;
                                else if(a[sortBy] > b[sortBy])
                                    return 1;
                                return 0;
                            } else {
                                if(a[sortBy] < b[sortBy])
                                    return 1;
                                else if(a[sortBy] > b[sortBy])
                                    return -1;
                                return 0;
                            }
                        });
                    }
                },
                {
                    selector: 'role',
                    name: 'Role',
                    sortable: true
                },
            ]} data={[{
                no : 1,
                name: 'userA',
                mobile_number: '0902313XXXX',
                role: 'Admin'
            },
            {
                no : 2,
                name: 'userB',
                mobile_number: '0902513XXXX',
                role: 'Admin'
            },
            {
                no : 3,
                name: 'userC',
                mobile_number: '0901513XXXX',
                role: 'Developer'
            },
            {
                no : 4,
                name: 'userD',
                mobile_number: '0911513XXXX',
                role: 'Developer'
            },
            {
                no : 5,
                name: 'userE',
                mobile_number: '0911513XXXX',
                role: 'Register'
            },
            ]}/>`, example: React.createElement(Table, { searchOptions: {
                    searchable: true,
                }, columns: [
                    {
                        selector: 'no',
                        name: 'Number',
                        searchable: false,
                        sortable: true,
                    },
                    {
                        selector: 'name',
                        name: 'Name',
                        sortable: true
                    },
                    {
                        selector: 'mobile_number',
                        name: 'Mobile Number',
                        sortable: true,
                        onSort: (data, order, sortBy) => {
                            data.sort((a, b) => {
                                if (order === "asc") {
                                    if (a[sortBy] < b[sortBy])
                                        return -1;
                                    else if (a[sortBy] > b[sortBy])
                                        return 1;
                                    return 0;
                                }
                                else {
                                    if (a[sortBy] < b[sortBy])
                                        return 1;
                                    else if (a[sortBy] > b[sortBy])
                                        return -1;
                                    return 0;
                                }
                            });
                        }
                    },
                    {
                        selector: 'role',
                        name: 'Role',
                        sortable: true
                    },
                ], data: [{
                        no: 1,
                        name: 'userA',
                        mobile_number: '0902313XXXX',
                        role: 'Admin',
                    },
                    {
                        no: 2,
                        name: 'userB',
                        mobile_number: '0902513XXXX',
                        role: 'Admin'
                    },
                    {
                        no: 3,
                        name: 'userC',
                        mobile_number: '0901513XXXX',
                        role: 'Developer'
                    },
                    {
                        no: 4,
                        name: 'userD',
                        mobile_number: '0911513XXXX',
                        role: 'Developer'
                    },
                    {
                        no: 5,
                        name: 'userE',
                        mobile_number: '0911513XXXX',
                        role: 'Register'
                    },
                ] }) }),
        React.createElement("h3", null, "filter"),
        React.createElement("p", null,
            "you can enable filter options using ",
            React.createElement("b", null, "filter"),
            " in ",
            React.createElement("b", null, "columns"),
            " prop"),
        React.createElement(CodeAndExample, { code: `<Table searchOptions={{
                searchable : true
            }} columns={[
                {
                    selector: 'no',
                    name: 'Number',
                    searchable: false,
                    sortable: true
                },
                {
                    selector: 'name',
                    name: 'Name',
                    sortable: true
                },
                {
                    selector: 'mobile_number',
                    name: 'Mobile Number',
                    sortable: true
                },
                {
                    selector: 'role',
                    name: 'Role',
                    sortable: true,
                    filter: true
                },
            ]} data={[{
                no : 1,
                name: 'userA',
                mobile_number: '0902313XXXX',
                role: 'Admin'
            },
            {
                no : 2,
                name: 'userB',
                mobile_number: '0902513XXXX',
                role: 'Admin'
            },
            {
                no : 3,
                name: 'userC',
                mobile_number: '0901513XXXX',
                role: 'Developer'
            },
            {
                no : 4,
                name: 'userD',
                mobile_number: '0911513XXXX',
                role: 'Developer'
            },
            {
                no : 5,
                name: 'userE',
                mobile_number: '0911513XXXX',
                role: 'Register'
            },
            ]}/>`, example: React.createElement(Table, { searchOptions: {
                    searchable: true,
                }, columns: [
                    {
                        selector: 'no',
                        name: 'Number',
                        searchable: false,
                        sortable: true
                    },
                    {
                        selector: 'name',
                        name: 'Name',
                        sortable: true
                    },
                    {
                        selector: 'mobile_number',
                        name: 'Mobile Number',
                        sortable: true
                    },
                    {
                        selector: 'role',
                        name: 'Role',
                        sortable: true,
                        filter: true
                    },
                ], data: [{
                        no: 1,
                        name: 'userA',
                        mobile_number: '0902313XXXX',
                        role: 'Admin',
                    },
                    {
                        no: 2,
                        name: 'userB',
                        mobile_number: '0902513XXXX',
                        role: 'Admin'
                    },
                    {
                        no: 3,
                        name: 'userC',
                        mobile_number: '0901513XXXX',
                        role: 'Developer'
                    },
                    {
                        no: 4,
                        name: 'userD',
                        mobile_number: '0911513XXXX',
                        role: 'Developer'
                    },
                    {
                        no: 5,
                        name: 'userE',
                        mobile_number: '0911513XXXX',
                        role: 'Register'
                    },
                ] }) }),
        React.createElement("h3", null, "custom filter (filterRender)"),
        React.createElement("p", null,
            "you can modify filter options using ",
            React.createElement("b", null, "filterRender"),
            " in ",
            React.createElement("b", null, "columns"),
            " prop"),
        React.createElement(CodeAndExample, { code: `<Table searchOptions={{
                searchable : true
            }} columns={[
                {
                    selector: 'no',
                    name: 'Number',
                    searchable: false,
                    sortable: true
                },
                {
                    selector: 'name',
                    name: 'Name',
                    sortable: true
                },
                {
                    selector: 'mobile_number',
                    name: 'Mobile Number',
                    sortable: true
                },
                {
                    selector: 'role',
                    name: 'Role',
                    sortable: true,
                    filter: true,
                    filterRender: (onChange) => {
                        return <select onChange={(e) => {
                            onChange(e.target.value)
                        }}>
                            <option value=""></option>
                            <option value="Admin">Admin</option>
                            <option value="Developer">Dev</option>
                        </select>
                    }
                },
            ]} data={[{
                no : 1,
                name: 'userA',
                mobile_number: '0902313XXXX',
                role: 'Admin'
            },
            {
                no : 2,
                name: 'userB',
                mobile_number: '0902513XXXX',
                role: 'Admin'
            },
            {
                no : 3,
                name: 'userC',
                mobile_number: '0901513XXXX',
                role: 'Developer'
            },
            {
                no : 4,
                name: 'userD',
                mobile_number: '0911513XXXX',
                role: 'Developer'
            },
            {
                no : 5,
                name: 'userE',
                mobile_number: '0911513XXXX',
                role: 'Register'
            },
            ]}/>`, example: React.createElement(Table, { searchOptions: {
                    searchable: true,
                }, columns: [
                    {
                        selector: 'no',
                        name: 'Number',
                        searchable: false,
                        sortable: true
                    },
                    {
                        selector: 'name',
                        name: 'Name',
                        sortable: true
                    },
                    {
                        selector: 'mobile_number',
                        name: 'Mobile Number',
                        sortable: true
                    },
                    {
                        selector: 'role',
                        name: 'Role',
                        sortable: true,
                        filter: true,
                        filterRender: (onChange) => {
                            return React.createElement("select", { onChange: (e) => {
                                    onChange(e.target.value);
                                } },
                                React.createElement("option", { value: "" }),
                                React.createElement("option", { value: "Admin" }, "Admin"),
                                React.createElement("option", { value: "Developer" }, "Dev"));
                        }
                    },
                ], data: [{
                        no: 1,
                        name: 'userA',
                        mobile_number: '0902313XXXX',
                        role: 'Admin',
                    },
                    {
                        no: 2,
                        name: 'userB',
                        mobile_number: '0902513XXXX',
                        role: 'Admin'
                    },
                    {
                        no: 3,
                        name: 'userC',
                        mobile_number: '0901513XXXX',
                        role: 'Developer'
                    },
                    {
                        no: 4,
                        name: 'userD',
                        mobile_number: '0911513XXXX',
                        role: 'Developer'
                    },
                    {
                        no: 5,
                        name: 'userE',
                        mobile_number: '0911513XXXX',
                        role: 'Register'
                    },
                ] }) }),
        React.createElement("h3", null, "Table props"),
        React.createElement(Table, { columns: [{
                    selector: "name",
                    name: "Name"
                }, {
                    name: "Type",
                    selector: "type"
                }, {
                    name: "Default",
                    selector: "default"
                }], data: [{
                    name: 'columns',
                    type: 'Array<Object>',
                    default: '-',
                },
                {
                    name: "data",
                    type: "Array<Object>",
                    default: "-"
                },
                {
                    name: "className",
                    type: "string",
                    default: "-"
                },
                {
                    name: "containerStyle",
                    type: "css",
                    default: "-"
                },
                {
                    name: "responsive",
                    type: "boolean",
                    default: "-"
                },
                {
                    name: "serverSide",
                    type: "boolean",
                    default: "-"
                },
                {
                    name: "style",
                    type: "css",
                    default: "-"
                },
                {
                    name: "noBg",
                    type: "boolean",
                    default: "-"
                }, {
                    name: "border",
                    type: "boolean",
                    default: "-"
                },
                {
                    name: "loading",
                    type: "boolean",
                    default: "-"
                },
                {
                    name: "paginationOptions",
                    type: "PaginationOptions",
                    default: "-"
                },
                {
                    name: "searchOptions",
                    type: "SearchOptions",
                    default: "-"
                },
                {
                    name: "sortOptions",
                    type: "SortOptions",
                    default: "-"
                },
            ] }),
        React.createElement("h3", null, "Colums props"),
        React.createElement(Table, { columns: [{
                    selector: "name",
                    name: "Name"
                }, {
                    name: "Type",
                    selector: "type"
                }, {
                    name: "Default",
                    selector: "default"
                }], data: [{
                    name: 'selector',
                    type: 'string',
                    default: '-',
                },
                {
                    name: 'name',
                    type: 'string',
                    default: '-',
                },
                {
                    name: 'sortable',
                    type: 'boolean',
                    default: 'false',
                },
                {
                    name: 'searchable',
                    type: 'boolean',
                    default: 'false',
                },
                {
                    name: 'filter',
                    type: 'boolean',
                    default: '-',
                },
                {
                    name: 'render',
                    type: 'Function',
                    default: '-',
                },
                {
                    name: 'onSort',
                    type: 'Function',
                    default: '-',
                },
                {
                    name: 'filterRender',
                    type: 'Function',
                    default: '-',
                },
                {
                    name: 'rowSpan',
                    type: 'object',
                    default: '-',
                },
                {
                    name: 'colSpan',
                    type: 'object',
                    default: '-',
                },
            ] }),
        React.createElement("h3", null, "PaginationOptions"),
        React.createElement(Table, { columns: [{
                    selector: "name",
                    name: "Name"
                }, {
                    name: "Type",
                    selector: "type"
                }, {
                    name: "Default",
                    selector: "default"
                }], data: [{
                    name: 'pagination',
                    type: 'boolean',
                    default: '-',
                },
                {
                    name: 'totalNoOfData',
                    type: 'integer',
                    default: '-',
                },
                {
                    name: 'currentPage',
                    type: 'integer',
                    default: '-',
                },
                {
                    name: 'limit',
                    type: 'integer',
                    default: '-',
                },
                {
                    name: 'beforeChange',
                    type: 'Function',
                    default: '-',
                },
                {
                    name: 'onChange',
                    type: 'Function',
                    default: '-',
                }
            ] }),
        React.createElement("h3", null, "SearchOptions"),
        React.createElement(Table, { columns: [{
                    selector: "name",
                    name: "Name"
                }, {
                    name: "Type",
                    selector: "type"
                }, {
                    name: "Default",
                    selector: "default"
                }], data: [{
                    name: 'searchable',
                    type: 'boolean',
                    default: '-',
                },
                {
                    name: 'onSearch',
                    type: 'Function',
                    default: '-',
                },
                {
                    name: 'searchComponent',
                    type: 'React.JSX',
                    default: '-',
                }
            ] }),
        React.createElement("h3", null, "SortOptions"),
        React.createElement(Table, { columns: [{
                    selector: "name",
                    name: "Name"
                }, {
                    name: "Type",
                    selector: "type"
                }, {
                    name: "Default",
                    selector: "default"
                }], data: [
                {
                    name: 'onSort',
                    type: 'Function',
                    default: '-',
                }
            ] })));
};
export default TableExample;
