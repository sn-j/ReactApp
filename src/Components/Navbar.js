import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(prop) {
  return (
    <div>
      <nav className='flex bg-black text-white justify-between px-6 py-3 items-center sticky top-0 left-0 w-[100%]'>
        <div>
          <Link to={"./Demo"}>{prop.logo}</Link>
        </div>
        <div>
          <ul className='flex space-x-10'>
            <Link to={"/"}>Home</Link>
            <Link to={"./Contact"}>{prop.name}</Link>
            <Link to={"./About"}>About</Link>
            <Link to={"./FoodCard"}>FoodCard</Link>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

