import React, {Component, PropTypes} from 'react';
import className from 'classnames';

import Header from 'components/header/Header';
import Sidebar from 'components/sidebar/Sidebar';

import {sidebar, main} from './base.css';

export default class Base extends Component {

  static propTypes = {
    children: PropTypes.element,
  }

  render() {
    return (
      <div>
        <div className="header">
          <div className="container">
            <Header />
          </div>
        </div>
        <div className="container clearfix margin-top-lg">
          <div className={className('pull-left margin-right-lg', sidebar)}>
            <Sidebar />
          </div>
          <div className={className('pull-left', main)}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
