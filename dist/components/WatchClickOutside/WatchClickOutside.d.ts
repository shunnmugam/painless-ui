import { Component } from 'react';
interface WatchClickOutsideProps {
    style?: object;
    onClickOutside: Function;
}
declare class WatchClickOutside extends Component<WatchClickOutsideProps> {
    refs: any;
    constructor(props: any);
    componentWillMount(): void;
    componentWillUnmount(): void;
    handleClick: (event: any) => void;
    render(): JSX.Element;
}
export default WatchClickOutside;
