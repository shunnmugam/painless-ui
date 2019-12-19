import React, { useRef } from 'react';
const Control = (props) => {
    const controlElement = useRef(null);
    const value = props.value;
    return (React.createElement("span", { className: "input-range__slider-container", style: { "position": "absolute", left: props.position + "%" } },
        React.createElement("span", { className: "input-range__label input-range__label--value" },
            React.createElement("span", { className: "input-range__label-container", style: { color: props.textColor } }, value)),
        React.createElement("div", { ref: controlElement, "aria-valuemax": props.max, "aria-valuemin": props.min, "aria-valuenow": value, className: "input-range__slider", onMouseDown: () => {
                document.addEventListener('mousemove', props.dragHandler, true);
            }, onMouseUp: props.mouseUp, draggable: false, role: "slider", style: { background: props.color } }, "\u00A0")));
};
export default Control;
