import React, {Component} from 'react';
import {Menu} from 'antd';

export default class Sidebar extends Component {

  render() {
    return (
      <div>
        <h1>Sidebar</h1>
        <Menu>
          <Menu.Item>Option1</Menu.Item>
          <Menu.Item>Option2</Menu.Item>
        </Menu>;
      </div>
    );
  }
}
