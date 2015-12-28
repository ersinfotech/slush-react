import {fetchMe} from 'actions/meActions';

fetchMe()()
.catch(() => {
  const path = location.hash && location.hash.replace('#', '');
  location.replace('/login.html?path=' + path);
})
.then((res) => {
  localStorage.me = JSON.stringify(res);

  require.ensure([], (require) => {
    const {render} = require('react-dom');
    const app = require('./app');

    render(app, document.getElementById('app'));
  });
});
