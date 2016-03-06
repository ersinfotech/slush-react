import _ from 'lodash';
import {connect} from 'react-redux';
import Component from './Component';

export default connect(
  (state) => ({
    isCollapsed: _.get(state, 'sidebar.isCollapsed'),
  })
)(Component);
