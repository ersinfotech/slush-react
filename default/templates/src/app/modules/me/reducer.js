import {loop, Effects} from 'redux-loop';

import {SIGNOUT} from './actions';
import {signoutTask} from './tasks';

export default (state = {}, action) => {
  if (action.type === SIGNOUT) {
    return loop(
      state
    ,
      Effects.promise(signoutTask),
    );
  }

  return loop(state, Effects.none());
}
