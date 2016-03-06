import fetchMeAsync from './helpers/fetchMeAsync';

fetchMeAsync()
.catch(() => {
  const path = location.hash && location.hash.replace('#', '');
  location.replace('/login.html?path=' + path);
})
.then(() => {
  require.ensure([], (require) => {
    require('./app');
  });
});
