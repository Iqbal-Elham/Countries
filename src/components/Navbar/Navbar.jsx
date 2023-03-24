import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Navbar = () => (
  <div>
    <Link to="/">
      <FaHome />
    </Link>
    <Outlet />
  </div>
);

export default Navbar;
