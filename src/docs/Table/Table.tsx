import React from 'react';
import CodeAndExample from '../CodeAndExample';
import { Table } from '../../components';

const TableExample = (props) => {
    return (
        <>
            <h1>Table</h1>
            <p>advance table for react project, it's have some cool features like
                 search, filter, sorting, pagination, etc</p>
            <p>Table have 2 mandatory props, both are array of objects</p>
            <ol>
                <li>columns</li>
                <li>data</li>
            </ol>
            <h3>1.columns</h3>
            <p>columns props for columns details</p>
            <h3>2.data</h3>
            <p>data props for table body</p>
            <CodeAndExample code={`<Table columns={[
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
            ]}/>`} example={<Table columns={[
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
            ]}/>}/>
            <h3>search</h3>
            <p>you can add searchable feature in table using <b>searchOptions</b> prop <b>{`(searchOptions={{searchable: true}})`}</b></p>
            <CodeAndExample code={`<Table searchOptions={{
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
            ]}/>`} example={<Table searchOptions={{
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
            ]}/>}/>
            <p>you can customize search component using <b>searchOptions</b> props  <b>{`(searchOptions={{searchable: true,
                searchComponent:(onChange) => {..component}
            }})`}</b></p>
            <CodeAndExample code={`<Table searchOptions={{
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
            ]}/>`} example={<Table searchOptions={{
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
            ]}/>}/>
            <p>you can disable search for particular columns by adding <b>searchable: false</b> in columns props</p>
            <CodeAndExample code={`<Table searchOptions={{
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
            ]}/>`} example={<Table searchOptions={{
                searchable : true,
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
                role: 'Admin',
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
            ]}/>}/>
            <h3>Sorting</h3>
            <p>you can enable sort option using <b>sortable</b> in <b>columns</b> prop</p>
            <CodeAndExample code={`<Table searchOptions={{
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
            ]}/>`} example={<Table searchOptions={{
                searchable : true,
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
                role: 'Admin',
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
            ]}/>}/>
            <p>you can customize sorting function using <b>onSort</b> in <b>columns</b> prop</p>
            <CodeAndExample defaultActive={1} code={`<Table searchOptions={{
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
            ]}/>`} example={<Table searchOptions={{
                searchable : true,
            }} columns={[
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
                role: 'Admin',
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
            ]}/>}/>
            <h3>filter</h3>
            <p>you can enable filter options using <b>filter</b> in <b>columns</b> prop</p>
            <CodeAndExample code={`<Table searchOptions={{
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
            ]}/>`} example={<Table searchOptions={{
                searchable : true,
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
                role: 'Admin',
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
            ]}/>}/>
        </>
    )
}

export default TableExample;