import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import RelatedDoctors from '../components/RelatedDoctors'

const Appointment = () => {
  const navigate=useNavigate()
  const { docId } = useParams()
  const { doctors, currencySymbol,setAppointments } = useContext(AppContext)

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  /* ---------- Fetch Doctor Info ---------- */
  const fetchDocInfo = () => {
    const doc = doctors.find(doc => doc._id === docId)
    setDocInfo(doc)
  }

  /* ---------- Generate Available Slots ---------- */
  const getAvailableSlots = () => {
    setDocSlots([])

    let today = new Date()

   for (let i = 0; i < 7; i++) {
  let currentDate = new Date(today)
  currentDate.setDate(today.getDate() + i)

  // ✅ الحل الأول هنا
  if (
    today.toDateString() === currentDate.toDateString() &&
    today.getHours() >= 20
  ) {
    continue // تجاهل هذا اليوم بالكامل
  }

  let endTime = new Date(today)
  endTime.setDate(today.getDate() + i)
  endTime.setHours(21, 0, 0, 0)

  if (today.toDateString() === currentDate.toDateString()) {
    let hour = currentDate.getHours()
    currentDate.setHours(hour < 10 ? 10 : hour + 1)
    currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
  } else {
    currentDate.setHours(10)
    currentDate.setMinutes(0)
  }

  let timeSlots = []

  while (currentDate < endTime) {
    timeSlots.push({
      datetime: new Date(currentDate),
      time: currentDate.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    })

    currentDate.setMinutes(currentDate.getMinutes() + 30)
  }

  setDocSlots(prev => [...prev, timeSlots])
}

  }

  /* ---------- Effects ---------- */
  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  useEffect(() => {
    if (docInfo) getAvailableSlots()
  }, [docInfo])

  /* ---------- UI ---------- */
  return (
    docInfo && (
      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* -----------Doctor Details----------- */}
        <div className="flex flex-col md:flex-row gap-8 bg-white rounded-2xl shadow p-6">
          {/* Image */}
          <div className="shrink-0">
            <img
              src={docInfo.image}
              alt={docInfo.name}
              className="w-64 h-64 object-cover rounded-xl"
            />
          </div>

          <div className="flex-1">
            {/* Name */}
            <p className="flex items-center gap-2 text-2xl font-semibold text-gray-800">
              {docInfo.name}
              <img src={assets.verified_icon} alt="" className="w-5 h-5" />
            </p>

            {/* Degree + Experience */}
            <div className="flex items-center gap-3 mt-2">
              <p className="text-gray-500">
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <span className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                {docInfo.experience}
              </span>
            </div>

            {/* About */}
            <div className="mt-6">
              <p className="flex items-center gap-2 text-lg font-medium text-gray-800 mb-2">
                About
                <img src={assets.info_icon} alt="" className="w-4 h-4" />
              </p>
              <p className="text-gray-600 leading-relaxed">
                {docInfo.about}
              </p>
            </div>

            {/* Fee */}
            <p className="mt-4 text-gray-700">
              Appointment fee:{' '}
              <span className="font-semibold text-gray-900">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/* --------- Booking Slots --------- */}
        <div className="mt-10">
          <p className="text-lg font-medium mb-4">Booking slots</p>

          {/* Days */}
          <div className="flex gap-3 overflow-x-auto mb-6">
            {docSlots.length > 0 &&
              docSlots.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSlotIndex(index)}
                  className={`cursor-pointer px-4 py-3 rounded-lg text-center min-w-20
                    ${
                      slotIndex === index
                        ? 'bg-blue-600 text-white'
                        : 'border text-gray-600'
                    }`}
                >
                  <p className="text-sm font-medium">
                    {item[0] && daysOfWeek[item[0].datetime.getDay()]}
                  </p>
                  <p className="text-sm">
                    {item[0] && item[0].datetime.getDate()}
                  </p>
                </div>
              ))}
          </div>

          {/* Times */}
          <div className="flex gap-3 flex-wrap mb-6">
            {docSlots.length > 0 &&
              docSlots[slotIndex]?.map((item, index) => (
                <p
                  key={index}
                  onClick={() => setSlotTime(item.time)}
                  className={`cursor-pointer px-4 py-2 rounded-full text-sm
                    ${
                      slotTime === item.time
                        ? 'bg-blue-600 text-white'
                        : 'border text-gray-600'
                    }`}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>

          {/* Button */}
          <button className="px-8 py-3 bg-blue-600
           text-white rounded-full
            hover:bg-blue-700 transition" 
            onClick={()=>{
             if (!slotTime) return alert('Please select a time slot')

  setAppointments(prev => [
    ...prev,
    {
      id: Date.now(),
      doctorId: docInfo._id,
      doctorName: docInfo.name,
      doctorImage: docInfo.image,
      speciality: docInfo.speciality,
      date: docSlots[slotIndex][0].datetime.toDateString(),
      time: slotTime,
      fees: docInfo.fees,
    },
  ])

  navigate('/my-appointments')
            }}>
            Book an appointment
          </button>
        </div>
        {/* Related Doctors */}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
      </div>
    )
  )
}

export default Appointment
