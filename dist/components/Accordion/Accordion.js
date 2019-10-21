import React from 'react';
import './Accordion.css';
import { withTheme } from '../../providers/ThemeProvider';
class Accordion extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            prevOpen: undefined,
            isOpen: this.props.open || false,
            heigth: 0,
        };
        this.toggle = () => {
            this.setState({
                prevOpen: this.state.isOpen,
                isOpen: !this.state.isOpen,
            }, () => {
                if (this.props.onToggle) {
                    this.props.onToggle(this.state.isOpen);
                }
            });
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.open !== undefined && prevState.prevOpen !== nextProps.open) {
            return {
                prevOpen: prevState.open,
                isOpen: nextProps.open,
            };
        }
        return null;
    }
    render() {
        const { className, open, children, title, theme, colors, ...customProps } = this.props;
        let defaultButtonStyle = {
            backgroundColor: colors ? (colors.primary ? colors.primary : null) : null,
            color: colors ? (colors.secondary ? colors.secondary : null) : null
        };
        if (theme && theme.style && theme.style.title) {
            defaultButtonStyle = { ...defaultButtonStyle, ...theme.style.title };
        }
        let defaultPanelStyle = {
            backgroundColor: colors ? (colors.primary ? colors.primary : null) : null,
            color: colors ? (colors.secondary ? colors.secondary : null) : null
        };
        if (theme && theme.style && theme.style.panel) {
            defaultPanelStyle = { ...defaultPanelStyle, ...theme.style.panel };
        }
        return (React.createElement("div", Object.assign({ className: 'ui-accordion ' + (this.state.isOpen ? 'open ' : 'closed ') + (className || '') +
                (' ' + (theme ? theme.className : ' ') + ' ') }, customProps),
            React.createElement("button", { style: defaultButtonStyle, className: "ui-accordion-button", onClick: () => this.toggle() }, this.props.title || ''),
            React.createElement("div", { style: defaultPanelStyle, className: 'ui-accordion-panel ' + (this.state.isOpen ? 'open' : 'closed') }, children || '')));
    }
}
export default withTheme(Accordion, 'Accordion');
