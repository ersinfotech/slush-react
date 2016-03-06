import {loop, Effects} from 'redux-loop';
import {TOGGLE_SIDEBAR} from './actions';

export const initialState = {
  isCollapsed: false,
};

export default (state = initialState, action) => {
  if (action.type === TOGGLE_SIDEBAR) {
    return loop({
      ...state,
      isCollapsed: !state.isCollapsed,
    },
      Effects.none()
    );
  };

  return loop(state, Effects.none());
}
