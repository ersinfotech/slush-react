import React from 'react';
import {connect} from 'react-redux';
import {Row, Col, Icon, Tooltip} from 'antd';
import {actions as meActions} from 'modules/me';
import './style.css'

const Header = ({
  children,
  dispatch,
}) => {
  return (
    <Row type="flex" align="middle" className="header">
      <Col span="20">{children}</Col>
      <Col span="4" className="clearfix">
        <a className="pull-right margin-left-lg" onClick={() => dispatch(meActions.signOut())}>
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

export default Header;
