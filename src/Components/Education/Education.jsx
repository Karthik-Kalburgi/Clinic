import React from 'react';
import { Helmet } from 'react-helmet';



const Education = () => {


  return (

    
    <div className="relative py-12"> {/* Move bg-sky-50 here */}
    <Helmet>
  <title>Qualification & Experience | Dr. Santosh V. Chikkodi - Cardiologist in Bagalkot</title>
  <meta
    name="description"
    content="Explore the educational qualifications and extensive cardiology experience of Dr. Santosh V. Chikkodi, an expert interventional cardiologist serving Bagalkot and Karnataka."
  />
  <meta
    name="keywords"
    content="Cardiologist education, Dr Santosh Chikkodi qualification, DM Cardiology, Interventional cardiologist experience, Bagalkot heart specialist"
  />
  <meta name="author" content="Dr. Santosh V. Chikkodi" />
  <meta property="og:title" content="Education & Experience | Dr. Santosh V. Chikkodi" />
  <meta
    property="og:description"
    content="Learn about Dr. Chikkodi’s qualifications: MBBS, MD, DNB, DM in Cardiology from top institutions like PGIMER and Jayadeva Institute."
  />
  <meta property="og:image" content="https://your-domain.com/path-to/education-image.jpg" />
  <meta property="og:url" content="https://your-domain.com/education" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://your-domain.com/education" />
</Helmet>

     <div className='justify-center  text-center  items-center  mt-12'>
      <span className="text-3xl md:text-4xl font-extrabold text-center mt-30 text-black  ">Qualification and Experience</span>

      </div>
      {/* Image */}
    
      {/* Text Overlay */}
     
      <div className="relative z-10 flex justify-start items-center p-8">
      
        <div className="text-between  mt-12  max-w-6xl mx-auto px-4 bg-custom-blue p-8 rounded-xl shadow-lg w-full sm:w-auto">
        <div className='text-center font-poppins text-4xl  font-semibold ' >

     
     </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6">
           
          </h1>
          <p className="mt-4 text-lg md:text-xl font-poppins text-center  font-medium leading-relaxed text-black">
            Dr Santosh V. Chikkodi served as senior resident in Pariyaram Medical College, Kannur, Kerala (2019-2020).
            A very high volume center with around 300-400 PCI/month. Got experienced in interventions and got training
            under Dr S.M.Ashraf, HOD of the dept of Cardiology, Pariyaram Medical college, Kannur.
          </p>
          <p className="mt-4 text-lg md:text-xl font-medium text-center font-poppins leading-relaxed text-black">
            Served as a Associate Consultant in Apollo Hospitals and Trustwell Hospital, Bangalore (2020-2021). During
            this period he worked with India’s Finest Cardiologist – Dr Girish B. Navasundi.
          </p>
          <p className="mt-4 text-lg md:text-xl font-medium text-center font-poppins leading-relaxed text-black">
            Currently working as a senior consultant Interventional cardiologist in Bagalkot, Karnataka since June 2021.
          </p>
         
          <p className="mt-4 text-lg md:text-xl font-medium text-center font-poppins leading-relaxed text-black">
            MBBS – KIMS, Hubli, 2012<br />
            MD – Internal Medicine, PGIMER, Chandigarh, 2015<br />
            DNB – Medicine, NBE Delhi, 2018<br />
            DM – Cardiology, Sri Jayadeva Institute of Cardiovascular Sciences, Bangalore, 2019<br />
            DNB – Cardiology, NBE Delhi, 2021
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
