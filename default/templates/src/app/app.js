import React from 'react';
import {Provider} from 'react-redux';
import {ReduxRouter} from 'redux-react-router';

import 'font-awesome/css/font-awesome.css';
import '@ersinfotech/bootstrap/css/yeti.css';

import configureStore from './store/configureStore';

const store = configureStore();

export default (
  <Provider store={store}>
    {() =>
      <ReduxRouter />
    }
  </Provider>
);
