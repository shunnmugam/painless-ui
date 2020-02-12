import React from 'react';
import './Accordion.css';
import { withTheme } from '../../providers/ThemeProvider';
import { componentTheme, themeColors } from "../../providers/theme";
interface AccordionProps {
    className?: string
    open?: boolean
    title: any
    children: any
    onToggle?: Function
    beforeToggle?: Function
    theme?: componentTheme
    colors?: themeColors
    [key:string] : any
}

class Accordion extends React.Component<AccordionProps>  {

    state = {
        prevOpen: undefined,
        isOpen: this.props.open || false,
        heigth: 0,
    }

    static getDerivedStateFromProps(nextProps,prevState) {
        if(nextProps.open !== undefined && prevState.prevOpen !== nextProps.open) {
            return {
                prevOpen: prevState.open,
                isOpen: nextProps.open,
            }
        }
        return null;
    }


    private toggle = () => {
        if(this.props.beforeToggle) {
            this.props.beforeToggle(this.state.isOpen);
        }
        this.setState({
            prevOpen: this.state.isOpen,
            isOpen : !this.state.isOpen,
        },() => {
            if(this.props.onToggle) {
                this.props.onToggle(this.state.isOpen);
            }
        })
        
    }

    render() {
        const { className, open, children, title, theme, colors, style, ...customProps} = this.props;
        let defaultButtonStyle: any= {
            backgroundColor : colors ? (colors.primary ? colors.primary : null) : null,
            color : colors ? (colors.secondary ? colors.secondary : null) : null
        }
        if(theme && theme.style && theme.style.title) {
            defaultButtonStyle = {...defaultButtonStyle,...theme.style.title}
        }

        let defaultPanelStyle: any= {
            backgroundColor : colors ? (colors.primary ? colors.primary : null) : null,
            color : colors ? (colors.secondary ? colors.secondary : null) : null,
            transitionDuration: '1s'
        }
        if(theme && theme.style && theme.style.panel) {
            defaultPanelStyle = {...defaultPanelStyle,...theme.style.panel}
        }

        if(style)
            defaultPanelStyle = {...defaultPanelStyle, ...style}

        return (<div className={'ui-accordion ' + (this.state.isOpen ? 'open ' : 'closed ') + (className || '') + 
        (' '+ (theme ? theme.className : ' ') + ' ')} 
        {...customProps}>
            <button style={defaultButtonStyle} className="ui-accordion-button" onClick={() => this.toggle()}>{this.props.title || ''}</button>
            <div style={defaultPanelStyle} className={'ui-accordion-panel ' + (this.state.isOpen ? 'open' : 'closed')}>
                {children || ''}
            </div>
        </div>);
    }
}


export default withTheme(Accordion,'Accordion');