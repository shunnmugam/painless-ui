import React from 'react';

import './Select.scss';
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
    onOpen?: Function
    onClose?: Function
    onChange?: Function
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
        placeholder: this.props.placeholder
    };
    /*
     * dropdown referance
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
        if(status === undefined || this.state.isOpen !== status) {
            const isOpen = status !== undefined ? !status : this.state.isOpen;
            let menuStyle = { ...this.state.menuStyle };
            if (isOpen === false) { //open
                menuStyle.display = 'block';
                menuStyle.maxHeight = this.heightOfMenu;
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
                isOpen: !isOpen
            }, () => {
                setTimeout(() => {
                    this.setState({
                        menuClassName: isOpen ? 'closed' : 'open'
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
    private onClick = (value, child, text = undefined): void => {
        if (this.props.multiple === true) {
            const isRemoved = this.unSelect(value);
            setTimeout(() => {
                const selectedDetails: any = [...this.state.selectedDetails];
                if(isRemoved === false) {
                    selectedDetails.push({
                        value,
                        child,
                        text
                    })
                    this.setState({
                        selectedDetails
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
                text
            }]
            this.setState({
                selectedDetails
            });
            if (this.props.onChange !== undefined && typeof this.props.onChange === 'function') {
                this.props.onChange(selectedDetails);
            }
            this.toggle();
        }


    }

    private onKeyPressed = (e) => {
        this.searchKeyword += e.key;
        if (this.searchTimer) {
            clearTimeout(this.searchTimer);
        }
        this.searchTimer = setTimeout(() => {
            let selected: boolean = false;
            React.Children.forEach(this.props.children, (child: any, i) => {
                if (child.type === Option) {
                    const { value, children, text } = child.props;
                    if (text && text.toLowerCase().includes(this.searchKeyword) && selected === false) {
                        this.onClick(value, children, text);
                        selected = true;
                    }
                }
            })
            this.searchKeyword = '';
        }, 500)
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
                selectedDetails
            })
            return true;
        }
        return false;
    }

    /*
     * set height of select box for animation
     * @params -
     * @return void
     */
    private setHeight = (): void => {
        this.setState({
            menuStyle: {
                display: 'block',
                maxHeight: 'auto',
                visibility: 'hidden'
            }
        }, () => {
            let height = this.dropDownMenuRef.current.getBoundingClientRect().height;
            if(height !== 0)
                this.heightOfMenu = height;
            this.setState({
                menuStyle: {
                    display: 'none',
                   // maxHeight: 0,
                    visibility: 'show'
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
            searchKeyword: e.target.value
        });
    }

    /*
     * component will mount (lifecycle)
     * @params -
     * @return void
     */
    componentWillMount(): void {
        if (this.props.value !== undefined) {
            if (this.props.multiple === true) {
                const childrens: any = React.Children.toArray(this.props.children).filter((child: any) => {
                    return this.props.value && -1 !== this.props.value.indexOf(child.props.value);
                })
                const selectedDetails: any = [];
                childrens.forEach(children => {
                    selectedDetails.push({
                        value: children.props.value,
                        text: children.props.text || children.props.value,
                    });
                });
                this.setState({
                    selectedDetails
                })
            } else {
                const children: any = React.Children.toArray(this.props.children).find((child: any) => {
                    return child.props.value === this.props.value;
                })
                const selectedDetails = [{
                    value: children.props.value,
                    text: children.props.text || children.props.value,
                }];
                this.setState({
                    selectedDetails
                })

            }
        }
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
     * component did update (lifecycle)
     * @params preveProps:object
     * @return void
     */
    componentDidUpdate(prevProps): void {
        if (prevProps.children !== this.props.children) {
            if (this.state.menuClassName !== 'closed') {
                this.eventScheduler = {
                    onClose: this.setHeight
                }
            } else {
                this.setHeight();
            }

        }
    }

    /*
     * render
     */
    render(): JSX.Element {
        return (
            <WatchClickOutside style={{ display: "initial" }} onClickOutside={() => this.toggle(false)}>
                <div onKeyDown={this.onKeyPressed}
                    tabIndex={0} className="ui-select-container" style={{ maxWidth: this.props.width || '300px' }}>
                    <label className="ui-select-label">{this.props.label}</label>
                    <div onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter} className="dropdown" style={{ height: this.props.height || 'auto' }}>
                        <div onClick={() => this.toggle()} className="select">
                            {this.state.selectedDetails.length === 0 ? <span className="ui-select-placeholder">
                                {this.state.placeholder || 'Please select'}
                            </span> :
                                (this.props.multiple !== true ?
                                    <span>{this.state.selectedDetails[0].text || this.state.selectedDetails[0].child}</span> :
                                    <div className="ui-select-multiple-select-container">
                                        {
                                            this.state.selectedDetails.map((o, i) => {
                                                return <span key={'ui-multi-select-' + i} className="ui-multi-select-wrapper">
                                                    <span className="ui-multi-select-text">
                                                        {o.text || o.child}
                                                    </span>
                                                    <span onClick={(e) => {
                                                        e.stopPropagation();
                                                        this.unSelect(o.value);
                                                    }
                                                    } className="close-btn">x</span>
                                                </span>
                                            })
                                        }
                                    </div>
                                )}
                            <i className="fa fa-chevron-left"></i>
                        </div>
                        <div className={"dropdown-menu " + this.state.menuClassName} ref={this.dropDownMenuRef} style={this.state.menuStyle}>
                            <div className="ui-select-search">
                                <input onClick={(e) => e.stopPropagation()} onChange={this.search} type="text" />
                            </div>
                            <ul>
                                {
                                    React.Children.map(this.props.children, (child: any, i) => {
                                        if (child.type === Option) {
                                            const { value, children, text, className, ...customProps } = child.props;
                                            if (this.state.searchKeyword === '' || (text && text.toLowerCase().includes(this.state.searchKeyword))) {

                                                return (<li className={(className ? className : '') +
                                                    (this.props.multiple !== true && this.state.selectedDetails[0].value === value ? ' selected' : '')
                                                    + (this.props.multiple === true && this.findValue(value) !== undefined ? ' selected' : '')
                                                }
                                                    onClick={() => this.onClick(value, children, text)} {...customProps}>
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