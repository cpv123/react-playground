import React, { lazy } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

class ComponentOne extends React.Component {

    state = {
        showingLazyComponent: false
    }

    handleClick = () => {
        this.setState({
            showingLazyComponent: true
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                {this.state.showingLazyComponent && (
                    <LazyComponent />
                )}
            </div>
        )
    }
}

export default ComponentOne;