import React, { useState } from 'react';
import DropdownItem from '../DropdownItem/DropdownItem';
import { withTheme } from '../../providers/ThemeProvider';
import WatchClickOutside from '../WatchClickOutside/WatchClickOutside';
import './Dropdown.css';
const Dropdown = (props) => {
    const [isClick, changeIsClick] = useState(props.isOpen);
    const { text, theme, color, style, ...customProps } = { ...props };
    let defaultDropdownStyle = {};
    if (theme && theme.style) {
        defaultDropdownStyle = { ...defaultDropdownStyle, ...theme.style };
    }
    let className = 'ui-dropdown ';
    if (theme && theme.className) {
        className += theme.className;
    }
    return (React.createElement(WatchClickOutside, { style: { display: "inline-block" }, onClickOutside: () => changeIsClick(false) },
        React.createElement("div", Object.assign({ className: className }, customProps, { style: { ...defaultDropdownStyle, ...style } }),
            React.createElement("button", { className: "dropbtn", onClick: () => {
                    changeIsClick(!isClick);
                } }, props.text),
            React.createElement("div", { className: "dropdown-content " + (isClick ? 'open' : 'closed') }, React.Children.map(props.children, (child, i) => {
                if (child === null || child.type !== DropdownItem) {
                    throw new Error('`Dropdown` children should be of type `DropdownItem`.');
                }
                else
                    return child;
            })))));
};
export default withTheme(Dropdown, "Dropdown");
