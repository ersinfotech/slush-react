import {signOutSuccess} from './actions';

export const signOut = () => {
  delete localStorage.access_token;
  location.replace('/login.html');
  return signOutSuccess();
}
