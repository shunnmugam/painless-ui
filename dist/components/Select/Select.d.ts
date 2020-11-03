import React from 'react';
import './Select.css';
interface SelectProps {
    className?: string;
    label?: any;
    icon?: any;
    multiple?: boolean;
    width?: string | number;
    height?: string | number;
    placeholder?: string;
    value?: string | number | Array<any>;
    hover?: boolean;
    disabled?: boolean;
    searchable?: boolean;
    removeIcon?: any;
    inValidValueCallback?: Function;
    onOpen?: Function;
    onClose?: Function;
    onChange?: Function;
    onSearch?: Function;
    [key: string]: any;
}
declare class Select extends React.PureComponent<SelectProps> {
    state: any;
    private dropDownMenuRef;
    private heightOfMenu;
    private eventScheduler;
    private searchTimer;
    private searchKeyword;
    private toggle;
    private onClick;
    private onKeyPressed;
    private onMouseEnter;
    private onMouseLeave;
    private findValue;
    private unSelect;
    private setHeight;
    private search;
    private clearAll;
    static getDerivedStateFromProps(props: any, state: any): {
        fromLocal: boolean;
        selectedDetails?: undefined;
        inValidValues?: undefined;
    } | {
        selectedDetails: any;
        inValidValues: any[];
        fromLocal?: undefined;
    } | {
        selectedDetails: any;
        fromLocal?: undefined;
        inValidValues?: undefined;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    render(): JSX.Element;
}
export default Select;
