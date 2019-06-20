import React from 'react';
import Accordion from '../Accordion/Accordion';

interface AccordionGroupProps {
    className?: string,
    collapsible?: boolean,
    onToggle?: Function,
    [key:string]: any
}

class AccordionGroup extends React.Component<AccordionGroupProps> {
    
    state:any;
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: -1
        }
        
    }

    componentWillMount() {
        this.validChild()
    }

    validChild() {
        let i = 0;
        React.Children.forEach(this.props.children,  (child: any) => {
            if (child === null || child.type !== Accordion) {
              throw new Error('`Tabgroup` children should be of type `Tab`.');
            } else {
                if(child.props.open === true) {
                    this.setState({
                        activeIndex : i
                    })
                }
            }
            i++;
        })
    }

    collapseChange = (i,isOpen,onToggle) => {
        if(isOpen) {
            this.setState({
                activeIndex: i
            });
        }
        if(onToggle !== undefined) {
            onToggle(isOpen);
        }
        if(this.props.onToggle !== undefined && typeof this.props.onToggle === 'function' ) {
            this.props.onToggle(isOpen,i);
        }
    }

    render() {
        return (<div className="ui-accordion-group">
            
            {this.props.collapsible && this.props.children ? (
               React.Children.map(this.props.children, (accordion:any,i) => {
                   const isOpen = (this.state.activeIndex == i);
                   const onToggle = (open) => {
                        //if(open) {
                        this.collapseChange(i,open,accordion.props.onToggle); 
                        //}
                   }
                    return React.cloneElement(accordion, { open: isOpen, onToggle })
                })
            ) : this.props.children}
        </div>)
    }
}

export default AccordionGroup;