import config from 'config';

import request from 'helpers/superagent';

const {access_token} = localStorage;

export function fetchMe() {
  return () => {
    return request.get(config.eadmin.baseUrl + '/account/me')
      .query({
        access_token,
      })
      .endAsync()
      .get('body');
  };
}
