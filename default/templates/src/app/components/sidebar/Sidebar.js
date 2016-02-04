import React, {Component} from 'react';
import {connect} from 'react-redux';
import md5 from 'md5';
import _ from 'lodash';

import {Menu, Icon, Tooltip} from 'antd';
import {toggleSidebar} from 'actions/sidebarActions';

import './sidebar.css';

@connect(
  state => ({
    me: state.me,
    isCollapse: _.get(state, 'sidebar.isCollapse'),
  })
)
export default class Sidebar extends Component {

  handerSidebarStateClick = () => {
    const {dispatch} = this.props;
    dispatch(toggleSidebar());
  };

  render() {
    const {me, isCollapse, children} = this.props;

    return (
      <div className="sidebar">
        <div className="title">
          <Icon type="share-alt" />
          <span className="margin-left-md"><%= name %></span>
        </div>
        {children}
        <div className="avatar clearfix">
          <div className="pull-left">
            <img src={`http://www.gravatar.com/avatar/${md5(me.email)}?d=retro`} />
          </div>
          <div className="pull-left">
            <span className="margin-left-md">{me.username}</span>
          </div>
        </div>
        <div className="collapse-btn" onClick={this.handerSidebarStateClick}>
          <Icon type={isCollapse ? 'right' : 'left'} />
        </div>
      </div>
    );
  }
}
