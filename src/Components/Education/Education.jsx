import React from 'react';
import { Helmet } from 'react-helmet';

const Education = () => {
  return (
    <div className="relative py-12 bg-sky-50">
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

      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-black font-poppins">
          Qualification and Experience
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-custom-blue p-8 rounded-xl shadow-lg">
          <p className="text-lg md:text-xl font-poppins text-center font-medium text-black leading-relaxed mb-6">
            Dr. Santosh V. Chikkodi served as a senior resident in Pariyaram Medical College, Kannur, Kerala (2019–2020).
            A high-volume center with 300–400 PCIs per month, where he trained under Dr. S. M. Ashraf, HOD of Cardiology.
          </p>

          <p className="text-lg md:text-xl font-poppins text-center font-medium text-black leading-relaxed mb-6">
            He later served as an Associate Consultant at Apollo Hospitals and Trustwell Hospital, Bangalore (2020–2021), working with one of India’s finest cardiologists, Dr. Girish B. Navasundi.
          </p>

          <p className="text-lg md:text-xl font-poppins text-center font-medium text-black leading-relaxed mb-6">
            Currently, he is a Senior Consultant Interventional Cardiologist in Bagalkot, Karnataka since June 2021.
          </p>

          <p className="text-lg md:text-xl font-poppins text-center font-medium text-black leading-relaxed">
            <strong>Educational Qualifications:</strong><br />
            MBBS – KIMS, Hubli, 2012<br />
            MD – Internal Medicine, PGIMER, Chandigarh, 2015<br />
            DNB – Medicine, NBE Delhi, 2018<br />
            DM – Cardiology, Sri Jayadeva Institute of Cardiovascular Sciences, Bangalore, 2019<br />
            DNB – Cardiology, NBE Delhi, 2021 <br />
            FSCA (USA)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
