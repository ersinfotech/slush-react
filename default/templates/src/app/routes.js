import React from 'react';
import Route from 'react-router/lib/Route';
import Base from 'components/base/Base';
import Home from 'components/home/Home';

export default (
  <Route component={Base}>
    <Route path="/" components={{body: Home}} />
  </Route>
);
