import React from 'react';
import md5 from 'md5';
import {Icon} from 'antd';
import {toggleSidebar} from '../actions';
import './style.css';

const Sidebar = ({
  model,
  username,
  email,
  children,
  dispatch,
}) => {
  return (
    <div className="sidebar">
      <div className="title">
        <Icon type="share-alt" />
        <span className="margin-left-md"><%= name %></span>
      </div>
      {children}
      <div className="avatar clearfix">
        <div className="pull-left">
          <img src={`http://www.gravatar.com/avatar/${md5(email)}?d=retro`} />
        </div>
        <div className="pull-left">
          <span className="margin-left-md">{username}</span>
        </div>
      </div>
      <div className="collapse-btn" onClick={() => dispatch(toggleSidebar())}>
        <Icon type={model.isCollapsed ? 'right' : 'left'} />
      </div>
    </div>
  );
}

export default Sidebar;
