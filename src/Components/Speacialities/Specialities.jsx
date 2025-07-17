import React from 'react';
import Specialitiespng from '../../Images/specialities.png'
import { Helmet } from 'react-helmet';

const Specialities = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8 py-8 bg-white relative ">
    <Helmet>
  <title>Cardiology Treatments & Specialities | Dr. Santosh V. Chikkodi</title>
  <meta 
    name="description" 
    content="Explore a wide range of cardiology treatments offered by Dr. Santosh V. Chikkodi including angioplasty, pacemaker implantation, TAVR, ASD/VSD closure, and more." 
  />
  <meta 
    name="keywords" 
    content="Cardiology specialities, angioplasty, pacemaker doctor Bagalkot, TAVR, balloon valvotomy, ICD implantation, structural heart interventions, best heart doctor in Karnataka" 
  />
  <meta name="author" content="Dr. Santosh V. Chikkodi" />
  <meta name="robots" content="index, follow" />

  <meta property="og:title" content="Dr. Santosh Chikkodi's Cardiology Treatments and Specialities" />
  <meta property="og:description" content="Get expert heart care in Bagalkot. View the complete list of procedures like Micra insertion, CRT, angioplasty, device closures, and more." />
  <meta property="og:image" content="https://your-domain.com/assets/specialities-og.jpg" />
  <meta property="og:url" content="https://your-domain.com/specialities" />
  <link rel="canonical" href="https://your-domain.com/specialities" />
</Helmet>

      <h1 className="text-center text-5xl font-bold text-gray-800 mb-12 mt-22">
        Specialities
      </h1>
      <div className='absolute'>
          <img src={Specialitiespng} alt='speacicliaties png' className='relative  w-[980px] left-[15%] -mt-24 ' />
        </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2   gap-12 px-12 py-20   custom-blue rounded-3xl shadow-lg bg-custom-blue">
        {/* First Column */}
        <div className="space-y-4  ">
          <ul className="text-lg font-medium text-custom-cyan list-disc  space-y-4 pl-6">
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
          <ul className="text-lg font-medium  text-custom-cyan list-disc  space-y-4 pl-6">
            <li > ASD</li>
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
