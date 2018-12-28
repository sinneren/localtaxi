import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ErrorBoundary } from './components/ErrorBoundary';
import configStore from './store/configStore';
import Main from './components/Main';
import SignupCountainer from './containers/signup';
import './index.css';

import Layout from './templates/MainLayout';

ReactDOM.render(
    <Provider store={configStore}>
        <ErrorBoundary>
            <BrowserRouter>
                <Switch>
                    <Layout>
                        <Route exact path="/" component={Main} />
                        <Route exact path="/signup" component={SignupCountainer} />
                    </Layout>
                </Switch>
            </BrowserRouter>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);

