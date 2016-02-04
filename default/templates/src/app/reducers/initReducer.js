import {Effects, loop} from '@jarvisaoieong/redux-loop';

import {INIT} from 'actions/initActions';
import {parseMe} from 'actions/meActions';

export default (state, action) => {
  if (action.type === INIT) {
    return loop(
      state,
      Effects.constant(parseMe()),
    );
  }

  return state;
}
