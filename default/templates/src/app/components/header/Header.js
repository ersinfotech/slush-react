import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Icon} from 'antd';

import {container, info} from './header.css'

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
      <Row type="flex" align="middle" className={container}>
        <Col span="2">
          <h1>
            Header
          </h1>
        </Col>

        <Col span="4" offset="18" className={info}>
          {me.username}
          {' '}
          <a onClick={::this.handleLogoutClick}>
            <Icon type="logout" />
          </a>
        </Col>

      </Row>
    );
  }
}
