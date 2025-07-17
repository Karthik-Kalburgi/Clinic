import React, { useRef, useState } from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";
import profile from '../Images/ContactProfile.jpg';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_k8h3jh3', 'template_odtrfvk', form.current, 'KlO73PmloElJU-C1p')
      .then(
        () => {
          setShowPopup(true); // show popup on successful submission
          setTimeout(() => {
            setShowPopup(false); // hide the popup after 3 seconds
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <>
      <div className="bg-gray-100 py-12 sm:px-8 md:px-16 lg:px-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-yellow-700">Have A Question? Get In Touch</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side - Basic Info Cards */}
          <div className="space-y-8">
            {/* Card 1 - General Information */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-semibold text-gray-800">General Information</h2>
              <img alt="profile" src={profile} className="w-32 h-32 rounded-full mt-4 mx-auto" />
              <p className="text-gray-700 mt-4 flex items-center gap-3">
                <IoLocationSharp className='text-2xl text-blue-500' />
               Rotary Circle Bagalkot 587101
              </p>
              <p className="text-gray-700 flex items-center gap-3 mt-2">
                <FaPhoneVolume className='text-2xl text-blue-500' />
                Phone: +918618757141
              </p>
              <p className="text-gray-700 flex items-center gap-3 mt-2">
                <MdEmail className='text-2xl text-blue-500' />
                 drchikkodicardio@gmail.com
              </p>
            </div>

            {/* Card 2 - Working Hours */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-3">
                <IoTimeSharp className='text-2xl text-blue-500' />
                Working Hours
              </h2>
              <p className="text-gray-700 mt-4">Monday – Saturday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-700">Sunday: Closed</p>
              <p className="text-gray-700 mt-4">Emergency Services Available</p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Contact Form</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {/* Name Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="user_name"
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="user_email"
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  className="mt-2 block w-full p-12 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-yellow-500"
                  placeholder='Enter your phone number to book an appointment with the cardiologist.'
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Popup Message */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg text-center shadow-lg">
            <p className="text-lg font-semibold text-gray-700">Your response has been submitted!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
