import {fetchMe} from 'actions/meActions';

fetchMe()()
.catch(() => {
  const path = location.hash && location.hash.replace('#', '');
  location.replace("/login.html?path=" + path);
})
.then((res) => {
  localStorage.me = JSON.stringify(res);

  require.ensure([], (require) => {
    const React = require('react');
    const app = require('./app');

    React.render(app, document.getElementById('app'));
  });
});
