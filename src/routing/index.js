import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import buttonClass from '../styled-components/styled-button';

class RoutingButton extends Component {

    handleClick = () => {
        this.props.history.push('/')
    };

    render() {
        return (
            <div style={{ marginBottom: 20 }}>
                <button
                    className={buttonClass}
                    onClick={this.handleClick}
                >
                    Home
                </button>
            </div>
        );
    }
}

export default withRouter(RoutingButton);