import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="nav-container">
    <h1>Book Store</h1>
    <ul>
      <li><NavLink to="/">Books</NavLink></li>
      <li><NavLink to="/categories">Categories</NavLink></li>
    </ul>
  </div>
);

export default Header;
