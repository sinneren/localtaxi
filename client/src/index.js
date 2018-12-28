import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ErrorBoundary } from './components/ErrorBoundary';
import configStore from './store/configStore';
import App from './App';
import './index.css';

import Layout from './templates/MainLayout';

ReactDOM.render(
    <Provider store={configStore}>
        <ErrorBoundary>
            <BrowserRouter>
                <Switch>
                    <Layout>
                        <Route exact path="/" component={App} />
                    </Layout>
                </Switch>
            </BrowserRouter>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);

