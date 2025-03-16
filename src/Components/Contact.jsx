import React, { useState } from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted');
    console.log(formData);
  };

  return (
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
            <img alt="profile" src="https://via.placeholder.com/150" className="w-32 h-32 rounded-full mt-4 mx-auto" />
            <p className="text-gray-700 mt-4 flex items-center gap-3">
              <IoLocationSharp className='text-2xl text-yellow-500' /> 
              #23 Dummy Nagar, Near Smart Point, Bangalore - 5811653
            </p>
            <p className="text-gray-700 flex items-center gap-3 mt-2">
              <FaPhoneVolume className='text-2xl text-yellow-500' /> 
              Phone: 897463150000
            </p>
            <p className="text-gray-700 flex items-center gap-3 mt-2">
              <MdEmail className='text-2xl text-yellow-500' />
              Email: sfvbjvbsk@gmail.com
            </p>
          </div>

          {/* Card 2 - Working Hours */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-3">
              <IoTimeSharp className='text-2xl text-yellow-500' /> 
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
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>

            {/* Phone Number Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>

            {/* Gender Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === 'Male'}
                    onChange={handleChange}
                    className="form-radio text-yellow-500"
                  />
                  <span className="ml-2 text-gray-700">Male</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === 'Female'}
                    onChange={handleChange}
                    className="form-radio text-yellow-500"
                  />
                  <span className="ml-2 text-gray-700">Female</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    checked={formData.gender === 'Other'}
                    onChange={handleChange}
                    className="form-radio text-yellow-500"
                  />
                  <span className="ml-2 text-gray-700">Other</span>
                </label>
              </div>
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-yellow-600 text-white py-3 rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
