import React from 'react';
import { withTheme } from '../../providers/ThemeProvider';
import './Slider.css';
import Control from './Control';
const calculateValue = (percentage, max, min) => {
    return Math.floor(((percentage - min) / 100) * (max - min)) + min;
};
const calculatePercentage = (value, max, min) => {
    const diff = max - min;
    return Math.floor(((value - min) / diff) * 100);
};
class Slider extends React.PureComponent {
    constructor(props) {
        super(props);
        this.ref = null;
        this.mainContainerRef = null;
        this.onChangeCalledTimer = null;
        this.lastCalled = 1;
        this.state = {
            position: calculatePercentage(this.props.value || this.props.min, this.props.max, this.props.min),
            value: this.props.value || this.props.min,
            position2: this.props.value || 0,
            value2: this.props.value || this.props.min,
            fromLocal: true
        };
        this.onChangeCallback = () => {
            if (this.props.onChange) {
                let value = this.state.value;
                if (this.props.range) {
                    value = [value, this.state.value2];
                }
                this.props.onChange(value);
            }
            clearTimeout(this.onChangeCalledTimer);
            this.onChangeCalledTimer = setTimeout(() => {
                this.onChangeComplete();
            }, 500);
        };
        this.onChangeComplete = () => {
            if (this.props.onChangeComplete) {
                let value = this.state.value;
                if (this.props.range) {
                    value = [value, this.state.value2];
                }
                this.props.onChangeComplete(value);
            }
        };
        this.dragHandler = (e) => {
            let { percentage, value } = this.getValueAndPercentage(e);
            if (percentage <= 100 && percentage >= 0 &&
                (!this.props.range || percentage < this.state.position2)) {
                if (this.props.step && value % this.props.step === 0) {
                    if (this.props.discrete) {
                        percentage = calculatePercentage(value, this.props.max, this.props.min);
                    }
                    this.setState({
                        position: percentage,
                        value: value,
                        fromLocal: true
                    }, this.onChangeCallback);
                }
                else {
                    this.setState({
                        position: percentage,
                        fromLocal: true
                        // value: value
                    }, this.onChangeCallback);
                }
            }
            this.lastCalled = 1;
        };
        this.dragHandler2 = (e) => {
            let { percentage, value } = this.getValueAndPercentage(e);
            if (percentage <= 100 && percentage >= 0 &&
                (!this.props.range || (percentage > this.state.position && this.state.value < value))) {
                if (this.props.step && value % this.props.step === 0) {
                    if (this.props.discrete) {
                        percentage = calculatePercentage(value, this.props.max, this.props.min);
                    }
                    this.setState({
                        position2: percentage,
                        value2: value,
                        fromLocal: true
                    }, this.onChangeCallback);
                }
                else {
                    this.setState({
                        position2: percentage,
                        fromLocal: true
                        // value2: value * (this.props.step || 1)
                    }, this.onChangeCallback);
                }
            }
            this.lastCalled = 2;
        };
        this.mouseUp = () => {
            document.removeEventListener('mousemove', this.dragHandler, true);
            document.removeEventListener('mousemove', this.dragHandler2, true);
            if (this.state.value === 0 && this.state.position !== 0) {
                this.setState({
                    position: 0,
                    fromLocal: true
                });
            }
        };
        if (props.range) {
            setTimeout(() => {
                this.setState({
                    position: calculatePercentage(this.props.value ? this.props.value[0] : this.props.min, this.props.max, this.props.min),
                    value: this.props.value ? this.props.value[0] : this.props.min,
                    position2: calculatePercentage(this.props.value ? this.props.value[1] : this.props.max, this.props.max, this.props.min),
                    value2: this.props.value ? this.props.value[1] : this.props.max,
                    fromLocal: true
                });
            });
        }
    }
    getValueAndPercentage(e) {
        const bar_width = this.mainContainerRef.offsetWidth;
        let position = e.clientX - this.mainContainerRef.getBoundingClientRect().left;
        if (position < 0) {
            position = 0;
        }
        position = position + (this.props.step || 1);
        const percentage = Math.round((position / bar_width) * 100);
        let value = calculateValue(percentage + this.props.min, this.props.max, this.props.min);
        if (this.props.step && this.props.step > value) {
            value = 0;
        }
        return {
            percentage,
            value
        };
    }
    getLeft() {
        if (!this.props.range) {
            return 0;
        }
        return this.state.position;
    }
    getWidth() {
        if (!this.props.range) {
            return this.state.position;
        }
        return this.state.position2 - this.state.position;
    }
    componentWillUnmount() {
        document.removeEventListener('mousemove', this.dragHandler, true);
        document.removeEventListener('mousemove', this.dragHandler2, true);
    }
    getGrid() {
        const count = (this.props.max - this.props.min) / (this.props.step || 1);
        const dataArray = [];
        for (let i = 1; i < count; i++) {
            dataArray.push((this.props.min) + ((this.props.step || 1) * i));
        }
        return dataArray;
    }
    static getDerivedStateFromProps(props, state) {
        if (state.fromLocal === true) {
            return {
                fromLocal: false
            };
        }
        if (props.value && props.range === false && props.value !== state.value) {
            return {
                value: props.value,
                position: calculatePercentage(props.value ? props.value : props.min, props.max, props.min)
            };
        }
        if (props.value && props.range === true && (props.value[0] !== state.value || props.value[1] !== state.value2)) {
            return {
                value: props.value[0],
                value2: props.value[1],
                position: calculatePercentage(props.value ? props.value[0] : props.min, props.max, props.min),
                position2: calculatePercentage(props.value ? props.value[1] : props.max, props.max, props.min)
            };
        }
        return null;
    }
    render() {
        let defaultSliderStyle = {};
        const theme = this.props.theme;
        const colors = this.props.colors;
        if (theme && theme.style) {
            defaultSliderStyle = { ...defaultSliderStyle, ...theme.style };
        }
        let color = '#3f51b5';
        let controlColor = '#3f51b5';
        if (colors && colors.primary) {
            color = colors.primary;
            controlColor = colors.primary;
        }
        if (this.props.color) {
            color = this.props.color;
        }
        if (this.props.controlColor) {
            controlColor = this.props.controlColor;
        }
        let className = "ui-slider-container ";
        if (this.props.className) {
            className += this.props.className + " ";
        }
        if (theme && theme.className) {
            className += theme.className;
        }
        const gridData = this.props.grid ? this.getGrid() : [];
        return (React.createElement("div", { className: className },
            React.createElement("div", { style: defaultSliderStyle, onMouseDown: () => {
                    this.mainContainerRef.ownerDocument.addEventListener('mouseup', this.mouseUp);
                }, ref: (el) => this.mainContainerRef = el, className: "ui-slider" },
                React.createElement("span", { className: "input-range__label input-range__label--min" },
                    React.createElement("span", { className: "input-range__label-container" }, this.props.min)),
                React.createElement("div", { className: "input-range__track input-range__track--background", onClick: (e) => {
                        this.lastCalled === 1 ? this.dragHandler(e) : this.dragHandler2(e);
                    } },
                    React.createElement("div", { className: "input-range__track input-range__track--active", style: { "left": this.getLeft() + "%", width: this.getWidth() + "%", background: color } }),
                    React.createElement(Control, { color: controlColor, min: this.props.min, max: this.props.max, value: this.state.value, mouseUp: this.mouseUp, dragHandler: this.dragHandler, position: this.state.position, textColor: this.props.textColor }),
                    this.props.range ?
                        React.createElement(Control, { color: controlColor, min: this.props.min, max: this.props.max, value: this.state.value2, mouseUp: this.mouseUp, dragHandler: this.dragHandler2, position: this.state.position2, textColor: this.props.textColor }) : React.createElement(React.Fragment, null)),
                React.createElement("span", { className: "input-range__label input-range__label--max" },
                    React.createElement("span", { className: "input-range__label-container" }, this.props.max))),
            this.props.grid ?
                React.createElement("ul", { className: "ui-slider-grid" }, gridData.map((n, i) => {
                    return React.createElement("li", { key: "grid-" + n + "-" + i, style: {
                            left: ((100 / (gridData.length + 1)) * (i + 1)) + "%"
                        } },
                        React.createElement("span", { className: "input-range__label" }, n));
                })) : React.createElement(React.Fragment, null)));
    }
}
Slider.defaultProps = {
    min: 0,
    max: 100,
    step: 1
};
export default withTheme(Slider, 'Slider');
