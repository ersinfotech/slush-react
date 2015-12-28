import React, {Component} from 'react';
import {Menu} from 'antd';

export default class Sidebar extends Component {

  render() {
    return (
      <div>
        <h3>Sidebar</h3>
        <Menu>
          <Menu.Item>Option1</Menu.Item>
          <Menu.Item>Option2</Menu.Item>
        </Menu>;
      </div>
    );
  }
}
