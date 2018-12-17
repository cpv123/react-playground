import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './redux-saga/TodosSaga';
import Table from './mui-virtualized-table/Table';
import Context from './recompose-context/Provider';
import SelectContainer from './react-select/main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/table" component={Table} />
            <Route path="/context" component={Context} />
            <Route path="/select" component={SelectContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
