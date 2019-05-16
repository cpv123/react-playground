import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const ComponentOne = lazy(() => import('./ComponentOne'));
const ComponentTwo = lazy(() => import('./ComponentTwo'));

const CodeSplitApp = () => (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/code-splitting" component={ComponentOne} />
                <Route path="/code-splitting/another" component={ComponentTwo} />
            </Switch>
        </Suspense>
    </Router>
)

export default CodeSplitApp;