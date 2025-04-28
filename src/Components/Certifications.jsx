import React from 'react';
import medicine from '../Images/medicine.jpg'
 

const Certifications = () => {
  return (
    <div className="relative  py-12">
      {/* Image */}
      <div className="w-full bg-sky-50 max-w-5xl mx-auto">
        <img 
          src={medicine} 
          alt="Certifications" 
          className="w-full   h-[950px] object-cover rounded-2xl shadow-xl"  
        />
      </div>
      
      {/* Text Overlay */}
      <div className="absolute top-0 left-0 w-full h-full  bg-opacity-20  flex justify-center items-center text-white p-6 rounded-2xl">
        <div className="text-center max-w-3xl mx-auto px-4 bg-opacity-80 p-6 rounded-lg shadow-lg w-full sm:w-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6">
            <span className="text-black  ">Certifications & Achievements</span> 
          </h1>
          <p className="mt-4 text-lg md:text-xl font-semibold leading-relaxed text-black">
            Dr. Girish Navasundi's Journal on Coronary Angiogram and Intervention through Transulnar Approach was co-published with Pratap C Rath, Bharat V Purohit, Sitaram, and Mallikarjun Reddy, in the Indian Heart Journal.
          </p>
          <p className="mt-4 text-lg md:text-xl font-semibold leading-relaxed text-black">
            Another notable publication in the Indian Heart Journal is the article on “Transcatheter Closure of Perimembranous Ventricular Septal Defect with Amplatzer Membranous Occluder”, co-published by Dr. A R Anil, Dr. Raghavan, Dr. Sreekanth, Dr. Sanjay Bhalerao, Dr. R. Nagarajan, and Dr. N B Girish.
          </p>
          <p className="mt-4 text-lg md:text-xl font-bold  leading-relaxed text-black">
            Dr. Girish has presented numerous research papers and written for several journals. One of his papers on <strong className="font-bold text-black-300">HYPERKALEMIA, Etiology, and ECG Manifestations</strong> was presented at API, Mangalore, Karnataka in 1998.
          </p>
          <p className="mt-4 text-lg md:text-xl font-bold leading-relaxed text-black">
            Another paper on <strong className="font-bold text-black-300">PRIMARY ANGIOPLASTY AND STENTING EXPERIENCE</strong>, presented at the Indian College of Cardiology, 2003, Mumbai, earned him the second-best paper award at the National level.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
