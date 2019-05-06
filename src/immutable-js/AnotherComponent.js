import React from 'react';
import { connect } from 'react-redux';
import actionTypes from './redux/actionTypes';

class AnotherComponent extends React.Component {

    // Updates the Redux state tree, but part of the tree that ImmutableJSComponent does not require.
    stateUpdater = () => this.props.dispatch({ 
        type: actionTypes.UPDATE_RANDOM_COLOR,
        payload: 'yellow',
    });

    render() {
        return (
            <div>
                <button onClick={this.stateUpdater}>Click Me</button>
            </div>
        );
    }
}

export default connect()(AnotherComponent);