import React from 'react';
import { withTheme } from '../../providers/ThemeProvider';
import { componentTheme, themeColors } from "../../providers/theme";
import './Slider.css';
import Control from './Control';

interface SliderProps {
    className?: string
    value?: any
    [key:string]: any
}

const calculateValue = (percentage, max) => {
    return Math.floor((percentage / 100) * max);
}

class Slider extends React.PureComponent<SliderProps> {
    ref:any = null;
    mainContainerRef:any = null;

    state = {
        position : this.props.value || this.props.min,
        value: calculateValue(this.props.value || this.props.min, this.props.max),
        position2 : this.props.value || this.props.min,
        value2: calculateValue(this.props.value || this.props.min, this.props.max),
    }

    constructor(props) {
        super(props);
        if(props.range) {
            setTimeout(() => {
                this.setState({
                    position : this.props.value ? this.props.value[0] : this.props.min || this.props.min,
                    value: calculateValue(this.props.value ? this.props.value[0] : this.props.min || this.props.min, this.props.max),
                    position2: this.props.value ? this.props.value[1] : this.props.max || this.props.max,
                    value2: calculateValue(this.props.value ? this.props.value[1] : this.props.max || this.props.max, this.props.max),
                });
            })
        }
    }
    
    static defaultProps = {
        min: 0,
        max: 100
    }

    dragHandler = (e:any) => {
        const bar_width =  this.mainContainerRef.offsetWidth
        const position = e.clientX - this.mainContainerRef.getBoundingClientRect().left;
        const percentage = Math.round((position / bar_width) * 100);
        const value = calculateValue(percentage, this.props.max);
        if(percentage <= 100 && percentage >= 0 && (!this.props.discrete || this.state.value !== value) &&
        (!this.props.range || percentage < this.state.position2) ) {
            this.setState({
                position : percentage,
                value
            })
        }
    }

    dragHandler2 = (e:any) => {
        const bar_width =  this.mainContainerRef.offsetWidth
        const position = e.clientX - this.mainContainerRef.getBoundingClientRect().left;
        const percentage = Math.round((position / bar_width) * 100);
        const value = calculateValue(percentage, this.props.max);
        if(percentage <= 100 && percentage >= 0 && (!this.props.discrete || this.state.value2 !== value) &&
        (!this.props.range || percentage > this.state.position) ) {
            this.setState({
                position2 : percentage,
                value2: value
            })
        }
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

    render() {
        return (
            <div onMouseDown={() => {
                this.mainContainerRef.ownerDocument.addEventListener('mouseup',this.mouseUp)
            }} ref={(el) => this.mainContainerRef = el} aria-disabled="false" className="input-range">
                <span className="input-range__label input-range__label--min">
                    <span className="input-range__label-container">{this.props.min}</span>
                </span>
                <div className="input-range__track input-range__track--background">
                    <div className="input-range__track input-range__track--active" style={{"left": this.getLeft()+"%", width: this.getWidth()+"%"}}></div>
                    <Control 
                        min={this.props.min} 
                        max={this.props.max} 
                        value={this.state.value} 
                        mouseUp={this.mouseUp} 
                        dragHandler={this.dragHandler} 
                        position={this.state.position} />
                    {this.props.range ? 
                        <Control 
                        min={this.props.min} 
                        max={this.props.max} 
                        value={this.state.value2} 
                        mouseUp={this.mouseUp} 
                        dragHandler={this.dragHandler2} 
                        position={this.state.position2} /> : <></>
                    }
                </div>
                <span className="input-range__label input-range__label--max">
                    <span className="input-range__label-container">{this.props.max}</span>
                </span>
            </div>
        )
    }
}

export default withTheme(Slider, 'Slider');