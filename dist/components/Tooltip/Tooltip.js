import React, { useState, useEffect, useRef } from 'react';
import './Tooltip.css';
const Tooltip = (props) => {
    const [visibleStatus, changeVisibleStatus] = useState(false);
    const [marginLeftPosition, changeMarginLeft] = useState(0);
    const toolTipContainerEle = useRef(null);
    const attr = {
        className: 'ui-tooltip ' + (visibleStatus ? 'tooltip ' : '')
    };
    if (props.event === 'hover') {
        attr['onMouseEnter'] = () => {
            changeVisibleStatus(true);
        };
        attr['onMouseLeave'] = () => {
            changeVisibleStatus(false);
        };
    }
    else {
        attr['onClick'] = () => {
            changeVisibleStatus(!visibleStatus);
        };
    }
    useEffect(() => {
        if ((props.position === 'top' || props.position === 'bottom') && toolTipContainerEle && toolTipContainerEle.current) {
            const m = toolTipContainerEle.current;
            changeMarginLeft(-(m.offsetWidth / 2));
        }
    }, [props.position]);
    return React.createElement(React.Fragment, null, React.createElement(props.element, attr, React.createElement(React.Fragment, null,
        props.children,
        visibleStatus ? React.createElement("div", { ref: toolTipContainerEle, style: { marginLeft: marginLeftPosition
            }, className: 'tooltip-text ' + props.position },
            " ",
            props.toolTip) : React.createElement(React.Fragment, null))));
};
Tooltip.defaultProps = {
    position: 'top',
    event: 'hover'
};
export default Tooltip;
