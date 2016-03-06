import {connect} from 'react-redux';
import Component from './Component'

export default connect(
  (state) => ({
    model: state.sidebar,
    username: state.me.username,
    email: state.me.email,
  })
)(Component);
