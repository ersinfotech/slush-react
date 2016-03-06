import {combineReducers} from 'redux-loop';
import {routeReducer as router} from 'react-router-redux';
import {reducer as me} from 'modules/me';
import {reducer as sidebar} from 'modules/sidebar';

export default combineReducers({
  router,
  me,
  sidebar,
});
