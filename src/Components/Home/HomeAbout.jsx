import React from 'react'
import about from '../../Images/aboutmainprofile.png'
import { Helmet } from 'react-helmet';





const HomeAbout = () => {
  return (
<div className="px-4 sm:px-6 md:px-12 py-8  bg-white ">
<Helmet>
  <title>Dr. Santosh V. Chikkodi | Senior Cardiologist in Bagalkot | Experience & Background</title>
  <meta 
    name="description" 
    content="Learn more about Dr. Santosh V. Chikkodi, Senior Interventional Cardiologist in Bagalkot, with over 5000 angiograms and 2500 angioplasties. Discover his journey and services." 
  />
  <meta 
    name="keywords" 
    content="Dr. Santosh Chikkodi, Cardiologist Bagalkot, MBBS MD DM Cardiology, angioplasty expert Karnataka, interventional cardiologist profile, pacemaker cardiologist, top doctor Bagalkot" 
  />
  <meta name="author" content="Dr. Santosh V. Chikkodi" />
  <meta name="robots" content="index, follow" />

  <meta property="og:title" content="Dr. Santosh V. Chikkodi - Cardiologist Background & Achievements" />
  <meta property="og:description" content="Meet Dr. Santosh Chikkodi, an experienced interventional cardiologist in Karnataka with thousands of successful procedures and a strong educational background." />
  <meta property="og:image" content="https://drsantoshchikkodi.com/assets/aboutmainprofile-og.jpg" />
  <meta property="og:url" content="https://drsantoshchikkodi.com/about" />
  <link rel="canonical" href="https://drsantoshchikkodi.com/about" />
</Helmet>

      
      {/* Top Image Section */}
      <div className="relative">
        {/* Optional header image here */}
        
      </div>

      {/* Main Content Section */}
      <div className="mt-12 flex flex-col sm:flex-row gap-8 sm:gap-12 justify-center">
        
        {/* Doctor's Profile Picture */}
        <div className="flex-1">
          <img 
            src={about} 
            alt="About Doctor" 
            className="w-full h-[900px]  object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Doctor's Information */}
        <div className="flex-1 space-y-6">
          <h1 className="text-6xl  font-bold mt-8 font-poppins  text-cyan-500 hover:text-blue-800 transition duration-300 text-center sm:text-left">
          Dr. Santosh V. Chikkodi
          </h1>
          <h2 className="mt-2 text-4xl font-poppins font-medium text-center sm:text-left">
          Senior Interventional Cardiologist

Bagalkot, Karnataka, India
          </h2>

        

          {/* Description Paragraphs */}
          <div className="text-gray-700  font-poppins text-justify space-y-4 text-lg sm:text-xl">
            <p>
            With more than  <span className='font-bold '> 5000 </span>angiograms through Femoral, Ulnar and Radial approach and more than <span className='font-bold '> 2500 </span> coronary angioplasty,  & <span className='font-bold '> 100+ </span> 
            Pacemaker devices. Dr. Santosh V. Chikkodi is one of the one senior cardiologists based at Bagalkot.
            </p>
            <p>
            In 2012, He obtained his MBBS degree from Karnataka Institute of Medical Sciences, Hubli. In 2015, he completed his MD in Internal Medicine, from India’s topmost medical college that is Postgraduate Institute of Medical Education and Research, Chandigarh.
            </p>
            <p>
            In 2019, obtained his DM in Interventional Cardiology from Asia’s topmost Cardiac center that is Sri Jayadeva Institute of Cardiovascular Sciences and Research, Bangalore.  Currently, Dr. Santosh is providing his services as a Senior Consultant & Interventional Cardiologist at Kerudi Hospital in Bagalkot.
            </p>
            His services include Coronary angiogram, Coronary Angioplasty, Peripheral Angiograms and peripheral angioplasty, Pacemaker Devices, Venoplasty, IVC filter insetion, Transesophageal Echocardiogram,  Implantable Cardioverter Defibrillator.
            <p >
            Dr. Santosh is an esteemed member of the Cardiology Society of India, Indian College of Cardiology,  Indian Medical Association.
            </p>
       
          
    
            <button className=" text-white text-lg sm:text-xl p-4  hover:bg-custom-cyan  sm:p-15 ml-[22%] sm:ml-[35%] lg:ml-[0%] px-6 font-bold mt-4 sm:mt-4  bg-blue-600 rounded-md " onClick={() => window.location.href = '/about'}>
  Read More 
  </button>
          </div>

        </div>
      </div>
   </div>
  
  )}

export default HomeAbout;