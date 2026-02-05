import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-3xl font-semibold text-gray-800">
          ABOUT <span className="text-blue-600">US</span>
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <img
          src={assets.about_image}
          alt="About us"
          className="w-full md:w-1/2 rounded-2xl shadow"
        />

        {/* Text */}
        <div className="md:w-1/2 text-gray-600 space-y-5 leading-relaxed">
          <p>
            We are committed to making healthcare accessible, simple, and
            reliable for everyone. Our platform connects patients with
            experienced and trusted doctors across various medical specialties,
            allowing easy appointment booking from the comfort of home.
          </p>

          <p>
            By combining modern technology with a patient-first approach, we
            help reduce waiting times and simplify the healthcare journey. Our
            goal is to ensure that every patient receives timely care from
            qualified professionals.
          </p>

          <p className="text-lg font-semibold text-gray-800 mt-4">
            Our Vision
          </p>

          <p>
            Our vision is to create a seamless digital healthcare experience
            where finding the right doctor and booking an appointment takes only
            a few clicks. We strive to empower patients, support doctors, and
            build a healthier future through innovation and trust.
          </p>
        </div>
      </div>

      <div>
          <p>Why Choose Us</p>
      </div>
<div className="max-w-7xl mx-auto px-6 py-16">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
    
    {/* Left column */}
    <div className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition">
      <b className="block text-xl text-gray-800 mb-3">
        Efficiency
      </b>
      <p className="text-gray-600 leading-relaxed">
        Streamlined appointment scheduling that fits perfectly into your busy
        lifestyle.
      </p>
    </div>

    {/* Middle column */}
    <div className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition">
      <b className="block text-xl text-gray-800 mb-3">
        Convenience
      </b>
      <p className="text-gray-600 leading-relaxed">
        Access to a network of trusted healthcare professionals right in your
        area.
      </p>
    </div>

    {/* Right column */}
    <div className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition">
      <b className="block text-xl text-gray-800 mb-3">
        Personalization
      </b>
      <p className="text-gray-600 leading-relaxed">
        Tailored recommendations and smart reminders to help you stay on top of
        your health.
      </p>
    </div>

  </div>
</div>


    </section>
  )
}

export default About
