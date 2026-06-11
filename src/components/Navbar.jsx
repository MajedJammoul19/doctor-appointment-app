import React, { useState, useRef, useEffect } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useUser, UserButton, SignOutButton } from '@clerk/react'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { isSignedIn, user } = useUser()
  const mobileMenuRef = useRef(null)

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    if (open) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/doctors', label: 'All Doctors' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-white shadow-md px-4 sm:px-6 py-4 fixed w-full top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        
        {/* Logo - Left */}
        <img
          onClick={() => navigate('/')}
          src={assets.logo}
          alt="logo"
          className="h-8 sm:h-10 cursor-pointer flex-shrink-0"
        />

        {/* Desktop Nav Links - Center */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 font-medium text-gray-700 mx-4">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `transition-colors duration-150 hover:text-blue-600 ${
                    isActive ? 'text-blue-600 font-semibold' : ''
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Auth - Right */}
        <div className="hidden md:flex items-center gap-3 mr-28">
          {isSignedIn ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600 hidden lg:inline-block">
                {user?.firstName || user?.fullName || user?.primaryEmailAddress?.emailAddress?.split('@')[0] || 'User'}
              </span>
              <UserButton
                afterSignOutUrl="/login"
                appearance={{
                  elements: {
                    avatarBox: 'w-9 h-9',
                    userButtonTrigger: 'focus:shadow-none',
                  },
                }}
                userProfileMode="navigation"
                userProfileUrl="/my-profile"
              />
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 active:scale-95 transition-all duration-150 text-sm font-medium whitespace-nowrap"
            >
              Create Account
            </button>
          )}
        </div>

        {/* Mobile: Right side - UserButton + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          {isSignedIn && (
            <UserButton
              afterSignOutUrl="/login"
              appearance={{
                elements: {
                  avatarBox: 'w-8 h-8',
                  userButtonTrigger: 'focus:shadow-none',
                },
              }}
              userProfileMode="navigation"
              userProfileUrl="/my-profile"
            />
          )}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="text-gray-700 p-1 rounded-md hover:bg-gray-100 transition-colors"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="mt-4 pt-4 border-t border-gray-100">
          {/* Mobile Nav Links */}
          <ul className="flex flex-col font-medium text-gray-700">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded-md hover:bg-gray-50 hover:text-blue-600 transition-colors ${
                      isActive ? 'text-blue-600 font-semibold bg-blue-50' : ''
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Auth - only shown when NOT signed in */}
          {!isSignedIn && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <button
                onClick={() => { 
                  navigate('/login')
                  setOpen(false)
                }}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all w-full text-sm font-medium"
              >
                Create Account
              </button>
            </div>
          )}

          {/* Mobile signed-in shortcuts */}
          {isSignedIn && (
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-1 text-sm">
              <button
                onClick={() => { 
                  navigate('/my-profile')
                  setOpen(false)
                }}
                className="text-left px-3 py-3 rounded-md hover:bg-gray-50 hover:text-blue-600 transition-colors text-gray-700"
              >
                My Profile
              </button>
              <button
                onClick={() => { 
                  navigate('/my-appointments')
                  setOpen(false)
                }}
                className="text-left px-3 py-3 rounded-md hover:bg-gray-50 hover:text-blue-600 transition-colors text-gray-700"
              >
                My Appointments
              </button>
              <SignOutButton redirectUrl="/login">
                <button
                  onClick={() => setOpen(false)}
                  className="text-left px-3 py-3 rounded-md hover:bg-red-50 text-red-500 hover:text-red-600 transition-colors w-full"
                >
                  Sign Out
                </button>
              </SignOutButton>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar