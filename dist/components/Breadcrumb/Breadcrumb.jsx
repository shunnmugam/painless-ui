import React from 'react';
import { withTheme } from '../../providers/ThemeProvider';
import './Breadcrumb.css';
const Breadcrumb = (props) => {
    const { className, separator, style, theme, colors, ...customProps } = { ...props };
    let defaultBreadcrumbStyle = style ? style : {};
    if (theme && theme.style && theme.style.container) {
        defaultBreadcrumbStyle = { ...theme.style.container, ...defaultBreadcrumbStyle };
    }
    return (<ul className={"ui-breadcrumb " + className + ((theme && theme.className) ? +" " + theme.className : "")} {...customProps} style={defaultBreadcrumbStyle}>
            {React.Children.map(props.children, (child, i) => {
        return (<>
                        {(i !== 0) ? (<li className="ui-breadcrumb-item ui-breadcrumb-separator">
                                {separator}
                           </li>) : <></>}
                        <li className="ui-breadcrumb-item">{child}</li>
                        </>);
    })}
        </ul>);
};
const defaultProps = {
    className: '',
    separator: ' / ',
    style: {}
};
Breadcrumb.defaultProps = defaultProps;
export default withTheme(Breadcrumb, "Breadcrumb");
