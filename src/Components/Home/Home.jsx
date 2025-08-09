import React, { Suspense, lazy } from "react";
import doctors from "../Home/Doctor_Main_Page.webp"; 
import { PacmanLoader } from "react-spinners";

// Lazy loaded components
const CountUp = lazy(() => import("react-countup"));
const Helmet = lazy(() => import("react-helmet").then(m => ({ default: m.Helmet })));
const Consultation = lazy(() => import("../../Components/Consulation/Consultation"));
const Specialities = lazy(() => import("../Speacialities/Specialities"));
const HomeAbout = lazy(() => import("./HomeAbout"));

const Home = () => {
  return (
    <div className="bg-sky-50 w-full overflow-x-hidden">
      {/* Helmet SEO */}
      <Suspense fallback={null}>
        <Helmet>
          <title>Dr. Santosh V. Chikkodi | Top Cardiologist in Bagalkot | Angioplasty & Heart Care</title>
          <meta
            name="description"
            content="Consult Dr. Santosh V. Chikkodi, senior interventional cardiologist in Bagalkot, Karnataka. Book appointments for angiograms, angioplasty, and pacemaker implants."
          />
          <meta
            name="keywords"
            content="cardiologist Bagalkot, heart doctor Karnataka, interventional cardiologist, angioplasty specialist India, pacemaker doctor, Dr. Santosh Chikkodi"
          />
          <meta name="author" content="Dr. Santosh V. Chikkodi" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Dr. Santosh V. Chikkodi - Trusted Cardiologist in Karnataka" />
          <meta
            property="og:description"
            content="Get expert cardiac care from one of Karnataka's top heart specialists. Over 5000 angiograms and 2500 angioplasties performed."
          />
          <meta property="og:image" content="https://drsantoshchikkodi.com/assets/doctor-home-og.jpg" />
          <meta property="og:url" content="https://drsantoshchikkodi.com" />
          <link rel="canonical" href="https://drsantoshchikkodi.com" />
        </Helmet>
      </Suspense>

      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 pt-10 pb-16 gap-10">
        {/* Doctor Info */}
        <div className="w-full lg:w-1/2 text-start font-poppins">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:ml-20 text-custom-cyan">
            Dr. Santosh V. Chikkodi
          </h1>
          <p className="text-lg sm:text-xl text-custom-cyan lg:ml-20 font-bold mt-4">
            Senior Interventional Cardiologist
          </p>
          <p className="text-lg sm:text-xl text-custom-cyan lg:ml-20 font-bold mt-1">
            Bagalkot, Karnataka, India
          </p>
          <button
            className="mt-6 sm:mt-8 lg:ml-20 text-white font-bold text-lg sm:text-xl px-14 py-5 rounded-3xl bg-gradient-to-r from-teal-500 to-cyan-400 hover:from-cyan-400 hover:to-teal-500"
            onClick={() => window.open("https://kivihealth.com/", "_blank")}
          >
            Book an Appointment
          </button>
        </div>

        {/* Doctor Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={doctors}
            alt="Dr. Santosh V. Chikkodi profile"
            width="500"
            height="500"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-[85%] sm:w-[80%] md:w-[65%] lg:w-[90%] lg:mr-36 xl:w-[80%] h-auto rounded-md object-contain"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full px-4 sm:px-10 lg:px-12 flex flex-wrap justify-center gap-6 -mt-12 lg:-mt-16 z-10 relative">
        <Suspense
          fallback={
            <div className="flex justify-center items-center w-full my-8">
              <PacmanLoader color="#06b6d4" size={30} />
            </div>
          }
        >
          {[
            { label: "Angiograms", end: 5000 },
            { label: "Angioplasty", end: 2500 },
            { label: "Pacemaker Devices", end: 100 },
          ].map((item, i) => (
            <div
              key={i}
              className="w-64 sm:w-56 md:w-64 bg-white shadow-md rounded-2xl text-center p-6 hover:bg-blue-50 transition"
            >
              <p className="text-custom-cyan font-bold text-3xl font-poppins">
                <CountUp end={item.end} duration={2.5} />
              </p>
              <p className="mt-2 font-semibold text-black text-xl">{item.label}</p>
            </div>
          ))}
        </Suspense>
      </section>

      {/* Lazy-loaded Sections */}
      <Suspense
        fallback={
          <div className="flex justify-center items-center w-full my-12">
            <PacmanLoader color="#06b6d4" size={40} />
          </div>
        }
      >
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
