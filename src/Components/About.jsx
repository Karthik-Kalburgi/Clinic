import React from 'react';

import about from '../Images/AboutDoc.png';
import about2 from '../Images/AboutDocc.png';
import Certifications from './Certifications';
import Education from './Education';

const About = () => {
  return (
    <div className="px-4 sm:px-6 md:px-12 py-8">

      {/* Top Image Section */}
      <div className="relative">
        <img 
          src={about} 
          alt="About us"
          className="h-[400px] w-full object-cover rounded-xl"
        />
        <h1 className="absolute top-4 right-4 text-white text-3xl font-semibold">
          About The Doctor
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="mt-12 flex flex-col md:flex-row gap-12 justify-center">

        {/* Doctor's Profile Picture and Info */}
        <div className="flex-1">
          <img 
            src={about2} 
            alt="About Doctor" 
            className="w-full h-[500px] object-cover rounded-xl shadow-lg"
          />
          <h1 className="text-xl font-bold underline mt-4 text-center">Dr. Santosh C</h1>
        </div>

        {/* Doctor's Information */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold text-blue-600 hover:text-blue-800 transition duration-300 text-center md:text-left">
            Dr. Santosh C
          </h1>
          <h2 className="mt-4 text-2xl font-semibold text-center md:text-left">
            21 Years of Experience | MBBS, MD (Gen Medicine), DNB (Cardiology)
          </h2>

          {/* Additional Information Box */}
          <div className="border-4 border-blue-500 p-6 mt-6 bg-gray-100 text-blue-600 font-semibold text-xl rounded-lg shadow-md">
            Senior Consultant Interventional Cardiologist & Certified TAVR Specialist, Lead Consultant - Structural Heart Disease & Heart Failure
          </div>

          {/* Paragraph Section */}
          <div className="text-lg text-gray-700 space-y-4">
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
      <div>
        <Education />
        <Certifications />
      </div>
    </div>
    
  );
};

export default About;
