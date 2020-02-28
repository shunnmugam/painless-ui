import React from 'react';
import './Table.css';
interface TableProps {
    className?: string;
    containerStyle?: object;
    data: Array<object> | any;
    dataType?: string;
    columns: Array<typeArrayColumns | typeObjectColumns>;
    responsive?: boolean;
    serverSide?: boolean;
    style?: object;
    loading?: boolean;
    paginationOptions?: PaginationOptions;
    searchOptions?: SearchOptions;
    sortOptions?: SortOptions;
    noHeader?: boolean;
    noBg?: boolean;
    border?: boolean;
    [key: string]: any;
}
interface Columns {
    className?: string;
    name: string;
    sortable?: boolean;
    searchable?: boolean;
    filter?: boolean;
    rowSpan?: any;
    colSpan?: any;
    render?: Function;
    onSort?: Function;
    filterRender?: Function;
    filterData?: Function;
    onFilter?: Function;
}
interface typeArrayColumns extends Columns {
    selector?: string;
}
interface typeObjectColumns extends Columns {
    selector: string;
}
interface PaginationOptions {
    pagination?: boolean;
    totalNoOfData?: number;
    currentPage?: number;
    limit?: number;
    beforeChange?: Function;
    onChange?: Function;
}
interface SearchOptions {
    searchable?: boolean;
    onSearch?: Function;
    searchComponent?: Function;
}
interface SortOptions {
    onSort?: Function;
}
declare class Table extends React.PureComponent<TableProps> {
    state: {
        currentPage: number;
        sortBy: string;
        loading: boolean;
        order: string;
        searchKeyword: string;
        filterColumnData: {};
    };
    rowSpanSkipDetails: {};
    colSpanSkipDetails: {};
    setSortController(sortBy: any): void;
    search(d: Array<any>): Array<any>;
    sort(d: Array<any>): Array<any>;
    filter(d: Array<any>): Array<any>;
    paginate(d: Array<any>): any;
    pageChange(page: any): void;
    getRowSpan(column: Columns, c: any, r: any): number;
    getColSpan(column: Columns, c: any, r: any): number;
    static getDerivedStateFromProps(nextProps: any, state: any): {
        localChange: boolean;
        loading?: undefined;
    } | {
        loading: any;
        localChange?: undefined;
    };
    componentWillUpdate(prevProps: any): void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    render(): JSX.Element;
}
export default Table;
