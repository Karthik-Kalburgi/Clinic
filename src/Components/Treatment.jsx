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

const Treatment = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-5xl font-bold text-blue-500 mt-6">
        Treatment
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-8">
        {/* First Row */}
        <div className="text-center">
          <img src={images1} alt="Heart attack therapies" className="w-full h-auto mb-4" />
          <h2 className="text-2xl font-bold">Heart Attack Therapies</h2>
          <ul className="text-lg font-semibold mt-2">
            <li>• Angioplasty</li>
            <li>• Image Guided Therapy</li>
            <li>• OCT IVUS</li>
            <li>• Left Main PCI</li>
            <li>• CTO</li>
            <li>• BRS/ Cutting Balloon/ FFR</li>
          </ul>
        </div>

        <div className="text-center">
          <img src={images2} alt="Heart Failure Therapies" className="w-full h-auto mb-4" />
          <h2 className="text-2xl font-bold">Heart Failure Therapies</h2>
          <ul className="text-lg font-semibold mt-2">
            <li>• Pacemaker/Micra</li>
            <li>• ICD</li>
            <li>• CRT</li>
            <li>• ECHMO</li>
            <li>• LVAD</li>
            <li>• Impella Pump</li>
          </ul>
        </div>

        <div className="text-center">
          <img src={images3} alt="Structural Heart Disease" className="w-full h-auto mb-4" />
          <h2 className="text-2xl font-bold">Structural Heart Disease</h2>
          <ul className="text-lg font-semibold mt-2">
            <li>• Valve</li>
            <li>• Mitraclip</li>
            <li>• Tricuspid Valve</li>
            <li>• Pulmonary Valve</li>
            <li>• Cerebral protection device</li>
            <li>• Closure devices</li>
            <li>• LVAD</li>
          </ul>
        </div>

        <div className="text-center">
          <img src={images4} alt="Arrhythmia" className="w-full h-auto mb-4" />
          <h2 className="text-2xl font-bold">Arrhythmia</h2>
          <ul className="text-lg font-semibold mt-2">
            <li>• EP Study</li>
            <li>• RF Ablation</li>
            <li>• Left Bundle Pacing</li>
            <li>• CRTP/ICD/Micra</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-8">
        {/* Second Row */}
        <div className="text-center">
          <img src={images5} alt="Syncope" className="w-full h-auto mb-4" />
          <h2 className="text-2xl font-bold">Syncope</h2>
          <ul className="text-lg font-semibold mt-2">
            <li>• ELR</li>
            <li>• TILT test</li>
            <li>• Pacemaker/ICD</li>
          </ul>
        </div>

        <div className="text-center">
          <img src={images6} alt="Stroke" className="w-full h-auto mb-4" />
          <h2 className="text-2xl font-bold">Stroke</h2>
          <ul className="text-lg font-semibold mt-2">
            <li>• RF Ablation</li>
            <li>• LA appendage</li>
            <li>• Atrial Fibrillation-Therapy & Management</li>
            <li>• Carotid Angioplasty</li>
          </ul>
        </div>

        <div className="text-center">
          <img src={images7} alt="Hypertension and Diabetic Related Heart Problems" className="w-full h-auto mb-4" />
          <h2 className="text-2xl font-bold">Hypertension & Diabetic Related Heart Problems</h2>
          {/* No specific list here, you can add treatments if needed */}
        </div>

        <div className="text-center">
          <img src={images8} alt="Aortic Disease" className="w-full h-auto mb-4" />
          <h2 className="text-2xl font-bold">Aortic Disease</h2>
          <ul className="text-lg font-semibold mt-2">
            <li>• Aortic Stenosis</li>
            <li>• Aortic Regurgitation</li>
            <li>• Aortic Coarctation</li>
            <li>• Aneurysm</li>
            <li>• Dissection</li>
          </ul>
        </div>
      </div>

      {/* Specialities Section */}
      <div>
        <Specialities />
      </div>
    </div>
  );
};

export default Treatment;
