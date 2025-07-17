import React, { Suspense, lazy } from "react";
import doctors from '../Home/Doctor_Main_Page.png';
import CountUp from 'react-countup'; 

const Consultation = lazy(() => import('../../Components/Consulation/Consultation'));
const Specialities = lazy(() => import('../Speacialities/Specialities'));
const HomeAbout = lazy(() => import("./HomeAbout"));

const Home = () => {
  return (
    <div className="bg-sky-50 w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 pt-10 pb-16 gap-10">
        {/* Doctor Info */}
        <div className="w-full lg:w-1/2 text-start font-poppins">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-custom-cyan">
            Dr. Santosh V. Chikkodi
          </h1>
          <p className="text-lg sm:text-xl text-custom-cyan font-bold mt-4">
            Senior Interventional Cardiologist
          </p>
          <p className="text-lg sm:text-xl text-custom-cyan font-bold mt-1">
            Bagalkot, Karnataka, India
          </p>

          <button className="mt-6 sm:mt-8 text-white font-bold text-lg sm:text-xl px-14 py-5 rounded-3xl bg-gradient-to-r from-teal-500 to-cyan-400 hover:from-cyan-400 hover:to-teal-500">
            Book an appointment
          </button>
        </div>

        {/* Doctor Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={doctors}
            alt="Doctor"
            className="w-[85%]  sm:w-[70%] md:w-[65%] lg:w-[90%] lg:mr-32 xl:w-[80%] h-auto rounded-md object-contain"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full px-4 sm:px-8 lg:px-14 flex flex-wrap justify-center gap-6 lg:-mt-16   -mt-12 z-10 relative">
        {[{
          label: "Angiograms",
          end: 5000
        }, {
          label: "Angioplasty",
          end: 2500
        }, {
          label: "Pacemaker Devices",
          end: 100
        }].map((item, i) => (
          <div key={i} className="w-64 sm:w-56 md:w-64 bg-white shadow-md rounded-2xl text-center p-6 hover:bg-blue-50 transition">
            <p className="text-custom-cyan font-bold text-3xl font-poppins">
              <CountUp end={item.end} duration={2.5} />
            </p>
            <p className="mt-2 font-semibold text-black text-xl">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Lazy-loaded Components */}
      <Suspense fallback={<div className="text-center my-12">Loading...</div>}>
        <div className="mt-20 px-4 sm:px-6 lg:px-16">
          <Consultation />
        </div>
        <div className="mt-12 px-4 sm:px-6 lg:px-16">
          <HomeAbout />
        </div>
        <div className="mt-12 px-4 sm:px-6 lg:px-16 pb-10">
          <Specialities />
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
