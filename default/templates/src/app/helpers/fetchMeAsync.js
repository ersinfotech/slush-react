import config from 'config';
import request from 'helpers/superagent';

export default () => {
  const {access_token} = localStorage;
  return request.get(config.eadmin.baseUrl + '/account/me')
    .query({
      access_token,
    })
    .endAsync()
    .get('body')
    .then((me) => {
      localStorage.me = JSON.stringify(me);
    });
};
