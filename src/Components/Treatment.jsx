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
    <div className="">
      <div>
        <h1 className="text-center text-5xl font-bold text-blue-500 mt-6">
          Treatment
        </h1>
        <div className="grid-col-4 flex gap-12 mt-8  p-4 ">
          <div>
            <img src={images1} alt="image1" />
            <h1 className="text-2xl font-bold">Heart attack therapies</h1>
            <ul className="text-lg font-semibold">
              <li>• Angioplasty </li>
              <li>•Image Guided Therapy</li>
              <li>•OCT IVUS</li>
              <li>•Left Main PCI</li>
              <li>•CTO</li>
              <li>• BRS/ Cutting Balloon/FFR</li>
            </ul>
          </div>

          <div>
            <img src={images2} alt="image2" />
            <h1 className="text-2xl font-bold">Heart Failure Therapies</h1>
            <ul className="text-lg font-semibold">
              <li>• Pacemaker/Micra </li>
              <li>•ICD</li>
              <li>•CRT</li>
              <li>•ECHMO</li>
              <li>•LVAD</li>
              <li>• Impella Pump</li>
            </ul>
          </div>

          <div>
            <img src={images3} alt="image3" />
            <h1 className="text-2xl font-bold">Structural Heart Disease</h1>
            <ul className="text-lg font-semibold">
              <li>• Valve </li>
              <li>• Mitraclip</li>
              <li>• Tricuspid Valve</li>
              <li>• Pulmonary Valve</li>
              <li>• Cerebral protection device</li>
              <li>• Closure devices</li>
              <li>• LVAD</li>
            </ul>
          </div>
          <div>
            <img src={images4} alt="image4" />
            <h1 className="text-2xl font-bold">Arrhythmia</h1>
            <ul className="text-lg font-semibold">
              <li>• EP Study </li>
              <li>• RF Ablation</li>
              <li>• Left Bundle Pacing</li>
              <li>• CRTP/ICD/Micra</li>
        
            </ul>
          </div>
        </div>

        <div className="grid-col-4 flex  gap-12 mt-8  p-4  ">
          <div>
            <img src={images5} alt="image5" />
            <h1 className="text-2xl font-bold">Syncope</h1>
            <ul className="text-lg font-semibold">
              <li>• ELR </li>
              <li>• TILT test</li>
              <li>• Pacemaker/ICD</li>
            
            </ul>
          </div>
          <div>
            <img src={images6} alt="image6" />
            <h1 className="text-2xl font-bold">Stroke</h1>
            <ul className="text-lg font-semibold">
              <li>• RF Ablation </li>
              <li>• LA appendage</li>
              <li>• Atrial Fibrillation-Therapy & Management</li>
              <li>• Carotid Angioplasty</li>
             
            </ul>
          </div>
          <div>
            <img src={images7} alt="image7" />
            <h1 className="text-2xl font-bold">Hypertension Advance </h1>
            <h1 className="text-2xl font-bold">Treatment & Diabetic Related Heart Problems </h1>

            <ul className="text-lg font-semibold">
             
            </ul>
          </div>
          <div>
            <img src={images8} alt="image8" />
            <h1 className="text-2xl font-bold">Aortic disease</h1>
            <ul className="text-lg font-semibold">
              <li>• Aortic Stenosis  </li>
              <li>• Aortic Regurgitation </li>
              <li>• Aortic Coarctation </li>
              <li>• Aneurysm</li>
              <li>• Dissection</li>
            
            </ul>
          </div>
        </div>
       
        </div>
        <div>
        <Specialities/>
      </div>
      </div>
     
    
  );
};

export default Treatment;
