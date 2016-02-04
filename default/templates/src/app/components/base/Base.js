import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import classnames from 'classnames';

import Sidebar from 'components/sidebar/Sidebar';
import Header from 'components/header/Header';

import {init} from 'actions/initActions';

import './base.css';

@connect(
  (state) => ({
    isCollapse: _.get(state, 'sidebar.isCollapse'),
  })
)
export default class Base extends Component {

  static propTypes = {
    isCollapse: PropTypes.bool,
    header: PropTypes.element,
    sidebar: PropTypes.element,
    body: PropTypes.element,
  };

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(init());
  }

  render() {
    const {isCollapse, header, sidebar, body} = this.props;
    return (
      <div className={classnames({collapse: isCollapse})}>
        <div className="left-block">
          <Sidebar>
            {sidebar}
          </Sidebar>
        </div>
        <div className="right-block">
          <Header>
            {header}
          </Header>
          <div className="main-container">
            {body}
          </div>
        </div>
      </div>
    );
  }
}
