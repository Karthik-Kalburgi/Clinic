import React from 'react';

const Specialities = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-white ">
      <h1 className="text-center text-5xl font-bold text-gray-800 mb-12 mt-22">
        Specialities
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12 px-6 py-12 custom-blue rounded-3xl shadow-lg">
        {/* First Column */}
        <div className="space-y-4">
          <ul className="text-lg font-medium text-custom-cyan list-disc pl-6">
            <li> Implantable Cardioverter Defibrillator</li>
            <li> Transesophageal Echocardiogram</li>
            <li> Permanent Pacemaker</li>
            <li> Balloon Mitral Valvotomy</li>
            <li> Arrhythmia Treatments</li>
            <li> TAVI</li>
            <li> Coronary Angiogram</li>
            <li> Primary Angioplasty</li>
            <li> Permanent Pacemaker</li>
            <li> Cardiac Resynchronization Therapy</li>
            <li> Micra Insertion</li>
            <li> IABP</li>
            <li> TAVI. PBMV & Structural Interventions</li>
          </ul>
        </div>

        {/* Second Column */}
        <div className="space-y-4">
          <ul className="text-lg font-medium text-custom-cyan list-disc pl-6">
            <li> ASD</li>
            <li> VSD</li>
            <li> PDA Device closures</li>
            <li> Endovascular interventions like Aneurysm Repair</li>
            <li> Angioplasty and /Stenting</li>
            <li> Right and Left Heart catheterization</li>
            <li> Transcatheter Aortic</li>
            <li> Valve Replacement (TAVR)</li>
            <li> Angioplasty</li>
            <li> Device Closure</li>
            <li> Endovascular Stent Grafting</li>
            <li> Carotid Stenting</li>
            <li> Peripheral Angiogram/ Angioplasty</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Specialities;
