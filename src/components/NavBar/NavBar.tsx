import React from 'react';
import './NavBar.css';

interface NavBarProps {
    className?: string
    position?: string
    [key:string]: any
}

const defaultProps:NavBarProps = {
    className: '',
    position: ''
}
const NavBar:React.FC<NavBarProps> = (props) => {
    const { className, position, ...customProps} = props;
    return (
        <div className={"ui-nav-bar " + className +' '+ position} {...customProps}>
            {props.children}
        </div>
    )
}

NavBar.defaultProps = defaultProps;
export default NavBar;