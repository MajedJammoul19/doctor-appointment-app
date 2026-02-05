import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [token,setToken]=useState(true)
const navigate=useNavigate()
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img onClick={()=>{navigate('/')}} src={assets.logo} alt="logo" className="h-10 cursor-pointer" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <NavLink to="/" className="hover:text-blue-600">Home</NavLink>
          <NavLink to="/doctors" className="hover:text-blue-600">All Doctors</NavLink>
          <NavLink to="/about" className="hover:text-blue-600">About</NavLink>
          <NavLink to="/contact" className="hover:text-blue-600">Contact</NavLink>
        </ul>
 {
  token ? (
    <div className="relative group cursor-pointer">
      
      {/* Profile Icon */}
      <div className="flex items-center gap-2">
        <img
          className="w-8 rounded-full"
          src={assets.profile_pic}
          alt="profile"
        />
        <img
          className="w-2.5"
          src={assets.dropdown_icon}
          alt="dropdown"
        />
      </div>

      {/* Dropdown Menu */}
      <div className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-md 
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                      transition-all duration-200">
        <p onClick={()=>navigate('/my-profile')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          My Profile
        </p>
        <p onClick={()=>navigate('/my-appointments')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          My Appointments
        </p>
        <p onClick={()=>
setToken(false)
        } className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">
          Logout
        </p>
      </div>

    </div>
  ) : (
    <button
      onClick={() => navigate('/login')}
      className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
    >
      Create Account
    </button>
  )
}

       

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 bg-white border-t pt-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <NavLink onClick={() => setOpen(false)} to="/">Home</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/doctors">All Doctors</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/about">About</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact">Contact</NavLink>
          </ul>

         
        </div>
      )}

    </nav>
  )
}

export default Navbar
