import React from 'react'
import Certificate from '../Images/Certifications.jpg'  

const Certifications = () => {
  return (
    <div>
      <div className='relative'>
        {/* Image */}
        <img 
          src={Certificate} 
          alt='Certifications' 
          className='w-full h-[500px] p-4 bg-blue-200 mt-8 rounded-2xl'
        />
        
        {/* Text in front of the image */}
        <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center text-white p-4'>
          <div className='text-center'>
            <h1 className='text-3xl font-bold'>Certifications</h1>
            <p className='mt-4 text-lg'>
              His Journal on Coronary Angiogram and Intervention through Transulnar Approach was co-published with Pratap C Rath, Bharat V Purohit, Sitaram and Mallikarjun Reddy, in the Indian Heart Journal.
            </p>
            <p className='mt-4 text-lg'>
              Another publication in the Indian Heart Journal was the article on “Transcatheter Closure of Perimembranous Ventricular Septal Defect with Amplatzer Membranous Occluder”. This was co-published by Dr. A R Anil, Dr. Raghavan, Dr. Sreekanth, Dr. Sanjay Bhalerao, Dr. R. Nagarajan and Dr. N B Girish.
            </p>
            <p className='mt-4 text-lg'>
              Dr. Girish Navasundi has presented numerous research papers and written for several journals. These include a paper on **HYPERKALEMIA, Etiology, and ECG Manifestations** at API, Mangalore, Karnataka in 1998.
            </p>
            <p className='mt-4 text-lg'>
              Another Paper on **PRIMARY ANGIOPLASTY AND STENTING EXPERIENCE** presented at Indian College of Cardiology, 2003, Mumbai, earned him the second Best Paper Award at the National level.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certifications
