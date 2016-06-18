import base64 from 'base-64';
import fetchMeAsync from './helpers/fetchMeAsync';
import signInAsync from './helpers/signInAsync';

fetchMeAsync()
.catch(() => {
  if (!localStorage.isAutoSignIn) {
    throw new Error('need login');
  }
  return signInAsync({
    email: localStorage.email,
    password: base64.decode(localStorage.password),
  })
  .then(fetchMeAsync);
})
.catch(() => {
  const path = location.hash && location.hash.replace('#', '');
  location.replace('/login.html?path=' + path);
})
.then(() => {
  require.ensure([], (require) => {
    require('./app');
  });
});
