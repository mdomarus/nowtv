import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router';
import { render } from 'react-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import { store, history } from './store';
import 'sanitize.css/sanitize.css';
import './index.css';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/user/:userId" render={() => <UserPage />} />
        <Route exact path="/" render={() => <HomePage />} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  target
);
