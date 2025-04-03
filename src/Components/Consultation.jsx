import React from 'react'
import { FaHospitalAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosTime } from "react-icons/io";


const Consultation = () => {
  return (
    <div className='bg-white' >
    <div className="container mx-auto px-4  p-7 "> {/* Main Container */}

    <h1 className="text-cyan-950 text-3xl font-bold text-center mt-8">
      Consultation Locations
    </h1>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <div className="border  p-6 rounded-3xl shadow-lg transition-all hover:shadow-2xl bg-sky-50  hover:bg-blue-100"> {/* First Card */}
        <h2 className="text-xl font-semibold text-black flex items-center gap-2">
      
          <FaHospitalAlt  className="text-3xl rounded-lg border border-black p-1   " />
          <h1 className='text-cyan-500 font-bold '>Apollo Hospitals </h1> 
        </h2>
        <p className="text-base mt-4 flex items-start gap-2 text-cyan-500 font-bold ">
          <IoLocationSharp className="text-4xl rounded-lg border   border-black p-1  text-black" /> 
          154, Apollo Hospitals, 11, Bannerghatta Rd, Opp. I, I.M, Amalodbhavi Nagar, Panduranga Nagar, Bengaluru, Karnataka 560076
        </p>
        <p className="text-base mt-2 flex items-center gap-2 text-cyan-500 font-bold ">
          <IoIosTime className="text-3xl rounded-lg border border-black p-1 text-black" /> 
          Mon - Sat : 10AM - 4 PM
        </p>
      </div>
      
      <div className="border  p-6 rounded-2xl shadow-lg transition-all hover:shadow-2xl bg-sky-50  hover:bg-blue-100"> {/* Second Card */}
        <h2 className="text-xl font-semibold text-black flex items-center gap-2">
        <FaHospitalAlt  className="text-3xl rounded-lg border border-black p-1   " />
          <h1 className='text-cyan-500 font-bold '>Apollo Hospitals </h1> 
        </h2>
        <p className="text-base mt-4 flex items-start gap-2 text-cyan-500 font-bold ">
          <IoLocationSharp className="text-4xl rounded-lg border   border-black p-1  text-black" /> 
          154, Apollo Hospitals, 11, Bannerghatta Rd, Opp. I, I.M, Amalodbhavi Nagar, Panduranga Nagar, Bengaluru, Karnataka 560076
        </p>
        <p className="text-base mt-2 flex items-center gap-2 text-cyan-500 font-bold ">
          <IoIosTime className="text-3xl rounded-lg border border-black p-1 text-black" /> 
          Mon - Sat : 10AM - 4 PM
        </p>
      </div>
      </div>
    </div>
  </div>
  
  
  );
}

export default Consultation;
