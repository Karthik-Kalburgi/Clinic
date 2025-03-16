import React from 'react'
import { FaHospitalAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosTime } from "react-icons/io";
const Consultation = () => {
  return (
    <div>
        <div>
            <h1 className="text-black text-3xl font-bold text-center mt-8 ">
                Consultation Locations
            </h1>
            <div className="grid grid-cols-2 gap-4 mt-8  ">
                <div className='border   bg-gray-200 p-4 ml-14 rounded-xl '>
                    <h2 className="text-2xl font-semibold flex gap-2"> <FaHospitalAlt /> Apollo Hospitals</h2>
                    <p className="text-lg flex"> <IoLocationSharp className='text-4xl' /> 154, Apollo Hospitals, 11, Bannerghatta Rd, Opp. I, I.M, Amalodbhavi Nagar, Panduranga Nagar, Bengaluru, Karnataka 560076</p>
                    <p className="text-lg flex"> <IoIosTime className='text-2xl' />  Mon - Sat : 10AM - 4 PM</p>
                </div>
                <div className='border   bg-gray-200 p-4 mx-14 rounded-xl '>
                    <h2 className="text-2xl font-semibold flex gap-2"> <FaHospitalAlt /> Apollo Hospitals</h2>
                    <p className="text-lg flex"> <IoLocationSharp className='text-4xl' /> 154, Apollo Hospitals, 11, Bannerghatta Rd, Opp. I, I.M, Amalodbhavi Nagar, Panduranga Nagar, Bengaluru, Karnataka 560076</p>
                    <p className="text-lg flex"> <IoIosTime className='text-2xl' />  Mon - Sat : 10AM - 4 PM</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Consultation