import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';
import Table from './Table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/table" component={Table} />
        </Switch>
      </div>
    );
  }
}

export default App;
