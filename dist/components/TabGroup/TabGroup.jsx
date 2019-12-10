import React from 'react';
import './TabGroup.css';
import Tab from '../Tab/Tab';
class TabGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            visibleStatus: false,
            prevLiIndex: -1,
            lastLiIndex: 0,
            isScrollable: false,
            visibleWidth: '1000',
            isNext: false,
            ul: {
                width: '100%',
                left: 0
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
                        left: parseInt(this.state.visibleWidth) - totalWidth
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
                            left: -totalWidth
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
                    left,
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
    componentDidMount() {
        let totalWidth = 0;
        const ul = this.containerRef.current.querySelector('.nav.nav-tabs');
        for (let li of ul.children) {
            totalWidth += li.getBoundingClientRect().width;
        }
        this.setState({
            ul: {
                width: totalWidth,
                left: this.state.ul.left,
            }
        }, () => {
            this.calculateDimonsions();
            setTimeout(() => {
                this.setState({
                    visibleStatus: true
                });
            }, 0);
        });
        this.setActiveTab(this.state.activeIndex);
        window.addEventListener('resize', this.calculateDimonsions);
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
        return (<div style={{ ...{ width: this.props.width || '100%' },
            ...this.props.style || {}
        }} className={"ui-tabgroup " + (this.state.visibleStatus === false ? 'v-hidden' : 'show')} ref={this.containerRef}> 
                <div className="ui-tabs ui-tabs-bg ui-tabs-scroll" style={{
            backgroundColor: this.props.bgColor || '#4285f4'
        }}>

                    <div onClick={this.moveLeft} className="ui-tabs-scroll-left" style={{ display: (this.state.isScrollable && this.state.ul.left !== 0) ? 'block' : 'none' }}>
                        <i className="material-icons ui-sm">chevron_left</i>
                    </div>

                    <div className='ui-tabs-scroll-container'>
                    <div className="ui-tab-active-bar" style={{ ...this.state.activeBar, ...{ backgroundColor: this.props.activeColor || '#ffc107' } }}></div>
                    <ul className="nav nav-tabs" role="tablist" style={this.state.ul}>
                        {React.Children.map(this.props.children, (tab, i) => {
            return (<li role="tab" onClick={() => this.setActiveTab(i)} className={(this.state.activeIndex === i ? ' active ' : '') +
                (this.state.lastLiIndex === i ? 'last' : (this.state.prevLiIndex === i ? 'prev' : ''))}>
                                <a style={{
                color: this.props.color || 'white'
            }} onClick={(e) => e.preventDefault()} href="#" className={this.state.activeIndex === i ? 'active' : ''}>{tab}</a>
                            </li>);
        })}
                        
                    </ul>
                    </div>

                    <div onClick={this.moveRight} className="ui-tabs-scroll-right" style={{ display: (this.state.isScrollable && this.state.isNext ? 'block' : 'none') }}>
                        <i className="material-icons ui-sm">chevron_right</i>
                    </div>                        
                </div>
                
            </div>);
    }
}
export default TabGroup;
