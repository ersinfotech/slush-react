import {loop, Effects} from '@jarvisaoieong/redux-loop';

import {PARSE_ME, LOAD_ME, SIGNOUT, loadMe} from 'actions/meActions';
import {parseMeTask, signoutTask} from 'tasks/meTasks';

export default (state = {}, action) => {
  if (action.type === PARSE_ME) {
    return loop(
      state,
      Effects.map(Effects.promise(parseMeTask), loadMe),
    );
  }

  if (action.type === LOAD_ME) {
    return {
      ...action.data,
    };
  }

  if (action.type === SIGNOUT) {
    return loop(
      state,
      Effects.promise(signoutTask),
    );
  }

  return state;
}
