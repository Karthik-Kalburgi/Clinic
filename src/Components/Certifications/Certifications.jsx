import React, { useState, useEffect } from 'react';
import medicine from '../../Images/medicine.jpg';
import { Helmet } from 'react-helmet';
import { PacmanLoader } from 'react-spinners';

const Certifications = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Certifications & Publications | Dr. Santosh Chikkodi</title>
        <meta
          name="description"
          content="Explore certifications, awards, and research publications of Dr.  Santosh Chikkodi, including journal articles on coronary angiogram, VSD closure, and hyperkalemia."
        />
        <meta
          name="keywords"
          content="Cardiology Certifications, Dr.  Santosh Chikkodi, Indian Heart Journal, Transulnar Approach, Coronary Angiogram, Hyperkalemia ECG, Ventricular Septal Defect, Primary Angioplasty"
        />
        <meta name="author" content="Dr.  Santosh Chikkodi" />
        <meta property="og:title" content="Certifications & Achievements | Dr. Santosh Chikkodi" />
        <meta
          property="og:description"
          content="View Dr.  Santosh Chikkodi contributions to cardiology, featuring award-winning papers and collaborative journal publications."
        />
        <meta property="og:image" content="https://your-domain.com/path-to/medicine.jpg" />
        <meta property="og:url" content="https://your-domain.com/certifications" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://your-domain.com/certifications" />
      </Helmet>

      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <PacmanLoader color="#0ea5e9" size={50} />
        </div>
      ) : (
        <div className="relative py-12">
          {/* Image */}
          <div className="w-full max-w-6xl mx-auto bg-sky-50 rounded-2xl overflow-hidden">
            <img
              src={medicine}
              alt="Certifications"
              loading="lazy"
              className="w-full h-[400px] sm:h-[600px] md:h-[750px] lg:h-[950px] object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* Text Overlay */}
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center px-4">
            <div className="bg-white/80 p-6 rounded-lg shadow-lg max-w-3xl w-full text-center text-black backdrop-blur-md">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6">
                Certifications & Achievements
              </h1>
              <p className="mt-4 text-sm sm:text-base md:text-lg font-semibold leading-relaxed">
                Dr. Girish Navasundi's Journal on Coronary Angiogram and Intervention through Transulnar Approach was co-published with Pratap C Rath, Bharat V Purohit, Sitaram, and Mallikarjun Reddy, in the Indian Heart Journal.
              </p>
              <p className="mt-4 text-sm sm:text-base md:text-lg font-semibold leading-relaxed">
                Another notable publication in the Indian Heart Journal is the article on “Transcatheter Closure of Perimembranous Ventricular Septal Defect with Amplatzer Membranous Occluder”, co-published by Dr. A R Anil, Dr. Raghavan, Dr. Sreekanth, Dr. Sanjay Bhalerao, Dr. R. Nagarajan, and Dr. N B Girish.
              </p>
              <p className="mt-4 text-sm sm:text-base md:text-lg font-bold leading-relaxed">
                Dr. Girish has presented numerous research papers and written for several journals. One of his papers on <strong className="font-bold">HYPERKALEMIA, Etiology, and ECG Manifestations</strong> was presented at API, Mangalore, Karnataka in 1998.
              </p>
              <p className="mt-4 text-sm sm:text-base md:text-lg font-bold leading-relaxed">
                Another paper on <strong className="font-bold">PRIMARY ANGIOPLASTY AND STENTING EXPERIENCE</strong>, presented at the Indian College of Cardiology, 2003, Mumbai, earned him the second-best paper award at the National level.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Certifications;
