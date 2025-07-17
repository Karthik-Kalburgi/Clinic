import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import complex from '../../Images/Complexicons.png';
import cardiac from '../../Images/cardiacimagingicons.png';
import conoary from '../../Images/Coronaryicons.png';
import prevention from '../../Images/preventionicons.png';
import healthcare from '../../Images/healtcareeducationicons.png';
import structural from '../../Images/structuralicons.png';
import about from '../../Images/aboutmainprofile.png';

import Education from '../Education/Education';
import { Helmet } from 'react-helmet';


const About = () => {
  const areasOfExpertise = [
    { img: complex, title: 'Complex & High-Risk PCI (CHIP)', alt: 'Complex PCI' },
    { img: conoary, title: 'Coronary & Peripheral Angioplasty', alt: 'Coronary Angioplasty' },
    { img: structural, title: 'Structural Heart Interventions', alt: 'Structural Heart' },
    { img: cardiac, title: 'Advanced Cardiac Imaging & Diagnostics', alt: 'Cardiac Imaging' },
    { img: prevention, title: 'Heart Disease Prevention & Risk Reduction', alt: 'Heart Disease Prevention' },
    { img: healthcare, title: 'Research & Medical Education', alt: 'Research & Education' },
  ];
  <Helmet>
  <title>Dr. Santosh V. Chikkodi | Interventional Cardiologist in Bagalkot</title>
  <meta name="description" content="Dr. Santosh V. Chikkodi is a leading interventional cardiologist in Bagalkot, Karnataka. Specializing in complex PCI, angioplasty, and preventive cardiology with 10+ years of experience." />
  <meta name="keywords" content="Dr. Santosh V. Chikkodi, Cardiologist in Bagalkot, Interventional Cardiologist, Angioplasty Expert, Complex PCI, Structural Heart, Cardiac Imaging, Prevention, CHIP Cardiologist, Karnataka Cardiologist" />
  <meta name="author" content="Dr. Santosh V. Chikkodi" />
  <meta property="og:title" content="Dr. Santosh V. Chikkodi - Cardiologist in Bagalkot" />
  <meta property="og:description" content="Experienced interventional cardiologist in Bagalkot offering advanced cardiac care, angioplasty, and structural heart procedures." />
  <meta property="og:image" content="https://your-domain.com/path-to-aboutmainprofile.png" />
  <meta property="og:url" content="https://your-domain.com/about" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://your-domain.com/about" />
</Helmet>


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
          <LazyLoadImage 
            src={about} 
            alt="Dr. Santosh V. Chikkodi Profile" 
            className="w-full h-[750px] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Doctor's Information */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold mt-8 font-poppins text-cyan-500 hover:text-blue-800 transition duration-300 text-center sm:text-left">
            Dr. Santosh V. Chikkodi
          </h1>
          <h2 className="mt-2 text-2xl font-poppins font-medium text-center sm:text-left">
            10 years experience | MBBS, MD (Med), DNB(Med), DM(Cardio), DNB (Cardio)
          </h2>

          {/* Info Box */}
          <div className="border-4 border-cyan-500 p-4 sm:p-6 mt-6 bg-gray-100 text-cyan-500 font-semibold text-xl text-center shadow-md rounded-xl ">
            <p className="text-2xl font-poppins font-semibold">Senior Consultant Interventional Cardiologist</p>
          </div>

          {/* Description Paragraphs */}
          <div className="text-gray-700 font-poppins space-y-4 text-lg sm:text-xl">
            <p>
              As an Interventional Cardiologist, I specialize in minimally invasive procedures to diagnose and treat complex cardiovascular conditions.
            </p>
            <p>
              My expertise spans coronary and peripheral interventions, structural heart procedures, and complex PCI, with a focus on optimizing patient outcomes through the latest innovations in cardiology.
            </p>
            <p>
              I am deeply committed to preventive cardiology, risk stratification, and patient education, ensuring that heart disease is not just treated but proactively managed.
            </p>
            <p>
              Combining clinical excellence with a patient-first approach, I strive to deliver precision, innovation, and compassionate care in every procedure.
            </p>
          </div>
        </div>
      </div>

      {/* Areas of Expertise Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mt-20 text-black">
          Areas of Expertise
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 justify-center items-center">
          {areasOfExpertise.map((item, index) => (
            <div
              key={index}
              className="bg-custom-blue font-semibold bg-opacity-80 p-6 rounded-lg shadow-lg hover:scale-105 hover:bg-blue-200 transition-transform duration-300"
            >
              <div>
                <LazyLoadImage 
                  src={item.img} 
                  alt={item.alt} 
                  className="justify-between items-center ml-12" 
                />
              </div>
              <p className="text-lg font-semibold text-black justify-between items-center ml-6">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Education and Certifications Section */}
      <div className="mt-8">
        <Education />
      </div>
    </div>
  );
};

export default About;
