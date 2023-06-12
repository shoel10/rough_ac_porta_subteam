import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import '../css/Sidebar.css';

export default props => {
  return (
    <Menu>
    <h3>Login as</h3>
      <a className="menu-item" href="/">
        Customer
      </a>
      <a className="menu-item" href="">
        Employee
      </a>
      <a className="menu-item" href="/">
        Service- providers
      </a>
      <a className="menu-item" href="/">
        Admin
      </a>
    </Menu>
  );
};