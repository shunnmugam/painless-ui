import React, { useState, useEffect, useRef } from 'react';
import './Tooltip.css';

interface TooltipProps {
    element: string
    toolTip: any
    position?: string
    event?: string
    [key: string]: any
}

const Tooltip:React.FC<TooltipProps> = (props):JSX.Element => {
    const [visibleStatus, changeVisibleStatus] = useState(false);
    const [marginLeftPosition, changeMarginLeft] = useState(0);
    const toolTipContainerEle = useRef(null);

    const attr = {
        className : 'ui-tooltip '+ (visibleStatus ? 'tooltip ' : '')
    }
    if(props.event === 'hover') {
        attr['onMouseEnter'] = () => {
            changeVisibleStatus(true)
        };
        attr['onMouseLeave'] = () => {
            changeVisibleStatus(false)
        }
    } else {
        attr['onClick'] = () => {
            changeVisibleStatus(!visibleStatus)
        };
    }

    useEffect(() => {
        if((props.position === 'top' || props.position === 'bottom')  && toolTipContainerEle && toolTipContainerEle.current) {
            const m: HTMLElement| null = toolTipContainerEle.current
            changeMarginLeft(-(m!.offsetWidth/2))
       }
    }, [props.position])

    return <>
        {
            React.createElement(props.element, attr, <>
                {props.children}
                {visibleStatus ?  <div ref={toolTipContainerEle} 
                style={{marginLeft : marginLeftPosition
                }} className={'tooltip-text '  + props.position}> { props.toolTip }</div> : <></>}
            </>)
        }
    </>
}

Tooltip.defaultProps = {
    position : 'top',
    event: 'hover'
}

export default Tooltip;