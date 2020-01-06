import React from 'react';
import './Table.css';
import Input from '../InputBox/InputBox';
import Button from '../Button/Button';
import Select from '../Select/Select';
import Option from '../Option/Option';

interface TableProps {
    className?: string
    containerStyle?: object
    data: Array<object> | any
    dataType?: string
    columns: Array<typeArrayColumns | typeObjectColumns>
    responsive?: boolean
    serverSide?: boolean
    style?: object
    loading?: boolean
    paginationOptions?: PaginationOptions
    searchOptions?: SearchOptions
    sortOptions?: SortOptions
    noHeader?: boolean
    [key:string]: any
}

interface Columns {
    name: string
    sortable?: boolean
    searchable?: boolean
    filter?: boolean
    render?: Function
    onSort?: Function
    filterRender?: Function
}


interface typeArrayColumns extends Columns {
    selector?: string
}

interface typeObjectColumns extends Columns {
    selector: string
}

interface PaginationOptions {
    pagination?: boolean
    totalNoOfData?: number
    currentPage?: number
    limit?:number,
    beforeChange?: Function
    onChange?: Function
}

interface SearchOptions {
    searchable?: boolean
    onSearch?: Function,
    searchComponent?:Function
}

interface SortOptions {
    onSort?: Function
}

const defaultPaginationOptions:PaginationOptions = {
    currentPage: 1,
    limit: 10
}

const defaultProps:TableProps = {
    className:'',
    data: [],
    dataType:'object',
    columns:[],
    loading: false,
    serverSide: false,
    responsive: false,
    paginationOptions: defaultPaginationOptions
};

class Table extends React.PureComponent<TableProps> {

    state = {
        currentPage: 1,
        sortBy: '',
        loading: this.props.loading,
        order: 'asc',
        searchKeyword: '',
        filterColumnData : {}
    }

