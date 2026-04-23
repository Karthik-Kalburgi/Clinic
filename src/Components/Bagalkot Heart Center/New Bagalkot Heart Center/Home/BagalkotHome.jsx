import React from "react";
import Logo from '/Bagalkot Center/Bagalkot_Heart_Center.jpeg' ; // replace with your image

const BagalkotHome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50 flex items-center justify-center px-4 py-10">

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">

          {/* Badge */}
          <span className="inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full font-semibold text-sm mb-4 animate-pulse">
            Coming Soon
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-900 leading-tight">
            Bagalkot Heart Centre
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-gray-600 text-lg md:text-xl">
            A new advanced cardiac care facility is coming soon to serve patients in Bagalkot with modern heart treatment and emergency care.
          </p>

          {/* Status Box */}
          <div className="mt-6 bg-white shadow-md rounded-xl p-5 border-l-4 border-cyan-500">
            <p className="text-cyan-700 font-semibold text-lg">
              🚧 Opening Soon
            </p>
            <p className="text-gray-500 mt-1">
              Advanced Cardiac Care • Emergency Services • 24×7 Support
            </p>
          </div>

          {/* Button */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            <a
              href="tel:+919113689250"
              className="bg-cyan-600 text-white px-6 py-3 rounded-lg shadow hover:bg-cyan-700 transition font-semibold"
            >
              📞 Contact Center
            </a>

            <a
              href="/"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition font-semibold"
            >
              Back to Home
            </a>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <div className="relative">

            <img
              src={Logo}
              alt="Bagalkot Heart Centre"
              className="rounded-2xl shadow-2xl w-full max-w-md md:max-w-lg object-cover"
            />

            {/* Overlay Badge */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow">
              <p className="text-sm font-semibold text-cyan-700">
                Launching Soon
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default BagalkotHome;