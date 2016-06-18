import config from 'config';
import request from 'superagent';

export default () => {
  const {access_token} = localStorage;
  return request.get(config.eadmin.baseUrl + '/account/me')
    .query({
      access_token,
    })
    .then((res) => {
      localStorage.me = JSON.stringify(res.body);
    });
};
