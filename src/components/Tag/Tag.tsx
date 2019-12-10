import React from 'react';

import './Tag.css';

interface TagProps {
    addons?: any,
    className?: any,
    style?: object,
    addOnsStyle?: object,
    [key:string]: any
}

const defaultProps = {
    className: '',
    style: {},
    addOnsStyle: {}
}

const Tag:React.FC<TagProps> = (props) => {
    const { addons, className, style, addOnsStyle, ...customProps } = props;
    return (<div style={style} className={"tags "+ (addons !== undefined ? "has-addons " : '') + className} {...customProps}>
      <span className="tag">Variables</span>
        {addons !== undefined ? 
            <span className="tag bg-default" style={addOnsStyle}>{addons}</span>
        : <></> }
    </div>)
}

Tag.defaultProps = defaultProps;

export default Tag;