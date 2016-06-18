import config from 'config';
import request from 'superagent';

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
    .then((res) => {
      localStorage.access_token = res.body.access_token;
    });
};
