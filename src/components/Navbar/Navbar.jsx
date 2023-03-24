import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Navbar.scss';
import { FaHome, FaSearch } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

const Navbar = () => (
  <>
    <nav className="nav__div">
      <Link to="/" className="nav__link">
        <FaHome />
      </Link>
      <h1 className="nav__title">Countries</h1>
      <div className="nav__icons">
        <FaSearch />
        <FiSettings />
      </div>
    </nav>
    <Outlet />
  </>
);

export default Navbar;
