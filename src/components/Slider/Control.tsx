import React, { useRef} from 'react';

interface ControlProps {
    color?: string
    textColor?: string
    position: number
    max: number
    min: number
    dragHandler: any
    mouseUp: any
    value: any
}
const Control:React.FC<ControlProps> = (props) => {

    const controlElement:any = useRef(null);
    const value = props.value;
    return (
        <span className="input-range__slider-container" style={{"position": "absolute", left: props.position+"%"}}>
            <span className="input-range__label input-range__label--value">
                <span className="input-range__label-container" style={{color: props.textColor}}>{value}</span>
            </span>
            <div ref={controlElement} aria-valuemax={props.max} aria-valuemin={props.min} aria-valuenow={value} className="input-range__slider" 
            onMouseDown={() => {
                document.addEventListener('mousemove',props.dragHandler, true);
            }}
            onMouseUp = {props.mouseUp}
            draggable={false} role="slider" style={{background : props.color}}>
                &nbsp;
            </div>
        </span>
    )
}

export default Control;

