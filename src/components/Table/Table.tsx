import React from 'react';
import './Table.scss';
import { Input } from '..';
import Button from '../Button/Button';
interface TableProps {
    className?: string
    data: Array<object> | any
    dataType?: string
    columns: Array<Columns>
    responsive?: boolean
    paginagtion?: boolean
    paginationOptions?: PaginationOptions
}

interface Columns {
    name: string
    selector?: string
    sortable?: boolean
    searchable?: boolean
    render?: Function
    onSort?: Function
}

interface PaginationOptions {
    totalNoOfData?: number
    currentPage?: number
    limit?:number,
    beforeChange?: Function
    onChange?: Function
}

const defaultPAginationOptions:PaginationOptions = {
    currentPage: 1,
    limit: 10
}

const defaultProps:TableProps = {
    className:'',
    data: [],
    dataType:'object',
    columns:[],
    responsive: false,
    paginationOptions: defaultPAginationOptions
};

class Table extends React.PureComponent<TableProps> {

    state = {
        currentPage: 1,
        sortBy: '',
        order: 'asc',
        searchKeyword: '',
    }

    setSortController(sortBy) {
        let order = 'asc';
        if(this.state.sortBy === sortBy && this.state.order === 'asc') {
            order =  'desc';
        };

        this.setState({
            sortBy,
            order
        })
    }
    /*
     * search table data
     * @params d: Array<any>
     * @return data:Array<any>
     */
    search(d:Array<any>): Array<any> {
        if(this.state.searchKeyword === '') {
            return d;
        }
        const data = [...d];
        const searchColumns:Array<any> = [];
        this.props.columns.forEach((c,i) => {
            let index: string|number|undefined = i;
            if(this.props.dataType !== 'array') {
                index = c.selector;
            }
            if(c.selector !== undefined)
                searchColumns.push(index);
        })
        return data.filter((row,i) => {
            const f: Array<any> = [];
            searchColumns.map((s) => {
                if(row[s] !== undefined && row[s].toLowerCase().includes(this.state.searchKeyword.toLowerCase())) {
                    f.push(row[s]);
                }
            })
            
            return f.length > 0;
        })
        return [];
    }

