import {createStore, applyMiddleware, compose} from 'redux';
import {syncHistory} from 'react-router-redux'
import {install} from 'redux-loop';

export default (reducer, initialState, {history}) => {
  return createStore(reducer, initialState, compose(
    applyMiddleware(syncHistory(history)),
    install(),
    process.env.NODE_ENV === 'development'
      ? applyMiddleware(require('redux-logger')({collapsed: true}))
      : f => f,
  ));
}
