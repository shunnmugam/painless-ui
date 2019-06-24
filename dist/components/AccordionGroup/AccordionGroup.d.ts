import React from 'react';
interface AccordionGroupProps {
    className?: string;
    collapsible?: boolean;
    onToggle?: Function;
    [key: string]: any;
}
declare class AccordionGroup extends React.Component<AccordionGroupProps> {
    state: any;
    constructor(props: any);
    componentWillMount(): void;
    validChild(): void;
    collapseChange: (i: any, isOpen: any, onToggle: any) => void;
    render(): JSX.Element;
}
export default AccordionGroup;
