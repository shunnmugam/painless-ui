import React, { Children } from 'react';
import './Accordion.scss';

interface AccordionProps {
    className?: string,
    open?: boolean,
    title: any,
    children: any,
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
        const { className, open, children, title, ...customProps} = this.props;
        return (<div className={'ui-accordion ' + (this.state.isOpen ? 'open ' : 'closed ') + (className || '') } {...customProps}>
            <button className="ui-accordion-button" onClick={() => this.toggle()}>{this.props.title || ''}</button>
            <div className={'ui-accordion-panel ' + (this.state.isOpen ? 'open' : 'closed')}>
                {children || ''}
            </div>
        </div>);
    }
}


export default Accordion;