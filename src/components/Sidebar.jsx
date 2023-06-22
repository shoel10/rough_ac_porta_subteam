import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import '../css/Sidebar.css';
//import  from './AdminMainPage';
import {Link} from 'react-router-dom';

export default props => {
  return (
    <Menu>
    <h3>Login as</h3>
      <a className="menu-item" href="/">
        Customer
      </a>

      <a className="menu-item" href="/">
        Employee
      </a>

      <a className="menu-item">
      <Link to ="/AdminMainPage" >Service Provider(Admin)</Link>
        
        
      </a>
      
    </Menu>
  );
};