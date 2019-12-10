import React from 'react';
import './Tag.css';
const defaultProps = {
    className: '',
    style: {},
    addOnsStyle: {}
};
const Tag = (props) => {
    const { addons, className, style, addOnsStyle, ...customProps } = props;
    return (<div style={style} className={"tags " + (addons !== undefined ? "has-addons " : '') + className} {...customProps}>
      <span className="tag">Variables</span>
        {addons !== undefined ?
        <span className="tag bg-default" style={addOnsStyle}>{addons}</span>
        : <></>}
    </div>);
};
Tag.defaultProps = defaultProps;
export default Tag;