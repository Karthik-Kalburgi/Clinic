import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import images1 from '../../Images/Treatment/HeartAttackTherapies.jpg';
import images2 from '../../Images/Treatment/HeartFailureTherapies.jpg';
import images3 from '../../Images/Treatment/HypertensionAdvanceTreatment.jpg';
import images4 from '../../Images/Treatment/StructuralHeartDisease.jpg';
import images5 from '../../Images/Treatment/Syncope.jpg';
import images6 from '../../Images/Treatment/Arrhythmia.jpg';
import images7 from '../../Images/Treatment/SuddenCardiacDeathPrevention.jpg';

const Treatment = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-10 lg:px-20">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mt-30 text-black font-poppins">
        Treatment Options
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center mt-20">
        {/* Card 1 */}
        <div className="border p-4 min-h-[450px] w-full max-w-xs mx-auto rounded-2xl bg-custom-blue shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
          <div className="h-[150px] w-[150px] overflow-hidden rounded-md">
            <LazyLoadImage
              src={images1}
              alt="Heart Attack Therapy"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="mt-4 text-lg text-custom-cyan font-semibold font-poppins text-center">
            Heart Attack Therapies
          </h2>
          <div className="mt-3 overflow-y-auto text-sm text-gray-800 px-1 pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <ul className="space-y-1">
              <li>✔ Coronary Angiogram</li>
              <li>✔ Primary Angioplasty</li>
              <li>✔ Coronary Physiology Testing: FFR/iFR/RFR</li>
              <li>✔ Image Guided: Precision Angioplasty with OCT/IVUS image guidance</li>
              <li>✔ Complex Angioplasty</li>
              <li>✔ Left Main Angioplasty</li>
              <li>✔ CTO Revascularization</li>
              <li>✔ Multivessel Angioplasty</li>
              <li>✔ Bifurcation Angioplasty</li>
            </ul>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border p-4 min-h-[450px] w-full max-w-xs mx-auto rounded-2xl bg-custom-blue shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
          <div className="h-[150px] w-[150px] overflow-hidden rounded-md">
            <LazyLoadImage
              src={images2}
              alt="Heart Failure Therapy"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="mt-4 text-lg text-custom-cyan font-semibold font-poppins text-center">
            Heart Failure Therapies
          </h2>
          <div className="mt-3 overflow-y-auto text-sm text-gray-800 px-1 pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <ul className="space-y-1">
              <li>✔ Pacemaker Insertion</li>
              <li>✔ AICD Insertion</li>
              <li>✔ CRTD/CRTP Insertion</li>
              <li>✔ Mechanical Circulatory Support – IABP, Impella</li>
            </ul>
          </div>
        </div>

        {/* Card 3 */}
        <div className="border p-4 min-h-[450px] w-full max-w-xs mx-auto rounded-2xl bg-custom-blue shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
          <div className="h-[150px] w-[150px] overflow-hidden rounded-md">
            <LazyLoadImage
              src={images3}
              alt="Hypertension Advance Treatment"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="mt-4 text-lg text-custom-cyan font-semibold font-poppins text-center">
            Hypertension Advance Treatment
          </h2>
          <div className="mt-3 overflow-y-auto text-sm text-gray-800 px-1 pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <ul className="space-y-1">
              <li>✔ Renal Artery Stenting</li>
              <li>✔ Ambulatory BP</li>
              <li>✔ Renal Denervation</li>
            </ul>
          </div>
        </div>

        {/* Card 4 */}
        <div className="border p-4 min-h-[450px] w-full max-w-xs mx-auto rounded-2xl bg-custom-blue shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
          <div className="h-[150px] w-[150px] overflow-hidden rounded-md">
            <LazyLoadImage
              src={images4}
              alt="Structural Heart Disease"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="mt-4 text-lg text-custom-cyan font-semibold font-poppins text-center">
            Structural Heart Disease
          </h2>
          <div className="mt-3 overflow-y-auto text-sm text-gray-800 px-1 pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <ul className="space-y-1">
              <li>✔ Pulmonary Balloon Valvotomy</li>
              <li>✔ Tricuspid Balloon Valvotomy</li>
              <li>✔ Mitral Valvotomy/PTMC</li>
              <li>✔ Aortic Balloon Valvotomy</li>
              <li>✔ Device Closure: ASD, VSD, PDA</li>
              <li>✔ Coarctoplasty</li>
            </ul>
          </div>
        </div>

        {/* Card 5 */}
        <div className="border p-4 min-h-[450px] w-full max-w-xs mx-auto rounded-2xl bg-custom-blue shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
          <div className="h-[150px] w-[150px] overflow-hidden rounded-md">
            <LazyLoadImage
              src={images5}
              alt="Syncope"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="mt-4 text-lg text-custom-cyan font-semibold font-poppins text-center">
            Syncope
          </h2>
          <div className="mt-3 overflow-y-auto text-sm text-gray-800 px-1 pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <ul className="space-y-1">
              <li>✔ ELR</li>
              <li>✔ ILR</li>
              <li>✔ Tilt Table Testing</li>
              <li>✔ Pacemaker Devices</li>
            </ul>
          </div>
        </div>

        {/* Card 6 */}
        <div className="border p-4 min-h-[450px] w-full max-w-xs mx-auto rounded-2xl bg-custom-blue shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
          <div className="h-[150px] w-[150px] overflow-hidden rounded-md">
            <LazyLoadImage
              src={images6}
              alt="Arrhythmia"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="mt-4 text-lg text-custom-cyan font-semibold font-poppins text-center">
            Arrhythmia
          </h2>
          <div className="mt-3 overflow-y-auto text-sm text-gray-800 px-1 pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <ul className="space-y-1">
              <li>✔ EP Study</li>
              <li>✔ RF Ablation</li>
              <li>✔ Left Bundle Pacing</li>
              <li>✔ CRTP</li>
            </ul>
          </div>
        </div>

        {/* Card 7 */}
        <div className="border p-4 min-h-[450px] w-full max-w-xs mx-auto rounded-2xl bg-custom-blue shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
          <div className="h-[150px] w-[150px] overflow-hidden rounded-md">
            <LazyLoadImage
              src={images7}
              alt="Sudden Cardiac Death Prevention"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="mt-4 text-lg text-custom-cyan font-semibold font-poppins text-center">
            Sudden Cardiac Death Prevention
          </h2>
          <div className="mt-3 overflow-y-auto text-sm text-gray-800 px-1 pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <ul className="space-y-1">
              <li>✔ ICD Therapy</li>
              <li>✔ CRT Therapy</li>
              <li>✔ Anti-Tachycardia Pacing (ATP)</li>
              <li>✔ Genetic Testing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
