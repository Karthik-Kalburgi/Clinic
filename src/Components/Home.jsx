import React from 'react'
import wallpaper from '../Images/doctorwallpaper.jpg'
import Consultation from './Consultation'
import Specialities from './Specialities'
import Certifications from './Certifications'

const Home = () => {
  return (
    <div>

      <div className='relative'>
        <img src={wallpaper} alt='Doctor Wallpaper'/>
        <div className='absolute w-full h-full top-0 left-0 bg-black opacity-75'>
          <h1 className='text-white text-3xl mt-[10%] ml-8 '>Dr. Santosh C</h1>
          <p className='text-white ml-8 mt-2 ' > Experienced Cardiologist: With 7 years of experience in the field of cardiology,</p>
          <p className='text-white ml-8 mt-2 ' >  the doctor has a thorough understanding of various heart conditions and treatment methods.</p>
          <p>Apollo Hospital Bangalore , India</p>
          <button className='bg-blue-800 text-white px-8 py-3 rounded-full ml-12 mt-6 '>Book an appointment</button>
        </div>
      </div>
      <Consultation />
      <Specialities />
      <Certifications />
    </div>
  )
}

export default Home