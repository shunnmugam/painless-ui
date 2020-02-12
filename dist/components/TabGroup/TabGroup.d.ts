import React from 'react';
import './TabGroup.css';
interface TabGroupProps {
    activeColor?: string;
    bgColor?: string;
    color?: string;
    className?: string;
    defaultActive?: number;
    centerAlign?: boolean;
    onClick?: Function;
    width?: string;
    [key: string]: any;
}
declare class TabGroup extends React.Component<TabGroupProps> {
    private containerRef;
    state: {
        activeIndex: number;
        visibleStatus: boolean;
        prevLiIndex: number;
        lastLiIndex: number;
        isScrollable: boolean;
        visibleWidth: string;
        isNext: boolean;
        ul: {
            width: string;
            left: number;
            margin: string;
        };
        activeBar: {
            width: number;
            left: number;
        };
    };
    constructor(props: any);
    calculateDimonsions: () => void;
    setPrev: () => void;
    setNext: () => void;
    moveRight: () => void;
    moveLeft: () => void;
    setActiveTab: (index: number) => void;
    setWidth(): void;
    componentDidMount(): void;
    componentDidUpdate(oldProps: any): void;
    render(): JSX.Element;
}
export default TabGroup;
