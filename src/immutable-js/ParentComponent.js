import React from 'react';

class ParentComponent extends React.Component {
    state = {
        count: 0,
    }

    stateUpdater = () => this.setState(state => ({
        count: state.count + 1
    }));

    render() {
        return (
            <div>
                <button onClick={this.stateUpdater}>Click this to update parent state</button>
                {this.props.children}
            </div>
        ) 
    }
}

export default ParentComponent;