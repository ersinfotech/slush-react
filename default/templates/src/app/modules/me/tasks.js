import Promise from 'bluebird';
import {signoutSuccess} from './actions';

export const signoutTask = () => {
  delete localStorage.access_token;
  location.replace('/login.html');
  return Promise.resolve(signoutSuccess());
}
