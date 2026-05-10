import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from "../AuthContext.jsx";

const Navbar = () => {
  const {handleLogout} = useAuth()
  const navigate = useNavigate()

  const logoutUser = async () => {
   try {
    await handleLogout()
   } catch (error) {
    alert("logout error")
   }
    
  }

  return (
    <nav className="bg-gray-900 text-white px-4 sm:px-6 py-3 sm:py-4 shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

        {/* Left side: Logo */}
        <div className="flex items-center justify-between sm:justify-start gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white">
              N
            </div>

            <Link 
              to="/home" 
              className="text-lg sm:text-xl font-semibold tracking-wide hover:text-gray-300 transition"
            >
              Notes
            </Link>
          </div>
        </div>

        {/* Right side: Links */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 w-full sm:w-auto">

          <Link 
            to="/add-note" 
            className="bg-blue-600 px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-500 transition text-sm sm:text-base w-full sm:w-auto text-center"
          >
            Add
          </Link>

          <Link 
            to="/home" 
            className="bg-gray-700 px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-600 transition text-sm sm:text-base w-full sm:w-auto text-center"
          >
            Get Notes
          </Link>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="bg-red-600 px-3 sm:px-4 py-2 rounded-lg hover:bg-red-500 transition text-sm sm:text-base w-full sm:w-auto"
          >
            Logout
          </button>

        </div>

      </div>
    </nav>
  )
}

export default Navbar
