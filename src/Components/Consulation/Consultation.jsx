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
        <meta property="og:image" content="https://drsantoshchikkodi.com/path-to/location-map-or-hospital-image.jpg" />
        <meta property="og:url" content="https://drsantoshchikkodi.com/consultation" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://drsantoshchikkodi.com/consultation" />
      </Helmet>

      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <PacmanLoader color="#0ea5e9" size={50} />
        </div>
      ) : (
        <div className='bg-white'>
          <div className="container mx-auto px-4 p-8">
            <h1 className="text-cyan-950 text-5xl font-bold text-center mt-6">
              Consultation Locations
            </h1>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mt-20">
              {/* Card 1 */}
              <div className="border p-16 rounded-3xl  shadow-lg transition-all hover:shadow-2xl bg-sky-50 hover:bg-blue-100">
                <div className="text-xl font-semibold text-black flex items-center gap-4">
                  <img src={hospitalicon} alt='Bagalkot Heart Centre' className='w-[6%]   ' />
                  <h2 className='text-cyan-500 font-semibold text-2xl'>Bagalkot Heart Centre</h2>
                </div>
                <p className="text-base mt-4 flex items-start gap-4 text-cyan-500 font-semibold">
                  <img src={locationicon} alt='location' className='w-[6%] mt-2' />
                  <span className='text-xl mt-2'>Daddenavar Hospital & Research Centre Campus,
Laxmi Nagar, Near Rural Police Station,  Bagalkot – 587101</span>
                </p>
                <p className="text-base mt-4 flex items-center gap-4 text-cyan-500 font-semibold">
                  <img src={timeicon} alt='time' className='w-[6%] mt-2' />
                  <span className='text-xl'> 24 x 7 Cardiac Care & Support </span>
                </p>
                <br/>
                <br/>

                
            
             
                
              {/* Card 1 kannada  */}
              <div>
                <div className="text-xl font-semibold text-black flex items-center gap-4">
                  <img src={hospitalicon} alt='ಬಾಗಲಕೋಟೆ ಹಾರ್ಟ್ ಸೆಂಟರ್,' className='w-[6%]   ' />
                  <h2 className='text-cyan-500 font-semibold text-2xl'>ಬಾಗಲಕೋಟೆ ಹಾರ್ಟ್ ಸೆಂಟರ್</h2>
                </div>
                <p className="text-base mt-4 flex items-start gap-4 text-cyan-500 font-semibold">
                  <img src={locationicon} alt='location' className='w-[6%] mt-2' />
                  <span className='text-xl mt-2'>ದಡ್ಡೇನವರ್ ಆಸ್ಪತ್ರೆ ಮತ್ತು ಸಂಶೋಧನಾ ಕೇಂದ್ರ ಆವರಣ,
ಲಕ್ಷ್ಮೀ ನಗರ, ಗ್ರಾಮೀಣ ಪೊಲೀಸ್ ಠಾಣೆ ಹತ್ತಿರ,
ಬಾಗಲಕೋಟೆ – 587101
</span>
                </p>
                <p className="text-base mt-4 flex items-center gap-4 text-cyan-500 font-semibold">
                  <img src={timeicon} alt='time' className='w-[6%] mt-2' />
                  <span className='text-xl'> 24×7 ಹೃದಯ ಆರೈಕೆ ಮತ್ತು ಬೆಂಬಲ</span>
                </p>
              </div>
              </div>
              

              {/* Card 2 */}
              <div className="border p-16 rounded-3xl shadow-lg transition-all hover:shadow-2xl bg-sky-50 hover:bg-blue-100">
                <div className="text-xl font-semibold text-black flex items-center gap-4">
                  <img src={hospitalicon} alt='Dr Chikkodi’s Cardiac Center' className='w-[6%]' />
                  <h2 className='text-cyan-500 font-semibold text-2xl'>Dr Chikkodi’s Cardiac Center</h2>
                </div>
                <p className="text-base mt-4 flex items-start gap-4 text-cyan-500 font-semibold">
                  <img src={locationicon} alt='location' className='w-[6%] mt-2' />
                  <span className='text-xl'>RS Patil Building, Opposite Government Hospital, Belagavi Road, Ramdurg, Belgavi, Karnataka 591123</span>
                </p>
                <p className="text-base mt-4 flex items-center gap-4 text-cyan-500 font-semibold">
                  <img src={timeicon} alt='time' className='w-[6%] mt-2' />
                  <span className='text-xl'>Wednesday : 4PM - 8PM</span>
                </p>
                <br/>
                <br/>
                {/* Card 2 kannada  */}
                <div>
                  <div className="text-xl font-semibold text-black flex items-center gap-4">
                  <img src={hospitalicon} alt='ಡಾ. ಚಿಕ್ಕೋಡಿ ಹೃದಯ ಕೇಂದ್ರ' className='w-[6%]' />
                  <h2 className='text-cyan-500 font-semibold text-2xl'>ಡಾ. ಚಿಕ್ಕೋಡಿ ಹೃದಯ ಕೇಂದ್ರ</h2>
                </div>
                <p className="text-base mt-4 flex items-start gap-4 text-cyan-500 font-semibold">
                  <img src={locationicon} alt='location' className='w-[6%] mt-2' />
                  <span className='text-xl'>ಆರ್. ಎಸ್. ಪಾಟೀಲ್ ಬಿಲ್ಡಿಂಗ್, ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆ ಎದುರು, ಬೆಳಗಾವಿ ರಸ್ತೆ, ರಾಮದುರ್ಗ, ಬೆಳಗಾವಿ, ಕರ್ನಾಟಕ – 591123</span>
                </p>
                <p className="text-base mt-4 flex items-center gap-4 text-cyan-500 font-semibold">
                  <img src={timeicon} alt='time' className='w-[6%] mt-2' />
                  <span className='text-xl'>ಬುಧವಾರ: ಸಂಜೆ 4 ಗಂಟೆ - 8 ಗಂಟೆ</span>
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Consultation;
