import React from 'react';
import blogImg from '../../Images//Blog/BlogImage.jpg'; // Replace with your actual image path

const Blog = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Blog Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Revolutionizing Cardiac Care: The Journey of Innovation
        </h1>
        <p className="mt-4 text-gray-500 text-md md:text-lg">
          By Dr. Santosh V. Chikkodi | April 2025
        </p>
      </div>

      {/* Blog Image */}
      <div className="rounded-xl overflow-hidden shadow-lg mb-10">
        <img
          src={blogImg}
          alt="Cardiology Innovation"
          loading="lazy"
          className="w-full h-64 sm:h-96 object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="text-gray-700 text-base sm:text-lg leading-relaxed">
        <p className="mb-6">
          Cardiovascular diseases have long been a major challenge in global healthcare. Over the years, medical science has made tremendous strides in early diagnosis, advanced procedures, and post-treatment rehabilitation.
        </p>
        <p className="mb-6">
          At the forefront of this evolution stands Dr. Santosh V. Chikkodi, whose contributions to interventional cardiology have helped save thousands of lives. From pioneering transradial interventions to leading research in non-invasive diagnostics, Dr. Chikkodi's journey is one of relentless innovation.
        </p>
        <p className="mb-6">
          One of his key achievements includes successful adoption of advanced imaging techniques such as Intravascular Ultrasound (IVUS) and Optical Coherence Tomography (OCT), which have redefined how arterial blockages are diagnosed and treated.
        </p>
        <p className="mb-6">
          Beyond procedures, patient education and awareness campaigns have been instrumental in encouraging lifestyle changes, preventive checkups, and timely consultations — all of which have significantly reduced emergency cases.
        </p>
        <p className="mb-6">
          In 2025 and beyond, the integration of AI into cardiology — from predictive diagnostics to robotic-assisted surgeries — will further transform this space. Dr. Chikkodi's work continues to inspire young practitioners and medical students alike to pursue research-based, patient-centered care.
        </p>
        <p className="mb-6 font-semibold italic">
          “The heart is not just a muscle — it's a story of resilience, rhythm, and recovery,” says Dr. Chikkodi.
        </p>
      </div>

      {/* Footer/Signature */}
      <div className="mt-12 border-t pt-6 text-center">
        <p className="text-sm text-gray-500">
          &copy; 2025 Dr. Santosh V. Chikkodi. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Blog;
