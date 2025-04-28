import React from 'react';
import { IoCall } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa"; // Corrected FaTwitter import

const Footer = () => {
  return (
    // Footer Section
    <footer className="bg-gray-800 text-white py-12 sm:px-8 md:px-16 lg:px-24">
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-semibold hover:text-blue-400'>
        Dr. Santosh V. Chikkodi
        </h1>
        <div className='text-right'>
          <p className='hover:text-blue-400'>
            Give us a Call <IoCall className="inline text-xl" />
          </p>
          <p className='text-yellow-600'>897336542</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-300 hover:text-blue-400">About Us</h3>
            <p className="text-gray-400 hover:text-yellow-500">
              We are dedicated to providing the best healthcare and treatment. Contact us for any inquiries or assistance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-300 hover:text-blue-400">Quick Links</h3>
            <ul className="text-gray-400">
              <li><a href="/" className="hover:text-yellow-500">Home</a></li>
              <li><a href="/about" className="hover:text-yellow-500">About Us</a></li>
              <li><a href="/services" className="hover:text-yellow-500">Services</a></li>
              <li><a href="/contact" className="hover:text-yellow-500">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-300 hover:text-blue-400">Contact Info</h3>
            <p className="text-gray-400 hover:text-yellow-500">Phone: 897463150000</p>
            <p className="text-gray-400 hover:text-yellow-500">Email: sfvbjvbsk@gmail.com</p>
            <p className="text-gray-400 hover:text-yellow-500">Address: #23 Dummy Nagar, Near Smart Point, Bangalore - 5811653</p>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-300 hover:text-blue-400">Services</h3>
            <p className="text-gray-400 hover:text-yellow-500">Implantable Cardioverter Defibrillator</p>
            <p className="text-gray-400 hover:text-yellow-500">Transesophageal Echocardiogram</p>
            <p className="text-gray-400 hover:text-yellow-500">Permanent Pacemaker</p>
            <p className="text-gray-400 hover:text-yellow-500">Balloon Mitral Valvotomy</p>
            <p className="text-gray-400 hover:text-yellow-500">Arrhythmia Treatments</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-300 hover:text-blue-400">Follow Us</h3>
            <div className="flex space-x-6 text-3xl">
              <a href="https://facebook.com" className="text-gray-400 hover:text-blue-600" aria-label="Facebook">
                <FaFacebookSquare />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400" aria-label="Twitter">
                <FaTwitterSquare />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-700" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-pink-600" aria-label="Instagram">
                <FaInstagramSquare />
              </a>
            </div>
          </div>
        </div>

        {/* New Section - Best Cardiologist */}
        <div className="mt-12 text-gray-400 border-t pt-6 pb-6">
          <div className="text-center text-white">
            <p className='hover:text-yellow-500'>
              | Best Interventional Cardiologist | Best Cardiologist in Bangalore | Best Cardio Doctor |
            </p>
            <p className='hover:text-yellow-500'>
              | Cardiologist Near Me | Heart Specialist in Bangalore | Cardiologist in Bangalore |
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-400 border-t pt-4">
          <p className='p-2 hover:text-yellow-500'>&copy; 2025 Heart Doctor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
