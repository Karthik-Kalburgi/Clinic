import React from 'react';
import { IoCall } from "react-icons/io5";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4 sm:px-8 md:px-16 lg:px-24 mt-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <h1 className="text-2xl font-semibold hover:text-blue-400">
            Dr. Santosh V. Chikkodi
          </h1>
          <div className="text-center sm:text-right mt-4 sm:mt-0">
            <p className="hover:text-blue-400">Give us a Call <IoCall className="inline text-xl" /></p>
            <p className="text-yellow-600">+91-89733 65420</p>
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
            <p className="text-gray-400 hover:text-yellow-500">Phone: +91-89733 61500</p>
            <p className="text-gray-400 hover:text-yellow-500">Email: sfvbjvbsk@gmail.com</p>
            <p className="text-gray-400 hover:text-yellow-500">Address: #23 Dummy Nagar, Near Smart Point, Bangalore - 581165</p>
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
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-blue-600">
              <FaFacebookSquare />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-blue-400">
              <FaTwitterSquare />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-700">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-pink-600">
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
