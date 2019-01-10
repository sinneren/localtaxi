import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ErrorBoundary } from './components/ErrorBoundary';
import configStore from './store/configStore';

import './index.css';
import routes from './routes';

import Layout from './templates/MainLayout';

ReactDOM.render(
    <Provider store={configStore}>
        <ErrorBoundary>
            <BrowserRouter>
                <Switch>
                    <Layout>
                        {routes.map((item, index) => {
                            return <Route
                                key={index}
                                exact
                                path={item.url}
                                render={(props) => <item.component {...props} title={item.title} />}
                            />
                        })}
                    </Layout>
                </Switch>
            </BrowserRouter>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);

