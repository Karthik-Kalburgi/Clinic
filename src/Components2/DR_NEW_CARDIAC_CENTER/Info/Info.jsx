import React from 'react';
import drHeart from '../../../Images/DR_NEW_CARDIAC_CENTER_IMAGES/IMG_3330.jpeg';
import scope from '../../../Images/DR_NEW_CARDIAC_CENTER_IMAGES/steto_heart.png';
import { Helmet } from 'react-helmet';

const Info = () => {
  return (
    <div>
      {/* SEO Helmet */}
      <Helmet>
        <title>Dr. Chikkodi’s Cardiac Center | Expert Heart Care in Bagalkot</title>
        <meta 
          name="description" 
          content="Welcome to Dr. Chikkodi’s Cardiac Center – led by Dr. Santosh Chikkodi. We provide advanced cardiac care in Bagalkot, including angioplasty, valve interventions, and heart failure treatment." 
        />
        <meta 
          name="keywords" 
          content="Cardiac center Bagalkot, Dr. Santosh Chikkodi, heart specialist, angioplasty Bagalkot, pacemaker implantation, cardiac valve treatment, cardiologist near me, heart failure specialist" 
        />
        <meta name="author" content="Dr. Santosh V. Chikkodi" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Dr. Chikkodi’s Cardiac Center – Trusted Cardiac Specialist in Bagalkot" />
        <meta property="og:description" content="Get specialized and compassionate cardiac care from Dr. Santosh Chikkodi. Our center offers the latest treatments for heart conditions in Karnataka." />
        <meta property="og:image" content="https://drsantoshchikkodi.com/assets/dr-holding-heart.jpg" />
        <meta property="og:url" content="https://drsantoshchikkodi.com/info" />
        <link rel="canonical" href="https://drsantoshchikkodi.com/info" />
      </Helmet>

      {/* Doctor Holding Heart Section */}
      <div className="relative w-full h-[80vh] md:h-screen text-white">
        <img
          src={drHeart}
          alt="Dr. Chikkodi holding a heart model"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Scope Image with Overlaid Content */}
      <div className="relative w-full min-h-[100vh] text-white">
        <img
          src={scope}
          alt="Stethoscope with heart"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="relative z-10 flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-10 lg:p-20 max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-black">
            WELCOME TO DR. CHIKKODI'S CARDIAC CENTER
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold mb-6 text-black">
            Your Heart, Our Priority
          </p>
          <p className="text-sm sm:text-base md:text-md mb-6 lg:text-xl text-black">
            Providing Comprehensive Cardiac Care
          </p>

          <div className="text-start items-center text-black space-y-6">
            <p className="text-base sm:text-lg md:text-2xl">
              At <strong>Dr. Chikkodi’s Cardiac Center</strong>, we believe every heartbeat tells a story — and we’re here to ensure yours is strong and steady.
              Led by <strong>Dr. Santosh Chikkodi</strong>, a highly experienced cardiologist with over a decade of clinical excellence, our center offers compassionate,
              evidence-based care tailored to you.
            </p>

            <div>
              <p className="font-semibold text-lg md:text-2xl">Our specialties include advanced cardiac treatments such as:</p>
              <ul className="list-disc ml-6 mt-2 font-medium text-base lg:text-2xl sm:text-lg">
                <li>Complex coronary angioplasty</li>
                <li>Minimally invasive valve interventions</li>
                <li>Pacemaker and AICD device implantation</li>
                <li>Comprehensive heart failure management</li>
              </ul>
            </div>

            <p className="text-base sm:text-lg md:text-2xl">
              With a patient-first approach, we focus on early diagnosis, personalized treatment planning, and continuous care throughout your recovery and beyond.
              Whether it’s a routine check-up or a high-risk intervention, we ensure precision, comfort, and compassion every step of the way.
            </p>

            <p className="font-semibold text-lg md:text-xl">
              At Dr. Chikkodi’s Cardiac Center, your heart is more than a muscle — it’s our mission.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
