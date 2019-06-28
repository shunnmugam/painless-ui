import React from 'react';
import './NavBar.css';

interface NavBarProps {
    className?: string
    [key:string]: any
}

const defaultProps:NavBarProps = {
    className: ''
}
const NavBar:React.FC<NavBarProps> = (props) => {
    const { className, ...customProps} = props;
    return (
        <div className={"ui-nav-bar " + className} {...customProps}>
            {props.children}
        </div>
    )
}

NavBar.defaultProps = defaultProps;
export default NavBar;