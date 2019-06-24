import React from 'react';

import './Breadcrumb.css';

interface BreadcrumbProps {
    className?: string
    seperator?: any
    [key:string]: any
}
const Breadcrumb:React.FC<BreadcrumbProps> = (props) => {
    return (
        <ul className="ui-breadcrumb">
            {
                React.Children.map(props.children,(child,i) => {
                    return (
                        <>
                        { (i !== 0) ? (
                           <li className="ui-breadcrumb-item ui-breadcrumb-seperator">
                                {  props.seperator }
                           </li> 
                        ) : <></> }
                        <li className="ui-breadcrumb-item">{child}</li>
                        </>
                    )
                })
            }
        </ul>
    )
}

const defaultProps = {
    className : '',
    seperator: ' / '
}

Breadcrumb.defaultProps = defaultProps;

export default Breadcrumb;