    /*
     * sort a table data
     * @params d: Array<any>
     * @return data:Array<any>
     */
    sort(d:Array<any>): Array<any> {
        if(this.state.sortBy === '') {
            return d;
        }
        const data = [...d];
        const {sortBy, order} = this.state;
        const sortByColumn = this.props.columns.find((column,i) => {
            if(this.props.dataType === 'array') {
                return i === parseInt(sortBy);
            }
            return column.selector === sortBy;
        });
        
        if(sortByColumn !== undefined && sortByColumn.onSort!== undefined && typeof sortByColumn.onSort === 'function') {
            const sortedDataFromView = sortByColumn.onSort(data,order,sortBy);
            if(sortedDataFromView !== undefined) {
                return sortedDataFromView;
            }
        }
        data.sort((d1,d2) => {
            if(d1[sortBy] < d2[sortBy]) {
                return order === 'asc' ? -1 : 1;
            }
            if(d1[sortBy] > d2[sortBy]) {
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
    paginate(d: Array<any>): any {
        const limit = this.props.paginationOptions !== undefined && this.props.paginationOptions.limit || 10;
        const currentPage = this.state.currentPage;
        const totalNoOfData = this.props.paginationOptions !== undefined && this.props.paginationOptions.totalNoOfData || d.length;
        const totalPage = Math.ceil(totalNoOfData/limit);
        const data = d.slice((currentPage-1)*limit,limit*currentPage);
        if(this.props.paginationOptions && this.props.paginationOptions.onChange 
            && typeof this.props.paginationOptions.onChange === 'function') {
                this.props.paginationOptions.onChange(this.state.currentPage,data);
        }
        return {
            data,
            totalPage,
            totalNoOfData,
            limit
        };
    }

    render(): JSX.Element {
        const props = {...defaultProps, ...this.props};
        let data = this.search(this.props.data);
        let totalPage = 1;
        data = this.sort(data);
        const paginationResult  = this.paginate(data);
        data = paginationResult.data;
        totalPage = paginationResult.totalPage;
        const totalNoOfData = paginationResult.totalNoOfData;
        const limit = paginationResult.limit;
        const from = ((this.state.currentPage-1) * limit) + 1;
        const to = (from + limit) - 1;
        
        return (<div className={'ui-table-container '}>
            <div className='ui-table-toolbar-wrapper pull-left ui-w-100'>
                <div className="ui-table-search-container pull-right">
                <Input type="text" placeholder="Type something..." style={{
                    width : "150px"
                }} value={this.state.searchKeyword} onChange={(e) => {
                    this.setState({
                        searchKeyword: e.target.value
                    });
                }}
                />
                </div>
            </div>
            <div className={'ui-table-wrapper' + (props.responsive ? 'responsive ': '')}>
                <table className={'ui-table '+ (props.className || '')}>
                <thead className="ui-table-header">
                {
                    <tr>
                    {props.columns.map((column,i) => {
                        let selector:any = '';
                        if(props.dataType === 'array' || column.selector === undefined) {
                            selector = i;
                        } else {
                            selector = column.selector;
                        }
                        const sortClassName = selector === this.state.sortBy ? (' sorting ' + this.state.order) : '';
                        return (<th onClick={() => {
                            if(column.sortable === true)
                                this.setSortController(selector)
                        }} key={'th-'+i} className={(column.sortable === true ? 'sort-column' : '') + sortClassName}>
                            {column.name}
                        </th>)
                    })}
                    </tr>
                }
                </thead>
                <tbody className="ui-table-body">
                    {
                        data.map((row,r) => {
                            return (<tr key={'tr-'+r}>
                                {
                                    props.dataType === 'array' ? (
                                        row.map((d,c) => {
                                            return <td key={'td-'+c+'-'+r}>{d}</td>
                                        })
                                    ) : (
                                    props.columns.map((column,c) => {
                                        let value = '';
                                        if(column.render && typeof column.render === 'function') {
                                            value = column.render(row,column,r);
                                        } else if(column.selector) {
                                            value = row[column.selector]
                                        } else {
                                            throw new Error('column should have selector property or render function')
                                        }
                                        return <td key={'td-'+c+'-'+r}>
                                            {value}
                                        </td>
                                    }) )
                                }
                            </tr>)
                        }) 
                    }
                </tbody>
            </table>
            </div>
            <div className="ui-table-pagination-control">
                <span>
                   {from} to {to > totalNoOfData ? totalNoOfData : to} of {totalNoOfData}
                </span>
                <ul className="pull-right">
                    <li className="ui-table-pagination-prev">
                       <Button rounded onClick={() => {
                            if(this.state.currentPage > 1) {
                                if(props.paginationOptions && props.paginationOptions.beforeChange 
                                    && typeof props.paginationOptions.beforeChange === 'function') {
                                        props.paginationOptions.beforeChange(this.state.currentPage,this.state.currentPage-1);
                                }
                                this.setState({
                                    currentPage: this.state.currentPage-1
                                });
                            }
                       }}>&#8249;</Button>
                    </li>
                    <li className="ui-table-pagination-next" onClick={() => {

                            if(this.state.currentPage < totalPage) {
                                if(props.paginationOptions && props.paginationOptions.beforeChange 
                                    && typeof props.paginationOptions.beforeChange === 'function') {
                                        props.paginationOptions.beforeChange(this.state.currentPage,this.state.currentPage+1);
                                }
                                this.setState({
                                    currentPage : this.state.currentPage+1
                                })
                            }
                       }}>
                        <Button rounded>&#8250;</Button>
                    </li>
                </ul>
            </div>
        </div>)
    }
}

export default Table;