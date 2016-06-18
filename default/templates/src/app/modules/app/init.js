import {loop, Effects} from 'redux-loop';

import {init as meInit} from 'modules/me';

const [meModel, meEffect] = meInit();

export default () => {
  return loop({
    me: meModel,
  },
    meEffect
  );
}
