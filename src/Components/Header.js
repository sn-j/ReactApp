import React from 'react';
import Details from '../Pages/Details';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className='bg-black'>
      <nav className='flex text-white items-center justify-end space-x-9 px-12 py-3 text-lg'>
        <NavLink to="/LandingPage">Home</NavLink>
        <Link to="/about">About</Link>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/FoodCard">FoodCard</NavLink>
      </nav>
    </header>
  )
}

export default Header
