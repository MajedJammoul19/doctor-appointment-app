import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [token, setToken] = useState(true)
  const [profileOpen, setProfileOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <nav className="bg-white shadow-md px-6 py-4 fixed w-full z-50">
      {/* Top Bar */}
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <img
          onClick={() => navigate('/')}
          src={assets.logo}
          alt="logo"
          className="h-10 cursor-pointer"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <NavLink to="/" className="hover:text-blue-600">Home</NavLink>
          <NavLink to="/doctors" className="hover:text-blue-600">All Doctors</NavLink>
          <NavLink to="/about" className="hover:text-blue-600">About</NavLink>
          <NavLink to="/contact" className="hover:text-blue-600">Contact</NavLink>
        </ul>

        {/* Profile / Auth Buttons */}
        {token ? (
          <div className="relative hidden md:flex items-center gap-2">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <img
                className="w-8 h-8 rounded-full"
                src={assets.profile_pic}
                alt="profile"
              />
              <img
                className="w-2.5 h-2.5"
                src={assets.dropdown_icon}
                alt="dropdown"
              />
            </div>

            {/* Dropdown Menu */}
            <div
              className={`absolute right-0 mt-2 top-full w-44 z-10 bg-white border rounded-lg shadow-md transition-all duration-200
                ${profileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
              `}
            >
              <p
                onClick={() => { navigate('/my-profile'); setProfileOpen(false) }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                My Profile
              </p>
              <p
                onClick={() => { navigate('/my-appointments'); setProfileOpen(false) }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                My Appointments
              </p>
              <p
                onClick={() => setToken(false)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
              >
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
        )}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden mt-4 bg-white border-t pt-4 transition-all duration-300
          ${open ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'}
        `}
      >
        <ul className="flex flex-col gap-4 text-gray-700 font-medium px-2">
          <NavLink onClick={() => setOpen(false)} to="/">Home</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/doctors">All Doctors</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/about">About</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/contact">Contact</NavLink>
        </ul>

        {/* Mobile Auth Buttons */}
        {token ? (
          <div className="mt-4 border-t pt-4 px-2 flex flex-col gap-2">
            <p onClick={() => { navigate('/my-profile'); setOpen(false) }} className="cursor-pointer hover:text-blue-600">My Profile</p>
            <p onClick={() => { navigate('/my-appointments'); setOpen(false) }} className="cursor-pointer hover:text-blue-600">My Appointments</p>
            <p onClick={() => { setToken(false); setOpen(false) }} className="cursor-pointer text-red-500 hover:text-red-600">Logout</p>
          </div>
        ) : (
          <button
            onClick={() => { navigate('/login'); setOpen(false) }}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition w-full mt-4"
          >
            Create Account
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar
