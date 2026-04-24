import React from "react";

import Cathlab from '/Bagalkot Center/Gallery/Labs/CathLab.jpeg'
import cathicu from '/Bagalkot Center/Gallery/Labs/ICU.jpg'
import invasion from '/Bagalkot Center/Gallery/Labs/NonInvasion.png'
import pharmacys from '/Bagalkot Center/Gallery/Labs/Pharmacy.jpg'
import {
  FaHeartbeat,
  FaHospital,
  FaUserMd,
  FaProcedures,
  FaMicroscope,
  FaNotesMedical,
} from "react-icons/fa";

export default function BagalkotHome() {
  const doctorImage = "/Bagalkot Center/profile.jpg";

  return (
    <div className="font-[Poppins] text-gray-800">

      {/* HERO */}
      <section className="bg-blue-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Bagalkot Heart Centre
            </h1>
            <p className="text-lg mb-2">
              Personal Attention • Expert Care
            </p>
            <p className="mb-6">
              Advanced Cardiac Care at Your Doorstep, Affordable for All
            </p>
          </div>

          <div className="bg-white/10 p-4 rounded-2xl">
            <img
              src={doctorImage}
              alt="Doctor"
              className="w-full h-[400px] object-contain rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-10">

          <div>
            <h2 className="text-3xl font-bold mb-4">About the Centre</h2>
            <p className="leading-relaxed">
              Bagalkot Heart Centre is a modern cardiac care facility providing comprehensive heart care with advanced technology, expert treatment, and compassionate care all under one roof. Our goal is to bring timely, high-quality, and affordable cardiac care closer to the people of Bagalkot and surrounding regions.
            </p>
          </div>

          {/* Vision + Mission */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <FaHeartbeat /> Vision
              </h3>
              <p>
                Advanced cardiac care at your doorstep, affordable for all.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <FaNotesMedical /> Mission
              </h3>
              <p>
                To provide timely, advanced, compassionate and affordable cardiac care while promoting heart health and prevention.
              </p>
            </div>
          </div>

          {/* WHY */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">
              Why Choose Us
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { title: "Advanced Technology", icon: <FaHospital /> },
                { title: "Close to Home", icon: <FaUserMd /> },
                { title: "Affordable Care", icon: <FaHeartbeat /> },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white shadow p-6 rounded-xl text-center hover:shadow-lg transition"
                >
                  <div className="text-3xl text-blue-900 mb-3">
                    {item.icon}
                  </div>
                  <p className="font-medium">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-16">

          {/* Cath Lab */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-200 h-[320px] rounded-xl flex items-center justify-center">
             <img src={Cathlab} alt="Cath Lab" className="w-full h-full object-cover rounded-xl"/>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3 flex gap-2 items-center">
                <FaProcedures /> Advanced Cath Lab
              </h3>
              <p className="text-sm leading-relaxed whitespace-pre-line">
{`The Bagalkot Heart Centre Cath Lab is equipped with the Involution Premier Elite system, offering advanced imaging and precision for complex cardiac procedures. This state-of-the-art technology enables accurate diagnosis, safer interventions, and improved patient outcomes.

Our Cath Lab is designed to handle routine and complex cardiac procedures including coronary angiography, angioplasty, primary PCI, complex coronary interventions, and peripheral interventions.

With advanced support systems like IABP and the availability of experienced cath lab technicians and skilled scrub nurses, we ensure safe, timely, and advanced cardiac care close to home.`}
              </p>
            </div>
          </div>

          {/* ICU */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3 flex gap-2 items-center">
                <FaHospital /> Advanced Cardiac ICU
              </h3>
              <p className="text-sm leading-relaxed whitespace-pre-line">
{`The Cardiac ICU at Bagalkot Heart Centre is designed to provide advanced, continuous cardiac care with patient comfort and safety as top priorities.

The ICU is equipped with advanced Nihon Kohden multi-parameter monitors featuring reliable Japanese technology for accurate and continuous monitoring.

We provide Paramount ICU beds, advanced defibrillator with pacing capability, infusion pumps, syringe pumps, and Maquet ventilator for critically ill patients.

Our ICU is supported by round-the-clock intensivist care, experienced ICU staff, and central air conditioning to ensure a comfortable healing environment.

Our ICU is built to deliver safe, advanced, and round-the-clock cardiac care.`}
              </p>
            </div>
            <div className="bg-gray-200 h-[320px] rounded-xl flex items-center justify-center">
              <img src={cathicu} alt="ICU" className="w-full h-full object-cover rounded-xl"/> 
            </div>
          </div>

          {/* OPD */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-200 h-[320px] rounded-xl flex items-center justify-center">
              <img src={invasion} alt="Non Invasive" className="w-full h-full object-cover rounded-xl"/>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3 flex gap-2 items-center">
                <FaNotesMedical /> OPD & Non-Invasive Cardiac Services
              </h3>
              <p className="text-sm whitespace-pre-line">
{`The OPD at Bagalkot Heart Centre is equipped with advanced non-invasive cardiac diagnostic facilities for accurate and timely evaluation.

We offer GE Echocardiography for routine echo, stress echocardiography, and strain imaging.

Our facility includes Nasan TMT for stress testing and GE ECG for high-quality evaluation.

The OPD also features a comfortable waiting area with central air conditioning for patients and their families.`}
              </p>
            </div>
          </div>

          {/* LAB */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3 flex gap-2 items-center">
                <FaMicroscope /> Laboratory & Pharmacy
              </h3>
              <p className="text-sm whitespace-pre-line">
{`Bagalkot Heart Centre offers 24/7 laboratory and pharmacy services to ensure timely diagnosis and uninterrupted patient care.

Our laboratory provides essential investigations with quick and reliable results.

The pharmacy is well-stocked with emergency and cardiac medications, ensuring immediate availability at all times.`}
              </p>
            </div>
            <div className="bg-gray-200 h-[320px] rounded-xl flex items-center justify-center">
              <img src={pharmacys} alt="Lab" className="w-full h-full object-cover rounded-xl"/>
            </div>
          </div>

        </div>
      </section>

      {/* INSURANCE */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-6">
            Schemes & Insurance
          </h2>

          <p className="mb-6 max-w-3xl mx-auto text-sm whitespace-pre-line">
{`At Bagalkot Heart Centre, we are committed to making advanced cardiac care accessible and affordable.

We are in the process of empanelling with various government schemes, corporate health programs, and private insurance providers.

We aim to ensure cashless and affordable treatment options for patients undergoing cardiac procedures.`}
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "ESI",
              "BPL / APL / Antyodaya",
              "CGHS",
              "Railways",
              "MSRTC / KSRTC",
              "HESCOM",
              "Yashasvini",
              "Arogyabhagya",
              "KASS",
              "Military Schemes",
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

      <footer />
    </div>
  );
}