import React from 'react'
import { assets } from '../assets/assets'


const Header = () => {
  return (
    <div className="bg-blue-800 mt-5 rounded-xl px-6 md:px-16 py-10 md:py-16 flex flex-col md:flex-row items-center justify-between text-white">
      
      {/* -------- Left Side -------- */}
      <div className="md:w-1/2 space-y-6">
        <p className="text-3xl md:text-5xl font-bold leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </p>

        <div className="flex items-center gap-4">
          <img
            src={assets.group_profiles}
            alt="profiles"
            className="w-24"
          />
          <p className="text-blue-100 text-sm md:text-base">
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
        </div>

        <a
          href="#speciality"
          className="inline-flex items-center gap-2 bg-white text-blue-800 px-6 py-3 rounded-full font-medium hover:scale-105 transition"
        >
          Book Appointment
          <img src={assets.arrow_icon} alt="arrow" className="w-4" />
        </a>
      </div>

      {/* -------- Right Side -------- */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src={assets.header_img}
          alt="header"
          className="w-full max-w-md"
        />
      </div>

    </div>
  )
}

export default Header