    setSortController(sortBy) {
        let order = 'asc';
        if(this.state.sortBy === sortBy && this.state.order === 'asc') {
            order =  'desc';
        };

        this.setState({
            sortBy,
            order,
            localChange: true
        });

        if(this.props.sortOptions !== undefined && this.props.sortOptions.onSort !== undefined && typeof this.props.sortOptions.onSort === 'function') {
            this.props.sortOptions.onSort(sortBy,order);
        }
    }
    /*
     * search table data
     * @params d: Array<any>
     * @return data:Array<any>
     */
    search(d:Array<any>): Array<any> {
        if(this.state.searchKeyword === '' || this.props.serverSide === true) {
            return d;
        }
        const data = [...d];
        const searchColumns:Array<any> = [];
        this.props.columns.forEach((c,i) => {
            let index: string|number|undefined = i;
            if(this.props.dataType !== 'array') {
                index = c.selector;
            }
            if(c.selector !== undefined && c.searchable!==false)
                searchColumns.push(index);
        })
        return data.filter((row,i) => {
            const f: Array<any> = [];
            searchColumns.forEach((s) => {
                if(row[s] !== undefined && (''+row[s]).toLowerCase().includes(this.state.searchKeyword.toLowerCase())) {
                    f.push(row[s]);
                }
            })
            
            return f.length > 0;
        })
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
        if(this.props.serverSide === true) {
            return d;
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
     * filter
     * @params d: Array<any>
     * @return data: Array<any>
     */
    filter(d: Array<any>): Array<any> {
        if(Object.keys(this.state.filterColumnData).length === 0)
            return d;
        
        return d.filter((data) => {
            for (const key in this.state.filterColumnData) {
                let index: string|number = key;
                if (this.state.filterColumnData.hasOwnProperty(key)) {
                    const element = this.state.filterColumnData[key];
                    if(this.props.dataType !== 'array') {
                        index = key;
                    } else {
                        index = key
                    }
                    if(data[index] !== element)
                        return false;

                }
            }
            return true;
        })
    }

    /*
     * pagination
     * @params d:Array<any>
     * @return details:object
     */
    paginate(d: Array<any>): any {
        const limit = this.props.paginationOptions !== undefined && this.props.paginationOptions.limit ? this.props.paginationOptions.limit : 10;
        const currentPage = this.state.currentPage;
        const totalNoOfData = this.props.paginationOptions !== undefined && this.props.paginationOptions.totalNoOfData ? this.props.paginationOptions.totalNoOfData : d.length;
        const totalPage = Math.ceil(totalNoOfData/limit);
        let data = d;
        if(this.props.serverSide === false)
            data = d.slice((currentPage-1)*limit,limit*currentPage);
       
        if(currentPage > totalPage && this.state.currentPage !== 1) {
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
        if(this.props.paginationOptions && this.props.paginationOptions.onChange 
            && typeof this.props.paginationOptions.onChange === 'function') {
                this.props.paginationOptions.onChange(page,this.props.data);
        }
        this.setState({
            currentPage: page,
            loading: this.props.serverSide === true,
            localChange: true
        });
    }

    /*
     * get derived state from props
     */
    static getDerivedStateFromProps(nextProps,state) {
        
        if (state.localChange) {
            return {
              localChange: false
            };
        }

        if(nextProps.loading !== state.loading) {
            return {
                loading: nextProps.loading
            }
        }
        return null;
    }

    render(): JSX.Element {
        const props = {...defaultProps, ...this.props};
        let data = this.props.data;
        //search
        if(this.props.searchOptions!== undefined && this.props.searchOptions.searchable === true) {
            data = this.search(this.props.data);
        }
        //filter
        data = this.filter(data)
        //sort
        data = this.sort(data);
        //pagination
        let paginationUi = <></>;
        if(this.props.paginationOptions !== undefined && this.props.paginationOptions.pagination === true) {
            const paginationResult  = this.paginate(data);
            let totalPage = 1;
            data = paginationResult.data;
            totalPage = paginationResult.totalPage;
            const totalNoOfData = paginationResult.totalNoOfData;
            const limit = paginationResult.limit;
            const from = ((this.state.currentPage-1) * limit) + 1;
            const to = (from + limit) - 1;
            paginationUi = ( <div className="ui-table-pagination-control">
                <span>
                {from} to {to > totalNoOfData ? totalNoOfData : to} of {totalNoOfData}
                </span>
                <ul className="pull-right">
                    <li className="ui-table-pagination-next" onClick={() => {
                        if(this.state.currentPage > 1) {
                            this.pageChange(1);
                        }
                    }}>
                        <Button disabled={!(this.state.currentPage > 1)} styleType="text" rounded>|&#8249;</Button>
                    </li>
                    <li className="ui-table-pagination-prev" onClick={() => {
                            if(this.state.currentPage > 1) {
                                this.pageChange(this.state.currentPage-1);
                            }
                    }}>
                    <Button styleType="text" rounded>&#8249;</Button>
                    </li>
                    <li className="ui-table-pagination-next" onClick={() => {
                        if(this.state.currentPage < totalPage) {
                            this.pageChange(this.state.currentPage+1);
                        }
                    }}>
                        <Button styleType="text" rounded>&#8250;</Button>
                    </li>
                    <li className="ui-table-pagination-next" onClick={() => {
                        if(this.state.currentPage < totalPage) {
                            this.pageChange(totalPage);
                        }
                    }}>
                        <Button disabled={!(this.state.currentPage < totalPage)} styleType="text" rounded>&#8250;|</Button>
                    </li>
                </ul>
            </div>)
        }
        
        return (<div className={'ui-table-container '} style={this.props.containerStyle || {}}>
            <div className='ui-table-toolbar-wrapper pull-left ui-w-100'>
                {(this.props.searchOptions!== undefined && this.props.searchOptions.searchable === true) ? 
                <div className="ui-table-search-container pull-right">
                    {this.props.searchOptions.searchComponent !== undefined && 
                        typeof this.props.searchOptions.searchComponent === 'function' ? <>
                            {this.props.searchOptions.searchComponent((v) => {
                                //onchange event
                                this.setState({
                                    searchKeyword: v,
                                    localChange: true
                                });
                                if(props.searchOptions !== undefined && props.searchOptions.onSearch !== undefined && typeof props.searchOptions.onSearch === 'function') {
                                    props.searchOptions.onSearch(v);
                                }

                            })}
                        </> : 
                        <Input type="text" placeholder="Type something..." style={{
                            width : "150px"
                        }} value={this.state.searchKeyword} onChange={(e) => {
                            this.setState({
                                searchKeyword: e.target.value,
                                localChange: true
                            });
                            if(props.searchOptions !== undefined && props.searchOptions.onSearch !== undefined && typeof props.searchOptions.onSearch === 'function') {
                                props.searchOptions.onSearch(e.target.value);
                            }
                        }}/> }
                </div> : <></>}
            </div>
            <div className={'ui-table-wrapper' + (props.responsive ? 'responsive ': '')}>
                <table className={'ui-table '+ (props.className || '')} style={this.props.style || {}}>
                {this.props.noHeader === true ? <></> :
                <thead className="ui-table-header">
                {
                    <tr>
                    {props.columns.map((column,i) => {
                        let selector:any = '';
                        const tempFilterData = new Set();
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
                            {column.filter ? <>
                                {
                                    column.filterRender ? column.filterRender((v) => {
                                        const t = {...this.state.filterColumnData}
                                        let index:number|string = i
                                        if(this.props.dataType !== 'array' && column.selector)
                                            index = column.selector

                                        if(v === '' || v === undefined){
                                            delete t[index]
                                        } else
                                            t[index] = v;
                                        this.setState({
                                            filterColumnData: t
                                        });
                                    }) :  <Select searchable style={{width : '100%',display : 'block'}} onClick={(e) => e.stopPropagation()} onChange ={(e) => {

                                        const t = {...this.state.filterColumnData}
                                        let index:number|string = i
                                        if(this.props.dataType !== 'array' && column.selector)
                                            index = column.selector

                                        if(e.value === '' || e.value === undefined){
                                            delete t[index]
                                        } else
                                            t[index] = e.value;
                                        this.setState({
                                            filterColumnData: t
                                        });
                                    }}>
                                    {/* <Option value=""> </Option> */}
                                    {
                                        this.props.data.map((row,i) => {
                                            if(props.dataType === 'array') {
                                                row.map((d,c) => {
                                                    if(!tempFilterData.has(d)) {
                                                        tempFilterData.add(d);
                                                        return <Option value={d} key={'filter-option-'+c+'-'+column.name}>{d}</Option>
                                                    }
                                                    return <></>
                                                })
                                            } else {
                                                if(column.selector){
                                                    const d = row[column.selector];
                                                    if(!tempFilterData.has(d)) {
                                                        tempFilterData.add(d);
                                                        return <Option value={d} 
                                                        key={'filter-option-'+i+'-'+column.name}>{d}</Option>
                                                    }
                                                    return <></>
                                                }
                                                else
                                                    return <></>
                                            }
                                            return <></>
                                            // (column.selector)  ? (
                                            //     console.log(column.selector)
                                            //     const d = row[column.selector];
                                            //     const tempFilterData = new Set();
                                            //     if(!tempFilterData.has(d)) {
                                            //         tempFilterData.add(d);
                                            //         return <option value={d} key={'filter-option-'+c+'-'+column.name}>{d}</option>
                                            //     }
                                            // }) : <></>
                                        })
                                    }
                                    </Select>
                                }
                            </> : <></>}
                        </th>)
                    })}
                    </tr>
                }
                </thead> }
                {
                    this.state.loading === true ? (<tbody>
                        <tr><td colSpan={this.props.columns.length}>Loading...</td></tr>
                    </tbody>) : 
                    (<tbody className="ui-table-body">
                        {
                            data.length === 0 ? <tr>
                                <td colSpan={this.props.columns.length}>No data found</td>
                            </tr> :
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
                    </tbody>)
                }
            </table>
            </div>
            {this.state.loading === true ? (<></>) : (
                paginationUi
            )
            }
        </div>)
    }
}

export default Table;