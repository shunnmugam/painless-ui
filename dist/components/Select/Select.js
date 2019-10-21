import React from 'react';
import './Select.css';
import Option from '../Option/Option';
import WatchClickOutside from '../WatchClickOutside/WatchClickOutside';
class Select extends React.PureComponent {
    constructor() {
        super(...arguments);
        /*
         * state
         */
        this.state = {
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
        this.dropDownMenuRef = React.createRef();
        /*
         * height of menu
         */
        this.heightOfMenu = 0;
        /*
         * event remember
         */
        this.eventScheduler = {};
        /*
         * search timer
         */
        this.searchTimer = null;
        /*
         * search keyword
         */
        this.searchKeyword = '';
        /*
         * toggle event for open/close
         * @params -
         * @return void
         */
        this.toggle = (status = undefined) => {
            if (status === undefined || this.state.isOpen !== status) {
                const isOpen = status !== undefined ? !status : this.state.isOpen;
                let menuStyle = { ...this.state.menuStyle };
                if (isOpen === false) { //open
                    menuStyle.display = 'block';
                    menuStyle.maxHeight = this.heightOfMenu;
                    menuStyle.visibility = 'visible';
                    if (this.props.onOpen !== undefined && typeof this.props.onOpen === 'function') {
                        this.props.onOpen();
                    }
                }
                else { //close
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
                        });
                        if (!isOpen) {
                            if (this.eventScheduler.onOpen !== undefined) {
                                this.eventScheduler.onOpen();
                                this.eventScheduler.onOpen = undefined;
                            }
                        }
                        else {
                            if (this.eventScheduler.onClose !== undefined) {
                                this.eventScheduler.onClose();
                                this.eventScheduler.onClose = undefined;
                            }
                        }
                    }, 500);
                });
            }
        };
        /*
         * option onclick event
         * @params value:any
         * @params child:React.Children
         * @params text:any
         * @return void
         */
        this.onClick = (value, child, text = undefined) => {
            if (this.props.multiple === true) {
                const isRemoved = this.unSelect(value);
                setTimeout(() => {
                    const selectedDetails = [...this.state.selectedDetails];
                    if (isRemoved === false) {
                        selectedDetails.push({
                            value,
                            child,
                            text
                        });
                        this.setState({
                            selectedDetails
                        });
                    }
                    if (this.props.onChange !== undefined && typeof this.props.onChange === 'function') {
                        this.props.onChange(selectedDetails);
                    }
                }, 0);
            }
            else {
                const selectedDetails = [{
                        value,
                        child,
                        text
                    }];
                this.setState({
                    selectedDetails
                });
                if (this.props.onChange !== undefined && typeof this.props.onChange === 'function') {
                    this.props.onChange(selectedDetails[0]);
                }
                this.toggle();
            }
        };
        this.onKeyPressed = (e) => {
            if (e.target.className === 'ui-select-container') {
                this.searchKeyword += e.key;
                if (this.searchTimer) {
                    clearTimeout(this.searchTimer);
                }
                this.searchTimer = setTimeout(() => {
                    let selected = false;
                    React.Children.forEach(this.props.children, (child, i) => {
                        if (child.type === Option) {
                            const { value, children, text } = child.props;
                            if (text && text.toLowerCase().includes(this.searchKeyword) && selected === false) {
                                this.onClick(value, children, text);
                                selected = true;
                            }
                        }
                    });
                    this.searchKeyword = '';
                }, 500);
            }
        };
        this.onMouseEnter = () => {
            if (this.props.hover && this.state.isOpen === false) {
                this.toggle();
            }
        };
        this.onMouseLeave = () => {
            if (this.props.hover && this.state.isOpen === true) {
                this.toggle();
            }
        };
        /*
         * find value from selected array
         * @params value:string
         */
        this.findValue = (value) => {
            return this.state.selectedDetails.find((s) => {
                return s.value === value;
            });
        };
        /*
         * un select (remove from select)
         * @params value:any
         * @return isRemoved: boolean
         */
        this.unSelect = (value) => {
            const i = this.state.selectedDetails.findIndex((s) => {
                return s.value === value;
            });
            if (i !== -1) {
                const selectedDetails = [...this.state.selectedDetails];
                selectedDetails.splice(i, 1);
                this.setState({
                    selectedDetails
                });
                return true;
            }
            return false;
        };
        /*
         * set height of select box for animation
         * @params -
         * @return void
         */
        this.setHeight = () => {
            this.setState({
                menuStyle: {
                    display: 'block',
                    maxHeight: 'auto',
                    visibility: 'hidden'
                }
            }, () => {
                let height = this.dropDownMenuRef.current.getBoundingClientRect().height;
                if (height !== 0)
                    this.heightOfMenu = height;
                this.setState({
                    menuStyle: {
                        display: 'none',
                        // maxHeight: 0,
                        visibility: 'show'
                    }
                });
            });
        };
        /*
         * search
         * @params e: $event
         * @return void
         */
        this.search = (e) => {
            e.stopPropagation();
            this.setState({
                searchKeyword: e.target.value
            });
        };
        /*
         * clear selected items
         * @params e: $event
         * @return void
         */
        this.clearAll = (e) => {
            e.stopPropagation();
            this.setState({
                selectedDetails: []
            }, () => {
                if (this.props.onChange) {
                    this.props.onChange(this.props.multiple === true ? this.state.selectedDetails : {});
                }
            });
        };
    }
    /*
     * component will mount (lifecycle)
     * @params -
     * @return void
     */
    componentWillMount() {
        if (this.props.value !== undefined) {
            if (this.props.multiple === true) {
                const childrens = React.Children.toArray(this.props.children).filter((child) => {
                    return this.props.value && -1 !== this.props.value.indexOf(child.props.value);
                });
                const selectedDetails = [];
                childrens.forEach(children => {
                    selectedDetails.push({
                        value: children.props.value,
                        text: children.props.text || children.props.value,
                    });
                });
                this.setState({
                    selectedDetails
                });
            }
            else {
                const children = React.Children.toArray(this.props.children).find((child) => {
                    return child.props.value === this.props.value;
                });
                const selectedDetails = [{
                        value: children.props.value,
                        text: children.props.text || children.props.value,
                    }];
                this.setState({
                    selectedDetails
                });
            }
        }
    }
    /*
     * component did mount (lifecycle)
     * @params -
     * @return void
     */
    componentDidMount() {
        this.setHeight();
    }
    /*
     * component did update (lifecycle)
     * @params preveProps:object
     * @return void
     */
    componentDidUpdate(prevProps) {
        const asyncFunc = () => {
            let timer = null;
            if (this.state.menuClassName === 'toggle') {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    this.setHeight();
                }, 500);
            }
            else {
                this.setHeight();
            }
        };
        if (React.Children.toArray(this.props.children).length !== React.Children.toArray(prevProps.children).length) {
            if (this.state.menuClassName !== 'closed') {
                this.eventScheduler = {
                    onClose: asyncFunc
                };
            }
            else {
                asyncFunc();
            }
        }
    }
    /*
     * render
     */
    render() {
        return (React.createElement(WatchClickOutside, { style: { display: "initial" }, onClickOutside: () => this.toggle(false) },
            React.createElement("div", { onKeyDown: this.onKeyPressed, tabIndex: 0, className: "ui-select-container", style: { maxWidth: this.props.width || '300px' } },
                React.createElement("label", { className: "ui-select-label" }, this.props.label),
                React.createElement("div", { onMouseLeave: this.onMouseLeave, onMouseEnter: this.onMouseEnter, className: "dropdown", style: { height: this.props.height || 'auto' } },
                    React.createElement("div", { onClick: () => this.toggle(), className: "select " + (this.state.selectedDetails.length === 0 ? 'empty ' : 'non-empty ')
                            + (this.props.multiple === true ? 'multiple ' : 'single ') },
                        this.state.selectedDetails.length === 0 ? React.createElement("span", { className: "ui-select-placeholder" }, this.state.placeholder || 'Please select') :
                            (this.props.multiple !== true ?
                                React.createElement("span", null, this.state.selectedDetails[0].text || this.state.selectedDetails[0].child) :
                                React.createElement("div", { className: "ui-select-multiple-select-container" }, this.state.selectedDetails.map((o, i) => {
                                    return React.createElement("span", { key: 'ui-multi-select-' + i, className: "ui-multi-select-wrapper" },
                                        React.createElement("span", { className: "ui-multi-select-text" }, o.text || o.child),
                                        React.createElement("span", { onClick: (e) => {
                                                e.stopPropagation();
                                                this.unSelect(o.value);
                                            }, className: "close-btn" }, "x"));
                                }))),
                        React.createElement("i", { className: "fa fa-chevron-left", onClick: this.clearAll }, "x")),
                    React.createElement("div", { className: "dropdown-menu " + this.state.menuClassName, ref: this.dropDownMenuRef, style: this.state.menuStyle },
                        React.createElement("div", { className: "ui-select-search" },
                            React.createElement("input", { onClick: (e) => e.stopPropagation(), onChange: this.search, type: "text" })),
                        React.createElement("ul", null, React.Children.map(this.props.children, (child, i) => {
                            if (child.type === Option) {
                                const { value, children, text, className, ...customProps } = child.props;
                                if (this.state.searchKeyword === '' || (text && text.toLowerCase().includes(this.state.searchKeyword))) {
                                    return (React.createElement("li", Object.assign({ className: (className ? className : '') +
                                            (this.props.multiple !== true && this.state.selectedDetails[0] !== undefined && this.state.selectedDetails[0].value === value ? ' selected' : '')
                                            + (this.props.multiple === true && this.findValue(value) !== undefined ? ' selected' : ''), onClick: () => this.onClick(value, children, text) }, customProps), children));
                                }
                                else {
                                    return React.createElement(React.Fragment, null);
                                }
                            }
                        })))))));
    }
}
export default Select;
