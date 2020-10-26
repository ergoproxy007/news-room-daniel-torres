import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import store from './redux/store';

import App from './App';

import './index.css';
import CategoryNews from './redux/components/CategoryNews';

render(
  <Provider store={store}>
    <HashRouter>
      <App>
        <Switch>
          <Route path="/home" component={CategoryNews} />
        </Switch>
      </App>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
