import React from 'react'
import { FaHospitalAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosTime } from "react-icons/io";

const Consultation = () => {
  return (
    <div className="container mx-auto px-4 bg-gray-50"> {/* Main Container */}
    <h1 className="text-black text-3xl font-bold text-center mt-8">
      Consultation Locations
    </h1>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <div className="border bg-white p-6 rounded-2xl shadow-lg transition-all hover:shadow-2xl hover:bg-blue-50"> {/* First Card */}
        <h2 className="text-xl font-semibold text-blue-600 flex items-center gap-2">
          <FaHospitalAlt className="text-2xl" /> Apollo Hospitals
        </h2>
        <p className="text-base mt-4 flex items-start gap-2">
          <IoLocationSharp className="text-5xl text-blue-600" /> 
          154, Apollo Hospitals, 11, Bannerghatta Rd, Opp. I, I.M, Amalodbhavi Nagar, Panduranga Nagar, Bengaluru, Karnataka 560076
        </p>
        <p className="text-base mt-2 flex items-center gap-2">
          <IoIosTime className="text-2xl text-blue-600" /> 
          Mon - Sat : 10AM - 4 PM
        </p>
      </div>
      
      <div className="border bg-white p-6 rounded-2xl shadow-lg transition-all hover:shadow-2xl hover:bg-blue-50"> {/* Second Card */}
        <h2 className="text-xl font-semibold text-blue-600 flex items-center gap-2">
          <FaHospitalAlt className="text-2xl" /> Apollo Hospitals
        </h2>
        <p className="text-base mt-4 flex items-start gap-2">
          <IoLocationSharp className="text-5xl text-blue-600" /> 
          154, Apollo Hospitals, 11, Bannerghatta Rd, Opp. I, I.M, Amalodbhavi Nagar, Panduranga Nagar, Bengaluru, Karnataka 560076
        </p>
        <p className="text-base mt-2 flex items-center gap-2">
          <IoIosTime className="text-2xl text-blue-600" /> 
          Mon - Sat : 10AM - 4 PM
        </p>
      </div>
    </div>
  </div>
  
  );
}

export default Consultation;
