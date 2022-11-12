import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';

const Header = () => (
  <div className="nav-container">
    <div className="header">
      <h1>Book Store CMS</h1>
      <ul className="nav-list">
        <li><NavLink to="/">BOOKS</NavLink></li>
        <li><NavLink to="/categories">CATEGORIES</NavLink></li>
      </ul>
    </div>

    <UserOutlined className="login-icon" />
  </div>
);

export default Header;
