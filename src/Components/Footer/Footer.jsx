import React from 'react';
import { IoCall } from "react-icons/io5";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { Helmet } from 'react-helmet';


const Footer = () => {


  return (
    <footer className="bg-gray-800 text-white py-12 px-4 sm:px-8 md:px-16 lg:px-24 mt-10">
    <Helmet>
  <title>Dr. Santosh V. Chikkodi | Best Cardiologist Near You | Trusted Heart Specialist in Karnataka</title>
  <meta 
    name="description" 
    content="Contact Dr. Santosh V. Chikkodi, a senior interventional cardiologist in Bagalkot. Expert in angioplasty, pacemakers, and heart care services. Call now to book your appointment!" 
  />
  <meta 
    name="keywords" 
    content="cardiologist near me, heart doctor Bagalkot, Dr. Santosh Chikkodi, Bangalore cardiologist, interventional cardiologist India, top heart specialist Karnataka, pacemaker expert" 
  />
  <meta name="author" content="Dr. Santosh V. Chikkodi" />
  <meta name="robots" content="index, follow" />

  <meta property="og:title" content="Dr. Santosh Chikkodi - Trusted Cardiologist in Karnataka" />
  <meta property="og:description" content="Consult one of Karnataka’s top heart specialists. Advanced cardiac treatments available at multiple locations. Book now!" />
  <meta property="og:image" content="https://your-domain.com/footer-og-image.jpg" />
  <meta property="og:url" content="https://your-domain.com" />
  <link rel="canonical" href="https://your-domain.com" />
</Helmet>

      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <h1 className="text-2xl font-semibold hover:text-blue-400">
            Dr. Santosh V. Chikkodi
          </h1>
          <div className="text-center sm:text-right mt-4 sm:mt-0">
            <p className="hover:text-blue-400">Give us a Call <IoCall className="inline text-xl" /></p>
            <p className="text-white hover:text-yellow-500 cursor-pointer">+918618757141</p>
          </div>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-300 hover:text-blue-400">About Us</h3>
            <p className="text-gray-400 hover:text-yellow-500">
              We are dedicated to providing the best healthcare and treatment. Contact us for any inquiries or assistance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-300 hover:text-blue-400">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-yellow-500">Home</a></li>
              <li><a href="/about" className="hover:text-yellow-500">About Us</a></li>
              <li><a href="/services" className="hover:text-yellow-500">Services</a></li>
              <li><a href="/contact" className="hover:text-yellow-500">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-300 hover:text-blue-400">Contact Info</h3>
            <p className="text-gray-400 hover:text-yellow-500 flex  mt-3 "><IoCallSharp size={22}  />: +918618757141</p>
            <p className="text-gray-400 hover:text-yellow-500 flex mt-3"><MdEmail size={22} />: drchikkodicardio@gmail.com</p>
            <p className="text-gray-400 hover:text-yellow-500 flex mt-3 "><FaLocationDot size={22} />: Rotary Circle Bagalkot 587101</p>
           
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-300 hover:text-blue-400">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-yellow-500">Implantable Cardioverter Defibrillator</li>
              <li className="hover:text-yellow-500">Transesophageal Echocardiogram</li>
              <li className="hover:text-yellow-500">Permanent Pacemaker</li>
              <li className="hover:text-yellow-500">Balloon Mitral Valvotomy</li>
              <li className="hover:text-yellow-500">Arrhythmia Treatments</li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4 text-gray-300 hover:text-blue-400">Follow Us</h3>
          <div className="flex justify-center space-x-6 text-3xl">
            <a href="https://www.facebook.com/share/1BJk6qYP1f/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-blue-600">
              <FaFacebookSquare />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-blue-400">
              <FaTwitterSquare />
            </a>
            <a href="https://www.linkedin.com/in/dr-santosh-chikkodi-md-dnb-dm-dnb-fscai-doctor-chikkodi%E2%80%99s-cardiac-center-29b920ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-700">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/dr_santoshchikkodicardiologist?igsh=MXh5bzV1YzBtZjY4MA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-pink-600">
              <FaInstagramSquare />
            </a>
          </div>
        </div>

        {/* Tags Section */}
        <div className="mt-12 border-t pt-6 text-center text-white space-y-2">
          <p className="hover:text-yellow-500">
            | Best Interventional Cardiologist | Best Cardiologist in Bangalore | Best Cardio Doctor |
          </p>
          <p className="hover:text-yellow-500">
            | Cardiologist Near Me | Heart Specialist in Bangalore | Cardiologist in Bangalore |
          </p>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t pt-4 text-center text-gray-400">
          <p className="p-2 hover:text-yellow-500">&copy; 2025 Designed And Developed by Sohail L and Karthik Kalburgi . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

