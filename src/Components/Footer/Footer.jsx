import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

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
            <p className="hover:text-blue-400 flex items-center justify-center sm:justify-end gap-2">
              Give us a Call <IoCallSharp className="text-xl" />
            </p>
            <p className="text-white hover:text-yellow-500 cursor-pointer">
              <a href="tel:+918618757141">+91 8618757141</a>
            </p>
          </div>
        </div>

        {/* Grid Content */}
        <nav aria-label="Footer" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
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
            <p className="text-gray-400 hover:text-yellow-500 flex items-center gap-2 mt-3">
              <IoCallSharp size={22} /> 
              <a href="tel:+918618757141">+91 8618757141</a>
            </p>
            <p className="text-gray-400 hover:text-yellow-500 flex items-center gap-2 mt-3">
              <MdEmail size={22} /> 
              <a href="mailto:drchikkodicardio@gmail.com">drchikkodicardio@gmail.com</a>
            </p>
            <p className="text-gray-400 hover:text-yellow-500 flex items-center gap-2 mt-3">
              <FaLocationDot size={22} /> 
              <a href="https://www.google.com/maps/search/Rotary+Circle+Bagalkot+587101" target="_blank" rel="noopener noreferrer">
                Rotary Circle Bagalkot 587101
              </a>
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-300 hover:text-blue-400">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-yellow-500">24x7 Emergency care </li>
              <li className="hover:text-yellow-500">Primary angioplasty </li>
              <li className="hover:text-yellow-500">Complex angioplasty </li>
              <li className="hover:text-yellow-500">Coronary and peripheral angiogram</li>
              <li className="hover:text-yellow-500">Temporary pacemaker</li>
              <li className="hover:text-yellow-500">Heart failure treatment </li>
              <li className="hover:text-yellow-500">OCT and IVUS imaging</li>
              <li className="hover:text-yellow-500">Rotational atherectomy, Orbital Atherectomy</li>
              <li className="hover:text-yellow-500">Intravascular lithotripsy </li>
              <li className="hover:text-yellow-500">2D Echo, strain imaging</li>
              <li className="hover:text-yellow-500">Stress tests</li>
             
            </ul>
          </div>
        </nav>

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
            <a href="https://www.linkedin.com/in/dr-santosh-chikkodi-md-dnb-dm-dnb-fscai-ficc-doctor-chikkodi%E2%80%99s-cardiac-center-29b920ab/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-700">
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
            | Best Interventional Cardiologist | Best Cardiologist in Bagalkot | Best Cardio Doctor |
          </p>
          <p className="hover:text-yellow-500">
            | Cardiologist Near Me | Heart Specialist in Bagalkot | Cardiologist in Bagalkot |
          </p>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t pt-4 text-center text-gray-400">
          <p className="p-2 hover:text-yellow-500">&copy; 2025 Designed And Developed by Sohail L and Karthik Kalburgi. All rights reserved.</p>
        </div>

        {/* Scroll To Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 z-50"
          aria-label="Scroll to Top"
        >
          ↑
        </button>

      </div>
    </footer>
  );
};

export default Footer;
