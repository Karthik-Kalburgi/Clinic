import React from 'react';
import EducationandExp from '../Images/EducationAndExperience.jpg';

const Education = () => {
  return (
    <div className="relative">
      {/* Image Section */}
      <img 
        src={EducationandExp} 
        alt="Education and Experience"
        className="w-full h-[600px] object-cover rounded-2xl"
      />
      
      {/* Overlay Section with Content */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center text-white p-4 md:p-8">
        <div className="text-center max-w-4xl space-y-4">
          <h1 className="text-4xl font-semibold md:text-5xl">Qualification and Experience</h1>

          {/* First Paragraph */}
          <p className="mt-4 text-lg md:text-xl">
            With more than 9000 angiograms through Femoral, Ulnar, and Radial approach and over 1500 coronary and peripheral angioplasties, Dr. Girish is one of the senior cardiologists based in Bangalore. In 1998, he obtained his MBBS degree from JSS Medical College. In 2003, he completed his MD in General Medicine from Jawaharlal Nehru Medical College, Belgaum. In 2006, Dr. Girish passed his DNB in Cardiology. He currently serves as a Senior Consultant & Interventional Cardiologist at Apollo Hospitals in Bangalore.
          </p>

          {/* Second Paragraph */}
          <p className="mt-4 text-lg md:text-xl">
            His services include Transesophageal Echocardiogram, Mitral Valve Repair, Implantable Cardioverter Defibrillator, Balloon Mitral Valvotomy, and Angioplasty.
          </p>

          {/* Third Paragraph */}
          <p className="mt-4 text-lg md:text-xl">
            Dr. Girish B Navasundi served in various capacities at other premier hospitals before joining Apollo Hospitals, Bengaluru as a Senior Consultant. He worked as a Registrar in Endocrinology at Mallya Hospital and Wockhardt Hospital Bengaluru, Registrar in Cardiology at St. Johns Medical College, Bengaluru. He served as a Registrar in Cardiology as DNB Trainee at Apollo Hospitals, Hyderabad, and later joined as a Consultant Cardiologist.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
