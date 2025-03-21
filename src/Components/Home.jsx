import React from 'react'
import wallpaper from '../Images/doctorwallpaper.jpg'
import Consultation from './Consultation'
import Specialities from './Specialities'
import Certifications from './Certifications'

const Home = () => {
  return (
    <div className='' >

<div className="relative  ">
      {/* Background Image */}
      <img src={wallpaper} alt="Doctor Wallpaper" className="w-full h-[400px] md:h-[500px] object-cover" />

      {/* Overlay with content */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75 flex flex-col justify-center px-4 sm:px-8 md:px-16">
        {/* Heading */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold mt-[10%] sm:mt-[15%] ml-4 sm:ml-8">
          Dr. Santosh C 
        </h1>
        
        {/* Description */}
        <p className="text-white text-lg sm:text-xl mt-2 ml-4 sm:ml-8">
          Experienced Cardiologist: With 7 years of experience in the field of cardiology,
        </p>
        <p className="text-white text-lg sm:text-xl mt-2 ml-4 sm:ml-8">
          The doctor has a thorough understanding of various heart conditions and treatment methods.
        </p>
        
        {/* Hospital Info */}
        <p className="text-white text-lg sm:text-xl mt-2 ml-4 sm:ml-8">
          Apollo Hospital Bangalore, India
        </p>

        {/* Appointment Button */}
        <div>
        <button className="bg-blue-800 p-4 text-white hover:bg-yellow-600 text-semibold mt-8 ml-[25%] rounded-xl  ">
  Book an appointment
</button>
</div>



      </div>
    </div>
      <Consultation />
      <Specialities />
      <Certifications />
    </div>
  )
}

export default Home