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
    [key: string]: any;
}
interface Columns {
    name: string;
    sortable?: boolean;
    searchable?: boolean;
    filter?: boolean;
    render?: Function;
    onSort?: Function;
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
    setSortController(sortBy: any): void;
    search(d: Array<any>): Array<any>;
    sort(d: Array<any>): Array<any>;
    filter(d: Array<any>): Array<any>;
    paginate(d: Array<any>): any;
    pageChange(page: any): void;
    static getDerivedStateFromProps(nextProps: any, state: any): {
        localChange: boolean;
        loading?: undefined;
    } | {
        loading: any;
        localChange?: undefined;
    };
    render(): JSX.Element;
}
export default Table;
