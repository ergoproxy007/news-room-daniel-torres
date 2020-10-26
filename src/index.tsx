import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import store from './redux/store';

import App from './App';
import ContenedorPrincipal from './redux/components/ContenedorPrincipal';

import './index.css';
import HomeHeading from './views/HomepageHeading';

render(
  <Provider store={store}>
    <HashRouter>
      <App>
        <Switch>
          <Route path="/home" component={HomeHeading} />
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
