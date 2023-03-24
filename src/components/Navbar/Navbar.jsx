import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navbar.scss';
import { FaHome, FaSearch } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

const Navbar = ({ title }) => (
  <>
    <nav className="nav__div">
      <Link to="/" className="nav__link">
        <FaHome />
      </Link>
      <h1 className="nav__title">{ title }</h1>
      <div className="nav__icons">
        <FaSearch />
        <FiSettings />
      </div>
    </nav>
  </>
);

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
