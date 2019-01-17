import React, { Fragment } from 'react';

class Lifecycle extends React.Component {

    constructor() {
        super();
        console.log('constructor')
        this.state = {
            number: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps')
        return null;
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate')
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    handleClick() {
        this.setState(state => ({ number: state.number + 1 }));
    }

    render() {
        console.log('render')

        return (
            <button onClick={this.handleClick}>{this.state.number}</button>
        );
    }

}

export default Lifecycle;