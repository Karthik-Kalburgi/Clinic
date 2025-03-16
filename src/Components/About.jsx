import React from 'react'

import aboutdoct from '../Images/AboutDoct.jpg'
import ProPic from '../Images/ProfilePicture.jpg'
import EducationandExp from '../Images/EducationAndExperience.jpg'
import Education from './Education'
import Certifications from './Certifications'

const About = () => {
  return (
    <div className=''>
      <div className='relative'>
        <img src={aboutdoct} alt='About us ' className=' h-[450px] w-full filter  ' />
        <h1 className='  absolute top-4 flex justify-end mx-4 items-start mt-4 text-yellow-300 font-bold text-5xl '>About The Doctor </h1>
      </div>

      <div>
        <div className='flex gap-4'>
          {/* Doctor's Profile Picture and Title */}
          <div>
            <img src={ProPic} alt='About Doctor' className='w-[400px] h-[500px]  ml-4 mt-8 rounded ' />
            <h1 className='text-xl  ml-4 mt-4 font-bold underline'> Dr. Santosh C </h1>
           
          </div>

          {/* Doctor's Information */}
          <div>
            <h1 className='text-start ml-8 text-4xl font-bold mt-8 hover:text-blue-600 transition-colors duration-300 '>Dr. Santosh C </h1>
            <h2 className='mt-4 ml-8 font-semibold text-2xl '>21 Years of Experience |  MBBS, MD (Gen Medicine), DNB (Cardiology)  </h2>

            {/* Additional Information Box */}
            <div className='border-4 border-blue-500 p-6 ml-6 mt-6 bg-gray-100 text-blue-600 font-semibold text-xl rounded-lg'>
              Senior Consultant Interventional Cardiologist & Certified TAVR Specialist, Lead Consultant - Structural Heart Disease & Heart Failure
            </div>

            {/* Paragraphs Section (Added 4 Paragraphs here) */}
            <div className='mt-6 ml-6'>
              {/* First Paragraph */}
              <p className='text-gray-700 text-lg'>
                Dr. Santosh C has over 21 years of experience in the field of cardiology. He is known for his expertise in treating complex heart conditions and is recognized as a top cardiologist in the region.
              </p>

              {/* Second Paragraph */}
              <p className='text-gray-700 text-lg mt-4'>
                Having completed his MBBS, MD in General Medicine, and DNB in Cardiology, Dr. Santosh has always been at the forefront of cardiovascular advancements. He is a passionate advocate for early diagnosis and prevention of heart diseases.
              </p>

              {/* Third Paragraph */}
              <p className='text-gray-700 text-lg mt-4'>
                Dr. Santosh is particularly skilled in performing life-saving interventional procedures like angioplasty, bypass surgeries, and cardiac catheterization. His patient care philosophy revolves around providing personalized treatment plans.
              </p>

              {/* Fourth Paragraph */}
              <p className='text-gray-700 text-lg mt-4'>
                Outside of his medical practice, Dr. Santosh contributes to various medical journals, educates fellow doctors, and regularly participates in heart disease awareness programs across the country.
              </p>
              <p className='text-gray-700 text-lg mt-4'>
              <p className='text-gray-700 text-lg mt-4'>
              published in various indexed journals. His areas of interest include Transcatheter aortic valve replacement (TAVR), Transcatheter aortic valve implantation (TAVI), Angioplasty and pacemaker implantation. He was the first cardiologist in Karnataka who implanted an MRI compatible AICD system and was also the pioneer
              </p>
              </p>
            </div>
           
           
          </div>

        </div>
      </div>
      <div>
        <Education />
        <Certifications />
      </div>
    </div>
  )
}

export default About
