import React from 'react';
import about from '../Images/AboutDoc.png';
import Certifications from './Certifications';
import Education from './Education';
import stesscope from '../Images/Stesctecope.png';

const About = () => {
  return (
    <div className="px-4 sm:px-6 md:px-12 py-8">

      {/* Top Image Section */}
      <div className="relative">
        <img 
          src={about} 
          alt="About us"
          className="h-[300px] sm:h-[400px] w-full object-cover rounded-xl"
        />
        <h1 className="absolute top-4 right-4 text-black text-3xl sm:text-4xl font-semibold">
          About The Doctor
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="mt-12 flex flex-col sm:flex-row gap-8 sm:gap-12 justify-center">

        {/* Doctor's Profile Picture and Info */}
        <div className="flex-1">
          <img 
            src={stesscope} 
            alt="About Doctor" 
            className="w-full h-[350px] sm:h-[500px] object-cover rounded-xl shadow-lg"
          />
          <h1 className="text-xl font-bold underline text-cyan-500 mt-4 text-center">Dr. Santosh C</h1>
        </div>

        {/* Doctor's Information */}
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-cyan-500 hover:text-blue-800 transition duration-300 text-center sm:text-left">
            Dr. Santosh C
          </h1>
          <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-center sm:text-left">
            21 Years of Experience | MBBS, MD (Gen Medicine), DNB (Cardiology)
          </h2>

          {/* Additional Information Box */}
          <div className="border-4 border-cyan-500 p-4 sm:p-6 mt-6 bg-gray-100 text-cyan-500 font-semibold text-lg sm:text-2xl text-center rounded-lg shadow-md">
            Senior Consultant Interventional Cardiologist & Certified TAVR Specialist, Lead Consultant - Structural Heart Disease & Heart Failure
          </div>

          {/* Paragraph Section */}
          <div className="text-gray-700 space-y-4 text-lg sm:text-xl">

            {/* First Paragraph */}
            <p>
              Dr. Santosh C has over 21 years of experience in the field of cardiology. He is known for his expertise in treating complex heart conditions and is recognized as a top cardiologist in the region.
            </p>

            {/* Second Paragraph */}
            <p>
              Having completed his MBBS, MD in General Medicine, and DNB in Cardiology, Dr. Santosh has always been at the forefront of cardiovascular advancements. He is a passionate advocate for early diagnosis and prevention of heart diseases.
            </p>

            {/* Third Paragraph */}
            <p>
              Dr. Santosh is particularly skilled in performing life-saving interventional procedures like angioplasty, bypass surgeries, and cardiac catheterization. His patient care philosophy revolves around providing personalized treatment plans.
            </p>

            {/* Fourth Paragraph */}
            <p>
              Outside of his medical practice, Dr. Santosh contributes to various medical journals, educates fellow doctors, and regularly participates in heart disease awareness programs across the country.
            </p>

            {/* Fifth Paragraph */}
            <p>
              Dr. Santosh has been published in various indexed journals. His areas of interest include Transcatheter aortic valve replacement (TAVR), Transcatheter aortic valve implantation (TAVI), Angioplasty, and pacemaker implantation. He was the first cardiologist in Karnataka to implant an MRI-compatible AICD system and was also the pioneer in this field.
            </p>
          </div>
        </div>
      </div>

      {/* Education and Certifications Section */}
      <div className='mt-8'>
        <Education />
        <Certifications />
      </div>
    </div>
  );
};

export default About;
