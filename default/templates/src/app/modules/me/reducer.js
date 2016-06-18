import {loop, Effects} from 'redux-loop';

import {SIGNOUT} from './actions';
import {signOut} from './tasks';

export default (state = {}, action) => {
  if (action.type === SIGNOUT) {
    return loop(
      state
    ,
      Effects.call(signOut),
    );
  }

  return loop(state, Effects.none());
}
