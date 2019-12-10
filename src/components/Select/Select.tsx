import React from 'react';

import './Select.css';
import Option from '../Option/Option';
import WatchClickOutside from '../WatchClickOutside/WatchClickOutside';

interface SelectProps {
    className?: string
    label?: any
    multiple?: boolean
    width?: string | number
    height?: string | number
    placeholder?: string
    value?: string | Array<any>
    hover?: boolean
    disabled?: boolean
    searchable?: boolean
    onOpen?: Function
    onClose?: Function
    onChange?: Function
    onSearch?: Function
    [key: string]: any
}

interface EventScheduler {
    onOpen?: Function
    onClose?: Function
}
class Select extends React.PureComponent<SelectProps> {
    /*
     * state
     */
    public state: any = {
        isOpen: false,
        menuStyle: {},
        menuClassName: 'closed',
        selectedDetails: [],
        searchKeyword: '',
        placeholder: this.props.placeholder,
        fromLocal: false
    };
    /*
     * dropdown reference
     */
    private dropDownMenuRef: any = React.createRef();
    /*
     * height of menu
     */
    private heightOfMenu: number = 0;
    /*
     * event remember
     */
    private eventScheduler: EventScheduler = {};
    /*
     * search timer
     */
    private searchTimer: any = null;
    /*
     * search keyword
     */
    private searchKeyword = '';

    /*
     * toggle event for open/close
     * @params -
     * @return void
     */
    private toggle = (status: boolean | undefined = undefined) => {
        if(this.props.disabled !== true && (status === undefined || this.state.isOpen !== status)) {
            const isOpen = status !== undefined ? !status : this.state.isOpen;
            let menuStyle = { ...this.state.menuStyle };
            if (isOpen === false) { //open
                menuStyle.display = 'block';
                menuStyle.maxHeight = this.heightOfMenu > 300 ? 300 : this.heightOfMenu;
                if(this.heightOfMenu > 300) {
                    menuStyle.yOverflow = 'auto'
                }
                menuStyle.visibility = 'visible';

                if (this.props.onOpen !== undefined && typeof this.props.onOpen === 'function') {
                    this.props.onOpen();
                }
            } else { //close
                menuStyle.maxHeight = 0;
                menuStyle.visibility = 'visible';

                if (this.props.onClose !== undefined && typeof this.props.onClose === 'function') {
                    this.props.onClose();
                }
            }
            this.setState({
                menuClassName: 'toggle',
                menuStyle: menuStyle,
                isOpen: !isOpen,
                fromLocal: true
            }, () => {
                setTimeout(() => {
                    this.setState({
                        menuClassName: isOpen ? 'closed' : 'open',
                        fromLocal: true
                    })

                    if (!isOpen) {
                        if (this.eventScheduler.onOpen !== undefined) {
                            this.eventScheduler.onOpen();
                            this.eventScheduler.onOpen = undefined;
                        }
                    } else {
                        if (this.eventScheduler.onClose !== undefined) {
                            this.eventScheduler.onClose();
                            this.eventScheduler.onClose = undefined;
                        }
                    }
                }, 500)
            })
        }
    }

    /*
     * option onclick event
     * @params value:any
     * @params child:React.Children
     * @params text:any
     * @return void
     */
    private onClick = (value, child, text = undefined, data = undefined): void => {
        if (this.props.multiple === true) {
            const isRemoved = this.unSelect(value);
            setTimeout(() => {
                const selectedDetails: any = [...this.state.selectedDetails];
                if(isRemoved === false) {
                    selectedDetails.push({
                        value,
                        child,
                        text,
                        data
                    })
                    this.setState({
                        selectedDetails,
                        fromLocal: true
                    });
                }

                if (this.props.onChange !== undefined && typeof this.props.onChange === 'function') {
                    this.props.onChange(selectedDetails);
                }
            }, 0)
        } else {
            const selectedDetails = [{
                value,
                child,
                text,
                data
            }]
            this.setState({
                selectedDetails,
                fromLocal: true
            });
            if (this.props.onChange !== undefined && typeof this.props.onChange === 'function') {
                this.props.onChange(selectedDetails[0]);
            }
            this.toggle();
        }


    }

