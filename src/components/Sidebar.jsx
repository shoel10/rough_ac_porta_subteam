import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import '../css/Sidebar.css';
import AdminMainPage from './AdminMainPage'
import {BrowserRouter, Routes, Route,link} from 'react-router-dom';


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

      <a className="menu-item"  href="/AdminMainPage" >
        Service provider(Admin)
      </a>
      
     
    </Menu>
  );
};