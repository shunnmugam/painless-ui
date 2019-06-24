import React from 'react';
import './Accordion.scss';
interface AccordionProps {
    className?: string;
    open?: boolean;
    title: any;
    children: any;
    [key: string]: any;
}
declare class Accordion extends React.Component<AccordionProps> {
    state: {
        prevOpen: any;
        isOpen: boolean;
        heigth: number;
    };
    static getDerivedStateFromProps(nextProps: any, prevState: any): {
        prevOpen: any;
        isOpen: any;
    };
    private toggle;
    render(): JSX.Element;
}
export default Accordion;
