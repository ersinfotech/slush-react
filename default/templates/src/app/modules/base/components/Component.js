import React from 'react';
import classnames from 'classnames';
import {Container as Sidebar} from 'modules/sidebar';
import {Container as Header} from 'modules/header';
import './style.css';

const Base = ({
  header,
  sidebar,
  body,
  isCollapsed,
}) => {
  return (
    <div className={classnames({collapse: isCollapsed})}>
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

export default Base;
