import React from 'react';
import medicine from '../../Images/medicine.jpg';

const Certifications = () => {
  return (
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
  );
}

export default Certifications;
