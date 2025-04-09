import React from 'react';
import educations from '../Images/education.jpg'



const Education = () => {
  return (
    <div className="relative bg-white ">
      
      <img src={educations}
       alt='Education and Experience' 
      
        className="w-full h-[500px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-full object-cover  bg-sky-50"
       /> 
       
       
        
      
      
      {/* Overlay Section with Content */}
      <div className="absolute top-0 left-0 w-full h-full bg-sky-50 bg-opacity-50 flex justify-center items-center text-zinc-700 rounded-full sm:p-6 md:p-8  ">
        <div className="text-center max-w-4xl mx-auto space-y-4  ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">Qualification and Experience</h1>

          {/* First Paragraph */}
          <p className="mt-4 text-sm sm:text-lg md:text-xl text-black text-center ">
            With more than 9000 angiograms through Femoral, Ulnar, and Radial approach and over 1500 coronary and peripheral angioplasties, Dr. Girish is one of the senior cardiologists based in Bangalore. In 1998, he obtained his MBBS degree from JSS Medical College. In 2003, he completed his MD in General Medicine from Jawaharlal Nehru Medical College, Belgaum. In 2006, Dr. Girish passed his DNB in Cardiology. He currently serves as a Senior Consultant & Interventional Cardiologist at Apollo Hospitals in Bangalore.
          </p>

          {/* Second Paragraph */}
          <p className="mt-4 text-sm sm:text-lg md:text-xl text-black  text-center ">
            His services include Transesophageal Echocardiogram, Mitral Valve Repair, Implantable Cardioverter Defibrillator, Balloon Mitral Valvotomy, and Angioplasty.
          </p>

          {/* Third Paragraph */}
          <p className="mt-4 text-sm sm:text-lg md:text-xl text-black  text-center ">
            Dr. Girish B Navasundi served in various capacities at other premier hospitals before joining Apollo Hospitals, Bengaluru as a Senior Consultant. He worked as a Registrar in Endocrinology at Mallya Hospital and Wockhardt Hospital Bengaluru, Registrar in Cardiology at St. Johns Medical College, Bengaluru. He served as a Registrar in Cardiology as DNB Trainee at Apollo Hospitals, Hyderabad, and later joined as a Consultant Cardiologist.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
