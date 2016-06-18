import 'helpers/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {updateLocation} from 'redux-loop-router';
import createStore from 'helpers/createStore'
import {hashHistory as history} from 'react-router';
import {Component as App, createReducer, init} from 'modules/app';
import 'font-awesome/css/font-awesome.css';
import 'antd/lib/index.css';

const store = createStore(createReducer(history), init());

history.listen((location) => {
  store.dispatch(updateLocation(location));
});

const render = () => {
  const {Component: App} = require('modules/app');
  ReactDOM.render(
    <Provider store={store}>
      <App history={history} />
    </Provider>
  ,
    document.getElementById('app')
  );
}

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('modules/app', () => {
    const {createReducer: nextCreateReducer} = require('modules/app');
    store.replaceReducer(nextCreateReducer(history));
    render();
  });
}
