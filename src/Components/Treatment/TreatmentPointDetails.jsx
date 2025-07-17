import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Helmet } from 'react-helmet';




const treatmentDetails = {
  'coronary-angiogram': (
    <>
      <p>
        A <strong>Coronary Angiogram</strong> is a diagnostic test that uses X-ray imaging to examine the heart’s blood vessels.
        It's commonly used to detect coronary artery disease.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Why is it Performed?</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>To check for blockages or narrowing of arteries</li>
        <li>To assess heart function after a heart attack</li>
        <li>To guide treatment such as angioplasty or bypass surgery</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Procedure</h2>
      <p>
        A thin catheter is inserted through the groin or wrist and guided to the coronary arteries. A contrast dye is then injected,
        and X-ray images are taken to identify blockages.
      </p>

      <LazyLoadImage 
      
      src="/Treatments/coronary-angiogram.jpg"  
        alt="Coronary Angiogram"
        className="my-6 w-[20%] h-[50%] rounded-md shadow"
      />
     
  

      <p>
        The entire procedure typically lasts 30 to 60 minutes and is generally safe. Mild discomfort may occur at the insertion site.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Recovery</h2>
      <p>
        After the angiogram, you’ll be observed for a few hours. Most patients can return home the same day, although strenuous activity
        should be avoided for 24–48 hours.
      </p>
    </>
    
  ),

  'primary-angioplasty': (
  <>
    <p> 
      <strong>Primary Angioplasty</strong>, also known as Percutaneous Coronary Intervention (PCI), is an emergency procedure
      performed to open blocked coronary arteries during a heart attack.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Why is it Performed?</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>To restore blood flow to the heart muscle during a heart attack</li>
      <li>To prevent permanent heart damage</li>
      <li>To reduce the risk of complications and improve survival rates</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">Procedure</h2>
    <p>
      The procedure involves inserting a catheter through the groin or wrist to reach the blocked artery. A balloon is inflated to
      open the blockage, and a stent is often placed to keep the artery open.
    </p>

    <LazyLoadImage 
      src="/Treatments/primary-angioplasty.jpg"
      alt="Primary Angioplasty"
      className="my-6 w-[20%] h-[50%] rounded-md shadow"
    />

    <p>
      Primary angioplasty is most effective when performed within the first 90 minutes of the onset of heart attack symptoms.
      Quick intervention can save heart muscle and lives.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Recovery</h2>
    <p>
      Most patients remain in the hospital for 1–3 days following the procedure. Light activities can be resumed within a few days,
      while full recovery may take about a week. Medications and lifestyle changes are essential for long-term heart health.
    </p>
  </>
),

// 'coronary-physiology-testing': (
//   <div className="space-y-4">
//     <p>
//       <strong>Coronary Physiology Testing</strong> involves advanced diagnostic techniques such as 
//       <strong> FFR (Fractional Flow Reserve)</strong>, <strong>iFR (Instantaneous Wave-Free Ratio)</strong>, 
//       and <strong> RFR (Resting Full-cycle Ratio)</strong> to assess the functional significance of coronary artery blockages.
//     </p>

//     <h2 className="text-xl font-semibold mt-6 mb-2">Why is it Performed?</h2>
//     <ul className="list-disc list-inside text-gray-700">
//       <li>To determine whether a coronary artery narrowing is causing significant reduction in blood flow</li>
//       <li>To guide decisions on stenting or medical therapy</li>
//       <li>To avoid unnecessary stenting when lesions are not functionally significant</li>
//     </ul>

//     <h2 className="text-xl font-semibold mt-6 mb-2">Testing Methods</h2>
//     <ul className="list-disc list-inside text-gray-700">
//       <li><strong>FFR:</strong> Measures pressure differences across a stenosis during hyperemia (increased blood flow)</li>
//       <li><strong>iFR:</strong> Measures resting pressure gradient without the need for medications like adenosine</li>
//       <li><strong>RFR:</strong> Evaluates the full cardiac cycle to identify ischemia at rest</li>
//     </ul>

//     <img
//       src="/Treatments/ffr-ifr-rfr.jpg"
//       alt="FFR / iFR / RFR Coronary Physiology Testing"
//       className="my-6 w-[20%] h-[50%] rounded-md shadow"
//     />

//     <p>
//       These tests provide real-time physiological data that help interventional cardiologists make precise, patient-specific treatment decisions.
//       They are especially valuable in intermediate coronary lesions, where visual angiography alone may not be sufficient.
//     </p>

//     <h2 className="text-xl font-semibold mt-6 mb-2">Benefits</h2>
//     <ul className="list-disc list-inside text-gray-700">
//       <li>Reduces unnecessary stent placement</li>
//       <li>Improves patient outcomes by targeting only flow-limiting lesions</li>
//       <li>Minimally invasive and safe</li>
//     </ul>
//   </div>
// ),

'image-guided-angioplasty-oct-ivus': (
  <>
    <p>
      <strong>Image-Guided Angioplasty</strong> using <strong>OCT (Optical Coherence Tomography)</strong> and <strong>IVUS (Intravascular Ultrasound)</strong>
      enhances precision in diagnosing and treating coronary artery disease. These advanced imaging techniques provide detailed views of the blood vessels from inside,
      allowing interventional cardiologists to optimize stent placement and outcomes.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Why is it Performed?</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>To visualize the artery walls in high detail during angioplasty</li>
      <li>To guide precise stent sizing and placement</li>
      <li>To evaluate plaque characteristics and artery remodeling</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">Imaging Techniques</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li><strong>OCT:</strong> Uses near-infrared light to provide high-resolution cross-sectional images of blood vessels</li>
      <li><strong>IVUS:</strong> Uses ultrasound waves to visualize the artery walls and the extent of plaque buildup</li>
    </ul>

    <LazyLoadImage 
      src="/Treatments/OCT-IVUS.jpg"
      alt="Image-Guided Angioplasty using OCT and IVUS"
      className="my-6 w-[20%] h-[50%] rounded-md shadow"
    />

    <p>
      These imaging modalities are performed before, during, and after angioplasty to assess lesion severity, guide intervention, and confirm optimal stent deployment.
      This approach reduces complications and improves long-term outcomes.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Benefits</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>Improves accuracy of stent placement</li>
      <li>Reduces the risk of restenosis or stent thrombosis</li>
      <li>Enhances patient safety with real-time vessel visualization</li>
    </ul>
  </>
),
'complex-angioplasty': (
  <>
    <p>
      <strong>Complex Angioplasty</strong> refers to advanced interventional procedures aimed at treating challenging coronary artery blockages, such as chronic total occlusions (CTOs), bifurcation lesions, or highly calcified arteries.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Why is it Performed?</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>To treat completely blocked arteries (CTOs) that are often long-standing</li>
      <li>To manage bifurcation lesions where a blockage affects the branch points of arteries</li>
      <li>To open highly calcified or tortuous arteries that may not respond to standard angioplasty</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">Procedure</h2>
    <p>
      Complex angioplasty requires advanced tools such as specialized guidewires, microcatheters, and devices like rotational atherectomy (rotablation)
      or laser angioplasty to modify plaque before stent placement. Imaging guidance like IVUS or OCT is often used to improve accuracy.
    </p>

    <LazyLoadImage 
      src="/Treatments/Complex-Angioplasty.jpg"
      alt="Complex Angioplasty Procedure"
      className="my-6 w-[20%] h-[50%] rounded-md shadow"
    />

    <p>
      The procedure may take longer than standard angioplasty and requires a higher level of operator expertise. It is usually performed in specialized centers.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Recovery</h2>
    <p>
      Patients may stay in the hospital overnight or longer depending on the complexity. Post-procedure medications, lifestyle changes, and follow-up
      are essential for long-term success.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Benefits</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>Restores blood flow in severely diseased arteries</li>
      <li>Reduces symptoms like angina and improves quality of life</li>
      <li>Avoids or delays the need for open-heart surgery in some cases</li>
    </ul>
  </>
),
'left-main-angioplasty': (
  <>
    <p>
      <strong>Left Main Angioplasty</strong> is a specialized procedure used to treat blockages in the left main coronary artery — the vessel that supplies a large portion of blood to the heart muscle. Blockages in this artery are considered high-risk and often require precise intervention.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Why is it Performed?</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>To relieve severe blockages in the left main artery</li>
      <li>To restore blood supply to critical regions of the heart</li>
      <li>As an alternative to coronary artery bypass grafting (CABG) in selected patients</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">Procedure</h2>
    <p>
      A catheter is inserted through the wrist or groin and guided to the left main artery. The blockage is crossed with a guidewire, and a balloon may be used to open the narrowing. A stent is then deployed precisely under imaging guidance (like IVUS or OCT) to restore proper blood flow.
    </p>

    <LazyLoadImage 
      src="/Treatments/left-main-angioplasty.jpg"
      alt="Left Main Angioplasty"
      className="my-6 w-[20%] h-[50%] rounded-md shadow"
    />

    <p>
      Due to the high-risk location, the procedure is usually performed by experienced interventional cardiologists in a well-equipped cath lab, often with surgical backup available.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Recovery</h2>
    <p>
      Hospital stay may range from 1 to 3 days depending on the patient's condition. Dual antiplatelet therapy and lifestyle changes are essential post-procedure. Regular follow-up is required to monitor stent function and heart health.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Benefits</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>Minimally invasive alternative to open-heart surgery</li>
      <li>Restores blood flow to a major portion of the heart</li>
      <li>Reduces symptoms like chest pain and improves survival in selected cases</li>
    </ul>
  </>
),

'cto-revascularization': (
  <>
    <p>
      <strong>CTO Revascularization</strong> is an advanced procedure to open a <strong>Chronic Total Occlusion</strong> — a complete blockage of a coronary artery that has been present for more than 3 months. These blockages are typically difficult to treat and require specialized techniques and tools.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Why is it Performed?</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>To relieve symptoms such as chest pain (angina) and shortness of breath</li>
      <li>To restore blood flow to heart muscle areas that are at risk</li>
      <li>To improve quality of life and heart function</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">Procedure</h2>
    <p>
      CTO revascularization is typically performed using a technique called <strong>Percutaneous Coronary Intervention (PCI)</strong> with advanced guidewires, microcatheters, and sometimes retrograde techniques (approaching the blockage from a collateral vessel).
      Specialized imaging like IVUS or OCT may be used to guide the procedure.
    </p>

    <LazyLoadImage 
      src="/Treatments/cto-revascularization.jpg"
      alt="CTO Revascularization"
      className="my-6 w-[20%] h-[50%] rounded-md shadow"
    />

    <p>
      The procedure is more complex and time-consuming than standard angioplasty, often lasting several hours. It is performed by experienced CTO specialists in high-volume centers.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Recovery</h2>
    <p>
      Most patients are monitored overnight and discharged the next day. Recovery time is generally quick, though follow-up is critical. Medications, cardiac rehab, and lifestyle changes are key to long-term success.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Benefits</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>Improves symptoms and exercise capacity</li>
      <li>Reduces the need for open-heart surgery in selected patients</li>
      <li>Can enhance heart function in patients with reduced blood supply</li>
    </ul>
  </>
),
'multivessel-angioplasty': (
  <>
    <p>
      <strong>Multivessel Angioplasty</strong> is a procedure performed to treat blockages in more than one coronary artery. It’s typically used in patients with extensive coronary artery disease and can be done in a single session or staged over multiple procedures.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Why is it Performed?</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>To relieve angina (chest pain) caused by multiple blocked arteries</li>
      <li>To prevent heart attacks by restoring blood flow</li>
      <li>As an alternative to coronary bypass surgery in selected patients</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">Procedure</h2>
    <p>
      During multivessel angioplasty, a catheter is inserted through the wrist or groin and guided to each affected artery. Blockages are opened using balloon angioplasty, and stents are placed to keep the arteries open. The procedure may be done in a single session or staged based on the patient's condition.
    </p>

    <LazyLoadImage 
      src="/Treatments/multivessel-angioplasty.jpg"
      alt="Multivessel Angioplasty"
      className="my-6 w-[20%] h-[50%] rounded-md shadow"
    />

    <p>
      The decision to perform multivessel angioplasty vs. bypass surgery is made based on factors such as the location and complexity of blockages, patient risk profile, and overall heart function.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Recovery</h2>
    <p>
      Hospital stay typically ranges from 1–2 days. Patients are advised to avoid strenuous activities for about a week. Medications and lifestyle changes are essential to prevent re-narrowing of arteries and future cardiac events.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Benefits</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>Minimally invasive alternative to open-heart surgery</li>
      <li>Improves blood supply to multiple areas of the heart</li>
      <li>Reduces symptoms and improves quality of life</li>
    </ul>
  </>
),

'bifurcation-angioplasty': (
  <>
    <p>
      <strong>Bifurcation Angioplasty</strong> is a specialized procedure used to treat blockages that occur at a branch point in a coronary artery—where one artery splits into two. This type of lesion is more complex due to the involvement of both the main and side branches.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Why is it Performed?</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>To restore proper blood flow at the site of artery branching</li>
      <li>To relieve chest pain and other symptoms of coronary artery disease</li>
      <li>To prevent heart muscle damage due to reduced perfusion</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">Procedure</h2>
    <p>
      Bifurcation angioplasty may involve using specialized techniques such as:
    </p>
    <ul className="list-disc list-inside text-gray-700">
      <li><strong>Provisional Stenting:</strong> Stenting the main branch first, then treating the side branch if needed</li>
      <li><strong>Double Stenting:</strong> Placing stents in both branches using techniques like culotte, crush, or TAP</li>
    </ul>
    <p>
      The choice of technique depends on the anatomy and severity of the blockage.
    </p>

    <LazyLoadImage 
      src="/Treatments/bifurcation-angioplasty.jpg"
      alt="Bifurcation Angioplasty"
      className="my-6 w-[20%] h-[50%] rounded-md shadow"
    />

    <h2 className="text-xl font-semibold mt-6 mb-2">Recovery</h2>
    <p>
      Recovery is similar to standard angioplasty. Patients usually return home within 24–48 hours. Medications, cardiac rehabilitation, and lifestyle modifications play an essential role in long-term success.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Benefits</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>Restores blood flow in complex arterial anatomy</li>
      <li>Reduces angina and improves exercise capacity</li>
      <li>Minimally invasive approach compared to surgery</li>
    </ul>
  </>
),
'pacemaker-insertion': (
  <>
    <p>
      A <strong>Pacemaker Insertion</strong> is a medical procedure used to implant a small electronic device that helps regulate abnormal heart rhythms (arrhythmias).
      The pacemaker sends electrical impulses to prompt the heart to beat at a normal rate.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Why is it Performed?</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>To treat bradycardia (slow heart rate)</li>
      <li>To prevent fainting spells or fatigue caused by irregular heartbeats</li>
      <li>To support heart rhythm in people with heart block or atrial fibrillation</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">Procedure</h2>
    <p>
      The procedure is usually done under local anesthesia. A small incision is made near the shoulder, and leads (wires) are guided through a vein into the heart.
      The pacemaker device is implanted under the skin and connected to the leads.
    </p>

    <LazyLoadImage 
      src="/Treatments/pacemaker-insertion.jpg"
      alt="Pacemaker Insertion"
      className="my-6 w-[20%] h-[50%] rounded-md shadow"
    />

    <p>
      The procedure typically takes 1 to 2 hours. Most patients can go home the same day or after an overnight stay, depending on their condition.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Recovery</h2>
    <p>
      Patients are advised to avoid strenuous activity and not lift the arm on the side of the implant above shoulder level for a few weeks. Follow-up visits
      are necessary to monitor the pacemaker’s function and battery life.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Benefits</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>Prevents dangerously slow heart rates</li>
      <li>Improves symptoms like fatigue and dizziness</li>
      <li>Supports a better quality of life and normal activity levels</li>
    </ul>
  </>
),

'aicd-insertion': (
  <>
    <p>
      <strong>AICD Insertion</strong> refers to the placement of an <strong>Automated Implantable Cardioverter Defibrillator (AICD)</strong>, a device used to monitor and correct life-threatening heart rhythm disorders (arrhythmias), particularly ventricular tachycardia or ventricular fibrillation.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Why is it Performed?</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>To prevent sudden cardiac death in patients with a history of life-threatening arrhythmias</li>
      <li>For individuals at high risk of developing ventricular arrhythmias</li>
      <li>As a part of secondary prevention after surviving cardiac arrest</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">Procedure</h2>
    <p>
      The AICD is implanted under the skin, usually just below the collarbone. One or more leads (thin wires) are inserted through a vein and positioned in the heart chambers. The device continuously monitors the heart rhythm and delivers an electric shock if a dangerous arrhythmia is detected.
    </p>

    <LazyLoadImage 
      src="/Treatments/aicd-insertion.jpg"
      alt="AICD Insertion"
      className="my-6 w-[20%] h-[50%] rounded-md shadow"
    />

    <p>
      The procedure is performed under local anesthesia and usually takes 1–2 hours. Most patients can return home within 24–48 hours.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Recovery</h2>
    <p>
      Patients are advised to avoid lifting heavy objects and raising the arm on the implantation side for several weeks. Regular follow-ups are required to ensure the device is functioning correctly and the battery life is monitored.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Benefits</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>Protects against sudden cardiac death</li>
      <li>Continuously monitors heart rhythm</li>
      <li>Improves survival in high-risk cardiac patients</li>
    </ul>
  </>
),

'crtp-insertion': (
  <>
    <p>
      <strong>CRTD/CRTP Insertion</strong> involves placing a <strong>Cardiac Resynchronization Therapy Device (CRTD)</strong> or <strong>Cardiac Resynchronization Therapy Pacemaker (CRTP)</strong> to improve heart function in patients with heart failure and electrical conduction abnormalities.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Why is it Performed?</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>To synchronize the contractions of the heart's ventricles and improve pumping efficiency</li>
      <li>To reduce symptoms of heart failure such as fatigue and shortness of breath</li>
      <li>To decrease hospitalizations and improve survival rates in select patients</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">Procedure</h2>
    <p>
      Leads are placed in the right atrium, right ventricle, and a coronary vein to pace both ventricles simultaneously, restoring coordinated contraction.
      The device is implanted under the skin near the collarbone.
    </p>

    <LazyLoadImage
      src="/Treatments/crtp-insertion.jpg"
      alt="CRTD/CRTP Device Insertion"
      className="my-6 w-[20%] h-[50%] rounded-md shadow"
    />

    <h2 className="text-xl font-semibold mt-6 mb-2">Recovery</h2>
    <p>
      Patients usually stay in the hospital overnight and are advised to avoid strenuous activity for several weeks. Regular follow-ups are essential to optimize device settings.
    </p>
  </>
),


'mechanical-circulatory-support-iabp-impella': (
  <>
    <p>
      <strong>Mechanical Circulatory Support</strong> devices like the <strong>Intra-Aortic Balloon Pump (IABP)</strong> and <strong>Impella</strong> help support heart function in patients with severe heart failure or cardiogenic shock.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Why is it Used?</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>To improve blood flow and oxygen delivery to vital organs when the heart cannot pump effectively</li>
      <li>As a bridge to recovery, more definitive therapy, or heart transplantation</li>
      <li>To stabilize patients during high-risk cardiac procedures</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">Types of Devices</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li><strong>IABP:</strong> A balloon inserted into the aorta inflates and deflates in sync with the heartbeat to reduce cardiac workload and improve coronary perfusion.</li>
      <li><strong>Impella:</strong> A small catheter-mounted pump inserted into the left ventricle to actively pump blood into the aorta, providing direct mechanical support.</li>
    </ul>

    <LazyLoadImage
      src="/Treatments/mechanical-circulatory-support.jpg"
      alt="Mechanical Circulatory Support Devices: IABP and Impella"
      className="my-6 w-[20%] h-[50%] rounded-md shadow"
    />

    <h2 className="text-xl font-semibold mt-6 mb-2">Recovery and Monitoring</h2>
    <p>
      Patients require close monitoring in an intensive care setting while on these devices. The duration of support depends on the underlying condition and response to therapy.
    </p>
  </>
),

'renal-artery-stenting': (
  <>
    <p>
      <strong>Renal Artery Stenting</strong> is a minimally invasive procedure used to treat narrowing (stenosis) of the arteries that supply the kidneys. This condition can lead to hypertension and reduced kidney function.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Why is it Performed?</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>To improve blood flow to the kidneys</li>
      <li>To control high blood pressure caused by renal artery stenosis</li>
      <li>To preserve kidney function and prevent kidney failure</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">Procedure</h2>
    <p>
      A catheter is inserted through the groin and guided to the renal artery. A balloon is inflated to open the narrowed area, and a stent (a small metal mesh tube) is placed to keep the artery open.
    </p>

    <LazyLoadImage
      src="/Treatments/renal-artery-stenting.jpg"
      alt="Renal Artery Stenting"
      className="my-6 w-[20%] h-[50%] rounded-md shadow"
    />

    <h2 className="text-xl font-semibold mt-6 mb-2">Recovery</h2>
    <p>
      Most patients go home the same or next day. Blood pressure and kidney function are monitored closely. Lifestyle changes and medications are often recommended for long-term success.
    </p>
  </>
),

'ambulatory-bp': (
  <>
    <p>
      <strong>Ambulatory Blood Pressure Monitoring (ABPM)</strong> is a method of measuring blood pressure continuously over 24 hours while the patient goes about their normal daily activities and sleep.
      It provides a more accurate representation of a person’s blood pressure than a single reading at a doctor’s office.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Why is it Done?</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>To confirm the diagnosis of hypertension</li>
      <li>To detect white coat or masked hypertension</li>
      <li>To evaluate the effectiveness of blood pressure medications</li>
      <li>To assess nocturnal blood pressure patterns</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">Procedure</h2>
    <p>
      A small, portable blood pressure cuff is worn on the upper arm and connected to a device that records readings at regular intervals throughout the day and night. 
      The patient is advised to follow their usual routine but avoid getting the monitor wet.
    </p>

    <LazyLoadImage
      src="/Treatments/ambulatory-bp.jpg"
      alt="Ambulatory Blood Pressure Monitoring"
      className="my-6 w-[20%] h-[50%] rounded-md shadow"
    />

    <h2 className="text-xl font-semibold mt-6 mb-2">Benefits</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>Offers more reliable and comprehensive BP data</li>
      <li>Helps tailor treatment strategies based on actual blood pressure trends</li>
      <li>Improves diagnosis and management of hypertension</li>
    </ul>
  </>
),

'renal-denervation': (
  <>
    <p>
      <strong>Renal Denervation</strong> is a minimally invasive procedure used to treat <strong>resistant hypertension</strong>—high blood pressure that does not respond adequately to lifestyle changes and medications.
      It works by disrupting the overactive sympathetic nerves in the walls of the renal arteries, which play a key role in blood pressure regulation.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Why is it Performed?</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>To manage uncontrolled high blood pressure</li>
      <li>To reduce cardiovascular risks associated with hypertension</li>
      <li>For patients who do not tolerate or respond well to multiple antihypertensive medications</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">Procedure</h2>
    <p>
      The procedure involves threading a catheter through the femoral artery to the renal arteries. Radiofrequency or ultrasound energy is then delivered to ablate (disrupt) the sympathetic nerves around the arteries.
    </p>

    <LazyLoadImage
      src="/Treatments/renal-denervation.jpg"
      alt="Renal Denervation Procedure"
      className="my-6 w-[20%] h-[50%] rounded-md shadow"
    />

    <h2 className="text-xl font-semibold mt-6 mb-2">Benefits</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>Can lead to significant and sustained blood pressure reduction</li>
      <li>Minimally invasive with low risk of complications</li>
      <li>Potential to reduce long-term need for multiple medications</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">Recovery</h2>
    <p>
      Recovery is usually quick, with most patients going home the same day or the next. Mild soreness or bruising at the catheter insertion site may occur. Blood pressure is monitored regularly following the procedure.
    </p>
  </>
),


'pulmonary-balloon-valvotomy': (
  <>
    <p>
      <strong>Pulmonary Balloon Valvotomy</strong> is a minimally invasive procedure used to treat pulmonary valve stenosis — a condition where the valve between the right ventricle and pulmonary artery is narrowed.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Why is it Performed?</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>To improve blood flow from the heart to the lungs</li>
      <li>To relieve symptoms like breathlessness and fatigue</li>
      <li>To prevent right heart enlargement and dysfunction</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">Procedure</h2>
    <p>
      A balloon catheter is inserted through a vein and guided to the pulmonary valve. The balloon is inflated to stretch open the narrowed valve.
    </p>

    <LazyLoadImage
      src="/Treatments/pulmonary-valvotomy.jpg"
      alt="Pulmonary Balloon Valvotomy"
      className="my-6 w-[20%] h-[50%] rounded-md shadow"
    />
  </>
),


'tricuspid-balloon-valvotomy': (
  <>
    <p>
      <strong>Tricuspid Balloon Valvotomy</strong> is a catheter-based procedure to relieve tricuspid valve stenosis — narrowing of the valve between the right atrium and right ventricle.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Indications</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>Severe tricuspid stenosis with symptoms</li>
      <li>Associated right heart failure</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">Procedure</h2>
    <p>
      A catheter with a balloon is inserted and positioned across the tricuspid valve. Inflation of the balloon opens the narrowed valve, improving blood flow.
    </p>

    <LazyLoadImage
      src="/Treatments/tricuspid-valvotomy.jpg"
      alt="Tricuspid Balloon Valvotomy"
      className="my-6 w-[20%] h-[50%] rounded-md shadow"
    />
  </>
),

'mitral-valvotomy-ptmc': (
  <>
    <p>
      <strong>PTMC (Percutaneous Transvenous Mitral Commissurotomy)</strong> is a non-surgical procedure used to treat severe mitral stenosis, usually due to rheumatic heart disease.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">When is it Needed?</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>Significant mitral valve narrowing with symptoms</li>
      <li>To delay or avoid mitral valve replacement surgery</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">Procedure</h2>
    <p>
      A balloon catheter is threaded through a vein into the heart and across the mitral valve. The balloon is inflated to split the fused valve leaflets.
    </p>

    <LazyLoadImage
      src="/Treatments/ptmc.jpg"
      alt="Mitral Valvotomy / PTMC"
      className="my-6 w-[20%] h-[50%] rounded-md shadow"
    />
  </>
),

'aortic-balloon-valvotomy': (
  <>
    <p>
      <strong>Aortic Balloon Valvotomy</strong> is used to treat aortic valve stenosis in select patients, especially those who are not immediate candidates for surgery.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Why is it Done?</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>To relieve severe aortic stenosis symptoms</li>
      <li>As a bridge to surgical or transcatheter valve replacement</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">Procedure</h2>
    <p>
      A catheter is inserted into the artery and guided to the aortic valve. A balloon is inflated to open the narrowed valve.
    </p>

    <LazyLoadImage
      src="/Treatments/aortic-valvotomy.jpg"
      alt="Aortic Balloon Valvotomy"
      className="my-6 w-[20%] h-[50%] rounded-md shadow"
    />
  </>
),

'device-closure-asd-vsd-pda': (
  <>
    <p>
      <strong>Device Closure</strong> refers to a minimally invasive technique used to correct congenital heart defects such as <strong>ASD (Atrial Septal Defect)</strong>, <strong>VSD (Ventricular Septal Defect)</strong>, and <strong>PDA (Patent Ductus Arteriosus)</strong>.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Why is it Performed?</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>To prevent heart failure, arrhythmias, or pulmonary hypertension</li>
      <li>To close abnormal openings without open-heart surgery</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">Procedure</h2>
    <p>
      A device is delivered to the heart via a catheter and positioned to close the defect. The body tissue grows over it in time.
    </p>

    <LazyLoadImage
      src="/Treatments/device-closure.jpg"
      alt="Device Closure ASD VSD PDA"
      className="my-6 w-[20%] h-[50%] rounded-md shadow"
    />
  </>
),


'coarctoplasty': (
  <>
    <p>
      <strong>Coarctoplasty</strong> is a catheter-based procedure to correct coarctation of the aorta — a congenital narrowing of the major artery that carries blood from the heart to the body.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">When is it Needed?</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>When there's a significant pressure gradient across the narrowing</li>
      <li>In children or adults with hypertension due to coarctation</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">Procedure</h2>
    <p>
      A balloon is inflated at the site of narrowing. In some cases, a stent is placed to keep the aorta open and ensure smooth blood flow.
    </p>

    <LazyLoadImage
      src="/Treatments/coarctoplasty.jpg"
      alt="Coarctoplasty"
      className="my-6 w-[20%] h-[50%] rounded-md shadow"
    />
  </>
),


'elr': (
  <>
    <p>
      <strong>Electrolyte Replacement Therapy (ELR)</strong> is a medical treatment used to correct imbalances in the body's electrolytes, such as sodium, potassium, calcium, and magnesium.
      These imbalances can occur due to various conditions like dehydration, kidney disease, or certain medications.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Why is it Performed?</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>To restore normal electrolyte levels in the body</li>
      <li>To prevent complications like arrhythmias, muscle weakness, or seizures</li>
      <li>To support proper cellular function and fluid balance</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">Procedure</h2>
    <p>
      ELR involves the administration of electrolyte solutions orally or intravenously, depending on the severity of the imbalance.
      The specific composition and dosage are tailored to the patient's needs.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Recovery</h2>
    <p>
      Monitoring of electrolyte levels is essential to ensure they return to normal ranges.
      Adjustments to diet or medications may be recommended to maintain balance.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Benefits</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>Restores electrolyte balance</li>
      <li>Prevents serious complications</li>
      <li>Supports overall health and well-being</li>
    </ul>
    <LazyLoadImage
      src="/Treatments/elr.jpg"
      alt="Coarctoplasty"
      className="my-6 w-[20%] h-[50%] rounded-md shadow"
    />
  </>
),


'ilr': (
  <>
    <p>
      <strong>Implantable Loop Recorder (ILR)</strong> is a small device implanted under the skin to continuously monitor the heart's rhythm.
      It's particularly useful for detecting infrequent or unexplained arrhythmias.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Why is it Performed?</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>To diagnose unexplained syncope or dizziness</li>
      <li>To detect intermittent arrhythmias not captured by standard ECGs</li>
      <li>To monitor patients with cryptogenic stroke for atrial fibrillation</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">Procedure</h2>
    <p>
      The ILR is implanted under the skin, typically on the left side of the chest, using local anesthesia.
      It records the heart's electrical activity and can store data for later analysis.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Recovery</h2>
    <p>
      The procedure is minimally invasive, with most patients able to resume normal activities within a few days.
      Regular follow-up is necessary to review recorded data.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Benefits</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>Provides continuous heart rhythm monitoring</li>
      <li>Helps diagnose elusive arrhythmias</li>
      <li>Assists in guiding treatment decisions</li>
    </ul>
    <LazyLoadImage
      src="/Treatments/ilr.jpg"
      alt="Coarctoplasty"
      className="my-6 w-[20%] h-[50%] rounded-md shadow"
    />
  </>
),




'tilt-table-testing': (
  <>
    <p>
      <strong>Tilt Table Testing</strong> is a diagnostic procedure used to evaluate the cause of unexplained fainting (syncope).
      It assesses how the body responds to changes in position and helps identify autonomic nervous system disorders.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Why is it Performed?</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>To diagnose the cause of unexplained syncope</li>
      <li>To evaluate autonomic nervous system function</li>
      <li>To assess the effectiveness of treatments for syncope</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">Procedure</h2>
    <p>
      The patient is strapped to a table that tilts to different angles while monitoring heart rate and blood pressure.
      The test may include the administration of medications to provoke a response.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Recovery</h2>
    <p>
      Most patients can resume normal activities immediately after the test.
      Some may experience dizziness or nausea during the procedure.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Benefits</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>Helps identify the cause of fainting episodes</li>
      <li>Assists in tailoring treatment plans</li>
      <li>Provides valuable information for managing syncope</li>
    </ul>
    <LazyLoadImage
      src="/Treatments/tilt-table-testing.jpg"
      alt="Coarctoplasty"
      className="my-6 w-[20%] h-[50%] rounded-md shadow"
    />
  </>
),

'ep-study': (
  <>
    <p>
      <strong>Electrophysiology (EP) Study</strong> is a diagnostic procedure used to evaluate the electrical activity of the heart and identify abnormal heart rhythms (arrhythmias).
      It involves inserting catheters through blood vessels to the heart to map electrical pathways.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Why is it Performed?</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>To diagnose the cause of unexplained palpitations or fainting</li>
      <li>To assess the risk of arrhythmias in patients with structural heart disease</li>
      <li>To guide treatment decisions for arrhythmias</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">Procedure</h2>
    <p>
      Under local anesthesia and sedation, catheters are inserted into blood vessels and guided to the heart.
      Electrical signals are recorded, and pacing maneuvers are performed to provoke arrhythmias for diagnosis.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Recovery</h2>
    <p>
      Patients are monitored in the hospital for a few hours to ensure stability.
      Most can resume normal activities within a few days, depending on the procedure outcome.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Benefits</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>Accurate diagnosis of arrhythmias</li>
      <li>Guides treatment decisions, including the need for ablation or device therapy</li>
      <li>Helps assess the risk of sudden cardiac death</li>
    </ul>
    <LazyLoadImage
      src="/Treatments/ep-study.jpg"
      alt="Coarctoplasty"
      className="my-6 w-[20%] h-[50%] rounded-md shadow"
    />
  </>
),


'rf-ablation': (
  <>
    <p>
      <strong>Radiofrequency (RF) Ablation</strong> is a minimally invasive procedure used to treat certain types of arrhythmias by destroying small areas of heart tissue causing abnormal electrical signals.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Why is it Performed?</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>To treat arrhythmias that are resistant to medication</li>
      <li>To reduce the risk of stroke in patients with atrial fibrillation</li>
      <li>To improve quality of life by eliminating symptoms</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">Procedure</h2>
    <p>
      Under local anesthesia and sedation, catheters are inserted into blood vessels and guided to the heart.
      RF energy is delivered through the catheter to destroy the targeted heart tissue causing the arrhythmia.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Recovery</h2>
    <p>
      Patients are monitored in the hospital for a few hours to ensure stability.
      Most can resume normal activities within a few days, depending on the procedure outcome.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Benefits</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>High success rate in treating certain arrhythmias</li>
      <li>Reduces or eliminates the need for long-term medication</li>
      <li>Improves quality of life by eliminating symptoms</li>
    </ul>
    <LazyLoadImage
      src="/Treatments/rf-ablation.jpg"
      alt="Coarctoplasty"
      className="my-6 w-[20%] h-[50%] rounded-md shadow"
    />
  </>
),


'left-bundle-branch-pacing': (
  <>
    <p>
      <strong>Left Bundle Branch Pacing (LBBP)</strong> is a novel pacing technique that targets the left bundle branch to synchronize the heart's contractions, improving cardiac function in patients with heart failure.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Why is it Performed?</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>To improve heart function in patients with heart failure and conduction abnormalities</li>
      <li>To provide an alternative to traditional biventricular pacing</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">Procedure</h2>
    <p>
      Under local anesthesia and sedation, a catheter is inserted into a vein and advanced to the heart.
      The left bundle branch is targeted for pacing, aiming to synchronize the heart's contractions.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Recovery</h2>
    <p>
      Patients are monitored in the hospital for a few hours to ensure stability.
      Most can resume normal activities within a few days, depending on the procedure outcome.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Benefits</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>Improves cardiac function in heart failure patients</li>
      <li>Provides an alternative to traditional pacing techniques</li>
      <li>May reduce the need for biventricular pacing</li>
    </ul>
    <LazyLoadImage
      src="/Treatments/left-bundle.jpg"
      alt="Coarctoplasty"
      className="my-6 w-[20%] h-[50%] rounded-md shadow"
    />
  </>
),



'icd-therapy': (
  <>
    <p>
      <strong>ICD Therapy</strong> involves the use of an Implantable Cardioverter-Defibrillator to monitor heart rhythms and deliver life-saving shocks or pacing if dangerous arrhythmias are detected.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Why is it Performed?</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>To prevent sudden cardiac death in high-risk individuals</li>
      <li>To treat life-threatening arrhythmias like ventricular tachycardia and fibrillation</li>
      <li>To monitor and manage heart rhythms automatically</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">Procedure</h2>
    <p>
      A small device is implanted under the skin, typically near the collarbone. Leads are guided into the heart via a vein to deliver therapy when abnormal rhythms are detected.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Recovery</h2>
    <p>
      Patients usually stay overnight for monitoring. Most can return to light activities within a few days, avoiding heavy lifting for several weeks.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Benefits</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>Reduces the risk of sudden cardiac death</li>
      <li>Continuously monitors heart rhythm</li>
      <li>Delivers immediate therapy when dangerous arrhythmias occur</li>
    </ul>
    <LazyLoadImage
      src="/Treatments/icd-therapy.jpg"
      alt="Coarctoplasty"
      className="my-6 w-[20%] h-[50%] rounded-md shadow"
    />
  </>
),

'anti-tachycardia-pacing': (
  <>
    <p>
      <strong>Anti-Tachycardia Pacing (ATP)</strong> is a therapy delivered by an ICD or CRT-D device that sends rapid pacing impulses to interrupt and terminate a fast heart rhythm (tachycardia) without needing a shock.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Why is it Performed?</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>To treat ventricular tachycardia non-invasively</li>
      <li>To reduce discomfort associated with shocks from an ICD</li>
      <li>To improve patient quality of life with painless rhythm correction</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">How it Works</h2>
    <p>
      When the device detects a tachycardia, it delivers a sequence of paced beats faster than the tachycardia to interrupt and reset the rhythm back to normal.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Benefits</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>Avoids painful shocks in many patients</li>
      <li>Effectively terminates many types of tachycardia</li>
      <li>Can be automatically and repeatedly delivered</li>
    </ul>
    <img
      src="/Treatments/anti-tachycardia-pacing.jpg"
      alt="Coarctoplasty"
      className="my-6 w-[20%] h-[50%] rounded-md shadow"
    />
  </>
),


'genetic-testing': (
  <>
    <p>
      <strong>Genetic Testing</strong> in cardiology helps identify inherited heart conditions such as arrhythmogenic disorders and cardiomyopathies. It enables early diagnosis and preventive care for patients and their families.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Why is it Performed?</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>To detect genetic mutations associated with heart disease</li>
      <li>To identify at-risk family members for screening</li>
      <li>To tailor treatment and lifestyle recommendations based on genetic risk</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">Conditions Assessed</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>Hypertrophic and dilated cardiomyopathy</li>
      <li>Long QT syndrome</li>
      <li>Brugada syndrome</li>
      <li>Arrhythmogenic right ventricular cardiomyopathy</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">Benefits</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>Early intervention and management</li>
      <li>Improved family screening and prevention</li>
      <li>Informed lifestyle and treatment decisions</li>
    </ul>

    <LazyLoadImage
      src="/Treatments/genetic-testing.jpg"
      alt="Coarctoplasty"
      className="my-6 w-[20%] h-[50%] rounded-md shadow"
    />
  </>
),






  // Add other treatments using the same structure...
};

