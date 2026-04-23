import React from "react";

export default function BagalkotHome() {
  const doctorImage = "/Bagalkot Center/profile.jpg";

  return (
    <div className="font-sans text-gray-800">
      {/* HERO */}
      <section className="bg-blue-900 text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Bagalkot Heart Centre
            </h1>
            <p className="text-base sm:text-lg mb-2">
              Personal Attention • Expert Care
            </p>
            <p className="mb-6 text-sm sm:text-base">
              Advanced Cardiac Care at Your Doorstep, Affordable for All
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-white text-blue-900 px-6 py-2 rounded-xl w-full sm:w-auto   "  onClick={() => window.open("https://kivihealth.com/", "_blank")}>
            Book an Appointment
            
              </button>
              <button className="border border-white px-6 py-2 rounded-xl w-full sm:w-auto">
                Call Now
              </button>
            </div>
          </div>

          <div className="bg-white/10 p-4 rounded-2xl">
            <img
              src={doctorImage}
              alt="Doctors"
              className="w-full h-auto max-h-[350px] sm:max-h-[400px] md:max-h-[450px] object-contain rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              About the Centre
            </h2>
            <p className="text-sm sm:text-base">
              Bagalkot Heart Centre is a modern cardiac care facility providing
              comprehensive heart care with advanced technology, expert
              treatment, and compassionate care all under one roof.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Advanced Technology", "Close to Home", "Affordable Care"].map(
              (item) => (
                <div
                  key={item}
                  className="bg-blue-50 p-4 rounded-xl text-center text-sm sm:text-base"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* DOCTOR
      <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="bg-white p-4 rounded-2xl">
            <img
              src={doctorImage}
              alt="Dr. Santosh Chikkodi"
              className="w-full h-auto max-h-[350px] sm:max-h-[400px] object-contain rounded-xl"
            />
          </div>

          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Dr. Santosh Chikkodi
            </h2>
            <p className="mb-4 text-sm sm:text-base">
              MBBS, MD, DNB, DM, DrNB, FICC, FSCAI (USA), MNAMS
            </p>
            <p className="mb-4 text-sm sm:text-base">
              Highly skilled Interventional Cardiologist with 10+ years of
              experience.
            </p>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>✔ 6000+ Angiograms</li>
              <li>✔ 2500+ Angioplasties</li>
              <li>✔ Complex Coronary Interventions</li>
            </ul>
          </div>
        </div>
      </section> */}

      {/* SERVICES */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">
            Our Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Advanced Cath Lab",
              "Cardiac ICU",
              "OPD & Diagnostics",
              "Laboratory",
              "Pharmacy",
            ].map((service) => (
              <div
                key={service}
                className="p-6 bg-white shadow rounded-2xl hover:shadow-lg transition"
              >
                <h3 className="font-semibold mb-2 text-base sm:text-lg">
                  {service}
                </h3>
                <p className="text-sm">
                  High-quality care with advanced technology and expert support.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSURANCE */}
      <section className="bg-blue-50 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Schemes & Insurance
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "ESI",
              "CGHS",
              "Railways",
              "Yashasvini",
              "KSRTC",
              "Private Insurance",
            ].map((item) => (
              <span
                key={item}
                className="bg-white px-4 py-2 rounded-full shadow text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Contact Us
            </h2>
            <p className="text-sm sm:text-base">Bagalkot Heart Centre</p>
            <p className="text-sm sm:text-base">
              Daddenavar Hospital Campus
            </p>
            <p className="mt-2 text-sm sm:text-base">Phone: 91136 89250</p>
            <p className="text-sm sm:text-base">9914062288</p>
            <p className="mt-2 text-sm sm:text-base">
              Email: drchikkodicardio@gmail.com
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-2xl">
            <img
              src={doctorImage}
              alt="Hospital"
              className="w-full h-auto max-h-[350px] sm:max-h-[400px] object-contain rounded-xl"
            />
          </div>
        </div>
      </section> */}

     <footer />
    </div>
  );
}
