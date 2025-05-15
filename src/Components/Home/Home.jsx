import React, { Suspense, lazy } from "react";
import doctors from '../../Images/1mainpage.png'
import CountUp from 'react-countup'; 

const Consultation = lazy(() => import('../../Components/Consulation/Consultation'));
const Specialities = lazy(() => import('../Speacialities/Specialities'));
const HomeAbout = lazy(() => import("./HomeAbout"));

const Home = () => {
  return (
    <>
      <div className="relative bg-sky-50 ">
        {/* Content Container */}
        <div className="relative w-full h-32">
          <img
            src={doctors}
            alt="Doctor Wallpaper"
            className="absolute top-0 right-14  w-[700px] rounded-md mt-14 sm:mt-6 md:mt-4 lg:mt-0"
          />
          <div className="absolute top-0 -right-8 w-[55%] h-full border-4 border-white shadow-2xl transition-all hover:shadow-2xl
            p-6 mt-[52%] rounded-3xl  grid grid-cols-3 bg-white mr-12 hover:bg-blue-50 ">
            <div>
              <p className="text-custom-cyan font-bold font-poppins text-3xl">
                <CountUp end={5000} duration={2.5} />
              </p>
              <p className="font-semibold text-black text-2xl mt-2">Angiograms</p>
            </div>
            <div>
              <p className="text-custom-cyan font-bold text-3xl font-poppins">
                <CountUp end={2500} duration={2.5} />
              </p>
              <p className="font-semibold text-black text-2xl mt-2">Angioplasty</p>
            </div>
            <div>
              <p className="text-custom-cyan font-bold text-3xl font-poppins">
                <CountUp end={100} duration={2.5} />
              </p>
              <p className="font-semibold text-black text-2xl mt-2">Pacemaker Devices</p>
            </div>
          </div>
        </div>

        <div className="text-start mt-12 sm:mt-16 md:mt-22 ml-6 sm:ml-10 lg:ml-32 font-poppins">
          <h1 className="font-bold font-poppins text-4xl sm:text-5xl md:text-6xl text-custom-cyan">
            Dr. Santosh V. Chikkodi
          </h1>
          <p className="text-lg sm:text-xl md:text-xl text-custom-cyan font-bold mt-6 sm:mt-8">
            Senior Interventional Cardiologist
          </p>
          <p className="text-lg sm:text-xl md:text-xl text-custom-cyan font-poppins font-bold mt-2">
            Bagalkot, Karnataka, India
          </p>
          <button className="bg-teal-400 text-white text-lg sm:text-xl p-10   sm:p-10 ml-[22%] sm:ml-[35%] lg:ml-[22%] px-10 font-bold mt-8 sm:mt-10 rounded-3xl bg-gradient-to-r from-teal-500 to-cyan-400 hover:bg-gradient-to-l hover:from-cyan-400 hover:to-teal-500">
            Book an appointment
          </button>
        </div>

        {/* Lazy-loaded Components with Suspense */}
        <Suspense fallback={<div>Loading...</div>}>
          <div className="mt-[25%]">
            <Consultation />
          </div>
          <div>
            <HomeAbout />
          </div>
          <div>
            <Specialities />
          </div>
        </Suspense>
      </div>
    </>
  );
};

export default Home;
