import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Icon, Tooltip} from 'antd';

import {signout} from 'actions/meActions';

import './header.css'

@connect(
  null,
)
export default class Header extends Component {

  handleLogoutClick = () => {
    const {dispatch} = this.props;
    dispatch(signout());
  };

  render() {
    const {children} = this.props;
    return (
      <Row type="flex" align="middle" className="header">

        <Col span="20">{children}</Col>
        <Col span="4" className="clearfix">
          <a className="pull-right margin-left-lg" onClick={this.handleLogoutClick}>
            <Tooltip placement="bottom" title="登出">
              <Icon type="logout" />
            </Tooltip>
          </a>
          <a className="pull-right margin-left-lg">
            <Tooltip placement="bottom" title="消息">
              <Icon type="notification" />
            </Tooltip>
          </a>
        </Col>
      </Row>
    );
  }
}
