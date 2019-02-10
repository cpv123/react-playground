import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Switch as Toggle } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core';
import themes from './dark-mode/themes';
import withDarkMode from './dark-mode/withDarkMode';
import LandingPage from './LandingPage';
import SagaExample from './redux-saga/TodosSaga';
import Tables from './virtualized-tables/Tables';
import Context from './recompose-context/Provider';
import SelectContainer from './react-select';
import RenderProps from './render-props';
import Hocs from './hoc-testing';
import RoutingButton from './routing';
import Lifecycle from './lifecycle';

const App = ({ theme, toggleTheme }) => {
    return (
        <div className="App">
            <MuiThemeProvider theme={themes[theme]}>

                <RoutingButton />

                <Toggle 
                    onClick={() => {
                        const target = theme === 'light' ? 'dark' : 'light';
                        toggleTheme(target);
                    }} 
                />

                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/saga" component={SagaExample} />
                    <Route path="/tables" component={Tables} />
                    <Route path="/context" component={Context} />
                    <Route path="/select" component={SelectContainer} />
                    <Route path="/render-props" component={RenderProps} />
                    <Route path="/hoc-testing" component={Hocs} />
                    <Route path="/lifecycle" component={Lifecycle} />
                </Switch>

            </MuiThemeProvider>
        </div>
    );
}

export default withDarkMode(App);
