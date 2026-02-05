import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate ,Link} from 'react-router-dom'
const RelatedDoctors = ({speciality,docId}) => {
    const navigate=useNavigate()
    const {doctors}=useContext(AppContext)
    const [relDoc,setRelDoc]=useState([])

    useEffect(()=>{
        if(doctors.length>0 && speciality){
const doctorsData=doctors.filter((doc)=>doc.speciality === speciality && doc._id !== docId)
setRelDoc(doctorsData)
        }

    },[doctors,speciality,docId])
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h1 className="text-3xl font-semibold text-center text-gray-800">
          Top Doctors to Book
        </h1>
        <p className="mt-3 text-center text-gray-500">
          Simply browse our extensive list of trusted doctors
        </p>

        {/* Doctors Grid */}
        <div  className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {relDoc.slice(0, 5).map((doctor, index) => (
            <Link
              key={index}
              to={`/appointments/${doctor._id}`}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Image */}
              <img
             onClick={()=>{scrollTo(0,0)}}
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-5">
                {/* Status */}
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

        {/* Button */}
        <div className="mt-12 flex justify-center">
          <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            More
          </button>
        </div>
      </div>
    </section>
  )
}

export default RelatedDoctors
