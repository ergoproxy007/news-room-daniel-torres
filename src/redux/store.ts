import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

import  { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';

declare const window: any;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createBrowserHistory() as any;
const middleware = routerMiddleware(history);

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk, middleware)
));

export default store;
