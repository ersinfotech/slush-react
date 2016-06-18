import {createStore, applyMiddleware, compose} from 'redux';
import {install} from 'redux-loop';

export default (reducer, initialState) => {
  return createStore(reducer, initialState, compose(
    install(),
    process.env.NODE_ENV === 'development'
      ? applyMiddleware(require('redux-logger')({collapsed: true}))
      : f => f,
  ));
}
