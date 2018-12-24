import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import SagaExample from './redux-saga/TodosSaga';
import Tables from './virtualized-tables/Tables';
import Context from './recompose-context/Provider';
import SelectContainer from './react-select';
import RenderProps from './render-props';
import Hocs from './hoc-testing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/saga" component={SagaExample} />
            <Route path="/tables" component={Tables} />
            <Route path="/context" component={Context} />
            <Route path="/select" component={SelectContainer} />
            <Route path="/render-props" component={RenderProps} />
            <Route path="/hoc-testing" component={Hocs} />
        </Switch>
      </div>
    );
  }
}

export default App;
