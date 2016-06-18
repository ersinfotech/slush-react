import React from 'react';
import {Router, Route} from 'react-router';
import {Container as Base} from 'modules/base';
import {Component as Home} from 'modules/home';

const App = ({history}) => {
  return (
    <Router history={history}>
      <Route component={Base}>
        <Route path="/" components={{body: Home}} />
      </Route>
    </Router>
  );
}

export default App;
