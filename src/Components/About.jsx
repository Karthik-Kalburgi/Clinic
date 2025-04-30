import React from 'react';

import Certifications from './Certifications';
import Education from './Education';

import about from '../Images/aboutmainprofile.png';

const About = () => {
  return (
    <div className="px-4 sm:px-6 md:px-12 py-8">
      
      {/* Top Image Section */}
      <div className="relative">
        {/* Optional header image here */}
        
      </div>

      {/* Main Content Section */}
      <div className="mt-12 flex flex-col sm:flex-row-reverse gap-8 sm:gap-12 justify-center">
        
        {/* Doctor's Profile Picture */}
        <div className="flex-1">
          <img 
            src={about} 
            alt="About Doctor" 
            className="w-full h-[750px]  object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Doctor's Information */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl  font-bold mt-8 font-poppins  text-cyan-500 hover:text-blue-800 transition duration-300 text-center sm:text-left">
          Dr. Santosh V. Chikkodi
          </h1>
          <h2 className="mt-2 text-2xl font-poppins font-medium text-center sm:text-left">
          10 years experience | MBBS, MD (Med), DNB(Med), DM(Cardio),DNB (Cardio)
          </h2>

          {/* Info Box */}
          <div className="border-4 border-cyan-500 p-4 sm:p-6 mt-6 bg-gray-100 text-cyan-500 font-semibold text-xl text-center shadow-md  rounded-xl ">
      
          <p className='text-2xl font-poppins font-semibold'>  Senior Consultant Interventional  Cardiologist </p>

          </div>

          {/* Description Paragraphs */}
          <div className="text-gray-700 font-poppins space-y-4 text-lg sm:text-xl">
            <p>
            As an Interventional Cardiologist, I specialize in minimally invasive procedures to diagnose and treat complex cardiovascular conditions. My expertise spans coronary and peripheral interventions, structural heart procedures, and complex PCI, with a focus on optimizing patient outcomes through the latest innovations in cardiology.
            </p>
            <p>
            I am deeply committed to preventive cardiology, risk stratification, and patient education, ensuring that heart disease is not just treated but proactively managed. Combining clinical excellence with a patient-first approach, I strive to deliver precision, innovation, and compassionate care in every procedure.
            </p>
            <p>
          
            </p>
           
          </div>
        </div>
      </div>
      <div>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mt-20 text-black">
          Certifications & Achievements
        </h1>
        <div className="grid grid-cols-3 gap-6  mt-20 ">
          {/* Card 1 */}
          <div className="bg-custom-blue bg-opacity-80 p-6 rounded-lg shadow-lg">
            <p className="text-lg font-semibold text-black">
            Complex & High-Risk PCI (CHIP)
            </p>
          </div>

       
        <div>{/* Card 1 */}
          <div className="bg-custom-blue bg-opacity-80 p-6 rounded-lg shadow-lg">
            <p className="text-lg font-semibold text-black">
            Coronary & Peripheral Angioplasty
            </p>
          </div></div>
        <div>{/* Card 1 */}
          <div className="bg-custom-blue bg-opacity-80 p-6 rounded-lg shadow-lg">
            <p className="text-lg font-semibold text-black">
            Structural Heart Interventions
            </p>
          </div></div>
        <div>{/* Card 1 */}
          <div className="bg-custom-blue bg-opacity-80 p-6 rounded-lg shadow-lg">
            <p className="text-lg font-semibold text-black">
            Advanced Cardiac Imaging & Diagnostics
            </p>
          </div></div>
        <div>{/* Card 1 */}
          <div className="bg-custom-blue bg-opacity-80 p-6 rounded-lg shadow-lg">
            <p className="text-lg font-semibold text-black">
            Heart Disease Prevention & Risk Reduction
            </p>
          </div></div>
        <div>{/* Card 1 */}
          <div className="bg-custom-blue bg-opacity-80 p-6 rounded-lg shadow-lg">
            <p className="text-lg font-semibold text-black">
            Research & Medical Educationdchdshkcscnsjcjkbk
            </p>
            
          </div>
          
          </div>
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
