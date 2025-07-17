import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import images1 from '../../Images/Treatment/HeartAttackTherapies.jpg';
import images2 from '../../Images/Treatment/HeartFailureTherapies.jpg';
import images3 from '../../Images/Treatment/HypertensionAdvanceTreatment.jpg';
import images4 from '../../Images/Treatment/StructuralHeartDisease.jpg';
import images5 from '../../Images/Treatment/Syncope.jpg';
import images6 from '../../Images/Treatment/Arrhythmia.jpg';
import images7 from '../../Images/Treatment/SuddenCardiacDeathPrevention.jpg';

const treatmentOptions = [
  {
    title: 'Heart Attack Therapies',
    image: images1,
    points: [
      'Coronary Angiogram',
      'Primary Angioplasty',
      // 'Coronary Physiology Testing: FFR/iFR/RFR',
      // 'Image Guided: Precision Angioplasty with OCT/IVUS image guidance',
      'Complex Angioplasty',
      'Left Main Angioplasty',
      'CTO Revascularization',
      'Multivessel Angioplasty',
      'Bifurcation Angioplasty',
    ],
  },
  {
    title: 'Heart Failure Therapies',
    image: images2,
    points: [
      'Pacemaker Insertion',
      'AICD Insertion',
      // 'CRTD/CRTP Insertion',
      'Mechanical Circulatory Support – IABP, Impella',
    ],
  },
  {
    title: 'Hypertension Advance Treatment',
    image: images3,
    points: [
      'Renal Artery Stenting',
      'Ambulatory BP',
      'Renal Denervation',
    ],
  },
  {
    title: 'Structural Heart Disease',
    image: images4,
    points: [
      'Pulmonary Balloon Valvotomy',
      'Tricuspid Balloon Valvotomy',
      // 'Mitral Valvotomy/PTMC',
      'Aortic Balloon Valvotomy',
      'Device Closure: ASD, VSD, PDA',
      'Coarctoplasty',
    ],
  },
  {
    title: 'Syncope',
    image: images5,
    points: [
      'ELR',
      'ILR',
      'Tilt Table Testing',
      // 'Pacemaker Devices',
    ],
  },
  {
    title: 'Arrhythmia',
    image: images6,
    points: [
      'EP Study',
      'RF Ablation',
      // 'Left Bundle Pacing',
      'CRTP',
    ],
  },
  {
    title: 'Sudden Cardiac Death Prevention',
    image: images7,
    points: [
      'ICD Therapy',
      // 'CRT Therapy',
      // 'Anti-Tachycardia Pacing (ATP)',
      'Genetic Testing',
    ],
  },
];

const slugify = (text) =>
  text.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-');

const Treatment = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-10 lg:px-20">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-black font-poppins">
        Treatment Options
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center mt-10">
        {treatmentOptions.map((option, idx) => (
          <div
            key={idx}
            className="border p-4 min-h-[450px] w-full max-w-xs mx-auto rounded-2xl bg-custom-blue shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            <div className="h-[150px] w-[150px] mx-auto overflow-hidden rounded-md">
              <LazyLoadImage
                src={option.image}
                alt={option.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="mt-4 text-lg text-custom-cyan font-semibold font-poppins text-center">
              {option.title}
            </h2>
            <div className="mt-3 overflow-y-auto text-sm text-gray-800 px-1 pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
              <ul className="space-y-1">
                {option.points.map((point, i) => (
                  <li key={i}>
                    <Link
                      to={`/treatment-point/${slugify(point)}`}
                      className="hover:text-blue-700 transition-colors duration-200"
                    >
                      ✔ {point}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Treatment;
