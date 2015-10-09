import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

@connect(
  state => ({
    me: state.me,
  }),
)
export default class Header extends Component {

  static propTypes = {
    me: PropTypes.object,
  }

  handleLogoutClick() {
    delete localStorage.access_token;
    location.replace('/login.html');
  }

  render() {
    const {me} = this.props;
    return (
      <div>
        Header

        <span className="pull-right">
          {me.username}
          {' '}
          <a onClick={::this.handleLogoutClick}>
            <i className="fa fa-sign-out"/>
          </a>
        </span>

      </div>
    );
  }
}
