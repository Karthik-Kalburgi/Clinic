import React from 'react'
import { FaHospitalAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosTime } from "react-icons/io";
import hospitalicon from '../Images/hospitalicons.png';
import locationicon from '../Images/markericons.png'
import timeicon from '../Images/Timeicon.png'

const Consultation = () => {
  return (
    <div className='bg-white' >
    <div className="container mx-auto px-4  p-8 "> {/* Main Container */}

    <h1 className="text-cyan-950 text-5xl font-bold text-center mt-28">
      Consultation Locations
    </h1>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mt-20">
      <div className="border  p-16 rounded-3xl shadow-lg transition-all hover:shadow-2xl bg-sky-50  hover:bg-blue-100"> {/* First Card */}
        <h2 className="text-xl font-semibold text-black flex items-center gap-4">
      
         <img src={hospitalicon} alt='hospitalicons' className='w-[6%]'  />
          <h1 className='text-cyan-500 font-semibold text-2xl '>Kerudi Heart Center </h1> 
        </h2>
        <p className="text-base mt-4  flex items-start gap-4 text-cyan-500 font-semibold  ">
        <img src={locationicon} alt='hospitalicons' className='w-[6%] mt-2'  />
         <span className='text-xl mt-2'> Rotary Circle, Navanagar, Bagalkot Karnataka 587101 </span>
        </p>
        <p className="text-base mt-4 flex items-center gap-4 text-cyan-500 font-semibold ">
        <img src={timeicon} alt='hospitalicons' className='w-[6%] mt-2'  />
        <span className='text-xl'> Mon - Sat : 10AM - 4 PM </span> 
        </p>
      </div>
      
      <div className="border  p-16 rounded-3xl shadow-lg transition-all hover:shadow-2xl bg-sky-50  hover:bg-blue-100"> {/* First Card */}
        <h2 className="text-xl font-semibold text-black flex items-center gap-4">
      
         <img src={hospitalicon} alt='hospitalicons' className='w-[6%]'  />
          <h1 className='text-cyan-500 font-semibold text-2xl   '>Dr Chikkodi’s Cardiac Center </h1> 
        </h2>
        <p className="text-base mt-4  flex items-start gap-4 text-cyan-500 font-semibold  ">
        <img src={locationicon} alt='hospitalicons' className='w-[6%] mt-2 '  />
         <span className='text-xl  '> RS Patil Building, Opposite Government Hospital, Belgavi Road, Ramdurg, Belgavi, Karnataka 591123 </span>
        </p>
        <p className="text-base mt-4 flex items-center gap-4 text-cyan-500 font-semibold ">
        <img src={timeicon} alt='hospitalicons' className='w-[6%] mt-2 '  />
        <span className='text-xl'>Wednesday : 4PM - 8PM </span> 
        </p>
      </div>
      </div>
    </div>
  </div>
  
  
  );
}

export default Consultation;
