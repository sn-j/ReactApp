import React from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum sed accusantium sequi, natus sapiente atque aliquid consequatur assumenda rerum dolorum.</p>

      <NavLink to="AboutUs">AboutUs</NavLink>
      <NavLink to="Company">Company</NavLink>
      <Outlet />

    </div>


  )
}

export default About
