import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Majed Jammoul",
    image: assets.profile_pic,
    email: "majdjammoul89@gmail.com",
    phone: "963 996 164 249",
    address: {
      line1: "Syria",
      line2: "Sweida"
    },
    gender: "male",
    dob: "2004-01-04"
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === "line1" || name === "line2") {
      setUserData(prev => ({
        ...prev,
        address: {
          ...prev.address,
          [name]: value
        }
      }))
    } else {
      setUserData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSave = () => {
    // هنا ممكن تعمل call للـ API لتحديث البيانات
    setIsEditing(false)
    console.log("Saved user data:", userData)
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-2xl shadow p-8 flex flex-col md:flex-row gap-8">
        {/* Image */}
        <div className="flex flex-col items-center md:w-1/3">
          <img
            src={userData.image}
            alt="Profile"
            className="w-40 h-40 object-cover rounded-full shadow-lg mb-4"
          />
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition mb-2"
          >
            {isEditing ? "Cancel" : "Edit"}
          </button>
          {isEditing && (
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
            >
              Save
            </button>
          )}
        </div>

        {/* User Info */}
        <div className="flex-1 space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none ${
                isEditing
                  ? "border-blue-500 focus:ring-2 focus:ring-blue-500"
                  : "border-gray-200 bg-gray-100"
              }`}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none ${
                isEditing
                  ? "border-blue-500 focus:ring-2 focus:ring-blue-500"
                  : "border-gray-200 bg-gray-100"
              }`}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none ${
                isEditing
                  ? "border-blue-500 focus:ring-2 focus:ring-blue-500"
                  : "border-gray-200 bg-gray-100"
              }`}
            />
          </div>

          {/* Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Address Line 1</label>
              <input
                type="text"
                name="line1"
                value={userData.address.line1}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none ${
                  isEditing
                    ? "border-blue-500 focus:ring-2 focus:ring-blue-500"
                    : "border-gray-200 bg-gray-100"
                }`}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Address Line 2</label>
              <input
                type="text"
                name="line2"
                value={userData.address.line2}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none ${
                  isEditing
                    ? "border-blue-500 focus:ring-2 focus:ring-blue-500"
                    : "border-gray-200 bg-gray-100"
                }`}
              />
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-700 mb-1">Gender</label>
            <input
              type="text"
              name="gender"
              value={userData.gender}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none ${
                isEditing
                  ? "border-blue-500 focus:ring-2 focus:ring-blue-500"
                  : "border-gray-200 bg-gray-100"
              }`}
            />
          </div>

          {/* DOB */}
          <div>
            <label className="block text-gray-700 mb-1">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={userData.dob}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none ${
                isEditing
                  ? "border-blue-500 focus:ring-2 focus:ring-blue-500"
                  : "border-gray-200 bg-gray-100"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile
