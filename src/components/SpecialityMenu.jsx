import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div
      id="speciality"
      className="max-w-7xl mx-auto px-4 py-12"
    >
      <h1 className="text-3xl font-bold text-center mb-4">
        Find by Speciality
      </h1>

      <p className="text-center text-gray-500 mb-10">
        Simple browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {specialityData.map((item, index) => (
          <Link
          onClick={()=>{scrollTo(0,0)}}
            key={index}
            to={`/doctors/${item.speciality}`}
            className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={item.image}
              alt={item.speciality}
              className="w-20 h-20 object-contain mb-3"
            />
            <p className="text-sm font-medium text-gray-700 text-center">
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
