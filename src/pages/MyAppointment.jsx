import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointment = () => {
  const { appointments, setAppointments, currencySymbol } = useContext(AppContext)

  const [editingId, setEditingId] = useState(null)
  const [newDate, setNewDate] = useState('')
  const [newTime, setNewTime] = useState('')

  const startEdit = (item) => {
    setEditingId(item.id)
    setNewDate(item.date)
    setNewTime(item.time)
  }

  const saveEdit = (id) => {
    setAppointments(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, date: newDate, time: newTime }
          : item
      )
    )
    setEditingId(null)
  }

  const cancelEdit = () => {
    setEditingId(null)
  }

  if (appointments.length === 0) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-20 text-center">
        <p className="text-2xl font-semibold">My Appointments</p>
        <p className="text-gray-500">No appointments booked yet.</p>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <p className="text-3xl font-semibold text-gray-800 mb-6">
        My Appointments
      </p>

      <div className="space-y-6">
        {appointments.map(item => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row gap-6 bg-white rounded-2xl shadow p-6"
          >
            {/* Image */}
            <img
              src={item.doctorImage}
              alt={item.doctorName}
              className="w-32 h-32 object-cover rounded-xl"
            />

            {/* Info */}
            <div className="flex-1 space-y-2">
              <p className="text-xl font-semibold">{item.doctorName}</p>
              <p className="text-gray-600">{item.speciality}</p>

              {editingId === item.id ? (
                <>
                  {/* Edit inputs */}
                  <input
                    type="date"
                    value={newDate}
                    onChange={e => setNewDate(e.target.value)}
                    className="border rounded px-3 py-2 w-full"
                  />

                  <input
                    type="time"
                    value={newTime}
                    onChange={e => setNewTime(e.target.value)}
                    className="border rounded px-3 py-2 w-full"
                  />

                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => saveEdit(item.id)}
                      className="px-4 py-2 bg-green-600 text-white rounded-full"
                    >
                      Save
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="px-4 py-2 bg-gray-400 text-white rounded-full"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* View mode */}
                  <p>
                    Date: <span className="font-medium">{item.date}</span>
                  </p>
                  <p>
                    Time: <span className="font-medium">{item.time}</span>
                  </p>
                  <p>
                    Fees: {currencySymbol}{item.fees}
                  </p>

                  <div className="flex gap-4 mt-4">
                    <button
                      onClick={() => startEdit(item)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                    >
                      Edit Appointment
                    </button>

                    <button
                      onClick={() =>
                        setAppointments(prev =>
                          prev.filter(a => a.id !== item.id)
                        )
                      }
                      className="px-4 py-2 bg-red-600 text-white rounded-full"
                    >
                      Cancel Appointment
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointment
