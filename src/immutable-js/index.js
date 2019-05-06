import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducer';
import ImmutableJsComponent from './ImmutableJsComponent';
import AnotherComponent from './AnotherComponent';

// const store = createStore(reducer);

class ImmutableJsRedux extends React.Component {
    constructor(props) {
        super(props);
        this.store = createStore(reducer);
    };
    
    render() {
        return (
            <Provider store={this.store}>
                <ImmutableJsComponent />
                <AnotherComponent />
            </Provider>
        )
    }
}

export default ImmutableJsRedux;
