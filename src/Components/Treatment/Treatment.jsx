import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PacmanLoader from 'react-spinners/PacmanLoader';

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
    ],
  },
  {
    title: 'Arrhythmia',
    image: images6,
    points: [
      'EP Study',
      'RF Ablation',
      'CRTP',
    ],
  },
  {
    title: 'Sudden Cardiac Death Prevention',
    image: images7,
    points: [
      'ICD Therapy',
      'Genetic Testing',
    ],
  },
];

const slugify = (text) =>
  text.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-');

const Treatment = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 800); // Show spinner for 2 seconds
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <PacmanLoader color="#36d7b7" size={40} />
      </div>
    );
  }

  return (
    <div className="bg-white py-12 px-4 sm:px-10 lg:px-20">
      <Helmet>
        <title>Advanced Cardiac Treatments | Dr. Santosh V. Chikkodi</title>
        <meta
          name="description"
          content="Explore a range of specialized heart treatments by Dr. Santosh V. Chikkodi including angioplasty, pacemaker insertion, ICD therapy, and structural heart procedures in Bagalkot."
        />
        <meta
          name="keywords"
          content="heart treatments, angioplasty, pacemaker, ICD therapy, EP study, RF ablation, Dr. Santosh V. Chikkodi, cardiologist Bagalkot, heart failure treatment, hypertension treatment, structural heart disease"
        />
        <meta name="author" content="Dr. Santosh V. Chikkodi" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Treatment Options | Dr. Santosh V. Chikkodi - Cardiac Specialist" />
        <meta property="og:description" content="Browse life-saving treatment options including heart attack, heart failure, arrhythmia, and structural heart disease therapies by Dr. Chikkodi." />
        <meta property="og:image" content="https://drsantoshchikkodi.com/assets/treatment-banner.jpg" />
        <meta property="og:url" content="https://drsantoshchikkodi.com/treatment" />
        <link rel="canonical" href="https://drsantoshchikkodi.com/treatment" />
      </Helmet>

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
