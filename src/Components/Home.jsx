import React from "react";
import doctors from '../Images/doctors.png';
import Consultation from "./Consultation";
import Specialities from "./Specialities";

const Home = () => {
  return (
    <div className="relative bg-sky-50 ">
      {/* Content Container */}
      <div className="relative w-full h-32">
        {/* Doctor Image positioned at the top-right */}
        <img
  src={doctors}
  alt="Doctor Wallpaper"
  className="absolute top-0 right-0 w-[80%] sm:w-[60%] md:w-[50%] lg:w-[42%] xl:w-[42%] rounded-md mt-14 sm:mt-6 md:mt-4 lg:mt-0"
/>

        <div className="absolute top-0 right-0 w-[42%] h-full border-4 border-white shadow-2xl transition-all hover:shadow-2xl
          p-6 mt-[42%] rounded-3xl  grid grid-cols-2 bg-white mr-12 hover:bg-blue-50 ">
          <div>
            <p className="text-cyan-500 font-bold text-3xl   ">7000+ </p>
            <p className="font-semibold text-black text-xl mt-2 ">Angiograms</p></div>
          <div>
            <p className="text-cyan-500 font-bold text-3xl" >12000+</p>
            <p className="font-semibold text-black text-xl mt-2 " >Coronary and peripheral</p>
          </div>

          {/* Optional content inside the border */}
        </div>
      </div>

      {/* Additional Content */}
      <div className="text-start mt-12 sm:mt-16 md:mt-22 ml-6 sm:ml-10 lg:ml-32 font-poppins">
  <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-cyan-500">
    Dr. Santosh C
  </h1>
  <p className="text-lg sm:text-xl md:text-xl text-cyan-500 font-bold mt-6 sm:mt-8">
    Experienced Cardiologist: With 15 years of experience in the field of cardiology,
  </p>
  <p className="text-lg sm:text-xl md:text-xl text-cyan-500 font-poppins font-bold mt-2">
    The doctor has a thorough understanding of various heart conditions and treatment methods.
  </p>
  <p className="text-lg sm:text-xl md:text-xl text-cyan-500 font-poppins font-bold mt-2">
    Heart Hospital Bangalore, India
  </p>
  <button className="bg-teal-400 text-white text-lg sm:text-xl p-6 sm:p-7 ml-[22%] sm:ml-[35%] lg:ml-[22%] px-8 font-bold mt-8 sm:mt-10 rounded-3xl bg-gradient-to-r from-teal-500 to-cyan-400 hover:bg-gradient-to-l hover:from-cyan-400 hover:to-teal-500">
    Book an appointment
  </button>
</div>


      {/* Additional Section (Consultation) */}
      <div className="mt-[25%]"> {/* Added margin-top here */}
        <Consultation />
      </div>
      <div>
        <Specialities />
      </div>
    </div>
  );
};

export default Home;