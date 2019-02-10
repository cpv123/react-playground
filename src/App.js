import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Switch as Toggle } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core';
import themes from './dark-mode/themes';
import withDarkMode from './dark-mode/withDarkMode';
import LandingPage from './LandingPage';
import RoutingButton from './routing';
import routesConfig from './routes-config';

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
                    {
                        Object.keys(routesConfig).map(key => (
                            <Route 
                                key={key}
                                path={routesConfig[key].path} 
                                component={routesConfig[key].component}
                            />
                        ))
                    }
                </Switch>

            </MuiThemeProvider>
        </div>
    );
}

export default withDarkMode(App);
