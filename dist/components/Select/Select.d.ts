import React from 'react';
import './Select.css';
interface SelectProps {
    className?: string;
    label?: any;
    multiple?: boolean;
    width?: string | number;
    height?: string | number;
    placeholder?: string;
    value?: string | Array<any>;
    hover?: boolean;
    onOpen?: Function;
    onClose?: Function;
    onChange?: Function;
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
    componentWillMount(): void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    render(): JSX.Element;
}
export default Select;
