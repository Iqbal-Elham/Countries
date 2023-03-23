import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => (
  <div>
    <Link to="/">
      <h1>Back</h1>
    </Link>
    <Outlet />
  </div>
);

export default Navbar;
