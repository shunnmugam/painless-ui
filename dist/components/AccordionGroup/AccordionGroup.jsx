import React from 'react';
import Accordion from '../Accordion/Accordion';
import { withTheme } from '../../providers/ThemeProvider';
class AccordionGroup extends React.Component {
    constructor(props) {
        super(props);
        this.collapseChange = (i, isOpen, onToggle) => {
            if (isOpen) {
                this.setState({
                    activeIndex: i
                });
            }
            if (onToggle !== undefined) {
                onToggle(isOpen);
            }
            if (this.props.onToggle !== undefined && typeof this.props.onToggle === 'function') {
                this.props.onToggle(isOpen, i);
            }
        };
        this.state = {
            activeIndex: -1
        };
    }
    componentWillMount() {
        this.validChild();
    }
    validChild() {
        let i = 0;
        React.Children.forEach(this.props.children, (child) => {
            if (child === null || child.type !== Accordion) {
                throw new Error('`Tabgroup` children should be of type `Tab`.');
            }
            else {
                if (child.props.open === true) {
                    this.setState({
                        activeIndex: i
                    });
                }
            }
            i++;
        });
    }
    render() {
        const theme = this.props.theme;
        return (<div className={"ui-accordion-group " + (theme ? theme.className : '')} style={theme ? theme.style ? theme.style.container : {} : {}}>
            
            {this.props.collapsible && this.props.children ? (React.Children.map(this.props.children, (accordion, i) => {
            const isOpen = (this.state.activeIndex === i);
            const onToggle = (open) => {
                //if(open) {
                this.collapseChange(i, open, accordion.props.onToggle);
                //}
            };
            return React.cloneElement(accordion, { open: isOpen, onToggle });
        })) : this.props.children}
        </div>);
    }
}
export default withTheme(AccordionGroup, 'AccordionGroup');
