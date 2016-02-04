import config from 'config';
import request from 'helpers/superagent';

export const fetchMeTask = () => {
  const {access_token} = localStorage;
  return request.get(config.eadmin.baseUrl + '/account/me')
    .query({
      access_token,
    })
    .endAsync()
    .get('body');
};

export const parseMeTask = () => {
  return JSON.parse(localStorage.me);
};

export const signoutTask = () => {
  delete localStorage.access_token;
  location.replace('/login.html');
}
