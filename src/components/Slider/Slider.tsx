import React from 'react';
import { withTheme } from '../../providers/ThemeProvider';
import { componentTheme, themeColors } from "../../providers/theme";
import './Slider.css';
import Control from './Control';

interface SliderProps {
    className?: string
    color?: string
    controlColor?: string
    discrete?: boolean
    step?:number
    textColor?: string
    value?: any
    grid?: boolean
    theme?: componentTheme
    colors? : themeColors
    onChange?: any
    onChangeComplete?: any
    [key:string]: any
}

const calculateValue = (percentage, max, min) => {
    return Math.floor(( (percentage - min) / 100) * (max - min)) + min;
}

const calculatePercentage = (value, max, min) => {
    const diff = max - min;
    return Math.floor(((value - min) / diff) * 100);
}

class Slider extends React.PureComponent<SliderProps> {
    ref:any = null;
    mainContainerRef:any = null;
    onChangeCalledTimer:any= null;
    lastCalled:number = 1;

    state = {
        position : calculatePercentage(this.props.value || this.props.min, this.props.max, this.props.min),
        value: this.props.value || this.props.min,
        position2 : this.props.value || 0,
        value2: this.props.value || this.props.min,
    }

    constructor(props) {
        super(props);
        if(props.range) {
            setTimeout(() => {
                this.setState({
                    position : calculatePercentage(this.props.value ? this.props.value[0] : this.props.min, this.props.max, this.props.min),
                    value: this.props.value ? this.props.value[0] : this.props.min,
                    position2: calculatePercentage(this.props.value ? this.props.value[1] : this.props.max, this.props.max, this.props.min),
                    value2: this.props.value ? this.props.value[1] : this.props.max,
                });
            })
        }
    }
    
    static defaultProps = {
        min: 0,
        max: 100,
        step: 1
    }

    onChangeCallback = () => {
        
        if(this.props.onChange) {
            let value:any = this.state.value;
            if(this.props.range) {
                value = [value, this.state.value2];
            }
            this.props.onChange(value)
        }
        clearTimeout(this.onChangeCalledTimer);
        this.onChangeCalledTimer = setTimeout(() => {
            this.onChangeComplete();
        }, 500)
    }

    onChangeComplete = () => {
        if(this.props.onChangeComplete) {
            let value:any = this.state.value;
            if(this.props.range) {
                value = [value, this.state.value2];
            }
            this.props.onChangeComplete(value)
        }
    } 

    getValueAndPercentage(e:any) {
        const bar_width =  this.mainContainerRef.offsetWidth
        let position = e.clientX - this.mainContainerRef.getBoundingClientRect().left;
        if(position < 0) {
            position = 0; 
        }
        position = position + (this.props.step || 1)
        const percentage = Math.round((position / bar_width) * 100 ) ;
        let value = calculateValue(percentage + this.props.min, this.props.max, this.props.min);
        if(this.props.step && this.props.step > value) {
            value = 0;
        }
        return {
            percentage,
            value
        }
    }

    dragHandler = (e:any) => {
        let { percentage, value } = this.getValueAndPercentage(e);
        if(percentage <= 100 && percentage >= 0  &&
        (!this.props.range || percentage < this.state.position2) ) {
            if(this.props.step && value % this.props.step === 0) {
                if(this.props.discrete) {
                    percentage = calculatePercentage(value,this.props.max, this.props.min)
                }
                this.setState({
                    position : percentage,
                    value: value
                },this.onChangeCallback);
            } else {
                this.setState({
                    position : percentage,
                    // value: value
                },this.onChangeCallback);
            }
        }
        this.lastCalled = 1;
    }

    dragHandler2 = (e:any) => {
        let { percentage, value } = this.getValueAndPercentage(e)
        if(percentage <= 100 && percentage >= 0 &&
        (!this.props.range || (percentage > this.state.position && this.state.value < value) ) ) {
            if(this.props.step && value % this.props.step === 0) {
                if(this.props.discrete) {
                    percentage = calculatePercentage(value,this.props.max, this.props.min)
                }
                this.setState({
                    position2 : percentage,
                    value2: value
                },this.onChangeCallback);
            } else {
                this.setState({
                    position2 : percentage,
                    // value2: value * (this.props.step || 1)
                },this.onChangeCallback);
            }
        }
        this.lastCalled = 2;
    }

