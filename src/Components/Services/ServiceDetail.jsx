import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { servicesData } from "./servicesData";
import { CheckCircle } from "lucide-react";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) return <div className="text-center mt-20 text-gray-600">Service not found.</div>;

  return (
    <motion.div
      className="min-h-screen bg-gray-50 py-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        {/* Image */}
        {service.image && (
          <motion.img
            src={service.image}
            alt={service.title}
            className="w-full h-72 md:h-96 object-cover rounded-xl mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-8 whitespace-pre-line">
          {service.title}
        </h1>

        {/* ECG / Others */}
        {service.what && (
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">What is it?</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line ">{service.what}</p>
          </motion.div>
        )}

        {service.why && (
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Why is it done?</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line ">{service.why}</p>
          </motion.div>
        )}

        {service.detect && (
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2"> What does it detect? </h2>
            <ul className="space-y-2 text-gray-700  whitespace-pre-line ">
              {service.detect.split(",").map((item, index) => (
                <li key={index} className="flex items-start   ">
                  <CheckCircle size={18} className="text-green-500 mt-1 mr-2  " />
                  <span>{item.trim()}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Description (Pharmacy & Lab only) */}
        {service.description && (
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{service.description}</p>
          </motion.div>
        )}

        {/* Back Button */}
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="text-blue-600 font-semibold hover:underline text-lg"
          >
            ← Back to All Services
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDetail;
