import React from 'react';
import {Provider} from 'react-redux';
import {Router, hashHistory as history} from 'react-router';

import 'font-awesome/css/font-awesome.css';
import 'antd/lib/index.css';

import configureStore from './store/configureStore';
import routes from './routes';
import initialState from './initialState';

const store = configureStore({history, initialState});

module.exports = (
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>
);
