import React from 'react';
import { withTheme } from '../../providers/ThemeProvider';
import './Breadcrumb.css';
const Breadcrumb = (props) => {
    const { className, separator, style, theme, colors, ...customProps } = { ...props };
    let defaultBreadcrumbStyle = style ? style : {};
    if (theme && theme.style && theme.style.container) {
        defaultBreadcrumbStyle = { ...theme.style.container, ...defaultBreadcrumbStyle };
    }
    return (React.createElement("ul", Object.assign({ className: "ui-breadcrumb " + className + ((theme && theme.className) ? +" " + theme.className : "") }, customProps, { style: defaultBreadcrumbStyle }), React.Children.map(props.children, (child, i) => {
        return (React.createElement(React.Fragment, null,
            (i !== 0) ? (React.createElement("li", { className: "ui-breadcrumb-item ui-breadcrumb-separator" }, separator)) : React.createElement(React.Fragment, null),
            React.createElement("li", { className: "ui-breadcrumb-item" }, child)));
    })));
};
const defaultProps = {
    className: '',
    separator: ' / ',
    style: {}
};
Breadcrumb.defaultProps = defaultProps;
export default withTheme(Breadcrumb, "Breadcrumb");
