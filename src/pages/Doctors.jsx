import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
  const { speciality } = useParams()
  const navigate = useNavigate()
  const [filterDocs, setFilterDoc] = useState([])
  const { doctors } = useContext(AppContext)

  const specialities = [
    
    'General physician',
    'Gynecologist',
    'Dermatologist',
    'Pediatricians',
    'Neurologist',
    'Gastroenterologist',
  ]

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  const handleSpecialityClick = (item) => {
  navigate(`/doctors/${item}`)
}
  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <p className="text-lg font-medium text-gray-700 mb-6">
        Browse through the doctors specialist
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar */}
        <div className="md:w-1/4">
          <div className="bg-white border rounded-xl p-5 space-y-3 shadow-sm">
            {specialities.map((item, index) => (
              <p
                key={index}
                onClick={() => handleSpecialityClick(item)}
                className={`cursor-pointer px-3 py-2 rounded-lg text-sm transition
                  ${
                    speciality === item
                      ? 'bg-blue-100 text-blue-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-100'
                  }
                `}
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterDocs.map((doctor, index) => (
            <Link
              key={index}
              to={`/appointments/${doctor._id}`}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
                  <p className="text-sm text-green-600 font-medium">
                    Available
                  </p>
                </div>

                <p className="text-lg font-semibold text-gray-800">
                  {doctor.name}
                </p>

                <p className="text-sm text-gray-500">
                  {doctor.speciality}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Doctors
