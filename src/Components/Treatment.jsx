import React from "react";


import  images1 from '../Images/HeartattacktherapiesTreatment.jpeg';
import images2 from '../Images/HeartfailuretherapiesTreatment.jpeg';
import images3 from '../Images/syncopeTreatment.jpeg';
import images4 from '../Images/arythmiaTreatment.jpeg';
import images5 from '../Images/strokeTreatment.jpeg';
import images6 from '../Images/hypertensionTreatment.jpeg';




const Treatment = () => {
  return (
    <div className="container mx-auto p-8 bg-white min-h-screen relative">
      {/* Treatment Image */}
      

      {/* Treatment Title positioned at the top right */}
      <h1 className="absolute top-10 text-center right-[35%]   text-4xl   font-semibold font-poppins text-black z-15">
        Treatment Options
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-32">
        {/* First Row */}
        <div className="text-center bg-custom-blue  hover:scale-105 hover:bg-blue-200 transition-transform duration-300 p-6 rounded-lg shadow-2xl hover:shadow-2xl">
          <img
            src={images1}
            alt="Heart Attack Therapies"
            className="w-full  h-auto mb-4 rounded-md shadow-md"
          />
          <h2 className="text-2xl font-semibold font-poppins text-center justify-start  text-custom-cyan">Heart Attack Therapies</h2>
          <ul className="text-lg font-semibold font-poppins mt-2 text-start  text-gray-700 justify-start ">
            <li>• Coronary Angiogram</li>
            <li>•Primary Angioplasty</li>
            <li>• Coronary Physiology Testing FFR/iFR/RFR</li>
            <li>•Complex Angioplasty</li>
            <li>•Left Main Angioplasty</li>
            
        
          </ul>
        </div>

        <div className="text-center bg-custom-blue  hover:scale-105 hover:bg-blue-200 transition-transform duration-300 p-6 rounded-lg shadow-2xl hover:shadow-2xl">
          <img
            src={images2}
            alt="Heart Failure Therapies"
            className="w-full h-auto mb-4 rounded-md shadow-md"
          />
          <h2 className="text-2xl font-semibold font-poppins text-center justify-start  text-custom-cyan">Heart Failure Therapies</h2>
          <ul className="text-lg font-semibold font-poppins mt-2 text-start  text-gray-700 justify-start">
            <li>• Pacemaker Insertion </li>
            <li>• AICD insertion</li>
            <li>• CRTD/CRTP insertion</li>
            <li>• Mechanical Circulatory Support – IABP,</li>
        
          </ul>
        </div>

        <div className="text-center bg-custom-blue  hover:scale-105 hover:bg-blue-200 transition-transform duration-300 p-6 rounded-lg shadow-2xl hover:shadow-2xl">
          <img
            src={images3}
            alt="Syncope "
            className="w-full h-auto mb-4 rounded-md shadow-md"
          />
          <h2 className="text-2xl font-semibold font-poppins text-center justify-start  text-custom-cyan">Structural Heart Disease</h2>
          <ul className="text-lg font-semibold font-poppins mt-2 text-start  text-gray-700 justify-start">
            <li>• Valve</li>
            <li>• ELR</li>
<li>ILR</li>
            <li>•Tilt Table Testing</li>
            <li>• Pulmonary Valve</li>
            <li>• Pacemaker Devices</li>
           
          </ul>
        </div>

        <div className="text-center bg-custom-blue  hover:scale-105 hover:bg-blue-200 transition-transform duration-300 p-6 rounded-lg shadow-2xl hover:shadow-2xl">
          <img
            src={images4}
            alt="Arrhythmia"
            className="w-full h-auto mb-4 rounded-md shadow-md"
          />
          <h2 className="text-2xl font-semibold font-poppins text-center justify-start  text-custom-cyan">Arrhythmia</h2>
          <ul className="text-lg font-semibold font-poppins mt-2 text-start  text-gray-700 justify-start">
            
            <li>•Pulmonary Balloon Valvotomy</li>
            <li>•Tricuspid Balloon Valvotomy</li>
            <li>•Aortic Balloon Valvotomy</li>
            <li>• Device Closure :  ASD, VSD, PDA</li>
            <li>• Coarctoplasty</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-12">
        {/* Second Row */}
        <div className="text-center bg-custom-blue  hover:scale-105 hover:bg-blue-200 transition-transform duration-300 p-6 rounded-lg shadow-2xl hover:shadow-2xl">
          <img
            src={images5}
            alt="Stroke"
            className="w-full h-auto mb-4 rounded-md shadow-md"
          />
          <h2 className="text-2xl font-semibold font-poppins text-center justify-start  text-custom-cyan">Syncope</h2>
          <ul className="text-lg font-semibold font-poppins mt-2 text-start  text-gray-700 justify-start">
            <li>• EP Study


</li>
            <li>• Left Bundle Pacing</li>
            <li>• CRTP</li>
          </ul>
        </div>

        <div className="text-center bg-custom-blue  hover:scale-105 hover:bg-blue-200 transition-transform duration-300 p-6 rounded-lg shadow-2xl hover:shadow-2xl">
          <img
            src={images6}
            alt="Hypertension Advance Treatment "
            className="w-full h-auto mb-4 rounded-md shadow-md"
          />
          <h2 className="text-2xl font-semibold font-poppins text-center justify-start  text-custom-cyan">Stroke</h2>
          <ul className="text-lg font-semibold font-poppins mt-2 text-start  text-gray-700 justify-start">
            <li>• RF Ablation</li>
            <li>• LA appendage</li>
            <li>• Atrial Fibrillation-Therapy & Management</li>
            <li>• Carotid Angioplasty</li>
          </ul>
        </div>

        <div className="text-center bg-custom-blue  hover:scale-105 hover:bg-blue-200 transition-transform duration-300 p-6 rounded-lg shadow-2xl hover:shadow-2xl">
          <img
            src={images6}
            alt="Structural Heart Disease"
            className="w-full h-auto mb-4 rounded-md shadow-md"
          />
          <h2 className="text-2xl font-semibold font-poppins text-center justify-start  text-custom-cyan">Hypertension & Diabetic Related Heart Problems</h2>
          {/* You can add treatments here if needed */}
        </div>

        <div className="text-center bg-custom-blue  hover:scale-105 hover:bg-blue-200 transition-transform duration-300 p-6 rounded-lg shadow-2xl hover:shadow-2xl">
          <img
            src={images6}
            alt="Aortic Disease"
            className="w-full h-auto mb-4 rounded-md shadow-md"
          />
          <h2 className="text-2xl font-semibold font-poppins text-center justify-start  text-custom-cyan">Aortic Disease</h2>
          <ul className="text-lg font-semibold font-poppins mt-2 text-start  text-gray-700 justify-start">
            <li>• Aortic Stenosis</li>
            <li>• Aortic Regurgitation</li>
            <li>• Aortic Coarctation</li>
            <li>• Aneurysm</li>
            <li>• Dissection</li>
          </ul>
        </div>
      </div>

     
    </div>
  );
};

export default Treatment;
// This code defines a React component named "Treatment" that displays various treatment options for heart-related conditions.

// The layout is styled using Tailwind CSS classes for a modern and clean appearance.   