const TreatmentPointDetails = () => {
  const { slug } = useParams();
  const description = treatmentDetails[slug];
    useEffect(() => {
    window.scrollTo(0, 0); // 🔁 This scrolls to the top every time you visit a treatment
  }, []);

  return (
    <div className="p-10 bg-white min-h-screen">
    <Helmet>
  <title>Advanced Cardiac Treatments | Dr. Santosh V. Chikkodi</title>
  <meta 
    name="description" 
    content="Explore specialized treatments including angioplasty, pacemakers, RF ablation, and structural heart disease therapies by Dr. Santosh V. Chikkodi in Bagalkot, Karnataka." 
  />
  <meta 
    name="keywords" 
    content="cardiac treatments, heart treatment Bagalkot, angioplasty, pacemaker, RF ablation, hypertension treatment, structural heart disease, interventional cardiologist, Dr. Santosh Chikkodi" 
  />
  <meta name="author" content="Dr. Santosh V. Chikkodi" />
  <meta name="robots" content="index, follow" />

  <meta property="og:title" content="Treatment Options | Dr. Santosh V. Chikkodi - Cardiology Care in Bagalkot" />
  <meta property="og:description" content="Get expert care for heart conditions like heart attack, failure, arrhythmia, and structural heart diseases with advanced therapies." />
  <meta property="og:image" content="https://yourdomain.com/assets/treatment-cover.jpg" />
  <meta property="og:url" content="https://yourdomain.com/treatment" />
  <link rel="canonical" href="https://yourdomain.com/treatment" />
</Helmet>

      <h1 className="text-3xl font-bold text-custom-cyan mb-6 font-poppins capitalize">
        {slug.replace(/-/g, ' ')}
      </h1>
      {description ? (
        <div className="text-gray-700 text-lg">{description}</div>
      ) : (
        <p className="text-red-600">No details found for this treatment point.</p>
      )}
    </div>
  );
};

export default TreatmentPointDetails;
