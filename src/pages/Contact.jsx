import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-3xl font-semibold text-gray-800">
          Contact <span className="text-blue-600">Us</span>
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={assets.contact_image}
            alt="Contact"
            className="w-full rounded-2xl shadow"
          />
        </div>

        {/* Info */}
        <div className="md:w-1/2 space-y-8">
          {/* Office */}
          <div>
            <b className="text-lg text-gray-800 block mb-2">
              OUR OFFICE
            </b>
            <p className="text-gray-600">
              54709 Williams Station
            </p>
            <p className="text-gray-600">
              Suite 350, Washington, USA
            </p>
            <p className="text-gray-600 mt-2">
              TEL: 415-555-0132
            </p>
            <p className="text-gray-600">
              Email: majdjammoul89@gmail.com
            </p>
          </div>

          {/* Careers */}
          <div>
            <b className="text-lg text-gray-800 block mb-2">
              CAREERS AT PRESCRIPTO
            </b>
            <p className="text-gray-600 mb-4">
              Learn more about our teams and explore current job openings.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
