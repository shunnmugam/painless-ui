import React from 'react';
import './TabGroup.css';
import Tab from '../Tab/Tab';
class TabGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: this.props.defaultActive !== undefined ? this.props.defaultActive : 0,
            visibleStatus: false,
            prevLiIndex: -1,
            lastLiIndex: 0,
            isScrollable: false,
            visibleWidth: '1000',
            isNext: false,
            ul: {
                width: '100%',
                left: 0,
                margin: this.props.centerAlign === true ? '0 auto' : ''
            },
            activeBar: {
                width: 0,
                left: 0
            }
        };
        this.calculateDimonsions = () => {
            if (this.containerRef.current) {
                const tabContainer = this.containerRef.current.querySelector('.ui-tabs');
                const visibleWidth = tabContainer.getBoundingClientRect().width;
                let isScrollable = false;
                let isNext = false;
                if (visibleWidth < this.state.ul.width) {
                    isScrollable = true;
                    isNext = true;
                }
                this.setState({
                    visibleWidth,
                    isScrollable,
                    isNext
                }, () => {
                    this.setNext();
                    this.setPrev();
                    this.setActiveTab(this.state.activeIndex);
                });
            }
        };
        this.setPrev = () => {
            const ul = this.containerRef.current.querySelector('.nav.nav-tabs');
            const left = this.state.ul.left;
            let totalWidth = 0;
            let i = 0;
            let prevLiIndex = 0;
            for (let li of ul.children) {
                if (totalWidth < (-left)) {
                    prevLiIndex = i;
                }
                totalWidth += li.getBoundingClientRect().width;
                i++;
            }
            this.setState({
                prevLiIndex
            });
        };
        this.setNext = () => {
            const tabContainer = this.containerRef.current.querySelector('.ui-tabs');
            const visibleWidth = tabContainer.getBoundingClientRect().width;
            const ul = this.containerRef.current.querySelector('.nav.nav-tabs');
            const left = this.state.ul.left;
            let totalWidth = 0;
            let isLastClass = false;
            let i = 0;
            for (let li of ul.children) {
                totalWidth += li.getBoundingClientRect().width;
                if (!isLastClass && totalWidth > (visibleWidth - left)) {
                    isLastClass = true;
                    //check its last
                    if (ul.children.length - 1 === i && i === this.state.lastLiIndex - 1) {
                        i = i + 1;
                    }
                    this.setState({
                        lastLiIndex: i
                    });
                }
                i++;
            }
            let isNext = true;
            if (Math.round(-left) === parseInt(this.state.ul.width) - visibleWidth) {
                isNext = false;
            }
            this.setState({
                isNext
            });
        };
        this.moveRight = () => {
            if (this.state.visibleWidth < this.state.ul.width) {
                const ul = this.containerRef.current.querySelector('.nav.nav-tabs');
                let totalWidth = 0;
                for (let li of ul.children) {
                    totalWidth += li.getBoundingClientRect().width;
                    if (li.classList.contains('last')) {
                        break;
                    }
                }
                this.setState({
                    ul: {
                        width: this.state.ul.width,
                        left: parseInt(this.state.visibleWidth) - totalWidth,
                        margin: this.props.centerAlign === true ? '0 auto' : ''
                    }
                }, () => {
                    this.setNext();
                    this.setPrev();
                    this.setActiveTab(this.state.activeIndex);
                });
            }
        };
        this.moveLeft = () => {
            if (this.state.visibleWidth < this.state.ul.width) {
                const ul = this.containerRef.current.querySelector('.nav.nav-tabs');
                const prevLi = ul.querySelector('li.prev');
                let totalWidth = 0;
                if (prevLi !== null) {
                    for (let li of ul.children) {
                        if (li.classList.contains('prev')) {
                            break;
                        }
                        totalWidth += li.getBoundingClientRect().width;
                    }
                    this.setState({
                        ul: {
                            width: this.state.ul.width,
                            left: -totalWidth,
                            margin: this.props.centerAlign === true ? '0 auto' : ''
                        }
                    }, () => {
                        this.setNext();
                        this.setPrev();
                        this.setActiveTab(this.state.activeIndex);
                    });
                }
            }
        };
        this.setActiveTab = (index) => {
            this.setState({
                activeIndex: index
            });
            const ul = this.containerRef.current.querySelector('.nav.nav-tabs');
            let width = 0;
            let left = 0;
            let i = 0;
            if (this.props.centerAlign === true && this.state.ul.width !== '100%') {
                const center = this.containerRef.current.clientWidth / 2;
                const ulCenter = parseInt(this.state.ul.width) / 2;
                left = center - ulCenter;
            }
            for (let li of ul.children) {
                if (i === index) {
                    width = li.getBoundingClientRect().width;
                    break;
                }
                left += li.getBoundingClientRect().width;
                i++;
            }
            if (this.state.isScrollable === true) {
                left -= (-this.state.ul.left);
            }
            this.setState({
                activeBar: {
                    left: ((left / this.containerRef.current.clientWidth) * 100) + "%",
                    width
                }
            });
            if (this.props.onClick && typeof this.props.onClick === 'function') {
                this.props.onClick(index);
            }
        };
        React.Children.forEach(this.props.children, function (child) {
            if (child === null || child.type !== Tab) {
                throw new Error('`Tabgroup` children should be of type `Tab`.');
            }
        });
        this.containerRef = React.createRef();
    }
    setWidth() {
        let totalWidth = 0;
        const ul = this.containerRef.current.querySelector('.nav.nav-tabs');
        for (let li of ul.children) {
            totalWidth += li.getBoundingClientRect().width;
        }
        const tabContainer = this.containerRef.current.querySelector('.ui-tabs');
        const visibleWidth = tabContainer.getBoundingClientRect().width;
        this.setState({
            ul: {
                width: totalWidth,
                left: this.state.isScrollable === false ? 0 : parseInt(visibleWidth) - totalWidth,
                margin: this.props.centerAlign === true ? '0 auto' : ''
            }
        }, () => {
            this.calculateDimonsions();
            setTimeout(() => {
                this.setState({
                    visibleStatus: true,
                    ul: {
                        width: totalWidth,
                        left: this.state.isScrollable === false ? 0 : parseInt(visibleWidth) - totalWidth,
                        margin: this.props.centerAlign === true ? '0 auto' : ''
                    }
                });
            }, 0);
        });
        this.setActiveTab(this.state.activeIndex);
    }
    componentDidMount() {
        this.setWidth();
        window.addEventListener('resize', () => {
            this.setWidth();
        });
    }
    componentDidUpdate(oldProps) {
        if (this.props.children !== oldProps.children) {
            let totalWidth = 0;
            const ul = this.containerRef.current.querySelector('.nav.nav-tabs');
            for (let li of ul.children) {
                totalWidth += li.getBoundingClientRect().width;
            }
            this.setState({
                ul: {
                    width: totalWidth,
                    left: this.state.ul.left,
                    margin: this.props.centerAlign === true ? '0 auto' : ''
                }
            }, () => {
                this.calculateDimonsions();
                setTimeout(() => {
                    this.setState({
                        visibleStatus: true
                    });
                }, 1000);
            });
            // this.setActiveTab(0);
        }
    }
    render() {
        return (React.createElement("div", { style: { ...{ width: this.props.width || '100%' },
                ...this.props.style || {}
            }, className: "ui-tabgroup " + (this.state.visibleStatus === false ? 'v-hidden' : 'show'), ref: this.containerRef, id: this.props.id },
            React.createElement("div", { className: "ui-tabs ui-tabs-bg ui-tabs-scroll", style: {
                    backgroundColor: this.props.bgColor || '#4285f4'
                } },
                React.createElement("div", { onClick: this.moveLeft, className: "ui-tabs-scroll-left", style: { display: (this.state.isScrollable && this.state.ul.left !== 0) ? 'block' : 'none' } },
                    React.createElement("svg", { focusable: "false", "data-prefix": "fas", "data-icon": "chevron-left", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", className: "ui-tab-icon" },
                        React.createElement("path", { fill: "currentColor", d: "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z", className: "" }))),
                React.createElement("div", { className: 'ui-tabs-scroll-container' },
                    React.createElement("div", { className: "ui-tab-active-bar", style: { ...this.state.activeBar, ...{ backgroundColor: this.props.activeColor || '#ffc107' } } }),
                    React.createElement("ul", { className: "nav nav-tabs", role: "tablist", style: this.state.ul }, React.Children.map(this.props.children, (tab, i) => {
                        return (React.createElement("li", { role: "tab", onClick: () => this.setActiveTab(i), className: (this.state.activeIndex === i ? ' active ' : '') +
                                (this.state.lastLiIndex === i ? 'last' : (this.state.prevLiIndex === i ? 'prev' : '')) },
                            React.createElement("a", { style: {
                                    color: this.props.color || 'white'
                                }, onClick: (e) => e.preventDefault(), href: "#", className: this.state.activeIndex === i ? 'active' : '' }, tab)));
                    }))),
                React.createElement("div", { onClick: this.moveRight, className: "ui-tabs-scroll-right", style: { display: (this.state.isScrollable && this.state.isNext ? 'block' : 'none') } },
                    React.createElement("svg", { focusable: "false", "data-prefix": "fas", "data-icon": "chevron-right", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", className: "ui-tab-icon" },
                        React.createElement("path", { fill: "currentColor", d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z", className: "" }))))));
    }
}
export default TabGroup;
