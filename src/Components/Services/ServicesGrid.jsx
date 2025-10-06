import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HeartPulse, Activity, Stethoscope, Gauge, Timer, Pill, FlaskRound } from "lucide-react";
import { servicesData } from "./servicesData";

const iconMap = {
  ecg: <Activity size={50} className="text-blue-500" />,
  echo: <HeartPulse size={50} className="text-red-500" />,
  holter: <Stethoscope size={50} className="text-green-500" />,
  "ambulatory-bp": <Gauge size={50} className="text-orange-500" />,
  tmt: <Timer size={50} className="text-purple-500" />,
  pharmacy: <Pill size={50} className="text-pink-500" />,
  "lab-tests": <FlaskRound size={50} className="text-teal-500" />,
};

const ServicesGrid = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <h1 className="text-3xl font-semibold text-center mb-10 text-blue-700">
        Non-Invasive & Diagnostic Services
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.id}
            onClick={() => navigate(`/services/${service.id}`)}
            className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:scale-105 p-5"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <div className="flex flex-col items-center">
              {iconMap[service.id]}
              <h2 className="text-xl font-semibold text-gray-800 mt-3 text-center whitespace-pre-line ">
                {service.title}
              </h2>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
