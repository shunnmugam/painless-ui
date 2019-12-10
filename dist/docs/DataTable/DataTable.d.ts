import React from 'react';
declare class DataTableExample extends React.Component {
    state: {
        loading: boolean;
        totalData: number;
        data: any[];
        columns: ({
            name: string;
            selector: string;
            sortable: boolean;
            filter?: undefined;
            render?: undefined;
        } | {
            name: string;
            selector: string;
            sortable: boolean;
            filter: boolean;
            render?: undefined;
        } | {
            name: string;
            render: (row: any, column: any) => JSX.Element;
            selector?: undefined;
            sortable?: undefined;
            filter?: undefined;
        })[];
    };
    getDatasFromApi(page: any, limit: any): void;
    componentWillMount(): void;
    render(): JSX.Element;
}
export default DataTableExample;
