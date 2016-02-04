import {TOGGLE_SIDEBAR} from 'actions/sidebarActions';

export default (state = {}, action) => {
  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      isCollapse: !state.isCollapse,
    };
  };

  return state;
}
