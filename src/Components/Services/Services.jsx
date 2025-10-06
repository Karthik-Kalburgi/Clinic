import React from "react";
import { Routes, Route } from "react-router-dom";
import ServicesGrid from "./ServicesGrid";
import ServiceDetail from "./ServiceDetail";

const Services = () => {
  return (
    <Routes>
      <Route path="/" element={<ServicesGrid />} />
      <Route path=":id" element={<ServiceDetail />} />
    </Routes>
  );
};

export default Services;
