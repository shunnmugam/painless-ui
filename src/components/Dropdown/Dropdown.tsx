import React, { useState } from 'react';
import DropdownItem from '../DropdownItem/DropdownItem';
import { withTheme } from '../../providers/ThemeProvider';
import { componentTheme, themeColors } from "../../providers/theme";
import WatchClickOutside from '../WatchClickOutside/WatchClickOutside';
import './Dropdown.css';

interface dropdownProps {
    text: any
    children: JSX.Element[] | JSX.Element
    theme: componentTheme
    color: themeColors
    style: any
    [key: string]: any
}
const Dropdown:React.FC<dropdownProps> = (props) => {
    const [isClick, changeIsClick] = useState(props.isOpen);
    const { text, theme, color, style, ...customProps} = {...props};

    let defaultDropdownStyle = {};
    if(theme && theme.style) {
        defaultDropdownStyle = {...defaultDropdownStyle,...theme.style}
    }
    let className='ui-dropdown ';
    if(theme && theme.className) {
        className+= theme.className;
    }

    return (
        <WatchClickOutside style={{ display: "inline-block" }} onClickOutside={() => changeIsClick(false)}>
            <div className={className} {...customProps} style={{...defaultDropdownStyle, ...style}}>
                <button className="dropbtn" onClick={() => {
                    changeIsClick(!isClick)
                }}>{props.text}
                    {/* <i className="fa fa-caret-down"></i> */}
                </button>
                <div className={"dropdown-content "+ (isClick ? 'open' : 'closed')}>
                    {
                        React.Children.map(props.children, (child:any,i) => {
                            if (child === null || child.type !== DropdownItem) {
                                throw new Error('`Dropdown` children should be of type `DropdownItem`.');
                            } else
                                return child
                        })
                    }
                </div>
            </div> 
        </WatchClickOutside>
    )
}

export default withTheme(Dropdown,"Dropdown");