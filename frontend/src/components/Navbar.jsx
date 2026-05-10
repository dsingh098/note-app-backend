import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      
      {/* Left side: Logo */}
      <div className="flex items-center gap-3">
        {/* Example logo placeholder (you can replace with an actual image) */}
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white">
          N
        </div>
        <Link 
          to="/home" 
          className="text-xl font-semibold tracking-wide hover:text-gray-300 transition"
        >
          Notes
        </Link>
      </div>

      {/* Right side: Links */}
      <div className="flex gap-6">
        <Link 
          to="/add-note" 
          className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition"
        >
          Add
        </Link>
        <Link 
          to="/home" 
          className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition"
        >
          Get Notes
        </Link>
      </div>

    </nav>
  )
}

export default Navbar
