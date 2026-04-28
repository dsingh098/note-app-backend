import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md'>
      
      <Link 
        to="/" 
        className='text-xl font-semibold tracking-wide hover:text-gray-300 transition'
      >
        Notes
      </Link>

      <div className='flex gap-6'>
        <Link 
          to="/add-note" 
          className='bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition'
        >
          Add
        </Link>
      </div>

    </nav>
  )
}

export default Navbar