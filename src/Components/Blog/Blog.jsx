import React, { useEffect, useState } from 'react';
import blogImg from '../../Images/Blog/BlogImage.jpg';
import { Helmet } from 'react-helmet';
import { PacmanLoader } from 'react-spinners';

const Blog = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800); // simulate 1 second load
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Cardiac Care Innovation | Dr. Santosh V. Chikkodi's Blog</title>
        <meta name="description" content="Explore how Dr. Santosh V. Chikkodi is revolutionizing cardiac care with innovation, advanced imaging, AI integration, and patient-centered treatment." />
        <meta name="keywords" content="Cardiac Care, Dr. Santosh V. Chikkodi, Cardiologist Blog, Interventional Cardiology, Cardiac Innovations, IVUS, OCT, AI in Cardiology" />
        <meta name="author" content="Dr. Santosh V. Chikkodi" />
        <meta property="og:title" content="Revolutionizing Cardiac Care: The Journey of Innovation" />
        <meta property="og:description" content="Discover Dr. Chikkodi’s journey in transforming interventional cardiology with modern techniques and AI-driven diagnostics." />
        <meta property="og:image" content="https://drsantoshchikkodi.com/path-to-blog-image.jpg" />
        <meta property="og:url" content="https://drsantoshchikkodi.com/blog" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://drsantoshchikkodi.com/blog" />
      </Helmet>

      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <PacmanLoader color="#36d7b7" size={50} />
        </div>
      ) : (
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
              At the forefront of this evolution stands Dr. Santosh V. Chikkodi, whose contributions to interventional cardiology have helped save thousands of lives...
            </p>
            <p className="mb-6">
              One of his key achievements includes successful adoption of advanced imaging techniques such as Intravascular Ultrasound (IVUS) and Optical Coherence Tomography (OCT)...
            </p>
            <p className="mb-6">
              Beyond procedures, patient education and awareness campaigns have been instrumental in encouraging lifestyle changes...
            </p>
            <p className="mb-6">
              In 2025 and beyond, the integration of AI into cardiology — from predictive diagnostics to robotic-assisted surgeries — will further transform this space...
            </p>
            <p className="mb-6 font-semibold italic">
              “The heart is not just a muscle — it's a story of resilience, rhythm, and recovery,” says Dr. Chikkodi.
            </p>
          </div>

          {/* Footer */}
          <div className="mt-12 border-t pt-6 text-center">
            <p className="text-sm text-gray-500">
              &copy; 2025 Dr. Santosh V. Chikkodi. All Rights Reserved.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