    mouseUp = () => {
        document.removeEventListener('mousemove', this.dragHandler, true);
        document.removeEventListener('mousemove', this.dragHandler2, true);
        if(this.state.value === 0 && this.state.position !== 0) {
            this.setState({
                position: 0
            })
        }
    }

    getLeft() {
        if(!this.props.range) {
            return 0;
        }
        return this.state.position;
    }

    getWidth() {
        if(!this.props.range) {
            return this.state.position;
        }
        return this.state.position2 - this.state.position;
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this.dragHandler, true);
        document.removeEventListener('mousemove', this.dragHandler2, true);
    }

    getGrid():Array<any> {
        const count = (this.props.max - this.props.min) / (this.props.step || 1);
        const dataArray:Array<any> = [];
        for(let i = 1; i < count; i++) {
            dataArray.push(
                (this.props.min)  + ((this.props.step || 1) * i) 
            )
        }
        return dataArray;
    }

    render() {
        let defaultSliderStyle = {};
        const theme = this.props.theme;
        const colors = this.props.colors;
        if(theme && theme.style) {
            defaultSliderStyle = {...defaultSliderStyle,...theme.style}
        }
        let color = '#3f51b5';
        let controlColor = '#3f51b5';
        if(colors && colors.primary) {
            color = colors.primary;
            controlColor = colors.primary;
        }
        if(this.props.color) {
            color = this.props.color;
        }
        if(this.props.controlColor) {
            controlColor = this.props.controlColor;
        }

        let className = "ui-slider-container ";
        if(this.props.className) {
            className+=this.props.className + " "
        }
        if(theme && theme.className) {
            className+=theme.className;
        }
        const gridData = this.props.grid ? this.getGrid() : [];
        return (
            <div className={className}>
            <div style={defaultSliderStyle} onMouseDown={() => {
                this.mainContainerRef.ownerDocument.addEventListener('mouseup',this.mouseUp)
            }} ref={(el) => this.mainContainerRef = el} className="ui-slider">
                <span className="input-range__label input-range__label--min">
                    <span className="input-range__label-container">{this.props.min}</span>
                </span>
                <div className="input-range__track input-range__track--background" onClick={(e) => {
                        this.lastCalled === 1 ? this.dragHandler(e) : this.dragHandler2(e);
                    }}>
                    <div className="input-range__track input-range__track--active" 
                    style={{"left": this.getLeft()+"%", width: this.getWidth()+"%", background : color}}></div>
                    <Control 
                        color={controlColor}
                        min={this.props.min} 
                        max={this.props.max} 
                        value={this.state.value} 
                        mouseUp={this.mouseUp} 
                        dragHandler={this.dragHandler} 
                        position={this.state.position}
                        textColor={this.props.textColor}
                        />
                    {this.props.range ? 
                        <Control 
                        color={controlColor}
                        min={this.props.min} 
                        max={this.props.max} 
                        value={this.state.value2} 
                        mouseUp={this.mouseUp} 
                        dragHandler={this.dragHandler2} 
                        position={this.state.position2}
                        textColor={this.props.textColor}
                        /> : <></>
                    }
                </div>
                <span className="input-range__label input-range__label--max">
                    <span className="input-range__label-container">{this.props.max}</span>
                </span>
            </div>
            {this.props.grid ? 
            <ul className="ui-slider-grid">
                {gridData.map((n,i) => {
                    return <li key={"grid-"+n+"-"+i} style={{
                        left: ((100 / (gridData.length + 1)) * (i+1)) + "%"
                    }}><span className="input-range__label">{n}</span></li>
                })}
            </ul> : <></> }
            </div>
        )
    }
}

export default withTheme(Slider, 'Slider');