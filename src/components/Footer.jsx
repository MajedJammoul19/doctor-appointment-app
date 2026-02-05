import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          
          {/* Left section */}
          <div className="md:col-span-2">
            <img
              src={assets.logo}
              alt="Logo"
              className="w-40 mb-4"
            />
            <p className="text-sm leading-relaxed text-gray-400 max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aperiam facilis dolorem obcaecati!
            </p>
          </div>

          {/* Middle section */}
          <div>
            <p className="text-lg font-semibold text-white mb-4">
              Company
            </p>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Right section */}
          <div>
            <p className="text-lg font-semibold text-white mb-4">
              Get In Touch
            </p>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">
                +963-996-164-249
              </li>
              <li className="hover:text-white cursor-pointer break-all">
                majdjammoul89@gmail.com
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