    private onKeyPressed = (e) => {
        if(e.target.className === 'ui-select-container' && this.props.disabled !== true) {
            this.searchKeyword += e.key;
            if (this.searchTimer) {
                clearTimeout(this.searchTimer);
            }
            this.searchTimer = setTimeout(() => {
                let selected: boolean = false;
                React.Children.forEach(this.props.children, (child: any, i) => {
                    if (child.type === Option) {
                        const { value, children, text } = child.props;
                        if (( (text && text.toLowerCase().includes(this.searchKeyword)) ||
                         (children && children.toLowerCase().includes(this.searchKeyword))) && selected === false) {
                            this.onClick(value, children, text);
                            selected = true;
                        }
                    }
                })
                this.searchKeyword = '';
            }, 500);
        }
    }

    private onMouseEnter = () => {
        if (this.props.hover && this.state.isOpen === false) {
            this.toggle()
        }
    }

    private onMouseLeave = () => {
        if (this.props.hover && this.state.isOpen === true) {
            this.toggle()
        }
    }

    /*
     * find value from selected array
     * @params value:string
     */
    private findValue = (value): undefined | object => {
        return this.state.selectedDetails.find((s) => {
            return s.value === value;
        })
    }

    /*
     * un select (remove from select)
     * @params value:any
     * @return isRemoved: boolean
     */
    private unSelect = (value): boolean => {
        const i = this.state.selectedDetails.findIndex((s) => {
            return s.value === value;
        });
        if (i !== -1) {
            const selectedDetails = [...this.state.selectedDetails];
            selectedDetails.splice(i, 1);
            this.setState({
                selectedDetails,
                fromLocal: true
            })
            if(this.props.onChange) {
                this.props.onChange(selectedDetails);
            }
            return true;
        }
        return false;
    }

    /*
     * set height of select box for animation
     * @params -
     * @return void
     */
    private setHeight = (fallbackHeight:number|undefined = undefined): void => {
        this.setState({
            menuStyle: {
                display: 'block',
                maxHeight: 'auto',
                visibility: 'hidden',
                fromLocal: true
            }
        }, () => {
            let height = this.dropDownMenuRef.current.getBoundingClientRect().height;
            if(height !== 0)
                this.heightOfMenu = height+50;
            if(fallbackHeight && height < fallbackHeight) {
                this.heightOfMenu = fallbackHeight + 50;
            }
            this.setState({
                menuStyle: {
                    display: 'none',
                   // maxHeight: 0,
                    visibility: 'show',
                    fromLocal: true
                }
            })
        });

    }

    /*
     * search
     * @params e: $event
     * @return void
     */
    private search = (e): void => {
        e.stopPropagation();
        this.setState({
            searchKeyword: e.target.value,
            fromLocal: true
        });
        if (this.props.onSearch !== undefined && typeof this.props.onSearch === 'function') {
            this.props.onSearch(e.target.value);
        }
    }

    /*
     * clear selected items
     * @params e: $event
     * @return void
     */
    private clearAll = (e): void => {
        e.stopPropagation();
        this.setState({
            selectedDetails : [],
            fromLocal: true
        },() => {
            if(this.props.onChange) {
                this.props.onChange(this.props.multiple === true ? this.state.selectedDetails : {});
            }
        });
    }

    static getDerivedStateFromProps(props, state) {
        if(state.fromLocal === true) {
            return {
                fromLocal : false
            }
        }
        if (props.value !== undefined) {
            if (props.multiple === true) {
                const childrens: any = React.Children.toArray(props.children).filter((child: any) => {
                    return props.value && -1 !== props.value.indexOf(child.props.value);
                })
                const selectedDetails: any = [];
                childrens.forEach(children => {
                    selectedDetails.push({
                        value: children.props.value,
                        text: children.props.text || children.props.value,
                        child: children.props.children,
                        data: children.props.data
                    });
                });

                return {
                    selectedDetails
                }
            } else {
                const children: any = React.Children.toArray(props.children).find((child: any) => {
                    return child.props.value === props.value;
                })
                const selectedDetails = [{
                    value: children.props.value,
                    text: children.props.text || children.props.value,
                    child: children.props.children,
                    data: children.props.data
                }];
                return {
                    selectedDetails
                }

            }
        }
        return null;
    }

    /*
     * component did mount (lifecycle)
     * @params -
     * @return void
     */
    componentDidMount(): void {
        this.setHeight();
    }

    /*
     * component did update (life cycle)
     * @params prevProps:object
     * @return void
     */
    componentDidUpdate(prevProps): void {
        const asyncFunc = (fallbackHeight:number|undefined = undefined) => {
            let timer:any = null;
            if(this.state.menuClassName === 'toggle') {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    this.setHeight(fallbackHeight);
                },500);
            } else {
                this.setHeight(fallbackHeight);
            }
        }
        
        if (React.Children.toArray(this.props.children).length !== React.Children.toArray(prevProps.children).length ) {
            const fallbackHeight = React.Children.toArray(this.props.children).length * 30;
            if (this.state.menuClassName !== 'closed') {
                this.eventScheduler = {
                    onClose: () => {
                        asyncFunc(fallbackHeight)
                    }
                }
            } else {
                asyncFunc(fallbackHeight);
            }

        }
    }

    /*
     * render
     */
    render(): JSX.Element {
        const { className,label,multiple, width, height, placeholder, value, hover, disabled, searchable, onOpen, onChange, onClose,onSearch, ...customProps} = {...this.props}
        return (
            <WatchClickOutside style={{ display: "initial" }} onClickOutside={() => this.toggle(false)}>
                <div onKeyDown={this.onKeyPressed}
                    tabIndex={0} className="ui-select-container" style={{ maxWidth: width || '300px' }} {...customProps}>
                    <label className="ui-select-label">{label}</label>
                    <div onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter} className="dropdown" style={{ height: height || 'auto' }}>
                        <div onClick={() => this.toggle()} className={"select " + (this.state.selectedDetails.length === 0 ? 'empty ' : 'non-empty ') 
                     + (multiple === true ? 'multiple ' : 'single ') + (disabled === true ? 'disabled' : '') }>
                            {this.state.selectedDetails.length === 0 ? <span className="ui-select-placeholder">
                                {this.state.placeholder || 'Please select'}
                            </span> :
                                (multiple !== true ?
                                    <span>{this.state.selectedDetails[0].child || this.state.selectedDetails[0].text}</span> :
                                    <div className="ui-select-multiple-select-container">
                                        {
                                            this.state.selectedDetails.map((o, i) => {
                                                return <span key={'ui-multi-select-' + i} className="ui-multi-select-wrapper">
                                                    <span className="ui-multi-select-text">
                                                        {o.child || o.text}
                                                    </span>
                                                    {disabled!==true ?
                                                    <span onClick={(e) => {
                                                        e.stopPropagation();
                                                        this.unSelect(o.value);
                                                    }
                                                    } className="close-btn">x</span>
                                                : <></> }
                                                </span>
                                            })
                                        }
                                    </div>
                                )}
                                {disabled !== true ? <i className="fa fa-chevron-left" onClick={this.clearAll}>x</i> : <></>}
                            
                        </div>
                        <div className={"dropdown-menu " + this.state.menuClassName} ref={this.dropDownMenuRef} style={this.state.menuStyle}>
                            {searchable === true ? 
                            <div className="ui-select-search">
                                <input onClick={(e) => e.stopPropagation()} onChange={this.search} type="text" value={this.state.searchKeyword} />
                                {!this.state.searchKeyword || this.state.searchKeyword === "" ?
                                <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                                : <span className="search-icon" onClick={(e) => {
                                    e.stopPropagation();
                                    this.setState({
                                        searchKeyword : "",
                                        fromLocal: true
                                    })
                                }}>x</span> }
                            </div> : <></> }
                            <ul>
                                {
                                    React.Children.map(this.props.children, (child: any, i) => {
                                        if (child.type === Option) {
                                            const { value, children, text, className, data, ...customProps } = child.props;
                                            if (this.state.searchKeyword === '' || (text && text.toLowerCase().includes(this.state.searchKeyword)) || 
                                            // (value.toLowerCase().includes(this.state.searchKeyword))  ||
                                            (children.toLowerCase().includes(this.state.searchKeyword)) ) {

                                                return (<li className={(className ? className : '') +
                                                    (multiple !== true && this.state.selectedDetails[0] !== undefined && this.state.selectedDetails[0].value === value ? ' selected' : '')
                                                    + (multiple === true && this.findValue(value) !== undefined ? ' selected' : '')
                                                }
                                                    onClick={() => this.onClick(value, children, text, data)} {...customProps}>
                                                    {children}
                                                </li>)
                                            } else {
                                                return <></>;
                                            }

                                        }
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </WatchClickOutside>
        )
    }
}

export default Select;