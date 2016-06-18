import {combineReducers} from 'redux-loop';
import {createReducer as createRouterReducer} from 'redux-loop-router';
import {reducer as me} from 'modules/me';
import {reducer as sidebar} from 'modules/sidebar';

export default (history) => {
  return combineReducers({
    router: createRouterReducer(history),
    me,
    sidebar,
  });
};
