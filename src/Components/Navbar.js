import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className='flex bg-black text-white justify-between px-6 py-3 items-center'>
        <div>
          <h2 className='text-2xl'>Demo</h2>
        </div>
        <div>
          <ul className='flex space-x-10'>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

