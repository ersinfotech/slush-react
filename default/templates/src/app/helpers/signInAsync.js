import config from 'config';
import request from 'helpers/superagent';

export default ({
  email,
  password,
  type,
}) => {
  return request.post(config.eadmin.baseUrl + '/oauth/signin')
    .send({
      type,
      email,
      password,
      client_id: config.clientId,
    })
    .endAsync()
    .get('body')
    .get('access_token')
    .then((accessToken) => {
      localStorage.access_token = accessToken;
    });
};
