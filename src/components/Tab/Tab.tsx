import React from 'react';

interface TabProps {
    className?: string,
    label?:string,
    [key:string]: any
}

const Tab:React.FC<TabProps> = (props): JSX.Element => {
    return <>{ props.label && props.label!=='' ? props.label : props.children }</>;
}

export default Tab;