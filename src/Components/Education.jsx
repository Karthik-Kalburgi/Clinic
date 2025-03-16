import React from 'react'
import EducationandExp from '../Images/EducationAndExperience.jpg'

const Education = () => {
  return (
    <div>
      <div className='relative'>
        {/* Image */}
        <img 
          src={EducationandExp} 
          alt='Education and Experience' 
          className='w-full h-[500px] p-4 bg-blue-200 mt-8 rounded-2xl'
        />
        
        {/* Information in front of the image */}
        <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center text-white p-4'>
          <div className='text-center'>
            <h1 className='text-3xl font-bold'>Qualification and Experience</h1>
            <p className='mt-4 text-lg'>
              With more than 9000 angiograms through Femoral, Ulnar and Radial approach and more than 1500 coronary and peripheral angioplasty, Dr. Girish is one of the senior cardiologists based at Bangalore. In 1998, he obtained his MBBS degree from JSS Medical College. In 2003, he completed his MD in General Physician from Jawaharlal Nehru Medical College, Belgaum. In 2006, Dr. Girish passed his DNB in Cardiology. Currently, Dr. Girish is providing his services as a Senior Consultant & Interventional Cardiologist at Apollo Hospitals in Bangalore.
            </p>
            <p className='mt-4 text-lg'>
              His services include Transesophageal Echocardiogram, Mitral Valve Repair, Implantable Cardioverter Defibrillator, Balloon Mitral Valvotomy, and Angioplasty.
            </p>
            <p className='mt-4 text-lg'>
              Dr. Girish B Navasundi served in various capacities at other premier hospitals before joining Apollo Hospitals, Bengaluru as a Senior Consultant. He worked as a Registrar in Endocrinology at Mallya Hospital and Wockhardt Hospital Bengaluru, Registrar in Cardiology at St. Johns Medical College, Bengaluru. He served as a Registrar in Cardiology as DNB Trainee at Apollo Hospitals, Hyderabad, and later joined as a Consultant Cardiologist.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
