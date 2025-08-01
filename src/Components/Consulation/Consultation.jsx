import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { PacmanLoader } from 'react-spinners';

import { FaHospitalAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosTime } from "react-icons/io";
import hospitalicon from '../../Images/hospitalicons.png';
import locationicon from '../../Images/markericons.png';
import timeicon from '../../Images/Timeicon.png';

const Consultation = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Consultation Locations | Dr. Santosh V. Chikkodi - Cardiologist</title>
        <meta
          name="description"
          content="Find consultation locations for Dr. Santosh V. Chikkodi, Senior Interventional Cardiologist, at Bagalkot and Ramdurg, Karnataka. View timings and address details here."
        />
        <meta
          name="keywords"
          content="Cardiologist in Bagalkot, Heart Doctor Ramdurg, Dr. Santosh Chikkodi, Heart Specialist Karnataka, Kerudi Heart Center, Cardiac Center Ramdurg"
        />
        <meta name="author" content="Dr. Santosh V. Chikkodi" />
        <meta property="og:title" content="Consultation Locations | Dr. Santosh V. Chikkodi" />
        <meta
          property="og:description"
          content="Dr. Santosh V. Chikkodi is available at Kerudi Heart Center in Bagalkot and Dr Chikkodi’s Cardiac Center in Ramdurg. Find addresses, timings, and more."
        />
        <meta property="og:image" content="https://your-domain.com/path-to/location-map-or-hospital-image.jpg" />
        <meta property="og:url" content="https://your-domain.com/consultation" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://your-domain.com/consultation" />
      </Helmet>

      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <PacmanLoader color="#0ea5e9" size={50} />
        </div>
      ) : (
        <div className='bg-white'>
          <div className="container mx-auto px-4 p-8">
            <h1 className="text-cyan-950 text-5xl font-bold text-center mt-28">
              Consultation Locations
            </h1>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mt-20">
              {/* Card 1 */}
              <div className="border p-16 rounded-3xl shadow-lg transition-all hover:shadow-2xl bg-sky-50 hover:bg-blue-100">
                <div className="text-xl font-semibold text-black flex items-center gap-4">
                  <img src={hospitalicon} alt='Kerudi Heart Center' className='w-[6%]   ' />
                  <h2 className='text-cyan-500 font-semibold text-2xl'>Kerudi Heart Center</h2>
                </div>
                <p className="text-base mt-4 flex items-start gap-4 text-cyan-500 font-semibold">
                  <img src={locationicon} alt='location' className='w-[6%] mt-2' />
                  <span className='text-xl mt-2'>Rotary Circle, Navanagar, Bagalkot Karnataka 587101</span>
                </p>
                <p className="text-base mt-4 flex items-center gap-4 text-cyan-500 font-semibold">
                  <img src={timeicon} alt='time' className='w-[6%] mt-2' />
                  <span className='text-xl'>Mon - Sat : 10AM - 4PM</span>
                </p>
              </div>

              {/* Card 2 */}
              <div className="border p-16 rounded-3xl shadow-lg transition-all hover:shadow-2xl bg-sky-50 hover:bg-blue-100">
                <div className="text-xl font-semibold text-black flex items-center gap-4">
                  <img src={hospitalicon} alt='Dr Chikkodi’s Cardiac Center' className='w-[6%]' />
                  <h2 className='text-cyan-500 font-semibold text-2xl'>Dr Chikkodi’s Cardiac Center</h2>
                </div>
                <p className="text-base mt-4 flex items-start gap-4 text-cyan-500 font-semibold">
                  <img src={locationicon} alt='location' className='w-[6%] mt-2' />
                  <span className='text-xl'>RS Patil Building, Opposite Government Hospital, Belgavi Road, Ramdurg, Belgavi, Karnataka 591123</span>
                </p>
                <p className="text-base mt-4 flex items-center gap-4 text-cyan-500 font-semibold">
                  <img src={timeicon} alt='time' className='w-[6%] mt-2' />
                  <span className='text-xl'>Wednesday : 4PM - 8PM</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Consultation;
