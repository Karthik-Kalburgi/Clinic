import React from "react";
import images1 from "../Images/Aorticdisease.png";
import images2 from "../Images/Arrhythmia.png";
import images3 from "../Images/HeartAttackTherapies.png";
import images4 from "../Images/HeartFailureTherapies.png";
import images5 from "../Images/HypertensionAdvanceTreatment&DiabeticRelatedHeartProblems.png";
import images6 from "../Images/Stroke.png";
import images7 from "../Images/StructuralHeartDisease.png";
import images8 from "../Images/SuddenCardiacDeathPrevention.png";
import Specialities from "./Specialities";
import treatment from '../Images/Treatment.png'

const Treatment = () => {
  return (
    <div className="container mx-auto p-8 bg-sky-50 min-h-screen relative">
      {/* Treatment Image */}
      <img
        src={treatment}
        alt="Treatment Wallpaper"
        className="w-[90%] h-auto mx-auto block mb-6" // 90% width and auto height
      />

      {/* Treatment Title positioned at the top right */}
      <h1 className="absolute top-10 right-[10%] text-5xl  font-bold text-black z-10">
        Treatment Options
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
        {/* First Row */}
        <div className="text-center bg-white p-6 rounded-lg shadow-2xl hover:shadow-2xl transition duration-200">
          <img
            src={images1}
            alt="Heart Attack Therapies"
            className="w-full h-auto mb-4 rounded-md shadow-md"
          />
          <h2 className="text-2xl font-semibold text-cyan-500">Heart Attack Therapies</h2>
          <ul className="text-lg font-medium mt-2 text-start  text-gray-700">
            <li>• Angioplasty</li>
            <li>• Image Guided Therapy</li>
            <li>• OCT IVUS</li>
            <li>• Left Main PCI</li>
            <li>• CTO</li>
            <li>• BRS/ Cutting Balloon/ FFR</li>
          </ul>
        </div>

        <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-200">
          <img
            src={images2}
            alt="Heart Failure Therapies"
            className="w-full h-auto mb-4 rounded-md shadow-md"
          />
          <h2 className="text-2xl font-semibold text-cyan-500">Heart Failure Therapies</h2>
          <ul className="text-lg font-medium mt-2 text-start   text-gray-700">
            <li>• Pacemaker/Micra</li>
            <li>• ICD</li>
            <li>• CRT</li>
            <li>• ECHMO</li>
            <li>• LVAD</li>
            <li>• Impella Pump</li>
          </ul>
        </div>

        <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-200">
          <img
            src={images3}
            alt="Structural Heart Disease"
            className="w-full h-auto mb-4 rounded-md shadow-md"
          />
          <h2 className="text-2xl font-semibold text-cyan-500">Structural Heart Disease</h2>
          <ul className="text-lg font-medium mt-2 text-start  text-gray-700">
            <li>• Valve</li>
            <li>• Mitraclip</li>
            <li>• Tricuspid Valve</li>
            <li>• Pulmonary Valve</li>
            <li>• Cerebral protection device</li>
            <li>• Closure devices</li>
            <li>• LVAD</li>
          </ul>
        </div>

        <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-200">
          <img
            src={images4}
            alt="Arrhythmia"
            className="w-full h-auto mb-4 rounded-md shadow-md"
          />
          <h2 className="text-2xl font-semibold text-cyan-500">Arrhythmia</h2>
          <ul className="text-lg font-medium mt-2 text-start  text-gray-700">
            <li>• EP Study</li>
            <li>• RF Ablation</li>
            <li>• Left Bundle Pacing</li>
            <li>• CRTP/ICD/Micra</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-12">
        {/* Second Row */}
        <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-200">
          <img
            src={images5}
            alt="Syncope"
            className="w-full h-auto mb-4 rounded-md shadow-md"
          />
          <h2 className="text-2xl font-semibold text-cyan-500">Syncope</h2>
          <ul className="text-lg font-medium mt-2 text-start  text-gray-700">
            <li>• ELR</li>
            <li>• TILT test</li>
            <li>• Pacemaker/ICD</li>
          </ul>
        </div>

        <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-200">
          <img
            src={images6}
            alt="Stroke"
            className="w-full h-auto mb-4 rounded-md shadow-md"
          />
          <h2 className="text-2xl font-semibold text-cyan-500">Stroke</h2>
          <ul className="text-lg font-medium mt-2 text-start  text-gray-700">
            <li>• RF Ablation</li>
            <li>• LA appendage</li>
            <li>• Atrial Fibrillation-Therapy & Management</li>
            <li>• Carotid Angioplasty</li>
          </ul>
        </div>

        <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-200">
          <img
            src={images7}
            alt="Hypertension and Diabetic Related Heart Problems"
            className="w-full h-auto mb-4 rounded-md shadow-md"
          />
          <h2 className="text-2xl font-semibold text-cyan-500">Hypertension & Diabetic Related Heart Problems</h2>
          {/* You can add treatments here if needed */}
        </div>

        <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-200">
          <img
            src={images8}
            alt="Aortic Disease"
            className="w-full h-auto mb-4 rounded-md shadow-md"
          />
          <h2 className="text-2xl font-semibold text-cyan-500">Aortic Disease</h2>
          <ul className="text-lg font-medium mt-2 text-start  text-gray-700">
            <li>• Aortic Stenosis</li>
            <li>• Aortic Regurgitation</li>
            <li>• Aortic Coarctation</li>
            <li>• Aneurysm</li>
            <li>• Dissection</li>
          </ul>
        </div>
      </div>

      {/* Specialities Section */}
      <div className="mt-12">
        <Specialities />
      </div>
    </div>
  );
};

export default Treatment;
// This code defines a React component named "Treatment" that displays various treatment options for heart-related conditions.
// It includes images and descriptions of different therapies, arranged in a responsive grid layout.
// The component also imports a "Specialities" component to showcase additional information.
// The layout is styled using Tailwind CSS classes for a modern and clean appearance.   