import React from 'react';
import Country from '../components/Country/Country';
import Filter from '../components/Filter/Filter';
import Navbar from '../components/Navbar/Navbar';

const Homepage = () => (
  <>
    <Navbar title="Countries" back={false} />
    <Filter />
    <Country />
  </>
);

export default Homepage;
