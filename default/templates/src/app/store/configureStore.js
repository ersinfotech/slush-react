import {createStore, applyMiddleware, compose} from 'redux';
import {syncHistory} from 'react-router-redux'
import {combineReducers, install} from '@jarvisaoieong/redux-loop';
import createLogger from '@jarvisaoieong/redux-logger';

import routes from '../routes';
import * as reducers from '../reducers';

export default function configureStore({history, initialState}) {
  const reduxRouterMiddleware = syncHistory(history);
  const reducer = combineReducers(reducers);

  const store = createStore(reducer, initialState, compose(
    applyMiddleware(reduxRouterMiddleware),
    install(),
    process.env.NODE_ENV === 'development'
      ? applyMiddleware(createLogger({collapsed: true}))
      : applyMiddleware(),
  ));

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducers = require('../reducers');
      const nextReducer = combineReducers(nextReducers);
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
