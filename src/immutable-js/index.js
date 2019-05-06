import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducer';
import ImmutableJsComponent from './ImmutableJsComponent';
import AnotherComponent from './AnotherComponent';

const store = createStore(reducer);

class ImmutableJsRedux extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ImmutableJsComponent />
                <AnotherComponent />
            </Provider>
        )
    }
}

export default ImmutableJsRedux;
