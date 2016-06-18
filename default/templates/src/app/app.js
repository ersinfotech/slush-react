import 'helpers/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {hashHistory as history} from 'react-router';
import createStore from 'helpers/createStore'
import {Component as App, reducer, init} from 'modules/app';
import 'font-awesome/css/font-awesome.css';
import 'antd/lib/index.css';

const store = createStore(reducer, init(), {history});

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
    const {reducer: nextReducer} = require('modules/app');
    store.replaceReducer(nextReducer);
    render();
  });
}
