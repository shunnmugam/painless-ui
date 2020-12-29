import React, { Component } from 'react';

interface WatchClickOutsideProps {
    style?: object
    onClickOutside: Function
}

class WatchClickOutside extends Component<WatchClickOutsideProps> {

    public refs:any = null;
    constructor(props) {
        super(props);
        this.refs = React.createRef();
    }

    componentWillMount() {
        document.addEventListener('click', this.handleClick);
    }

    componentWillUnmount() {
        // remember to remove all events to avoid memory leaks
        document.removeEventListener('click', this.handleClick);
    }

    handleClick = (event) => {
        const {container} = this.refs; // get container that we'll wait to be clicked outside
        const {onClickOutside} = this.props; // get click outside callback
        const {target} = event; // get direct click event target

        // if there is no proper callback - no point of checking
        if (typeof onClickOutside !== 'function') {
            return;
        }

        // if target is container - container was not clicked outside
        // if container contains clicked target - click was not outside of it
        if (target !== container && !container.contains(target)) {
            onClickOutside(event); // clicked outside - fire callback
        }
    }

    render() {
        return (
            <div ref="container" style={this.props.style || {}}>
            {this.props.children}
            </div>
        );
    }
}
export default WatchClickOutside;