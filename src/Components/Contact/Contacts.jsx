import React, { useRef, useState, useEffect } from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";
import { PacmanLoader } from 'react-spinners';
import profile from '../../Images/ContactProfile.jpg';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';

const Contacts = () => {
  const form = useRef();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.user_name || !formData.user_email || !formData.message) {
      toast.error("All fields are required.");
      return;
    }

    emailjs
      .sendForm('service_ggyx0ni', 'template_nzrq9lk', form.current, 'tlSzuWABv9bTwe-Xt')
      .then(() => {
        toast.success("Your response has been submitted successfully!");
        setFormData({ user_name: '', user_email: '', message: '' });
      }, (error) => {
        console.error('FAILED...', error.text);
        toast.error("Something went wrong, please try again.");
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Helmet>
        <title>Contact | Dr. Santosh V. Chikkodi - Cardiologist in Bagalkot</title>
        <meta name="description" content="Get in touch with Dr. Santosh V. Chikkodi, Senior Interventional Cardiologist in Bagalkot, Karnataka. Contact via email or phone. Book your appointment today." />
        <meta name="keywords" content="Cardiologist contact Bagalkot, heart doctor phone number, Dr. Santosh Chikkodi appointment, cardiologist email Karnataka, book heart appointment" />
        <meta name="author" content="Dr. Santosh V. Chikkodi" />
        <meta property="og:title" content="Contact | Dr. Santosh V. Chikkodi - Cardiologist" />
        <meta property="og:description" content="Contact Dr. Santosh V. Chikkodi for cardiology consultation. Reach out via phone or email to book an appointment in Bagalkot or Ramdurg." />
        <meta property="og:image" content="https://drsantoshchikkodi.com/path-to/contact-page-image.jpg" />
        <meta property="og:url" content="https://drsantoshchikkodi.com/contact" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://drsantoshchikkodi.com/contact" />
      </Helmet>

      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <PacmanLoader color="#36d7b7" size={50} />
        </div>
      ) : (
        <div className="bg-gray-100 py-12 sm:px-8 md:px-16 lg:px-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-yellow-700 font-poppins">Have A Question? Get In Touch</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Section */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h2 className="text-2xl font-semibold text-gray-800">General Information</h2>
                <img alt="profile" src={profile} className="w-32 h-32 rounded-full mt-4 mx-auto" />
                <p className="text-gray-700 mt-4 flex items-center gap-3">
                  <IoLocationSharp className='text-2xl text-blue-500' />
                  Rotary Circle Bagalkot 587101
                </p>
                <p className="text-gray-700 flex items-center gap-3 mt-2">
                  <FaPhoneVolume className='text-2xl text-blue-500' />
                  +918618757141
                </p>
                <p className="text-gray-700 flex items-center gap-3 mt-2">
                  <MdEmail className='text-2xl text-blue-500' />
                  drchikkodicardio@gmail.com
                </p>
              </div>

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

            {/* Right Section - Contact Form */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Contact Form</h2>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleInputChange}
                    className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleInputChange}
                    className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-2 block w-full p-12 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-yellow-500"
                    placeholder="Enter your phone number to book an appointment with the cardiologist."
                    required
                  />
                </div>

                <div>
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
      )}

      <ToastContainer position="top-center" autoClose={5000} hideProgressBar />
    </>
  );
};

export default Contacts;
