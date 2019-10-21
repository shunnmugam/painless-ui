import React from 'react';
import './NavBar.css';
const defaultProps = {
    className: '',
    position: ''
};
const NavBar = (props) => {
    const { className, position, ...customProps } = props;
    return (React.createElement("div", Object.assign({ className: "ui-nav-bar " + className + ' ' + position }, customProps), props.children));
};
NavBar.defaultProps = defaultProps;
export default NavBar;
